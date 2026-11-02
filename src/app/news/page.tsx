"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import SEOButtons from "../about/SEOButtons";
import { T, textReset } from "../Landing/modern/tokens";
import { Eyebrow } from "../Landing/modern/SectionHeader";
import { POSTS, type Post } from "./posts";



const WRAP = { width: "100%", boxSizing: "border-box", maxWidth: 1280, mx: "auto", px: { xs: 2, md: 4 } } as const;

// Topics for the scrolling band, taken from the subjects the articles cover.
const TOPICS = [
  "Valve actuators",
  "Actuator sizing",
  "Butterfly valves",
  "Ball valves",
  "Gate valves",
  "Hydrogen fittings",
  "Mechanical seals",
  "Agitator seals",
  "Submersible pumps",
  "UK stockist",
  "Mars valves",
  "Manufacturer partnerships",
];

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: none; }
`;
const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <Box
      component="span"
      className="tag"
      sx={{
        display: "inline-block",
        px: 1.1,
        py: 0.35,
        borderRadius: 999,
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase !important",
        bgcolor: light ? "rgba(255,255,255,0.16)" : T.greenSoft,
        color: light ? "#fff" : T.greenDark,
        border: light ? "1px solid rgba(255,255,255,0.25)" : "none",
      }}
    >
      {children}
    </Box>
  );
}

function ArrowDot({ light = false }: { light?: boolean }) {
  return (
    <Box
      className="arrow"
      sx={{
        flexShrink: 0,
        width: 34,
        height: 34,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        bgcolor: light ? "#fff" : T.greenSoft,
        color: T.greenDark,
        transition: "all .25s ease",
      }}
    >
      <ArrowOutwardRoundedIcon sx={{ fontSize: 17 }} />
    </Box>
  );
}

const cardBase = {
  position: "relative",
  display: "flex",
  bgcolor: "#fff",
  border: `1px solid ${T.border}`,
  borderRadius: "22px",
  overflow: "hidden",
  textDecoration: "none",
  transition: "transform .3s ease, box-shadow .3s ease",
  "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover },
  "&:hover .thumb": { transform: "scale(1.05)" },
  "&:hover .arrow": { bgcolor: T.green, color: T.greenDeep, transform: "rotate(45deg)" },
} as const;

// Product cut-outs, logos and diagrams (PNG/WebP/SVG, or anything under /brands/)
// are shown whole on white; photos fill the frame.
const isCutout = (src: string) => /\.(png|webp|svg)(\?|$)/i.test(src) || src.includes("/brands/");

function Img({ post }: { post: Post }) {
  const contain = isCutout(post.thumbnail);
  const fill = { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" } as const;
  // Fills its (position: relative) frame. Nothing is ever cropped: cut-outs sit on white,
  // banners and photos sit on a blurred copy of themselves so the frame still looks full.
  return (
    <Box className="thumb" sx={{ ...fill, overflow: "hidden", bgcolor: contain ? "#fff" : T.greenDeep, transition: "transform .6s ease" }}>
      {!contain && (
        <Box
          component="img"
          src={post.thumbnail}
          alt=""
          aria-hidden
          loading="lazy"
          sx={{ ...fill, objectFit: "cover", filter: "blur(18px) saturate(1.1)", transform: "scale(1.25)", opacity: 0.85 }}
        />
      )}
      <Box
        component="img"
        src={post.thumbnail}
        alt={post.title}
        loading="lazy"
        sx={{ ...fill, objectFit: "contain", p: contain ? { xs: 1.5, md: 2 } : 0, boxSizing: "border-box" }}
      />
    </Box>
  );
}

// Large lead card: picture on top, green panel with the story below.
function LeadCard({ post }: { post: Post }) {
  return (
    <Box component={Link} href={post.link} sx={{ ...cardBase, flexDirection: "column", border: 0, boxShadow: "0 24px 50px -24px rgba(18,61,23,0.45)" }}>
      <Box sx={{ position: "relative", height: { xs: 220, md: 290 }, overflow: "hidden", bgcolor: T.greenSoft }}>
        <Img post={post} />
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            px: 1.25,
            py: 0.4,
            borderRadius: 999,
            bgcolor: T.ink,
            color: "#fff",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase !important",
          }}
        >
          <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: T.green }} />
          Latest
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
          p: { xs: 3, md: 3.5 },
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${T.greenDark} 0%, #1F6B1A 55%, ${T.greenDeep} 100%)`,
        }}
      >
        <Box
          aria-hidden
          sx={{ position: "absolute", right: -70, bottom: -110, width: 260, height: 260, borderRadius: "50%", border: "28px solid rgba(255,255,255,0.06)" }}
        />
        <Box sx={{ position: "relative" }}>
          <Tag light>{post.category}</Tag>
          <Typography component="h3" sx={{ mt: 1.5, fontWeight: 700, fontSize: { xs: "1.45rem", md: "1.75rem" }, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#fff" }}>
            {post.title}
          </Typography>
          <Typography
            sx={{
              mt: 1.25,
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.82)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.desc}
          </Typography>
        </Box>
        <Box sx={{ position: "relative", mt: "auto", pt: 2.5, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <Box sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>
            <Box component="span" sx={{ display: "block", fontWeight: 700, color: "#fff" }}>
              {post.author}
            </Box>
            {post.date}
          </Box>
          <ArrowDot light />
        </Box>
      </Box>
    </Box>
  );
}

// Wide card: picture left, text right.
function WideCard({ post }: { post: Post }) {
  return (
    <Box component={Link} href={post.link} sx={{ ...cardBase, flexDirection: { xs: "column", sm: "row" } }}>
      <Box sx={{ position: "relative", width: { xs: "100%", sm: "44%" }, height: { xs: 190, sm: "auto" }, minHeight: { sm: 200 }, flexShrink: 0, overflow: "hidden", bgcolor: T.greenSoft }}>
        <Img post={post} />
      </Box>
      <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box>
          <Tag>{post.category}</Tag>
        </Box>
        <Typography component="h3" sx={{ mt: 1.25, fontWeight: 700, fontSize: "1.08rem", lineHeight: 1.3, color: T.ink }}>
          {post.title}
        </Typography>
        <Typography
          sx={{ mt: 1, fontSize: "0.86rem", lineHeight: 1.55, color: T.body, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {post.desc}
        </Typography>
        <Box sx={{ mt: "auto", pt: 2, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem", color: T.muted }}>
          {post.date}
          <ArrowDot />
        </Box>
      </Box>
    </Box>
  );
}

// Small card: picture on top, title below.
function SmallCard({ post }: { post: Post }) {
  return (
    <Box component={Link} href={post.link} sx={{ ...cardBase, flexDirection: "column" }}>
      <Box sx={{ position: "relative", flex: 1, minHeight: 130, overflow: "hidden", bgcolor: T.greenSoft }}>
        <Img post={post} />
      </Box>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.35, color: T.ink }}>
          {post.title}
        </Typography>
        <Box sx={{ mt: "auto", pt: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem", color: T.muted }}>
          {post.date}
          <ArrowDot />
        </Box>
      </Box>
    </Box>
  );
}

// Numbered list row: big outlined number, text, picture on the right.
function Row({ post, n, i }: { post: Post; n: number; i: number }) {
  return (
    <Box
      component={Link}
      href={post.link}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 180px", md: "96px 1fr 220px" },
        alignItems: "center",
        gap: { xs: 2, md: 3 },
        position: "relative",
        py: { xs: 3, md: 3.5 },
        px: { xs: 2, md: 2.5 },
        borderBottom: `1px solid ${T.border}`,
        borderRadius: 0,
        textDecoration: "none",
        transition: "background-color .25s, box-shadow .25s, border-radius .25s",
        animation: `${rise} .55s ${Math.min(i, 8) * 0.05}s ease both`,
        // Green accent bar on the left, revealed on hover
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 14,
          bottom: 14,
          width: 4,
          borderRadius: 4,
          bgcolor: T.green,
          transform: "scaleY(0)",
          transition: "transform .25s ease",
        },
        "&:hover": {
          bgcolor: T.greenSoft,
          borderRadius: "18px",
          borderBottomColor: "transparent",
          boxShadow: "0 12px 30px -16px rgba(46,139,30,0.45)",
        },
        "&:hover::before": { transform: "scaleY(1)" },
        "&:hover .num": { color: T.green, WebkitTextStroke: `1.5px ${T.green}` },
        "&:hover .title": { color: T.greenDark },
        "&:hover .thumb": { transform: "scale(1.05)" },
        "&:hover .read": { color: T.greenDark },
        "&:hover .tag": { bgcolor: "#fff" },
        "&:hover .read svg": { transform: "translateX(4px)" },
      }}
    >
      <Box
        className="num"
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          fontSize: "3.75rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1.5px #C9D6CC",
          transition: "color .25s, -webkit-text-stroke-color .25s",
        }}
      >
        {String(n).padStart(2, "0")}
      </Box>
      <Box sx={{ order: { xs: 2, sm: 0 } }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, fontSize: "0.8rem", color: T.muted }}>
          <Tag>{post.category}</Tag>
          <span>{post.date}</span>
          <Box component="span" sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: T.muted }} />
          <span>{post.author}</span>
        </Box>
        <Typography className="title" component="h3" sx={{ mt: 1.25, fontWeight: 700, fontSize: { xs: "1.15rem", md: "1.35rem" }, lineHeight: 1.3, letterSpacing: "-0.015em", color: T.ink, transition: "color .2s" }}>
          {post.title}
        </Typography>
        <Typography sx={{ mt: 1, fontSize: "0.93rem", lineHeight: 1.65, color: T.body, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {post.desc}
        </Typography>
        <Box className="read" sx={{ mt: 1.5, display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.88rem", fontWeight: 600, color: T.ink, transition: "color .2s", "& svg": { transition: "transform .2s" } }}>
          Read article <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: { xs: 190, sm: 130, md: 140 }, borderRadius: "16px", overflow: "hidden", bgcolor: T.greenSoft, border: `1px solid ${T.border}` }}>
        <Img post={post} />
      </Box>
    </Box>
  );
}

function SectionTitle({ title, aside }: { title: string; aside: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 2, mb: 3 }}>
      <Typography component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.03em", color: T.ink }}>
        {title}
      </Typography>
      <Box component="span" sx={{ fontSize: "0.85rem", color: T.muted, whiteSpace: "nowrap" }}>
        {aside}
      </Box>
    </Box>
  );
}

// Same three paragraphs as before, split into cards; topic names link to the articles.
const ABOUT = [
  {
    icon: CampaignOutlinedIcon,
    title: "Who we are",
    body: (
      <>
        This is where Valvenok Ltd publishes technical guides, buyer&apos;s advice and company news. Valvenok is a UK
        supplier and distributor of industrial valves, fittings, actuators and instrumentation from established
        manufacturers.
      </>
    ),
  },
  {
    icon: MenuBookOutlinedIcon,
    title: "Technical guides",
    body: (
      <>
        Our technical guides cover <Link href="/news/how-to-choose-a-valve-actuator">choosing a valve actuator</Link>{" "}
        (electric, pneumatic, hydraulic or manual),{" "}
        <Link href="/news/butterfly-valve-guide">butterfly valve instrumentation and connection packages</Link>, the{" "}
        <Link href="/news/ball-valve-vs-gate-valve">differences between ball valves and gate valves</Link>,{" "}
        <Link href="/news/instrumentation-fittings-hydrogen-leak-tight-threads">leak-tight thread practice for hydrogen instrumentation fittings</Link>,
        and pumps and <Link href="/news/mechanical-seals-guide">mechanical seals</Link>, including{" "}
        <Link href="/news/seals-blog">agitator seals</Link> and{" "}
        <Link href="/news/stainless-steel-vs-cast-iron">submersible pump selection</Link>.
      </>
    ),
  },
  {
    icon: HandshakeOutlinedIcon,
    title: "Buyer's advice & company news",
    body: (
      <>
        For buyers, our <Link href="/news/uk-valve-stockist">guide to buying from a UK stockist</Link> covers lead times,
        minimum order quantities and how to check a supplier. Company news includes our partnership announcements with{" "}
        <Link href="/news/valvenok-vsi-atlas-sscv-partnership">Valve Systems International (VSI)</Link>,{" "}
        <Link href="/news/pietro-fiorentini-partnership">Pietro Fiorentini</Link>,{" "}
        <Link href="/news/valvenok-kosa-plus-partnership">Kosa Plus</Link> and{" "}
        <Link href="/news/mars-valve-partnership">Mars Valves</Link>, and an{" "}
        <Link href="/news/manufacturer-spotlight">overview of the manufacturers whose products we supply</Link>.
      </>
    ),
  },
];

export default function BlogPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const browsing = active === "All";
  const [lead, wide, smallA, smallB, ...rest] = POSTS;
  const list = browsing ? rest : POSTS.filter((p) => p.category === active);
  const numberFrom = browsing ? 5 : 1;

  return (
    <Box sx={{ ...textReset, bgcolor: "#FAFCFA", minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          background: `radial-gradient(900px 380px at 50% 0%, ${T.greenSoft} 0%, rgba(238,249,234,0) 70%), linear-gradient(180deg, #F3FAF0 0%, #FAFCFA 100%)`,
        }}
      >
        {/* Watermark word */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: 36, md: 28 },
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "5rem", sm: "8rem", md: "12rem" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            whiteSpace: "nowrap",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(46,139,30,0.10)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          INSIGHTS
        </Box>
        <Box sx={{ ...WRAP, position: "relative", pt: { xs: 7, md: 9 }, pb: { xs: 5, md: 6 }, animation: `${rise} .6s ease both` }}>
          <Eyebrow>News &amp; Blog</Eyebrow>
          <Typography
            component="h1"
            sx={{ mt: 2.5, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02, fontSize: { xs: "2.6rem", md: "4.25rem" }, color: T.ink }}
          >
            Engineering{" "}
            <Box component="span" sx={{ color: T.greenDark }}>
              Insights
            </Box>
          </Typography>
          <Typography sx={{ mt: 2.25, mx: "auto", maxWidth: 620, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.7, color: T.body }}>
            Technical guides, buyer&apos;s advice and company news from
            Valvenok, a UK supplier of industrial valves, fittings and flow
            control equipment.
          </Typography>

          {/* Category filter */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1 }}>
            {categories.map((c) => {
              const on = c === active;
              const count = c === "All" ? POSTS.length : POSTS.filter((p) => p.category === c).length;
              return (
                <Box
                  key={c}
                  component="button"
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={on}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    px: 1.75,
                    height: 38,
                    borderRadius: 999,
                    border: `1px solid ${on ? T.ink : T.border}`,
                    bgcolor: on ? T.ink : "#fff",
                    color: on ? "#fff" : T.ink,
                    fontSize: "0.86rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .2s",
                    "&:hover": on ? {} : { borderColor: "#BFE3B4", bgcolor: T.greenSoft },
                  }}
                >
                  {c === "All" ? "All articles" : c}
                  <Box
                    component="span"
                    sx={{
                      minWidth: 22,
                      height: 20,
                      px: 0.6,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      bgcolor: on ? T.green : T.surface,
                      color: on ? T.greenDeep : T.muted,
                    }}
                  >
                    {count}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* ── Topic band ── */}
      <Box
        aria-hidden
        sx={{
          overflow: "hidden",
          py: 1.4,
          background: `linear-gradient(90deg, ${T.greenDeep} 0%, ${T.greenDark} 50%, ${T.greenDeep} 100%)`,
          "&:hover .track": { animationPlayState: "paused" },
        }}
      >
        <Box className="track" sx={{ display: "flex", width: "max-content", animation: `${marquee} 45s linear infinite` }}>
          {[...TOPICS, ...TOPICS].map((t, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3, pr: 3, whiteSpace: "nowrap", fontSize: "0.88rem", fontWeight: 600, color: "#fff" }}>
              {t}
              <Box component="span" sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: T.green }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Fresh off the press ── */}
      {browsing && (
        <Box sx={{ ...WRAP, pt: { xs: 6, md: 9 } }}>
          <SectionTitle title="Fresh off the press" aside="Our newest articles" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 2.5 },
              animation: `${rise} .6s .1s ease both`,
            }}
          >
            <LeadCard post={lead} />
            <Box sx={{ display: "grid", gridTemplateRows: { md: "auto 1fr" }, gap: { xs: 2, md: 2.5 } }}>
              <WideCard post={wide} />
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 2, md: 2.5 } }}>
                <SmallCard post={smallA} />
                <SmallCard post={smallB} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* ── Latest list ── */}
      <Box sx={{ ...WRAP, pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 9 } }}>
        <SectionTitle
          title={browsing ? "Latest News & Insights" : active}
          aside={`${list.length} ${browsing ? "more " : ""}${list.length === 1 ? "article" : "articles"}`}
        />
        <Box key={active} sx={{ borderTop: `2px solid ${T.ink}` }}>
          {list.map((post, i) => (
            <Row key={post.link} post={post} n={numberFrom + i} i={i} />
          ))}
        </Box>
      </Box>

      {/* ── About our updates (crawlable summary of what the blog covers) ── */}
      <Box sx={{ ...WRAP, pb: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Eyebrow>About</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" }, letterSpacing: "-0.03em", lineHeight: 1.1, color: T.ink }}>
            About Our Updates
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.5 } }}>
          {ABOUT.map(({ icon: Icon, title, body }, i) => (
            <Box
              key={title}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3, md: 3.5 },
                borderRadius: "22px",
                bgcolor: i === 0 ? undefined : "#fff",
                background: i === 0 ? `linear-gradient(150deg, ${T.greenDeep} 0%, #1F6B1A 100%)` : undefined,
                border: i === 0 ? "none" : `1px solid ${T.border}`,
                color: i === 0 ? "#fff" : T.ink,
                transition: "transform .3s ease, box-shadow .3s ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover },
              }}
            >
              {i === 0 && (
                <Box aria-hidden sx={{ position: "absolute", right: -60, bottom: -80, width: 200, height: 200, borderRadius: "50%", border: "24px solid rgba(255,255,255,0.06)" }} />
              )}
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: i === 0 ? "rgba(97,214,73,0.18)" : T.greenSoft,
                  color: i === 0 ? T.green : T.greenDark,
                }}
              >
                <Icon />
              </Box>
              <Typography component="h3" sx={{ mt: 2.5, fontWeight: 700, fontSize: "1.15rem", color: "inherit" }}>
                {title}
              </Typography>
              <Typography
                sx={{
                  position: "relative",
                  mt: 1.25,
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: i === 0 ? "rgba(255,255,255,0.8)" : T.body,
                  "& a": {
                    color: i === 0 ? "#fff" : T.greenDark,
                    fontWeight: 600,
                    textDecoration: "underline",
                    textDecorationColor: i === 0 ? "rgba(255,255,255,0.4)" : "rgba(46,139,30,0.35)",
                    textUnderlineOffset: "3px",
                    transition: "text-decoration-color .2s",
                    "&:hover": { textDecorationColor: "currentColor" },
                  },
                }}
              >
                {body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <SEOButtons />
    </Box>
  );
}
