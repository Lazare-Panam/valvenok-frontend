"use client";

// About page, redesigned 23 Nov 2026 (teal + logo palette, colours from src/theme/brand.ts):
//  • Light editorial hero: framed photo on a blueprint grid, badges, stats strip
//  • Outlined keyword marquee
//  • Manufacturer logo wall: two rows drifting opposite ways, grey → colour on hover
//  • Story: the timeline pins and slides sideways as you scroll (2018 → 2026)
//  • Values bento: one large photo tile + four blueprint tiles
// Copy is unchanged. Everything calms down for visitors who ask for reduced motion,
// and the sideways timeline becomes a plain list on phones.

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import { T, textReset } from "../Landing/modern/homeTokens";
import { Eyebrow } from "../Landing/modern/HomeSectionHeader";
import PillButton from "../Landing/modern/HomeButtons";
import { KF, useInView, Reveal, Blob, Words } from "../Common/LightMotion";
import { ON_SITE } from "../brands/brandsData";
import { swipeRow } from "../Landing/modern/swipeRow";
import { AQUA, BRAND, BRAND_GRADIENT, LOGO, LOGO_SOFT_GRADIENT, LOGO_TINT_GRADIENT, withAlpha } from "@/src/theme/brand";

const WRAP = { width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 } } as const;
const VALUES_IMG = "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/fittings-hero.webp";
/** Height of the pinned header on desktop (logo bar + menu), so the pinned timeline sits below it. */
const HEADER = 126;

/** Faint engineering grid, as on the homepage bands. */
const grid = (line: string, size = 24) => ({
  backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
});

/** Big outlined numbers / words. */
const outline = (color: string, w = 1.5) => ({ color: "transparent", WebkitTextStroke: `${w}px ${color}` });

// ───────────────────────── Hero ─────────────────────────
const STATS = [
  { value: "UK", label: "Based Supplier" },
  { value: "32", label: "Brands distributed" },
  { value: "High", label: "Pressure Ratings Vary by Product" },
  { value: "SS316", label: "Primary Material" },
  { value: "JOSCAR", label: "Registered Supplier" },
  { value: "H₂", label: "Hydrogen Ready" },
];

function CountUp({ value, run }: { value: string; run: boolean }) {
  const n = Number(value);
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    if (!run || Number.isNaN(n)) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / 1400);
      setV(String(Math.round(n * (1 - Math.pow(1 - k, 3)))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, n]);
  return <>{v}</>;
}

function Chip({ icon, title, sub, sx, delay = 0 }: { icon: React.ReactNode; title: string; sub: string; sx: object; delay?: number }) {
  return (
    <Box sx={{ position: "absolute", zIndex: 3, animation: `floaty 6s ease-in-out ${delay}s infinite`, ...sx }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.25, pr: 2.5, borderRadius: "16px", bgcolor: withAlpha(BRAND.white, 0.94), backdropFilter: "blur(10px)", border: `1px solid ${T.border}`, boxShadow: T.shadowHover }}>
        <Box sx={{ width: 38, height: 38, borderRadius: "11px", background: BRAND_GRADIENT, color: BRAND.white, display: "grid", placeItems: "center", animation: "pulseRing 2.4s ease-out infinite" }}>{icon}</Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: T.ink, lineHeight: 1.2, fontSize: "0.92rem" }}>{title}</Typography>
          <Typography sx={{ fontSize: "0.76rem", color: T.muted }}>{sub}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function SpinRing() {
  return (
    <Box aria-hidden sx={{ position: "absolute", width: 124, height: 124, right: { md: 24 }, top: { md: -52 }, zIndex: 3, display: { xs: "none", md: "block" } }}>
      <Box sx={{ position: "absolute", inset: 0, borderRadius: "50%", bgcolor: BRAND.white, boxShadow: T.shadowHover, border: `1px solid ${T.border}` }} />
      <Box component="svg" viewBox="0 0 120 120" sx={{ position: "absolute", inset: 0, animation: "spin 16s linear infinite" }}>
        <defs>
          <path id="about-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill={LOGO.mid} fontSize="10" fontWeight="700" letterSpacing="1.5">
          <textPath href="#about-ring" textLength="272" lengthAdjust="spacing">UK BASED SUPPLIER • SS316 • H₂ READY • </textPath>
        </text>
      </Box>
      <Box sx={{ position: "absolute", inset: 38, borderRadius: "50%", background: BRAND_GRADIENT, display: "grid", placeItems: "center", fontWeight: 800, color: BRAND.white, fontSize: "0.95rem" }}>UK</Box>
    </Box>
  );
}

// Light, editorial hero (23 Nov 2026): inner pages stay calmer than the homepage's full
// photo hero. White blueprint grid, framed photo with an offset teal block behind it.
function Hero() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [ref, on] = useInView<HTMLDivElement>(0.2);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: BRAND.white }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, ...grid(withAlpha(LOGO.top, 0.07)), maskImage: "linear-gradient(180deg, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, black 40%, transparent 100%)" }} />
      <Box aria-hidden sx={{ position: "absolute", top: -200, right: -160, width: 640, height: 640, borderRadius: "50%", background: `radial-gradient(circle, ${withAlpha(AQUA.mistLight, 0.9)}, transparent 70%)`, pointerEvents: "none" }} />

      <Box sx={{ ...WRAP, position: "relative", pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" }, gap: { xs: 8, md: 10 }, alignItems: "center" }}>
          <Box>
            <Box sx={{ animation: "wordIn .7s ease both" }}>
              <Eyebrow>About Valvenok</Eyebrow>
            </Box>
            <Typography component="h1" sx={{ mt: 3, fontWeight: 800, fontSize: { xs: "2.7rem", sm: "3.4rem", md: "4.4rem" }, lineHeight: 1.02, letterSpacing: "-0.04em", color: LOGO.bottom }}>
              <Words text="Built for engineers," />
              <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
                <Words text="by engineers" start={330} sx={{ color: LOGO.top }} />
                <Box component="svg" aria-hidden viewBox="0 0 300 20" preserveAspectRatio="none" sx={{ position: "absolute", left: 0, bottom: { xs: -8, md: -12 }, width: "100%", height: { xs: 12, md: 16 } }}>
                  <path d="M4 14 C 60 2, 120 18, 180 8 S 270 4, 296 12" fill="none" stroke={AQUA.glowDeep} strokeWidth="5" strokeLinecap="round" strokeDasharray="320" style={{ animation: "draw 1.2s ease 0.9s both" }} />
                </Box>
              </Box>
            </Typography>
            <Typography sx={{ mt: 4, fontSize: { xs: "1.02rem", md: "1.12rem" }, lineHeight: 1.75, color: T.body, maxWidth: 600, animation: "wordIn .9s ease .6s both" }}>
              {/* Positioning statement (website version, 4 Nov 2026): headline as the opening line, then the intro */}
              <Box component="strong" sx={{ display: "block", mb: 1, color: T.ink, fontWeight: 700 }}>
                One UK supplier for valves, actuators and instrumentation from 27 manufacturers.
              </Box>
              Valvenok is a JOSCAR-registered UK distributor, so procurement teams can source from many leading brands through a single approved
              supplier. Every order comes with the paperwork you need, including EN 10204 3.1/3.2 material certificates, and lead times are confirmed
              on every quotation.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 1.5, flexWrap: "wrap", animation: "wordIn .9s ease .8s both" }}>
              <PillButton href="/contact">Talk to our team</PillButton>
              <PillButton href="/quick-order" variant="secondary">
                Quick Order
              </PillButton>
            </Box>
          </Box>

          {/* framed photo, offset teal block behind, badges around it */}
          <Box onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} sx={{ position: "relative", perspective: "1200px", mx: { xs: 1, md: 0 }, animation: "wordIn 1s ease .3s both" }}>
            <Box aria-hidden sx={{ position: "absolute", inset: 0, transform: "translate(16px, 16px)", borderRadius: "30px", background: LOGO_SOFT_GRADIENT, "&::after": { content: '""', position: "absolute", inset: 0, borderRadius: "30px", ...grid(withAlpha(BRAND.white, 0.08), 20) } }} />
            <Box
              sx={{
                position: "relative",
                aspectRatio: { xs: "16 / 11", md: "4 / 3.4" },
                borderRadius: "30px",
                overflow: "hidden",
                border: `6px solid ${BRAND.white}`,
                boxShadow: `0 30px 70px -20px ${withAlpha(LOGO.bottom, 0.35)}`,
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform .3s ease-out",
              }}
            >
              <Image src={VALUES_IMG} alt="Stainless steel instrumentation fittings" fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              <Box aria-hidden sx={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, transparent 50%, ${withAlpha(LOGO.mid, 0.25)} 100%)` }} />
            </Box>
            <SpinRing />
            <Chip icon={<WorkspacePremiumOutlinedIcon fontSize="small" />} title="JOSCAR" sub="Registered Supplier" sx={{ left: { xs: -4, md: -44 }, bottom: { xs: -30, md: 56 } }} />
            <Chip icon={<GroupsOutlinedIcon fontSize="small" />} title="BVAA" sub="Member" delay={0.6} sx={{ right: { sm: -8, md: -14 }, top: { sm: "40%" }, display: { xs: "none", sm: "block" } }} />
            <Chip icon={<ScienceOutlinedIcon fontSize="small" />} title="SS316" sub="Primary Material" delay={1.2} sx={{ right: { sm: 24, md: 40 }, bottom: { sm: -34, md: -30 }, display: { xs: "none", sm: "block" } }} />
            <Chip icon={<BubbleChartOutlinedIcon fontSize="small" />} title="H₂" sub="Hydrogen Ready" delay={1.8} sx={{ left: { md: "18%" }, top: { md: -26 }, display: { xs: "none", md: "block" } }} />
          </Box>
        </Box>

        {/* stats strip */}
        <Box
          ref={ref}
          sx={{
            mt: { xs: 6, md: 9 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", lg: "repeat(6, 1fr)" },
            borderRadius: "22px",
            overflow: "hidden",
            bgcolor: BRAND.white,
            border: `1px solid ${T.border}`,
            boxShadow: T.shadow,
          }}
        >
          {STATS.map((s, i) => (
            <Box key={s.label} sx={{ position: "relative", p: { xs: 2, md: 2.75 }, borderLeft: { lg: i ? `1px solid ${T.border}` : "none" }, transition: "background .25s", "&:hover": { bgcolor: BRAND.wash }, "&:hover::before": { transform: "scaleX(1)" }, "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: 0, height: 3, background: BRAND_GRADIENT, transform: "scaleX(0)", transformOrigin: "left", transition: "transform .35s ease" } }}>
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.6rem", md: "2rem" }, letterSpacing: "-0.03em", lineHeight: 1.05, color: LOGO.mid }}>
                <CountUp value={s.value} run={on} />
              </Typography>
              <Typography sx={{ mt: 0.75, fontSize: "0.8rem", lineHeight: 1.4, color: T.body }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ───────────────────────── Marquee (outlined) ─────────────────────────
const MARQUEE = ["Valves", "Fittings", "Instrumentation", "UK Support", "SS316", "JOSCAR Registered", "BVAA Member", "Hydrogen Ready", "No Minimum Order", "Traceable Quality"];

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <Box aria-hidden sx={{ overflow: "hidden", py: { xs: 2.5, md: 3.5 }, borderBottom: `1px solid ${T.border}`, bgcolor: BRAND.white }}>
      <Box sx={{ display: "flex", width: "max-content", animation: "marquee 40s linear infinite" }}>
        {row.map((w, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 3, md: 5 },
              px: { xs: 1.5, md: 2.5 },
              fontSize: { xs: "1.7rem", md: "3.6rem" },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              ...(i % 2 ? outline(LOGO.mid, 1.5) : { color: LOGO.bottom }),
            }}
          >
            {w}
            <Box component="span" sx={{ width: { xs: 10, md: 14 }, height: { xs: 10, md: 14 }, borderRadius: "50%", background: BRAND_GRADIENT, flexShrink: 0 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ───────────────────────── Manufacturer logo wall ─────────────────────────
function LogoWall() {
  const logos = ON_SITE.filter((b) => b.logo && !b.dark);
  const half = Math.ceil(logos.length / 2);
  const rows = [logos.slice(0, half), logos.slice(half)];
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 11 }, bgcolor: BRAND.white }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, ...grid(withAlpha(LOGO.top, 0.06)), maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      <Box sx={{ ...WRAP, position: "relative", textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Reveal>
          <Eyebrow>Brands We Supply</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.1rem", md: "3.2rem" }, letterSpacing: "-0.035em", lineHeight: 1.05, color: T.ink }}>
            27 manufacturers.{" "}
            <Box component="span" sx={{ color: LOGO.mid }}>
              One account.
            </Box>
          </Typography>
        </Reveal>
      </Box>
      <Box sx={{ position: "relative", display: "grid", gap: 2, maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        {rows.map((r, ri) => (
          <Box key={ri} sx={{ display: "flex", width: "max-content", gap: 2, animation: `marquee ${50 + ri * 8}s linear infinite ${ri ? "reverse" : ""}`, "&:hover": { animationPlayState: "paused" } }}>
            {[...r, ...r].map((b, i) => (
              <Box
                key={`${b.name}-${i}`}
                component={Link}
                href={b.href}
                title={b.name}
                // the second copy only makes the loop seamless: hide it from keyboards and screen readers
                {...(i >= r.length ? { tabIndex: -1, "aria-hidden": true } : {})}
                sx={{
                  width: { xs: 150, md: 200 },
                  height: { xs: 84, md: 104 },
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "18px",
                  overflow: "hidden",
                  bgcolor: BRAND.white,
                  border: `1px solid ${T.border}`,
                  boxShadow: T.shadow,
                  transition: "transform .25s, box-shadow .25s, border-color .25s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: withAlpha(LOGO.top, 0.4) },
                  "& img": { transition: "transform .3s" },
                  "&:hover img": { transform: "scale(1.06)" },
                }}
              >
                <Box component="img" src={b.logo} alt={`${b.name} logo`} loading="lazy" sx={{ display: "block", width: "auto", height: "auto", maxWidth: "68%", maxHeight: { xs: 46, md: 58 }, objectFit: "contain" }} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ───────────────────────── Story: pinned sideways timeline ─────────────────────────
const MILESTONES = [
  { year: "2018", title: "Founded in Bicester", body: "Valvenok was established to solve a problem we experienced firsthand — sourcing quality instrumentation fittings quickly, without minimum orders or long lead times." },
  { year: "2020", title: "JOSCAR Registration", body: "Achieved JOSCAR registration, opening the door to defence and aerospace supply chains and cementing our commitment to compliance and traceability." },
  { year: "2022", title: "Hydrogen-Ready Range", body: "Launched our H₂-ready product line in response to growing demand from the clean energy sector, stocking components rated and tested for hydrogen service." },
  { year: "2024", title: "Expanded Product Range", body: "Broadened our range across fittings, valves, adapters, and instrumentation components, with availability and lead times confirmed on every quotation." },
  { year: "2026", title: "BVAA Membership", body: "Joined the British Valve & Actuator Association, the UK trade body for valve and actuator companies, with membership approved by the BVAA Board." },
];

const STORY_FACTS = [
  { value: "27", label: "Manufacturers, one account" },
  { value: "No", label: "Minimum order quantity" },
  { value: "Free", label: "UK delivery on orders over £150" },
];

function StoryIntro() {
  const body = { fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.7, color: T.body };
  return (
    <Box sx={{ width: { md: 560 }, flexShrink: 0 }}>
      <Eyebrow>Our Story</Eyebrow>
      <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.9rem" }, letterSpacing: "-0.035em", lineHeight: 1.05, color: LOGO.bottom }}>
        From a stock problem to a{" "}
        <Box component="span" sx={{ color: LOGO.top }}>
          stock solution
        </Box>
      </Typography>
      <Typography sx={{ ...body, mt: 3 }}>
        We started Valvenok because we were frustrated. As engineers ourselves, we knew how much time and money was wasted chasing down fittings
        from suppliers who either didn&apos;t hold stock or made you order a minimum of 100 pieces.
      </Typography>
      <Typography sx={{ ...body, mt: 1.5 }}>
        We built a business around one principle: hold the stock, ship it fast, and make the process as frictionless as possible for the people
        actually doing the work.
      </Typography>
      <Typography sx={{ ...body, mt: 1.5 }}>
        Today that means one account for valves, actuators, fittings and instrumentation from 27 manufacturers, with stock and lead times confirmed
        on every quote, backed by JOSCAR registration since 2020 and BVAA membership since 2026.
      </Typography>
      <Box sx={{ mt: 3.5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.25 }}>
        {STORY_FACTS.map(({ value, label }) => (
          <Box key={label} sx={{ p: { xs: 1.25, md: 1.75 }, borderRadius: T.radiusSm, bgcolor: BRAND.white, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box sx={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: LOGO.mid }}>{value}</Box>
            <Box sx={{ mt: 0.75, fontSize: { xs: "0.72rem", md: "0.8rem" }, fontWeight: 500, lineHeight: 1.35, color: T.body }}>{label}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function MilestoneSlide({ m, i, active }: { m: (typeof MILESTONES)[number]; i: number; active: boolean }) {
  return (
    <Box component="li" sx={{ width: { md: 440 }, flexShrink: 0, position: "relative", listStyle: "none" }}>
      <Typography
        aria-hidden
        sx={{
          fontWeight: 800,
          fontSize: { xs: "5rem", md: "9rem" },
          letterSpacing: "-0.06em",
          lineHeight: 0.9,
          transition: "all .5s cubic-bezier(.2,.8,.2,1)",
          ...(active
            ? { background: `linear-gradient(180deg, ${LOGO.top}, ${LOGO.mid})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextStroke: "0px transparent" }
            : outline(withAlpha(LOGO.mid, 0.35), 1.5)),
          transform: active ? "translateY(0)" : "translateY(10px)",
        }}
      >
        {m.year}
      </Typography>
      <Box
        sx={{
          mt: 2.5,
          p: { xs: 2.5, md: 3 },
          borderRadius: "22px",
          bgcolor: withAlpha(BRAND.white, active ? 1 : 0.6),
          backdropFilter: "blur(10px)",
          border: `1px solid ${active ? withAlpha(LOGO.top, 0.35) : T.border}`,
          boxShadow: active ? T.shadowHover : "none",
          transition: "all .5s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: LOGO.top }}>
          {String(i + 1).padStart(2, "0")} / {String(MILESTONES.length).padStart(2, "0")}
        </Box>
        <Typography component="h3" sx={{ mt: 1, fontWeight: 700, fontSize: "1.2rem", color: T.ink }}>
          {m.title}
        </Typography>
        <Typography sx={{ mt: 1, fontSize: "0.96rem", lineHeight: 1.7, color: T.body }}>{m.body}</Typography>
      </Box>
    </Box>
  );
}

const STORY_BG = {
  background: [`radial-gradient(900px 500px at 10% 0%, ${withAlpha(BRAND.white, 0.7)}, transparent 65%)`, LOGO_TINT_GRADIENT].join(", "),
  color: T.ink,
} as const;

function Story() {
  const outer = React.useRef<HTMLDivElement>(null);
  const track = React.useRef<HTMLDivElement>(null);
  const [p, setP] = React.useState(0); // 0 → 1 through the pinned section
  const [dist, setDist] = React.useState(0); // how far the track has to slide

  React.useEffect(() => {
    const measure = () => {
      const t = track.current;
      if (!t) return;
      setDist(Math.max(0, t.scrollWidth - window.innerWidth + 64));
    };
    const onScroll = () => {
      const el = outer.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - (window.innerHeight - HEADER);
      setP(span > 0 ? Math.max(0, Math.min(1, (HEADER - r.top) / span)) : 0);
    };
    measure();
    onScroll();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // which milestone is in focus: the intro takes the first stretch, then one each
  const active = Math.min(MILESTONES.length - 1, Math.floor(Math.max(0, p - 0.12) / (0.88 / MILESTONES.length)));
  const started = p > 0.1;

  return (
    <>
      {/* Desktop: pinned, slides sideways. The tall outer box is the scroll distance. */}
      <Box ref={outer} component="section" aria-label="Our story" sx={{ display: { xs: "none", md: "block" }, position: "relative", height: `calc(100vh + ${dist}px)`, ...STORY_BG }}>
        <Box sx={{ position: "sticky", top: HEADER, height: `calc(100vh - ${HEADER}px)`, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Box aria-hidden sx={{ position: "absolute", inset: 0, ...grid(withAlpha(LOGO.top, 0.09), 40) }} />
          {/* giant faint year behind everything */}
          <Typography aria-hidden sx={{ position: "absolute", right: -20, bottom: -60, fontWeight: 800, fontSize: "26rem", lineHeight: 1, letterSpacing: "-0.06em", ...outline(withAlpha(LOGO.mid, 0.1), 2), pointerEvents: "none", transition: "opacity .4s" }}>
            {started ? MILESTONES[active].year : "VNK"}
          </Typography>
          <Box ref={track} component="ol" sx={{ position: "relative", m: 0, pl: "max(32px, calc((100vw - 1536px) / 2 + 32px))", pr: 8, display: "flex", alignItems: "center", gap: 8, width: "max-content", transform: `translateX(${-p * dist}px)`, willChange: "transform" }}>
            <Box component="li" sx={{ listStyle: "none" }}>
              <StoryIntro />
            </Box>
            {MILESTONES.map((m, i) => (
              <MilestoneSlide key={m.year} m={m} i={i} active={started && i <= active} />
            ))}
          </Box>
          {/* progress rail */}
          <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 32 }}>
            <Box sx={{ ...WRAP, display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flex: 1, height: 3, borderRadius: 2, bgcolor: withAlpha(LOGO.mid, 0.15), position: "relative" }}>
                <Box sx={{ position: "absolute", inset: 0, right: "auto", width: `${p * 100}%`, borderRadius: 2, background: `linear-gradient(90deg, ${LOGO.top}, ${LOGO.mid})` }} />
                {MILESTONES.map((m, i) => {
                  const at = 0.12 + (i * 0.88) / MILESTONES.length;
                  const lit = p >= at;
                  return (
                    <Box key={m.year} sx={{ position: "absolute", left: `${at * 100}%`, top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: lit ? LOGO.mid : BRAND.white, border: `2px solid ${lit ? LOGO.mid : withAlpha(LOGO.mid, 0.35)}`, transition: "all .3s", boxShadow: lit ? `0 0 0 5px ${withAlpha(LOGO.top, 0.2)}` : "none" }} />
                      <Box sx={{ position: "absolute", top: 16, fontSize: "0.72rem", fontWeight: 700, color: lit ? LOGO.bottom : withAlpha(LOGO.bottom, 0.45), transition: "color .3s" }}>{m.year}</Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Phones / tablets: a compact rail — line on the left, year chip, short card */}
      <Box component="section" aria-label="Our story" sx={{ display: { xs: "block", md: "none" }, ...STORY_BG, position: "relative", overflow: "hidden", py: 7 }}>
        <Box aria-hidden sx={{ position: "absolute", inset: 0, ...grid(withAlpha(LOGO.top, 0.09), 28) }} />
        <Box sx={{ ...WRAP, position: "relative" }}>
          <StoryIntro />
          <Box component="ol" sx={{ m: 0, mt: 5, p: 0, listStyle: "none", position: "relative" }}>
            <Box aria-hidden sx={{ position: "absolute", left: 27, top: 12, bottom: 12, width: 2, borderRadius: 1, background: `linear-gradient(180deg, ${LOGO.top}, ${withAlpha(LOGO.top, 0.15)})` }} />
            {MILESTONES.map((m, i) => (
              <Box component="li" key={m.year} sx={{ position: "relative", pl: 9, pb: i === MILESTONES.length - 1 ? 0 : 2.5 }}>
                <Box sx={{ position: "absolute", left: 0, top: 0, width: 56, height: 56, borderRadius: "50%", display: "grid", placeItems: "center", background: BRAND_GRADIENT, border: `2px solid ${BRAND.white}`, boxShadow: `0 0 0 5px ${withAlpha(LOGO.top, 0.18)}`, color: BRAND.white, fontWeight: 800, fontSize: "0.82rem", letterSpacing: "-0.01em" }}>
                  {m.year}
                </Box>
                <Reveal delay={60}>
                  <Box sx={{ p: 2.25, borderRadius: "18px", bgcolor: BRAND.white, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                    <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.05rem", color: T.ink }}>
                      {m.title}
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: "0.88rem", lineHeight: 1.6, color: T.body }}>{m.body}</Typography>
                  </Box>
                </Reveal>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

// ───────────────────────── Values bento ─────────────────────────
const VALUES = [
  { icon: Inventory2OutlinedIcon, title: "Clear Availability", body: "We confirm availability and lead time up front, so you can plan your project with confidence." },
  { icon: BoltOutlinedIcon, title: "No Minimum Order", body: "Single components or full project quantities — no minimum order on standard catalogue items." },
  { icon: VerifiedOutlinedIcon, title: "Traceable Quality", body: "Products are sourced from established manufacturers, with material traceability and certificates available on request for applicable lines." },
  { icon: HandshakeOutlinedIcon, title: "Straight Talking", body: "We're engineers first. We give you straight answers, honest pricing, and no sales runaround." },
];

function ValueTile({ v, i }: { v: (typeof VALUES)[number]; i: number }) {
  const Icon = v.icon;
  return (
    <Box
      sx={{
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        p: { xs: 3, md: 3.5 },
        borderRadius: "24px",
        bgcolor: BRAND.white,
        border: `1px solid ${T.border}`,
        boxShadow: T.shadow,
        transition: "transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s",
        "&::before": { content: '""', position: "absolute", inset: 0, ...grid(withAlpha(LOGO.top, 0.07), 20), maskImage: "linear-gradient(225deg, black 0%, transparent 55%)", WebkitMaskImage: "linear-gradient(225deg, black 0%, transparent 55%)", pointerEvents: "none" },
        "&:hover": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: withAlpha(LOGO.top, 0.4) },
        "&:hover .vt-icon": { transform: "rotate(-8deg) scale(1.08)" },
        "&:hover .vt-num": { WebkitTextStroke: `1.5px ${LOGO.top}` },
      }}
    >
      <Box className="vt-num" aria-hidden sx={{ position: "absolute", right: 20, top: 8, fontSize: "4.5rem", fontWeight: 800, letterSpacing: "-0.05em", ...outline(withAlpha(LOGO.top, 0.3), 1.5), transition: "all .3s" }}>
        {String(i + 1).padStart(2, "0")}
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box className="vt-icon" sx={{ width: 56, height: 56, borderRadius: "18px", background: BRAND_GRADIENT, color: BRAND.white, display: "grid", placeItems: "center", boxShadow: `0 10px 24px -10px ${withAlpha(LOGO.mid, 0.7)}`, transition: "transform .35s cubic-bezier(.2,.8,.2,1.4)" }}>
          <Icon />
        </Box>
        <Typography component="h3" sx={{ mt: 2.5, fontWeight: 700, fontSize: "1.18rem", color: T.ink }}>
          {v.title}
        </Typography>
        <Typography sx={{ mt: 1, fontSize: "0.96rem", lineHeight: 1.7, color: T.body }}>{v.body}</Typography>
      </Box>
    </Box>
  );
}

function Values() {
  return (
    <Box component="section" sx={{ ...WRAP, py: { xs: 6, md: 11 }, pb: { xs: 2, md: 11 } }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1.25fr 1fr 1fr" }, gridTemplateRows: { lg: "1fr 1fr" }, gap: 2.5 }}>
        {/* big photo tile */}
        {/* phones: a light heading instead of the photo tile */}
        <Box sx={{ display: { xs: "block", sm: "none" }, mb: 0.5 }}>
          <Eyebrow>What We Stand For</Eyebrow>
          <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, fontSize: "2.1rem", letterSpacing: "-0.035em", lineHeight: 1.05, color: LOGO.bottom }}>
            Our{" "}
            <Box component="span" sx={{ color: LOGO.top }}>
              values
            </Box>
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "1rem", color: T.body }}>We&apos;re engineers first.</Typography>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" }, gridRow: { lg: "1 / span 2" }, gridColumn: { sm: "1 / -1", lg: "auto" } }}>
          <Reveal from="left">
            <Box sx={{ position: "relative", height: "100%", minHeight: { sm: 360, lg: 560 }, borderRadius: "28px", overflow: "hidden", color: BRAND.white, "&:hover img": { transform: "scale(1.06)" } }}>
              <Image src={VALUES_IMG} alt="Stainless steel instrumentation fittings" fill sizes="(max-width: 1200px) 100vw, 40vw" style={{ objectFit: "cover", transition: "transform 1.2s cubic-bezier(.2,.8,.2,1)" }} />
              <Box aria-hidden sx={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${withAlpha(LOGO.bottom, 0.2)} 0%, ${withAlpha(LOGO.bottom, 0.55)} 45%, ${withAlpha(LOGO.bottom, 0.95)} 100%)` }} />
              <Box aria-hidden sx={{ position: "absolute", right: -120, top: -120, width: 360, height: 360, borderRadius: "50%", background: `repeating-radial-gradient(circle, transparent 0 28px, ${withAlpha(BRAND.white, 0.12)} 28px 29.5px, transparent 29.5px 46px)`, maskImage: "radial-gradient(circle, black 30%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)" }} />
              <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0, p: { xs: 3, md: 4.5 } }}>
                <Eyebrow dark>What We Stand For</Eyebrow>
                <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.4rem", md: "3.4rem" }, letterSpacing: "-0.04em", lineHeight: 1, color: BRAND.white }}>
                  Our{" "}
                  <Box component="span" sx={{ color: AQUA.mist }}>
                    values
                  </Box>
                </Typography>
                <Typography sx={{ mt: 2, fontSize: "1.05rem", lineHeight: 1.6, color: withAlpha(BRAND.white, 0.8), maxWidth: 420 }}>
                  We&apos;re engineers first.
                </Typography>
              </Box>
            </Box>
          </Reveal>
        </Box>
        {/* phones: the four values swipe sideways; from sm up they sit in the bento grid */}
        <Box sx={{ display: { xs: "block", sm: "contents" }, minWidth: 0 }}>
          <Box sx={{ ...swipeRow({}, 2), display: { xs: "flex", sm: "contents" } }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 110}>
                <ValueTile v={v} i={i} />
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ───────────────────────── CTA ─────────────────────────
function Cta() {
  return (
    <Box component="section" sx={{ ...WRAP, pb: { xs: 8, md: 11 } }}>
      <Reveal from="zoom">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "32px",
            p: { xs: 4, md: 7 },
            background: LOGO_SOFT_GRADIENT,
            boxShadow: `0 30px 60px -30px ${withAlpha(LOGO.mid, 0.55)}`,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box aria-hidden sx={{ position: "absolute", inset: 0, ...grid(withAlpha(BRAND.white, 0.04), 32) }} />
          <Blob color={withAlpha(LOGO.top, 0.35)} sx={{ right: -120, top: -160, width: 360, height: 360 }} />
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Eyebrow dark>Ready to Order?</Eyebrow>
            <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "2.1rem", md: "2.9rem" }, letterSpacing: "-0.03em", lineHeight: 1.08, color: BRAND.white }}>
              Valves. Fittings. Instrumentation.{" "}
              <Box component="span" sx={{ color: AQUA.mist }}>
                UK Support.
              </Box>
            </Typography>
            <Typography sx={{ mt: 2.5, fontSize: "1.05rem", lineHeight: 1.75, color: withAlpha(BRAND.white, 0.8), maxWidth: 560 }}>
              Browse our full catalogue of SS316 fittings, valves, and instrumentation components — or use Quick Order if you already know your
              part numbers.
            </Typography>
          </Box>
          <Box sx={{ position: "relative", zIndex: 1, display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: { md: "flex-end" } }}>
            <PillButton href="/categories" variant="glow">
              Browse Products
            </PillButton>
            <PillButton href="/quick-order" variant="ghostDark">
              Quick Order
            </PillButton>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}

export default function AboutModern({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        ...textReset,
        ...KF,
        // teal pulse instead of the shared green one
        "@keyframes pulseRing": { "0%": { boxShadow: `0 0 0 0 ${withAlpha(LOGO.top, 0.45)}` }, "100%": { boxShadow: `0 0 0 14px ${withAlpha(LOGO.top, 0)}` } },
        bgcolor: BRAND.white,
        overflowX: "clip",
        "@media (prefers-reduced-motion: reduce)": { "& *": { animation: "none !important", transition: "none !important" } },
      }}
    >
      <Hero />
      <Marquee />
      <LogoWall />
      <Story />
      <Values />
      {children}
      <Cta />
    </Box>
  );
}
