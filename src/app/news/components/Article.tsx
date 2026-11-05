"use client";

// Shared building blocks for every blog post on /news/*.
// One modern, readable design: light hero, ~70-character text column, sticky
// "On this page" list with the current section highlighted, reading progress,
// and consistent tables, callouts, figures, FAQ and "Keep reading" cards.
//
// Usage (see /news/pump-materials-comparison for a full example):
//   <ArticleLayout meta={{ category, title, dek, author, date, readMinutes, cover, slug }} schema={...}>
//     <Lead>…</Lead>
//     <H2>First section</H2>
//     <P>…</P>
//   </ArticleLayout>
//
// Every H2 automatically gets an id and appears in "On this page".

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AltRouteRoundedIcon from "@mui/icons-material/AltRouteRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { POSTS } from "../posts";

// ───────────────────────── tokens for long-form reading ─────────────────────
const READ = {
  text: "#26332B",
  size: { xs: "1.06rem", md: "1.125rem" },
  line: 1.78,
  col: 860,
};

// Text blocks keep a comfortable line length; tables, cards, charts and figures
// use the full width of the content column.
const prose = { maxWidth: READ.col } as const;

// Hero, cover and body share one grid: contents list | article | side rail
const GRID_PAD = {
  pl: { lg: "calc(200px + 40px)", xl: "calc(210px + 48px)" },
  pr: { xl: "calc(270px + 48px)" },
} as const;

const isExternal = (href: string) => {
  const m = /^https?:\/\/([^/]+)/i.exec(href);
  return !!m && !/^(www\.)?valvenok\.com$/i.test(m[1]);
};

function newTab(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener" } : {};
}

/** True once the element has scrolled into view (stays true) */
function useInView<T extends Element>(threshold = 0.25) {
  const ref = React.useRef<T>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen] as const;
}

function useCopied() {
  const [copied, setCopied] = React.useState(false);
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };
  return [copied, copy] as const;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

const textOf = (node: React.ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (React.isValidElement(node)) return textOf((node.props as { children?: React.ReactNode }).children);
  return "";
};

const linkSx = {
  color: T.greenDark,
  fontWeight: 600,
  textDecoration: "underline",
  textDecorationColor: "rgba(46,139,30,0.35)",
  textDecorationThickness: "1.5px",
  textUnderlineOffset: "3px",
  transition: "text-decoration-color .15s",
  "&:hover": { textDecorationColor: T.greenDark },
} as const;

// ───────────────────────── page shell ─────────────────────────
export type ArticleMeta = {
  category: string;
  title: string;
  /** One or two sentences under the title */
  dek?: string;
  author?: string;
  date: string;
  readMinutes?: number;
  /** Cover image URL (shown under the hero). Product cut-outs: set coverFit="contain" */
  cover?: string;
  coverAlt?: string;
  coverFit?: "cover" | "contain";
  /** e.g. "/news/pump-materials-comparison", used to leave this post out of "Keep reading" */
  slug: string;
};

type TocItem = { id: string; label: string };
const TocContext = React.createContext<((item: TocItem) => void) | null>(null);

function ReadingProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <Box aria-hidden sx={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 1300, pointerEvents: "none" }}>
      <Box sx={{ height: "100%", width: `${p * 100}%`, bgcolor: T.green, transition: "width .1s linear" }} />
    </Box>
  );
}

function Toc({ items, active }: { items: TocItem[]; active: string }) {
  if (items.length < 2) return null;
  return (
    <Box component="nav" aria-label="On this page">
      <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.muted }}>
        On this page
      </Box>
      <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, borderLeft: `2px solid ${T.border}` }}>
        {items.map((it) => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <Box
                component="a"
                href={`#${it.id}`}
                sx={{
                  display: "block",
                  ml: "-2px",
                  pl: 1.75,
                  py: 0.7,
                  borderLeft: `2px solid ${on ? T.greenDark : "transparent"}`,
                  fontSize: "0.86rem",
                  lineHeight: 1.4,
                  fontWeight: on ? 600 : 500,
                  color: on ? T.greenDark : T.body,
                  textDecoration: "none",
                  transition: "color .15s, border-color .15s",
                  "&:hover": { color: T.ink },
                }}
              >
                {it.label}
              </Box>
            </li>
          );
        })}
      </Box>
    </Box>
  );
}

function MobileToc({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;
  return (
    <Box
      component="details"
      sx={{
        display: { xs: "block", lg: "none" },
        mb: 4,
        border: `1px solid ${T.border}`,
        borderRadius: T.radiusSm,
        bgcolor: T.surface,
        "& summary": { cursor: "pointer", listStyle: "none", px: 2, py: 1.5, fontWeight: 700, fontSize: "0.92rem", color: T.ink, display: "flex", justifyContent: "space-between" },
        "& summary::-webkit-details-marker": { display: "none" },
        "& summary::after": { content: '"+"', color: T.greenDark, fontWeight: 800 },
        "&[open] summary::after": { content: '"–"' },
      }}
    >
      <summary>On this page ({items.length} sections)</summary>
      <Box component="ol" sx={{ m: 0, px: 2, pb: 1.5, pl: 4.5, "& li": { py: 0.5 }, "& a": { color: T.body, textDecoration: "none", fontSize: "0.92rem" } }}>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </Box>
    </Box>
  );
}

function Hero({ meta }: { meta: ArticleMeta }) {
  const initials = (meta.author ?? "Valvenok Team")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: T.surface,
        borderBottom: `1px solid ${T.border}`,
        pt: { xs: 5, md: 8 },
        pb: meta.cover ? { xs: 14, md: 22 } : { xs: 6, md: 9 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 80% at 85% 0%, rgba(97,214,73,0.18) 0%, rgba(97,214,73,0) 60%), radial-gradient(40% 60% at 0% 100%, rgba(46,139,30,0.08) 0%, rgba(46,139,30,0) 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 1760, mx: "auto", px: { xs: 2, md: 4 } }}>
       <Box sx={{ ...GRID_PAD }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 3 }}>
          <Box component={Link} href="/news" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.85rem", fontWeight: 600, color: T.body, textDecoration: "none", "&:hover": { color: T.greenDark } }}>
            <ArrowBackRoundedIcon sx={{ fontSize: 16 }} /> All articles
          </Box>
          <Box component="span" sx={{ color: T.border }}>/</Box>
          <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.greenDark }}>
            {meta.category}
          </Box>
        </Box>
        <Box
          component="h1"
          sx={{
            m: 0,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.1rem" },
            lineHeight: 1.1,
            maxWidth: 1000,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: T.ink,
            textWrap: "balance",
          }}
        >
          {meta.title}
        </Box>
        {meta.dek && (
          <Box component="p" sx={{ m: 0, mt: 2.5, fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.6, color: T.body, maxWidth: 720 }}>
            {meta.dek}
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 4, flexWrap: "wrap", maxWidth: 1000 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: T.greenDeep, color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: "0.85rem" }}>
            {initials}
          </Box>
          <Box>
            <Box sx={{ fontWeight: 700, color: T.ink, fontSize: "0.95rem" }}>{meta.author ?? "Valvenok Team"}</Box>
            <Box sx={{ color: T.muted, fontSize: "0.85rem" }}>
              {meta.date}
              {meta.readMinutes ? ` · ${meta.readMinutes} min read` : ""}
            </Box>
          </Box>
          <Share slug={meta.slug} title={meta.title} />
        </Box>
       </Box>
      </Box>
    </Box>
  );
}

function Share({ slug, title }: { slug: string; title: string }) {
  const [copied, copy] = useCopied();
  const url = `https://www.valvenok.com${slug}`;
  const btn = { display: "inline-flex", alignItems: "center", gap: 0.75, height: 38, px: 1.5, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", color: T.ink, fontSize: "0.85rem", fontWeight: 600, fontFamily: "inherit", cursor: "pointer", textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark } } as const;
  return (
    <Box sx={{ ml: { sm: "auto" }, display: "flex", gap: 1 }}>
      <Box component="a" data-plain href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener" aria-label={`Share "${title}" on LinkedIn`} sx={btn}>
        <LinkedInIcon sx={{ fontSize: 18, color: "#0A66C2" }} /> Share
      </Box>
      <Box component="button" type="button" onClick={() => copy(url)} sx={{ ...btn, ...(copied ? { bgcolor: T.greenSoft, borderColor: "#CFEBC6", color: T.greenDark } : {}) }}>
        <LinkRoundedIcon sx={{ fontSize: 18 }} /> {copied ? "Copied" : "Copy link"}
      </Box>
    </Box>
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const on = () => setShow(window.scrollY > 1200);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <Box
      component="button"
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      sx={{ position: "fixed", right: { xs: 19, md: 30 }, bottom: { xs: 82, md: 96 }, zIndex: 1200, width: 48, height: 48, borderRadius: "50%", border: 0, cursor: "pointer", bgcolor: T.greenDeep, color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 8px 24px rgba(14,27,18,0.25)", opacity: show ? 1 : 0, transform: show ? "none" : "translateY(12px)", pointerEvents: show ? "auto" : "none", transition: "all .25s", "&:hover": { bgcolor: T.greenDark } }}
    >
      <KeyboardArrowUpRoundedIcon />
    </Box>
  );
}

function Cover({ meta }: { meta: ArticleMeta }) {
  if (!meta.cover) return null;
  const contain = meta.coverFit === "contain";
  return (
    <Box sx={{ maxWidth: 1760, mx: "auto", px: { xs: 2, md: 4 }, mt: { xs: -10, md: -17 }, position: "relative", zIndex: 1 }}>
     <Box sx={{ ...GRID_PAD }}>
      <Box
        component="img"
        src={meta.cover}
        alt={meta.coverAlt ?? meta.title}
        sx={{
          display: "block",
          width: "100%",
          aspectRatio: "1200 / 630",
          objectFit: contain ? "contain" : "cover",
          bgcolor: contain ? "#fff" : T.surface,
          p: contain ? { xs: 2, md: 4 } : 0,
          boxSizing: "border-box",
          borderRadius: { xs: "14px", md: "22px" },
          border: `1px solid ${T.border}`,
          boxShadow: "0 2px 4px rgba(14,27,18,0.04), 0 24px 60px rgba(14,27,18,0.12)",
        }}
      />
     </Box>
    </Box>
  );
}

function KeepReading({ slug }: { slug: string }) {
  const posts = POSTS.filter((p) => p.link !== slug).slice(0, 3);
  return (
    <Box component="section" aria-labelledby="keep-reading" sx={{ bgcolor: T.surface, borderTop: `1px solid ${T.border}`, py: { xs: 7, md: 10 }, mt: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 1180, mx: "auto", px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <Box component="h2" id="keep-reading" sx={{ m: 0, fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.ink }}>
            Keep reading
          </Box>
          <Box component={Link} href="/news" sx={{ ...linkSx, fontSize: "0.95rem" }}>
            All articles
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {posts.map((p) => (
            <Box
              key={p.link}
              component={Link}
              href={p.link}
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "#fff",
                borderRadius: T.radius,
                border: `1px solid ${T.border}`,
                overflow: "hidden",
                textDecoration: "none",
                transition: "transform .2s, box-shadow .2s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover },
                "&:hover img": { transform: "scale(1.04)" },
              }}
            >
              <Box sx={{ aspectRatio: "16 / 9", overflow: "hidden", bgcolor: T.surface }}>
                <Box component="img" src={p.thumbnail} alt="" loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }} />
              </Box>
              <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1, flexGrow: 1 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.greenDark }}>{p.category}</Box>
                <Box sx={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.35, color: T.ink }}>{p.title}</Box>
                <Box sx={{ mt: "auto", pt: 1, fontSize: "0.85rem", color: T.muted }}>{p.date}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function SideRail({ slug }: { slug: string }) {
  const next = POSTS.filter((p) => p.link !== slug).slice(0, 3);
  return (
    <Box sx={{ position: "sticky", top: 150, display: "grid", gap: 3 }}>
      <Box sx={{ p: 3, borderRadius: T.radius, color: "#fff", background: `linear-gradient(160deg, ${T.greenDeep} 0%, #1E5A22 100%)` }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.green }}>Need help choosing?</Box>
        <Box sx={{ mt: 1, fontSize: "1.15rem", fontWeight: 800, lineHeight: 1.3 }}>Talk to an engineer</Box>
        <Box sx={{ mt: 1, fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(255,255,255,0.78)" }}>
          Send your application details and we&apos;ll recommend the right part and quote it.
        </Box>
        <Box component={Link} href="/contact" data-plain sx={{ mt: 2.5, display: "block", textAlign: "center", py: 1.2, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", "&:hover": { bgcolor: "#55C93E" } }}>
          Request a quote
        </Box>
        <Box sx={{ mt: 2, display: "grid", gap: 1, fontSize: "0.88rem", "& a": { color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 1, opacity: 0.9 }, "& a:hover": { opacity: 1, textDecoration: "underline" }, "& svg": { fontSize: 18, color: T.green } }}>
          <a href="tel:+447368137917" data-plain><PhoneOutlinedIcon /> +44 7368 137917</a>
          <a href="mailto:sales@valvenok.com" data-plain><MailOutlineRoundedIcon /> sales@valvenok.com</a>
        </Box>
      </Box>
      <Box>
        <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.muted }}>Read next</Box>
        <Box sx={{ display: "grid", gap: 1.5 }}>
          {next.map((p) => (
            <Box key={p.link} component={Link} href={p.link} data-plain sx={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 1.5, alignItems: "center", textDecoration: "none", "&:hover .t": { color: T.greenDark } }}>
              <Box component="img" src={p.thumbnail} alt="" loading="lazy" sx={{ width: 64, height: 64, objectFit: "cover", borderRadius: "10px", border: `1px solid ${T.border}`, bgcolor: T.surface }} />
              <Box>
                <Box className="t" sx={{ fontSize: "0.88rem", fontWeight: 600, lineHeight: 1.35, color: T.ink, transition: "color .15s", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.title}</Box>
                <Box sx={{ mt: 0.25, fontSize: "0.78rem", color: T.muted }}>{p.date}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function ArticleLayout({
  meta,
  schema,
  children,
}: {
  meta: ArticleMeta;
  /** JSON-LD object(s) for the post (Article, FAQPage…). BreadcrumbList comes from the site layout. */
  schema?: object;
  children: React.ReactNode;
}) {
  const [items, setItems] = React.useState<TocItem[]>([]);
  const [active, setActive] = React.useState("");
  const register = React.useCallback((item: TocItem) => {
    setItems((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  }, []);

  // Keep the list in page order and highlight the section being read
  React.useEffect(() => {
    if (!items.length) return;
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const ordered = [...els].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top).map((e) => e.id);
    if (ordered.join() !== items.map((i) => i.id).join()) {
      setItems((prev) => ordered.map((id) => prev.find((p) => p.id === id)!).filter(Boolean));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <TocContext.Provider value={register}>
      <Box component="article" sx={{ ...textReset, bgcolor: "#fff", "& :target": { scrollMarginTop: "140px" } }}>
        {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
        <ReadingProgress />
        <Hero meta={meta} />
        <Cover meta={meta} />
        <Box
          sx={{
            maxWidth: 1760,
            mx: "auto",
            px: { xs: 2, md: 4 },
            pt: { xs: 5, md: 8 },
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0,1fr)", lg: "200px minmax(0,1fr)", xl: "210px minmax(0,1fr) 270px" },
            columnGap: { lg: 5, xl: 6 },
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Box sx={{ position: "sticky", top: 150 }}>
              <Toc items={items} active={active} />
            </Box>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <MobileToc items={items} />
            <Box
              sx={{
                color: READ.text,
                fontSize: READ.size,
                lineHeight: READ.line,
                "& > *:first-child": { mt: 0 },
                "& a:not([data-plain])": linkSx,
                "& strong": { color: T.ink, fontWeight: 700 },
              }}
            >
              {children}
            </Box>
          </Box>
          <Box component="aside" sx={{ display: { xs: "none", xl: "block" } }}>
            <SideRail slug={meta.slug} />
          </Box>
        </Box>
        <KeepReading slug={meta.slug} />
        <BackToTop />
      </Box>
    </TocContext.Provider>
  );
}

// ───────────────────────── prose ─────────────────────────
export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  const register = React.useContext(TocContext);
  const label = textOf(children);
  const anchor = id ?? slugify(label);
  React.useEffect(() => {
    register?.({ id: anchor, label });
  }, [register, anchor, label]);
  return (
    <Box
      component="h2"
      id={anchor}
      sx={{
        ...prose,
        mt: { xs: 7, md: 9 },
        mb: 2.5,
        fontSize: { xs: "1.55rem", md: "1.95rem" },
        lineHeight: 1.2,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: T.ink,
        scrollMarginTop: "140px",
        textWrap: "balance",
        "&::before": { content: '""', display: "block", width: 36, height: 4, borderRadius: 2, bgcolor: T.green, mb: 2 },
        "&:hover .anchor, & .anchor:focus-visible": { opacity: 1 },
      }}
    >
      {children}
      <HeadingLink id={anchor} />
    </Box>
  );
}

function HeadingLink({ id }: { id: string }) {
  const [copied, copy] = useCopied();
  return (
    <Box
      component="button"
      type="button"
      className="anchor"
      aria-label="Copy link to this section"
      onClick={() => copy(`${location.origin}${location.pathname}#${id}`)}
      sx={{ opacity: copied ? 1 : 0, transition: "opacity .15s", ml: 1, verticalAlign: "middle", display: "inline-flex", alignItems: "center", gap: 0.5, border: 0, bgcolor: copied ? T.greenSoft : "transparent", color: T.greenDark, borderRadius: 999, px: 1, py: 0.25, cursor: "pointer", fontSize: "0.8rem", fontWeight: 700, fontFamily: "inherit", "&:hover": { bgcolor: T.greenSoft } }}
    >
      <LinkRoundedIcon sx={{ fontSize: 20 }} />
      {copied && "Link copied"}
    </Box>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <Box component="h3" sx={{ ...prose, mt: 5, mb: 1.5, fontSize: { xs: "1.2rem", md: "1.3rem" }, lineHeight: 1.3, fontWeight: 700, color: T.ink }}>
      {children}
    </Box>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <Box component="p" sx={{ ...prose, m: 0, mb: 2.75 }}>{children}</Box>;
}

/** Larger opening paragraph */
export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <Box component="p" sx={{ ...prose, m: 0, mb: 4, fontSize: { xs: "1.18rem", md: "1.32rem" }, lineHeight: 1.65, color: T.ink, fontWeight: 450 }}>
      {children}
    </Box>
  );
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = isExternal(href);
  return external ? (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href.replace(/^https?:\/\/(www\.)?valvenok\.com/i, "") || "/"}>{children}</Link>
  );
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <Box component="ul" sx={{ ...prose, m: 0, mb: 3, p: 0, listStyle: "none", "& li": { position: "relative", pl: 3.5, mb: 1.25 } }}>
      {items.map((it, i) => (
        <li key={i}>
          <Box component="span" aria-hidden sx={{ position: "absolute", left: 4, top: "0.72em", width: 8, height: 8, borderRadius: "50%", bgcolor: T.green }} />
          {it}
        </li>
      ))}
    </Box>
  );
}

export function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <Box component="ol" sx={{ ...prose, m: 0, mb: 3, p: 0, listStyle: "none", counterReset: "ol", "& li": { position: "relative", pl: 5, mb: 1.75, counterIncrement: "ol" }, "& li::before": { content: "counter(ol)", position: "absolute", left: 0, top: "0.1em", width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, fontSize: "0.85rem", display: "grid", placeItems: "center" } }}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </Box>
  );
}

// ───────────────────────── blocks ─────────────────────────
export function KeyTakeaways({ title = "Key takeaways", items }: { title?: string; items: React.ReactNode[] }) {
  return (
    <Box sx={{ my: 5, p: { xs: 3, md: 4 }, borderRadius: T.radius, bgcolor: T.greenSoft, border: "1px solid #CFEBC6" }}>
      <Box component="p" sx={{ m: 0, mb: 2.5, fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark }}>
        {title}
      </Box>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 1.75 }}>
        {items.map((it, i) => (
          <Box component="li" key={i} sx={{ display: "flex", gap: 1.5, fontSize: { xs: "1rem", md: "1.05rem" }, lineHeight: 1.6, color: T.ink }}>
            <Box sx={{ flexShrink: 0, mt: "2px", width: 22, height: 22, borderRadius: "50%", bgcolor: T.greenDark, color: "#fff", display: "grid", placeItems: "center" }}>
              <CheckRoundedIcon sx={{ fontSize: 15 }} />
            </Box>
            <span>{it}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const CALLOUT = {
  note: { icon: InfoOutlinedIcon, bg: "#F1F6FB", border: "#D3E2F0", color: "#1F5A8C" },
  tip: { icon: LightbulbOutlinedIcon, bg: T.greenSoft, border: "#CFEBC6", color: T.greenDark },
  warning: { icon: WarningAmberRoundedIcon, bg: "#FFF7EC", border: "#F6DDB5", color: "#9A5B00" },
} as const;

export function Callout({ type = "note", title, children }: { type?: keyof typeof CALLOUT; title?: string; children: React.ReactNode }) {
  const c = CALLOUT[type];
  const Icon = c.icon;
  return (
    <Box sx={{ ...prose, my: 4, p: { xs: 2.5, md: 3 }, borderRadius: T.radiusSm, bgcolor: c.bg, border: `1px solid ${c.border}`, display: "flex", gap: 2, fontSize: "1rem", lineHeight: 1.7 }}>
      <Icon sx={{ color: c.color, fontSize: 24, flexShrink: 0, mt: "2px" }} />
      <Box sx={{ minWidth: 0, "& p:last-child": { mb: 0 } }}>
        {title && <Box sx={{ fontWeight: 700, color: T.ink, mb: 0.5 }}>{title}</Box>}
        {children}
      </Box>
    </Box>
  );
}

export function Quote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <Box component="figure" sx={{ ...prose, my: 6, mx: 0, pl: { xs: 2.5, md: 4 }, borderLeft: `4px solid ${T.green}` }}>
      <Box component="blockquote" sx={{ m: 0, fontSize: { xs: "1.3rem", md: "1.6rem" }, lineHeight: 1.45, fontWeight: 700, letterSpacing: "-0.01em", color: T.ink }}>
        {children}
      </Box>
      {cite && <Box component="figcaption" sx={{ mt: 1.5, fontSize: "0.92rem", color: T.muted }}>— {cite}</Box>}
    </Box>
  );
}

type Cell = React.ReactNode;
export function DataTable({
  head,
  rows,
  caption,
  minWidth = 560,
  layout,
}: {
  head: string[];
  rows: Cell[][];
  caption?: string;
  minWidth?: number;
  /** "compare": interactive side-by-side table, items as columns (default for 6+ columns).
   *  "table": plain table. "cards": one card per row. */
  layout?: "table" | "cards" | "compare";
}) {
  const mode = layout ?? (head.length > 5 ? "compare" : "table");
  if (mode === "cards") return <CompareCards head={head} rows={rows} caption={caption} />;
  if (mode === "compare") return <CompareTable head={head} rows={rows} caption={caption} />;
  return (
    <Box component="figure" sx={{ my: 4.5, mx: 0 }}>
      <Box sx={{ overflowX: { xs: "visible", sm: "auto" }, border: { xs: 0, sm: `1px solid ${T.border}` }, borderRadius: T.radiusSm, bgcolor: { xs: "transparent", sm: "#fff" } }}>
        <Box
          component="table"
          sx={{
            // Columns size to their content (capped), so long tables scroll instead of growing tall
            width: "max-content",
            minWidth: `max(100%, ${minWidth}px)`,
            borderCollapse: "collapse",
            fontSize: "0.92rem",
            lineHeight: 1.55,
            "& th": { textAlign: "left", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted, bgcolor: T.surface, px: 2, py: 1.5, borderBottom: `1px solid ${T.border}`, whiteSpace: "nowrap" },
            // Wide tables scroll sideways instead of squeezing cells into tall, narrow columns
            "& td": { px: 2, py: 1.6, verticalAlign: "top", color: T.body, borderBottom: `1px solid ${T.border}`, minWidth: 90, maxWidth: 300 },
            "& td:nth-of-type(n+2)": { minWidth: 120 },
            "& tr:last-of-type td": { borderBottom: 0 },
            "& td:first-of-type": { color: T.ink, fontWeight: 600 },
            "& tbody tr:hover td": { bgcolor: "#FAFCFA" },
            // Phones: every row becomes a card (first cell = title, the rest labelled
            // with their column name), so nothing hides off the side of the screen.
            "@media (max-width:599.95px)": {
              display: "block",
              width: "100%",
              minWidth: 0,
              "& thead": { display: "none" },
              "& tbody": { display: "grid", gap: 1.25 },
              "& tr": { display: "block", border: `1px solid ${T.border}`, borderRadius: T.radiusSm, bgcolor: "#fff", overflow: "hidden" },
              "& td": { display: "block", width: "auto", boxSizing: "border-box", maxWidth: "none", minWidth: "0 !important", border: 0, px: 2, py: 0.9 },
              "& td:first-of-type": { bgcolor: T.surface, borderBottom: `1px solid ${T.border}`, py: 1.25, fontWeight: 700, fontSize: "0.98rem" },
              "& td:nth-of-type(n+2)::before": { content: "attr(data-label)", display: "block", mb: 0.25, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted },
              "& td:nth-of-type(2)": { pt: 1.25 },
              "& td:last-of-type": { pb: 1.5 },
              "& td:empty": { display: "none" },
              "& tr:last-of-type td": { borderBottom: 0 },
              "& tr:last-of-type td:first-of-type": { borderBottom: `1px solid ${T.border}` },
              "& tbody tr:hover td": { bgcolor: "transparent" },
              "& tbody tr:hover td:first-of-type": { bgcolor: T.surface },
            },
          }}
        >
          <thead>
            <tr>
              {head.map((h, i) => (
                <th key={i} scope="col">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j} data-label={head[j] || undefined}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
      {caption && <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.88rem", color: T.muted }}>{caption}</Box>}
    </Box>
  );
}

const RATING: Record<string, { bg: string; color: string }> = {
  excellent: { bg: T.greenDark, color: "#fff" },
  "very good": { bg: T.greenDark, color: "#fff" },
  good: { bg: T.greenSoft, color: T.greenDark },
  fair: { bg: "#FFF4E0", color: "#9A5B00" },
  moderate: { bg: "#FFF4E0", color: "#9A5B00" },
  low: { bg: "#FDECEC", color: "#B42318" },
  poor: { bg: "#FDECEC", color: "#B42318" },
};

/** Makes table values easier to scan: rating pills, £ scales and number bars */
function SmartValue({ value, rowMax }: { value: Cell; rowMax: number }) {
  if (typeof value !== "string") return <>{value}</>;
  const v = value.trim();
  const rating = RATING[v.toLowerCase()];
  if (rating) return <Box component="span" sx={{ display: "inline-block", px: 1.25, py: 0.35, borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, bgcolor: rating.bg, color: rating.color }}>{v}</Box>;
  const pounds = /^(£+)\s*(.*)$/.exec(v);
  if (pounds) {
    const n = Math.min(pounds[1].length, 4);
    return (
      <Box component="span" sx={{ display: "inline-flex", alignItems: "baseline", gap: 0.75, flexWrap: "wrap" }}>
        <Box component="span" aria-label={`${n} of 4 cost`} sx={{ letterSpacing: "0.12em", fontWeight: 800, fontSize: "1rem" }}>
          <Box component="span" sx={{ color: T.ink }}>{"£".repeat(n)}</Box>
          <Box component="span" sx={{ color: "#CBD5CE" }}>{"£".repeat(4 - n)}</Box>
        </Box>
        {pounds[2] && <Box component="span" sx={{ fontSize: "0.8rem", color: T.muted }}>{pounds[2]}</Box>}
      </Box>
    );
  }
  const num = /^≈?\s*([0-9]+(?:\.[0-9]+)?)$/.exec(v);
  if (num && rowMax > 0) {
    const pct = (parseFloat(num[1]) / rowMax) * 100;
    return (
      <Box component="span" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box component="span" sx={{ fontWeight: 700, color: T.ink, minWidth: 34 }}>{v}</Box>
        <Box component="span" aria-hidden sx={{ flexGrow: 1, maxWidth: 90, height: 6, borderRadius: 3, bgcolor: "#EDF2EE", overflow: "hidden" }}>
          <Box component="span" sx={{ display: "block", height: "100%", width: `${pct}%`, bgcolor: T.green }} />
        </Box>
      </Box>
    );
  }
  if (v === "—" || v === "-") return <Box component="span" sx={{ color: "#B5C0B8" }}>—</Box>;
  return <>{v}</>;
}

/** Wide comparison data side by side: items (first cell of each row) become
 *  columns, properties become rows. Readers can hide items and highlight one. */
function CompareTable({ head, rows, caption }: { head: string[]; rows: Cell[][]; caption?: string }) {
  const names = rows.map((r) => textOf(r[0]));
  const [shown, setShown] = React.useState<boolean[]>(() => rows.map(() => true));
  const [pin, setPin] = React.useState<number | null>(null);
  const visible = rows.map((_, i) => i).filter((i) => shown[i]);
  const toggle = (i: number) =>
    setShown((s) => {
      if (s[i] && s.filter(Boolean).length <= 2) return s; // keep at least two to compare
      const next = [...s];
      next[i] = !next[i];
      if (!next[i] && pin === i) setPin(null);
      return next;
    });
  const props = head.slice(1);
  const rowMax = props.map((_, j) => {
    const nums = rows.map((r) => (typeof r[j + 1] === "string" ? parseFloat(String(r[j + 1]).replace(/[^0-9.]/g, "")) : NaN)).filter((x) => !isNaN(x));
    return nums.length >= 2 ? Math.max(...nums) : 0;
  });
  const COLW = 148;
  const LABELW = 140;
  return (
    <Box component="figure" sx={{ my: 4.5, mx: 0 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 1.75 }}>
        <Box sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.muted, mr: 0.5 }}>Compare:</Box>
        {names.map((n, i) => (
          <Box
            key={n}
            component="button"
            type="button"
            aria-pressed={shown[i]}
            onClick={() => toggle(i)}
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, px: 1.5, py: 0.75, borderRadius: 999, border: `1px solid ${shown[i] ? "#BFE3B4" : T.border}`, bgcolor: shown[i] ? T.greenSoft : "#fff", color: shown[i] ? T.greenDark : T.muted, textDecoration: shown[i] ? "none" : "line-through", transition: "all .15s", "&:hover": { borderColor: T.greenDark } }}
          >
            <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: shown[i] ? T.green : "#CBD5CE" }} />
            {n}
          </Box>
        ))}
      </Box>
      <Box sx={{ overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: T.radius, bgcolor: "#fff", boxShadow: T.shadow }}>
        <Box
          component="table"
          sx={{
            width: "100%",
            minWidth: LABELW + visible.length * COLW,
            tableLayout: "fixed",
            borderCollapse: "separate",
            borderSpacing: 0,
            fontSize: "0.9rem",
            lineHeight: 1.5,
            "& th, & td": { px: 2, py: 1.6, verticalAlign: "top", textAlign: "left", borderBottom: `1px solid ${T.border}` },
            "& tbody tr:last-of-type > *": { borderBottom: 0 },
            "& tbody th": { position: "sticky", left: 0, zIndex: 1, bgcolor: T.surface, color: T.muted, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase !important", borderRight: `1px solid ${T.border}`, width: LABELW },
            "& tbody tr:hover > *": { bgcolor: "#F7FBF6" },
            "& tbody tr:hover > th": { color: T.greenDark },
            "& td": { color: T.ink },
          }}
        >
          {caption && <caption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{caption}</caption>}
          <thead>
            <tr>
              <Box component="th" scope="col" sx={{ position: "sticky", left: 0, zIndex: 2, bgcolor: T.surface, borderRight: `1px solid ${T.border}`, width: LABELW, fontSize: "0.72rem", color: T.muted, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase !important", verticalAlign: "bottom !important" }}>
                {head[0]}
              </Box>
              {visible.map((i) => {
                const on = pin === i;
                return (
                  <Box component="th" scope="col" key={i} sx={{ p: "0 !important", bgcolor: on ? T.greenDeep : T.surface, transition: "background-color .15s" }}>
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setPin(on ? null : i)}
                      aria-pressed={on}
                      title={on ? "Remove highlight" : `Highlight ${names[i]}`}
                      sx={{ width: "100%", textAlign: "left", border: 0, bgcolor: "transparent", cursor: "pointer", fontFamily: "inherit", px: 2, py: 1.75, color: on ? "#fff" : T.ink, fontSize: "0.98rem", fontWeight: 800, lineHeight: 1.3, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1, "&:hover .pin": { opacity: 1 } }}
                    >
                      <span>{rows[i][0]}</span>
                      <Box component="span" className="pin" sx={{ flexShrink: 0, mt: "3px", width: 14, height: 14, borderRadius: "50%", border: `2px solid ${on ? T.green : "#B5C0B8"}`, bgcolor: on ? T.green : "transparent", opacity: on ? 1 : 0.6, transition: "all .15s" }} />
                    </Box>
                  </Box>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {props.map((label, j) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {visible.map((i) => (
                  <Box component="td" key={i} sx={pin === i ? { bgcolor: `${T.greenSoft} !important`, boxShadow: `inset 2px 0 0 ${T.green}, inset -2px 0 0 ${T.green}` } : undefined}>
                    <SmartValue value={rows[i][j + 1]} rowMax={rowMax[j]} />
                  </Box>
                ))}
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
      <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.85rem", color: T.muted }}>
        {caption ? `${caption} · ` : ""}Click a name to highlight it; use the chips to hide or show items.
      </Box>
    </Box>
  );
}

/** Wide tables as one card per row: the first cell is the card title, every
 *  other column becomes a labelled field. Nothing scrolls sideways. */
function CompareCards({ head, rows, caption }: { head: string[]; rows: Cell[][]; caption?: string }) {
  return (
    <Box component="figure" sx={{ my: 4.5, mx: 0 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
        {rows.map((r, i) => (
          <Box key={i} sx={{ p: { xs: 2.5, md: 3 }, borderRadius: T.radiusSm, border: `1px solid ${T.border}`, bgcolor: "#fff", transition: "border-color .15s, box-shadow .15s", "&:hover": { borderColor: "#BFE3B4", boxShadow: T.shadow } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2, pb: 1.75, borderBottom: `1px solid ${T.border}` }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: T.green, flexShrink: 0 }} />
              <Box component="p" sx={{ m: 0, fontSize: "1.12rem", fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{r[0]}</Box>
            </Box>
            <Box component="dl" sx={{ m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 2.5, rowGap: 1.75 }}>
              {r.slice(1).map((c, j) => (
                <Box key={j} sx={{ minWidth: 0 }}>
                  <Box component="dt" sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.muted, mb: 0.4 }}>{head[j + 1]}</Box>
                  <Box component="dd" sx={{ m: 0, fontSize: "0.93rem", lineHeight: 1.5, color: T.ink }}>{c}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      {caption && <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.88rem", color: T.muted }}>{caption}</Box>}
    </Box>
  );
}

export function Figure({ src, alt, caption, fit = "contain", wide = false }: { src: string; alt: string; caption?: string; fit?: "contain" | "cover"; wide?: boolean }) {
  return (
    <Box component="figure" sx={{ my: 5, mx: 0, maxWidth: wide ? "none" : 900 }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{ display: "block", width: "100%", height: "auto", objectFit: fit, bgcolor: "#fff", borderRadius: T.radiusSm, border: `1px solid ${T.border}` }}
      />
      {caption && <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.88rem", lineHeight: 1.5, color: T.muted, textAlign: "center" }}>{caption}</Box>}
    </Box>
  );
}

/** Row of big numbers, e.g. [{ value: "70 MPa", label: "Max working pressure" }] */
/** Counts the leading number of a value like "5,000 psid" up from 0 once visible */
function CountUp({ value, run }: { value: string; run: boolean }) {
  const m = /^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)([\s\S]*)$/.exec(value);
  const [n, setN] = React.useState(0);
  const target = m ? parseFloat(m[2].replace(/,/g, "")) : 0;
  React.useEffect(() => {
    if (!m || !run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 900);
      setN(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!m || !run) return <>{value}</>;
  const decimals = (m[2].split(".")[1] ?? "").length;
  const shown = n >= target ? m[2] : n.toLocaleString("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <>{m[1]}{shown}{m[3]}</>;
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  return (
    <Box ref={ref} sx={{ my: 5, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: `repeat(${Math.min(items.length, 4)}, 1fr)` }, gap: 1.5 }}>
      {items.map((s) => (
        <Box key={s.label} sx={{ p: 2.5, borderRadius: T.radiusSm, border: `1px solid ${T.border}`, bgcolor: T.surface }}>
          <Box sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.greenDark, lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}><CountUp value={s.value} run={seen} /></Box>
          <Box sx={{ mt: 0.75, fontSize: "0.85rem", lineHeight: 1.4, color: T.body }}>{s.label}</Box>
        </Box>
      ))}
    </Box>
  );
}

/** Grid of small cards: products, series, options, steps… */
export function Cards({
  items,
  columns = 2,
}: {
  items: { kicker?: string; title: React.ReactNode; body?: React.ReactNode; specs?: [string, React.ReactNode][]; href?: string; linkLabel?: string; image?: string; imageAlt?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <Box sx={{ my: 4.5, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: `repeat(${columns}, 1fr)` }, gap: 2 }}>
      {items.map((c, i) => (
        <Box key={i} sx={{ display: "flex", flexDirection: "column", p: 2.75, borderRadius: T.radiusSm, border: `1px solid ${T.border}`, bgcolor: "#fff", fontSize: "0.95rem", lineHeight: 1.6, transition: "border-color .15s, box-shadow .15s", "&:hover": { borderColor: "#BFE3B4", boxShadow: T.shadow } }}>
          {c.image && <Box component="img" src={c.image} alt={c.imageAlt ?? ""} loading="lazy" sx={{ width: "100%", height: 140, objectFit: "contain", mb: 2 }} />}
          {c.kicker && <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.greenDark, mb: 0.75 }}>{c.kicker}</Box>}
          <Box sx={{ fontSize: "1.08rem", fontWeight: 700, color: T.ink, lineHeight: 1.35, mb: c.body || c.specs ? 1 : 0 }}>{c.title}</Box>
          {c.specs && (
            <Box component="dl" sx={{ m: 0, mb: 1.5, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 2, rowGap: 0.5, fontSize: "0.88rem", "& dt": { color: T.muted }, "& dd": { m: 0, color: T.ink, fontWeight: 600 } }}>
              {c.specs.map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
              ))}
            </Box>
          )}
          {c.body && <Box sx={{ color: T.body, flexGrow: 1 }}>{c.body}</Box>}
          {c.href && (
            <Box component={isExternal(c.href) ? "a" : Link} {...newTab(c.href)} href={c.href} data-plain sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 700, fontSize: "0.9rem", color: T.greenDark, textDecoration: "none", "&:hover svg": { transform: "translateX(3px)" }, "& svg": { transition: "transform .15s" } }}>
              {c.linkLabel ?? "Learn more"} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

/** Horizontal bar chart for simple scores or values */
export function Bars({ title, items, max, format = (v: number) => String(v) }: { title?: string; items: { label: string; value: number }[]; max: number; format?: (v: number) => string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  return (
    <Box ref={ref} sx={{ my: 3, maxWidth: 860 }}>
      {title && <Box sx={{ fontWeight: 700, color: T.ink, fontSize: "1rem", mb: 1.5 }}>{title}</Box>}
      {items.map((it) => (
        <Box key={it.label} sx={{ display: "grid", gridTemplateColumns: { xs: "110px 1fr 44px", md: "140px 1fr 52px" }, alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box sx={{ fontSize: "0.9rem", color: T.body }}>{it.label}</Box>
          <Box sx={{ height: 10, borderRadius: 5, bgcolor: "#EDF2EE", overflow: "hidden" }} role="presentation">
            <Box sx={{ height: "100%", width: seen ? `${(it.value / max) * 100}%` : "0%", borderRadius: 5, background: `linear-gradient(90deg, ${T.greenDark}, ${T.green})`, transition: "width .9s cubic-bezier(.2,.8,.2,1)" }} />
          </Box>
          <Box sx={{ fontSize: "0.9rem", fontWeight: 700, color: T.ink, textAlign: "right" }}>{format(it.value)}</Box>
        </Box>
      ))}
    </Box>
  );
}

/** Several bar charts behind tabs, e.g. one tab per scoring criterion */
export function BarTabs({ sets, max, format }: { sets: { title: string; items: { label: string; value: number }[] }[]; max: number; format?: (v: number) => string }) {
  const [i, setI] = React.useState(0);
  return (
    <Box sx={{ my: 4, p: { xs: 2, md: 3 }, border: `1px solid ${T.border}`, borderRadius: T.radius, bgcolor: "#fff", maxWidth: 900 }}>
      <Box role="tablist" sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", mb: 1, p: 0.5, bgcolor: T.surface, borderRadius: 999, width: "fit-content", maxWidth: "100%" }}>
        {sets.map((st, k) => (
          <Box
            key={st.title}
            component="button"
            type="button"
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            sx={{ border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: 600, px: 2, py: 1, borderRadius: 999, bgcolor: k === i ? "#fff" : "transparent", color: k === i ? T.greenDark : T.body, boxShadow: k === i ? "0 1px 3px rgba(14,27,18,0.12)" : "none", transition: "all .15s" }}
          >
            {st.title}
          </Box>
        ))}
      </Box>
      <Bars key={i} items={sets[i].items} max={max} format={format} />
    </Box>
  );
}

// FAQ icons: picked from the question's wording so every post gets fitting
// icons without extra work. Pass `icon` on an item to choose one by hand.
const FAQ_ICON_RULES: [RegExp, React.ElementType][] = [
  [/certif|approv|standard|iso\b|iso |en \d|api |kgs|ce mark|complian|wras|atex/i, VerifiedOutlinedIcon],
  [/fail|risk|damage|\bbreaks?\b|leak|mistake|wrong|stuck|won.t|problem/i, WarningAmberRoundedIcon],
  [/deliver|arriv|ship|lead time|when does|how long|dispatch/i, LocalShippingOutlinedIcon],
  [/price|cost|quote|rfq|order|reserve|buy|discount/i, RequestQuoteOutlinedIcon],
  [/pressure|psi|bar\b|air supply/i, SpeedOutlinedIcon],
  [/torque|force|safety factor|stroke/i, ShowChartRoundedIcon],
  [/temperat|heat|cold|cryogen|steam/i, ThermostatOutlinedIcon],
  [/water|seawater|media|fluid|chemical|oil|gas\b/i, WaterDropOutlinedIcon],
  [/material|steel|iron|bronze|brass|plastic|alloy|corros|casing/i, ScienceOutlinedIcon],
  [/seal|gasket|packing|shut off|shut-off|leak-tight/i, LockOutlinedIcon],
  [/mix|divert|flow|port\b|route/i, AltRouteRoundedIcon],
  [/differen|compare|vs\b|versus|better/i, CompareArrowsRoundedIcon],
  [/electric|power|battery|motor|positioner|spring/i, SettingsSuggestOutlinedIcon],
  [/reliab|durab|last|life|safe/i, ShieldOutlinedIcon],
  [/install|fit|mount|maint|repair|check|service/i, BuildOutlinedIcon],
  [/size|sizing|bigger|smaller|dimension/i, StraightenRoundedIcon],
  [/stock|series|range|model/i, Inventory2OutlinedIcon],
  [/^what is|^what are|mean/i, MenuBookOutlinedIcon],
];
/** One icon per question, matched from its wording; within a list, an icon
 *  already used is skipped when another rule also fits, so they vary. */
function faqIcons(qs: string[]): React.ElementType[] {
  const used = new Set<React.ElementType>();
  return qs.map((q) => {
    const fits = FAQ_ICON_RULES.filter(([re]) => re.test(q)).map(([, I]) => I);
    const pick = fits.find((I) => !used.has(I)) ?? fits[0] ?? HelpOutlineRoundedIcon;
    used.add(pick);
    return pick;
  });
}

export function FAQ({ items, title = "Frequently asked questions" }: { items: { q: string; a: React.ReactNode; icon?: React.ElementType }[]; title?: string }) {
  const auto = faqIcons(items.map((f) => f.q));
  return (
    <>
      <H2 id="faq">{title}</H2>
      <Box sx={{ display: "grid", gap: 1.25, mb: 4 }}>
        {items.map((f, i) => {
          const Icon = f.icon ?? auto[i];
          return (
            <Box
              component="details"
              key={f.q}
              open={i === 0}
              sx={{
                borderRadius: "16px",
                bgcolor: "#fff",
                border: `1px solid ${T.border}`,
                transition: "border-color .2s, box-shadow .2s",
                "&:hover": { borderColor: "#CFE6C8" },
                "&[open]": { borderColor: "#CFE6C8", boxShadow: "0 6px 20px rgba(14,27,18,0.05)" },
                "& summary": { listStyle: "none", cursor: "pointer", px: { xs: 1.75, md: 2.25 }, py: { xs: 1.5, md: 1.75 }, display: "flex", alignItems: "center", gap: { xs: 1.5, md: 1.75 } },
                "& summary::-webkit-details-marker": { display: "none" },
                "& .faq-plus": { transition: "transform .2s, background-color .2s, color .2s" },
                "&[open] .faq-plus": { transform: "rotate(45deg)", bgcolor: T.greenDeep, color: "#fff" },
                "&[open] .faq-ic": { bgcolor: T.green, color: T.greenDeep },
              }}
            >
              <summary>
                <Box className="faq-ic" aria-hidden sx={{ flexShrink: 0, width: { xs: 36, md: 40 }, height: { xs: 36, md: 40 }, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", transition: "all .2s" }}>
                  <Icon sx={{ fontSize: { xs: 19, md: 21 } }} />
                </Box>
                <Box component="h3" sx={{ m: 0, flex: 1, fontSize: { xs: "0.98rem", md: "1.05rem" }, fontWeight: 700, lineHeight: 1.4, color: T.ink }}>{f.q}</Box>
                <Box className="faq-plus" aria-hidden sx={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                  <AddRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              </summary>
              <Box sx={{ pl: { xs: 1.75, sm: "78px" }, pr: { xs: 1.75, md: 2.5 }, pb: 2.25, fontSize: "1rem", lineHeight: 1.75, color: T.body, "& p": { m: 0, mb: 1.5 }, "& p:last-child": { mb: 0 } }}>{f.a}</Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export function CTA({ title, body, primary, secondary }: { title: string; body?: React.ReactNode; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <Box sx={{ my: { xs: 6, md: 8 }, p: { xs: 3.5, md: 5 }, borderRadius: T.radius, color: "#fff", position: "relative", overflow: "hidden", background: `linear-gradient(135deg, ${T.greenDeep} 0%, #1E5A22 60%, ${T.greenDark} 100%)` }}>
      <Box component="p" sx={{ m: 0, mb: 1, fontSize: { xs: "1.45rem", md: "1.75rem" }, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#fff" }}>{title}</Box>
      {body && <Box component="p" sx={{ m: 0, mb: 3, color: "rgba(255,255,255,0.82)", fontSize: "1.02rem", lineHeight: 1.7, maxWidth: 560 }}>{body}</Box>}
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
        <Box component={isExternal(primary.href) ? "a" : Link} {...newTab(primary.href)} href={primary.href} data-plain sx={{ px: 3, py: 1.35, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", "&:hover": { bgcolor: "#55C93E" } }}>
          {primary.label}
        </Box>
        {secondary && (
          <Box component={isExternal(secondary.href) ? "a" : Link} {...newTab(secondary.href)} href={secondary.href} data-plain sx={{ px: 3, py: 1.35, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", "&:hover": { bgcolor: "rgba(255,255,255,0.08)" } }}>
            {secondary.label}
          </Box>
        )}
      </Box>
    </Box>
  );
}

/** Pill links at the end of a post */
export function RelatedLinks({ title = "Related pages", links }: { title?: string; links: { label: string; href: string }[] }) {
  return (
    <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${T.border}` }}>
      <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.muted }}>{title}</Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {links.map((l) => {
          const external = isExternal(l.href);
          return (
            <Box
              key={l.href}
              component={external ? "a" : Link}
              href={l.href}
              data-plain
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              sx={{ px: 2, py: 1, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: "#fff", color: T.ink, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft } }}
            >
              {l.label}
              {external ? " ↗" : " →"}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// ───────────────────────── interactive blocks ─────────────────────────
export const chipSx = (on: boolean) =>
  ({
    border: `1px solid ${on ? T.greenDark : T.border}`,
    bgcolor: on ? T.greenDeep : "#fff",
    color: on ? "#fff" : T.ink,
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    fontWeight: 600,
    lineHeight: 1.3,
    textAlign: "left",
    px: 2,
    py: 1.25,
    borderRadius: "12px",
    transition: "all .15s",
    "&:hover": { borderColor: T.greenDark, ...(on ? {} : { bgcolor: T.greenSoft }) },
  }) as const;

export const panelSx = { my: 4.5, p: { xs: 2.5, md: 3.5 }, borderRadius: T.radius, border: `1px solid ${T.border}`, bgcolor: "#fff", boxShadow: T.shadow } as const;

export function PanelHead({ kicker, title, hint }: { kicker?: string; title: string; hint?: string }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      {kicker && <Box sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark, mb: 0.75 }}>{kicker}</Box>}
      <Box sx={{ fontSize: { xs: "1.15rem", md: "1.3rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{title}</Box>
      {hint && <Box sx={{ mt: 0.5, fontSize: "0.9rem", color: T.muted }}>{hint}</Box>}
    </Box>
  );
}

/**
 * "Pick your situation → see the answer". Options are buttons; the matching
 * result appears below. Use only answers the article already gives.
 */
export function Finder({
  kicker = "Quick finder",
  title,
  hint = "Pick one to see the recommendation.",
  options,
}: {
  kicker?: string;
  title: string;
  hint?: string;
  options: { label: string; result: React.ReactNode; href?: string; linkLabel?: string }[];
}) {
  const [i, setI] = React.useState<number | null>(null);
  return (
    <Box sx={panelSx}>
      <PanelHead kicker={kicker} title={title} hint={hint} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: `repeat(${Math.min(options.length, 4)}, 1fr)` }, gap: 1.25 }}>
        {options.map((o, k) => (
          <Box key={o.label} component="button" type="button" aria-pressed={i === k} onClick={() => setI(i === k ? null : k)} sx={chipSx(i === k)}>
            {o.label}
          </Box>
        ))}
      </Box>
      {/* All answers stay in the HTML (hidden until picked) so search engines read them */}
      <Box aria-live="polite">
        {options.map((o, k) => (
          <Box key={o.label} hidden={k !== i} sx={{ mt: 2.5, p: { xs: 2, md: 2.5 }, borderRadius: T.radiusSm, bgcolor: T.greenSoft, border: "1px solid #CFEBC6", fontSize: "1rem", lineHeight: 1.7, color: T.ink, "@keyframes fin": { from: { opacity: 0, transform: "translateY(6px)" }, to: { opacity: 1, transform: "none" } }, animation: "fin .3s ease" }}>
            {o.result}
            {o.href && (
              <Box sx={{ mt: 1.5 }}>
                <Box component={isExternal(o.href) ? "a" : Link} {...newTab(o.href)} href={o.href} data-plain sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 700, color: T.greenDark, textDecoration: "none" }}>
                  {o.linkLabel ?? "See the range"} <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/** Tickable checklist with progress; optional button that emails the list to sales */
export function Checklist({
  kicker = "Checklist",
  title,
  items,
  emailSubject,
  emailTo = "sales@valvenok.com",
}: {
  kicker?: string;
  title: string;
  items: string[];
  /** Address the "Email this list" button writes to */
  emailTo?: string;
  /** When set, shows "Email this list to sales" (mailto, prefilled) */
  emailSubject?: string;
}) {
  const [done, setDone] = React.useState<boolean[]>(() => items.map(() => false));
  const n = done.filter(Boolean).length;
  const body = items.map((it, k) => `${done[k] ? "[x]" : "[ ]"} ${it}`).join("\n");
  return (
    <Box sx={panelSx}>
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
        <PanelHead kicker={kicker} title={title} hint="Tick each one off as you go." />
        <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: n === items.length ? T.greenDark : T.muted }}>
          {n}/{items.length} {n === items.length ? "· all set" : ""}
        </Box>
      </Box>
      <Box sx={{ height: 6, borderRadius: 3, bgcolor: "#EDF2EE", overflow: "hidden", mb: 2 }}>
        <Box sx={{ height: "100%", width: `${(n / items.length) * 100}%`, bgcolor: T.green, transition: "width .3s" }} />
      </Box>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 0.75 }}>
        {items.map((it, k) => (
          <li key={it}>
            <Box component="label" sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", p: 1.25, borderRadius: "10px", cursor: "pointer", fontSize: "0.98rem", lineHeight: 1.55, color: done[k] ? T.muted : T.ink, textDecoration: done[k] ? "line-through" : "none", "&:hover": { bgcolor: T.surface } }}>
              <Box component="input" type="checkbox" checked={done[k]} onChange={() => setDone((d) => d.map((x, j) => (j === k ? !x : x)))} sx={{ mt: "4px", width: 18, height: 18, accentColor: T.greenDark, flexShrink: 0, cursor: "pointer" }} />
              <span>{it}</span>
            </Box>
          </li>
        ))}
      </Box>
      {emailSubject && (
        <Box component="a" data-plain href={`mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`} sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.75, px: 2.5, py: 1.1, borderRadius: 999, bgcolor: T.greenDeep, color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", "&:hover": { bgcolor: T.greenDark } }}>
          <MailOutlineRoundedIcon sx={{ fontSize: 18 }} /> Email this list to sales
        </Box>
      )}
    </Box>
  );
}

/** Step-through: one step at a time with progress dots and Next / Back */
export function Stepper({ kicker = "Step by step", title, steps }: { kicker?: string; title: string; steps: { title: string; body: React.ReactNode }[] }) {
  const [i, setI] = React.useState(0);
  return (
    <Box sx={panelSx}>
      <PanelHead kicker={kicker} title={title} />
      <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 0.75 }, mb: 2.5, flexWrap: "wrap" }}>
        {steps.map((st, k) => (
          <Box key={st.title} component="button" type="button" aria-label={`Step ${k + 1}: ${st.title}`} aria-current={k === i ? "step" : undefined} onClick={() => setI(k)} sx={{ border: 0, cursor: "pointer", width: { xs: 30, sm: 36 }, height: { xs: 30, sm: 36 }, borderRadius: "50%", fontFamily: "inherit", fontWeight: 800, fontSize: { xs: "0.82rem", sm: "0.9rem" }, bgcolor: k === i ? T.greenDeep : k < i ? T.green : T.surface, color: k <= i ? "#fff" : T.body, transition: "all .2s" }}>
            {k + 1}
          </Box>
        ))}
      </Box>
      {steps.map((st, k) => (
        <Box key={st.title} hidden={k !== i} sx={{ minHeight: 110, "@keyframes st": { from: { opacity: 0, transform: "translateX(10px)" }, to: { opacity: 1, transform: "none" } }, animation: "st .25s ease" }}>
          <Box sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.muted, mb: 0.5 }}>
            Step {k + 1} of {steps.length}
          </Box>
          <Box sx={{ fontSize: "1.15rem", fontWeight: 800, color: T.ink, mb: 1 }}>{st.title}</Box>
          <Box sx={{ fontSize: "1rem", lineHeight: 1.7, color: T.body }}>{st.body}</Box>
        </Box>
      ))}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2.5, gap: 1 }}>
        <Box component="button" type="button" disabled={i === 0} onClick={() => setI(i - 1)} sx={{ ...chipSx(false), opacity: i === 0 ? 0.4 : 1, cursor: i === 0 ? "default" : "pointer" }}>← Back</Box>
        <Box component="button" type="button" disabled={i === steps.length - 1} onClick={() => setI(i + 1)} sx={{ ...chipSx(true), opacity: i === steps.length - 1 ? 0.4 : 1, cursor: i === steps.length - 1 ? "default" : "pointer" }}>Next →</Box>
      </Box>
    </Box>
  );
}

/** Content tabs: each tab holds any JSX (lists, cards, tables…) */
export function Tabs({ kicker, title, tabs }: { kicker?: string; title?: string; tabs: { label: string; content: React.ReactNode }[] }) {
  const [i, setI] = React.useState(0);
  return (
    <Box sx={panelSx}>
      {title && <PanelHead kicker={kicker} title={title} />}
      {/* One row on every screen: scrolls sideways on phones instead of stacking */}
      <Box role="tablist" sx={{ display: "flex", gap: 0.5, flexWrap: "nowrap", overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" }, mb: 2.5, p: 0.5, bgcolor: T.surface, borderRadius: "14px", width: "fit-content", maxWidth: "100%", boxSizing: "border-box" }}>
        {tabs.map((t, k) => (
          <Box key={t.label} component="button" type="button" role="tab" aria-selected={k === i} onClick={() => setI(k)} sx={{ flexShrink: 0, whiteSpace: "nowrap", border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: { xs: "0.85rem", md: "0.9rem" }, fontWeight: 600, px: { xs: 1.5, md: 2 }, py: 1, borderRadius: "10px", bgcolor: k === i ? "#fff" : "transparent", color: k === i ? T.greenDark : T.body, boxShadow: k === i ? "0 1px 3px rgba(14,27,18,0.12)" : "none", transition: "all .15s", "&:focus": { outline: "none" }, "&:focus-visible": { outline: `2px solid ${T.greenDark}`, outlineOffset: "-2px" } }}>
            {t.label}
          </Box>
        ))}
      </Box>
      {/* Every panel stays in the HTML (hidden when inactive) so search engines read all of it */}
      {tabs.map((t, k) => (
        <Box role="tabpanel" key={t.label} hidden={k !== i} sx={{ fontSize: "1rem", lineHeight: 1.7, "& > *:first-of-type": { mt: 0 }, "& > *:last-child": { mb: 0 }, "@keyframes tb": { from: { opacity: 0 }, to: { opacity: 1 } }, animation: "tb .25s ease" }}>
          {t.content}
        </Box>
      ))}
    </Box>
  );
}

/** Cards with filter chips by tag ("All" + every tag used) */
export function FilterCards({
  kicker,
  title,
  items,
  columns = 3,
}: {
  kicker?: string;
  title?: string;
  items: { tag: string; title: React.ReactNode; body?: React.ReactNode; image?: string; imageAlt?: string; href?: string; linkLabel?: string }[];
  columns?: 2 | 3;
}) {
  const tags = Array.from(new Set(items.map((x) => x.tag)));
  const [tag, setTag] = React.useState("All");
  const list = tag === "All" ? items : items.filter((x) => x.tag === tag);
  return (
    <Box sx={{ my: 4.5 }}>
      {title && <PanelHead kicker={kicker} title={title} />}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2.5 }}>
        {["All", ...tags].map((t) => {
          const count = t === "All" ? items.length : items.filter((x) => x.tag === t).length;
          const on = t === tag;
          return (
            <Box key={t} component="button" type="button" aria-pressed={on} onClick={() => setTag(t)} sx={{ ...chipSx(on), borderRadius: 999, py: 0.85, fontSize: "0.85rem" }}>
              {t} <Box component="span" sx={{ opacity: 0.6, ml: 0.5 }}>{count}</Box>
            </Box>
          );
        })}
      </Box>
      <Cards
        columns={columns}
        items={list.map((x) => ({ kicker: x.tag, title: x.title, body: x.body, image: x.image, imageAlt: x.imageAlt, href: x.href, linkLabel: x.linkLabel }))}
      />
    </Box>
  );
}

/** Two-way toggle between two views, e.g. "Standard" vs "Atlas" */
export function Toggle({ kicker, title, a, b }: { kicker?: string; title?: string; a: { label: string; content: React.ReactNode }; b: { label: string; content: React.ReactNode } }) {
  const [on, setOn] = React.useState(false);
  return (
    <Box sx={panelSx}>
      {title && <PanelHead kicker={kicker} title={title} />}
      <Box role="tablist" sx={{ display: "inline-flex", p: 0.5, bgcolor: T.surface, borderRadius: 999, mb: 2.5, position: "relative" }}>
        {[a, b].map((x, k) => (
          <Box key={x.label} component="button" type="button" role="tab" aria-selected={(k === 1) === on} onClick={() => setOn(k === 1)} sx={{ border: 0, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, fontSize: "0.9rem", px: 2.5, py: 1, borderRadius: 999, bgcolor: (k === 1) === on ? T.greenDeep : "transparent", color: (k === 1) === on ? "#fff" : T.body, transition: "all .2s" }}>
            {x.label}
          </Box>
        ))}
      </Box>
      {[a, b].map((x, k) => (
        <Box key={x.label} role="tabpanel" hidden={(k === 1) !== on} sx={{ fontSize: "1rem", lineHeight: 1.7, "@keyframes tg": { from: { opacity: 0 }, to: { opacity: 1 } }, animation: "tg .25s ease" }}>
          {x.content}
        </Box>
      ))}
    </Box>
  );
}

/** Small self-check quiz: question, options, the correct one, and why */
export function Quiz({ title = "Test yourself", questions }: { title?: string; questions: { q: string; options: string[]; answer: number; why: React.ReactNode }[] }) {
  const [picked, setPicked] = React.useState<(number | null)[]>(() => questions.map(() => null));
  const score = picked.filter((p, k) => p === questions[k].answer).length;
  const answered = picked.filter((p) => p !== null).length;
  return (
    <Box sx={panelSx}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
        <PanelHead kicker="Quick quiz" title={title} hint="Answers come straight from this article." />
        {answered > 0 && <Box sx={{ fontWeight: 800, color: T.greenDark }}>{score}/{questions.length} correct</Box>}
      </Box>
      <Box sx={{ display: "grid", gap: 3 }}>
        {questions.map((qq, k) => (
          <Box key={qq.q}>
            <Box sx={{ fontWeight: 700, color: T.ink, mb: 1.25 }}>{k + 1}. {qq.q}</Box>
            <Box sx={{ display: "grid", gap: 1, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
              {qq.options.map((o, j) => {
                const p = picked[k];
                const show = p !== null;
                const right = j === qq.answer;
                const chosen = p === j;
                return (
                  <Box
                    key={o}
                    component="button"
                    type="button"
                    disabled={show}
                    onClick={() => setPicked((x) => x.map((v, m) => (m === k ? j : v)))}
                    sx={{ ...chipSx(false), cursor: show ? "default" : "pointer", ...(show && right ? { bgcolor: T.greenSoft, borderColor: T.greenDark, color: T.greenDark } : {}), ...(show && chosen && !right ? { bgcolor: "#FDECEC", borderColor: "#E9A7A1", color: "#B42318" } : {}), ...(show && !right && !chosen ? { opacity: 0.55 } : {}) }}
                  >
                    {show && right ? "✓ " : show && chosen ? "✗ " : ""}
                    {o}
                  </Box>
                );
              })}
            </Box>
            {picked[k] !== null && <Box sx={{ mt: 1.25, fontSize: "0.95rem", lineHeight: 1.65, color: T.body }}>{qq.why}</Box>}
          </Box>
        ))}
      </Box>
      {answered === questions.length && (
        <Box component="button" type="button" onClick={() => setPicked(questions.map(() => null))} sx={{ ...chipSx(false), mt: 3 }}>
          Try again
        </Box>
      )}
    </Box>
  );
}
