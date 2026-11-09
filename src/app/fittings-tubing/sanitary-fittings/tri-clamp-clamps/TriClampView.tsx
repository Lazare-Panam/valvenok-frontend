"use client";

// Tri-Clamp Clamps: category page under Fittings & Tubing › Sanitary Fittings,
// in the same format as Needle Valves. Compares the two clamp types and finds
// the part code for a line size. Full size lists come on the model list page.
// Every figure is from the Adaptix datasheets.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { FAQ } from "@/src/app/news/components/Article";
import { SERIES, SAN_BASE, SAN_HERO_IMG, SAN_BRAND, SAN_BRAND_LOGO } from "../data";
import { CLAMP_BASE, MODELS_LIVE } from "./clamps";

/** Link to the model pages once they are live; until then a plain, non-clickable box */
const ModelLink = ({ href, sx, children, ...rest }: { href: string; sx: object; children: React.ReactNode; [k: string]: unknown }) =>
  MODELS_LIVE ? <Box component={Link} href={href} sx={sx} {...rest}>{children}</Box> : <Box sx={{ ...sx, cursor: "default", "&:hover": {}, transform: "none !important" }} {...rest}>{children}</Box>;

const SINGLE = SERIES.find((s) => s.slug === "single-pin-tri-clamp")!;
const DOUBLE = SERIES.find((s) => s.slug === "double-bolted-clamp")!;
const MODELS = SINGLE.rows.length + DOUBLE.rows.length;

type Type = {
  key: "single" | "double";
  name: string;
  code: string;
  img: string;
  note: string;
  pressure: string;
  maxBar: number;
  closes: string;
  options: string;
  width: string;
  sizes: number;
};

const TYPES: Type[] = [
  {
    key: "single",
    name: "Single pin heavy-duty clamp",
    code: "S type",
    img: SINGLE.img!,
    note: "A hinged clamp closed with a wing nut. Suitable for all tri-clamp ferrules at high operating pressures.",
    pressure: "9–50 bar at 150 °C",
    maxBar: 50,
    closes: "Wing nut",
    options: "Different wing nuts available",
    width: "T 5.6–20 mm",
    sizes: SINGLE.rows.length,
  },
  {
    key: "double",
    name: "Double-bolted heavy-duty clamp",
    code: "SSH type",
    img: DOUBLE.img!,
    note: "Two bolts in place of the hinge and wing nut, tightened with a tool. Suitable for all tri-clamp ferrules at high operating pressures.",
    pressure: "9–18 bar",
    maxBar: 18,
    closes: "Two bolts, tightened with a tool",
    options: "Stainless steel A2 or brass nuts",
    width: "W 16–30 mm",
    sizes: DOUBLE.rows.length,
  },
];

const SPECS: [string, string][] = [
  ["Types", "Single pin, double-bolted"],
  ["Sizes", "DN 6 – DN 300"],
  ["Standards", "ISO 2852, DIN 32676, BS 4825"],
  ["Material", "304 standard, 316L, duplex"],
  ["Working", "Up to 50 bar"],
  ["Test", "18 – 100 bar"],
];


// Size finder: one entry per clamp size, labelled the way buyers usually know it
type Size = { a: string; label: string; iso: string; din: string; bs: string; single: string; t: string; double: string; w: string };
const SIZES: Size[] = SINGLE.rows.map((r, i) => {
  const d = DOUBLE.rows[i];
  const [part, iso, din, bs, a, t] = r;
  const label = bs !== "–" ? bs : din !== "–" ? din : iso;
  return { a, label, iso, din, bs, single: part, t, double: d[0], w: d[5] };
});

const FAQS = [
  { q: "Single pin or double-bolted clamp?", a: "The single pin clamp is hinged and closes with a wing nut. The double-bolted clamp uses two bolts tightened with a tool. Both suit all tri-clamp ferrules at high operating pressures; check the working pressure for your size." },
  { q: "How do I find the right clamp size?", a: "Match the clamp to the ferrule flange diameter (A). The size finder above shows the clamp diameter and the equivalent ISO 2852, DIN 32676 and BS 4825 sizes, with the part code for each clamp type." },
  { q: "Which materials are the clamps made in?", a: "The standard material is stainless steel 1.4301 (304). 316L, 316, 304L and duplex are also available, and other materials on request." },
  { q: "Do the clamps come with a certificate?", a: "Yes. Every delivery comes with an EN 10204 3.1 material certificate, and each clamp is cast with the maker’s name or logo, size, heat number and material grade." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function BrandTag({ h = 14 }: { h?: number }) {
  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
      <Box component="img" src={SAN_BRAND_LOGO} alt={SAN_BRAND} sx={{ height: h, width: "auto", display: "block", mixBlendMode: "multiply" }} />
    </Box>
  );
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #EAF4FF 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Kicker>Sanitary fittings</Kicker>
            <Box sx={{ mb: 1.5 }}><BrandTag /></Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Tri-clamp" />
            <Words text="clamps" start={200} sx={gradientText} />
          </Box>
          <Lead>
            The clamp closes round two ferrule flanges with a gasket between them and holds the joint tight. Two types from {SAN_BRAND}, single pin and double-bolted, in {MODELS} sizes from DN 6 to DN 300.
          </Lead>
          <Box component="dl" sx={{ m: 0, mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1, "& > div": { p: 1.5, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}` }, "& dt": { fontSize: "0.72rem", fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }, "& dd": { m: 0, mt: 0.25, fontSize: "0.88rem", fontWeight: 700, color: T.ink, lineHeight: 1.35 } }}>
            {SPECS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr", gap: 1.25, mt: 3.5 }}>
            <ModelLink href={`${CLAMP_BASE}/products`} aria-disabled={!MODELS_LIVE} sx={{ ...pillBtn(true), justifyContent: "center", ...(!MODELS_LIVE && { opacity: 0.55, pointerEvents: "none" }) }}>
              View all {MODELS} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </ModelLink>
            <Box component="a" href="#size" sx={{ ...pillBtn(false), justifyContent: "center" }}>
              Find my size
            </Box>
          </Box>
        </Box>
        <Reveal from="right">
          <Box component="figure" sx={{ m: 0, borderRadius: "28px", overflow: "hidden", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box component="img" src={SAN_HERO_IMG} alt="Adaptix single pin tri-clamps in five sizes" sx={{ width: "100%", aspectRatio: "16 / 11", objectFit: "cover", display: "block" }} />
            <Box component="figcaption" sx={{ px: 2.5, py: 1.5, fontSize: "0.85rem", color: T.body }}>Single pin heavy-duty tri-clamps in five sizes</Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Types() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Kicker>Clamp types</Kicker>
        <H2 id="h2-types">Two types of clamp</H2>
        <Lead>Both fit every tri-clamp ferrule. The difference is how they close and the working pressure.{MODELS_LIVE ? " Each one opens its models." : ""}</Lead>
        <Box sx={{ display: "grid", gap: 1.5, mt: 3.5 }}>
          {TYPES.map((t, i) => (
            <Reveal key={t.key} delay={i * 60}>
              <ModelLink
                href={`${CLAMP_BASE}/products?type=${t.key}`}
                sx={{
                  textDecoration: "none",
                  transition: "all .2s",
                  "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-2px)" },
                  "&:hover .arr": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                  display: "grid",
                  gridTemplateColumns: { xs: "84px 1fr 32px", md: "120px 1.4fr 1.2fr 1fr 40px" },
                  gap: { xs: 1.5, md: 3 },
                  alignItems: "center",
                  p: { xs: 1.75, md: 2.25 },
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  border: `1px solid ${T.border}`,
                }}
              >
                <Box sx={{ width: { xs: 84, md: 120 }, height: { xs: 84, md: 120 }, borderRadius: "16px", bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={t.img} alt={t.name} sx={{ width: "86%", height: "86%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5, flexWrap: "wrap" }}>
                    <BrandTag h={12} />
                    <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{t.code} · {t.sizes} sizes</Box>
                  </Box>
                  <Box sx={{ fontSize: { xs: "1.02rem", md: "1.2rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{t.name}</Box>
                  <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.5, mt: 0.5, display: { xs: "none", sm: "block" } }}>{t.note}</Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, fontSize: "0.82rem" }}>
                    <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{t.pressure}</Box>
                    <Box component="span" sx={{ color: T.muted }}>working</Box>
                  </Box>
                  <Box sx={{ height: 10, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                    <Box sx={{ height: "100%", width: `${(t.maxBar / 50) * 100}%`, borderRadius: 999, background: `linear-gradient(90deg, #B8EAA8, ${T.green})` }} />
                  </Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {[t.closes, t.options].map((x) => (
                    <Box key={x} component="span" sx={{ px: 1, py: 0.35, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.76rem", fontWeight: 600, color: T.body }}>{x}</Box>
                  ))}
                </Box>
                <Box className="arr" sx={{ visibility: MODELS_LIVE ? "visible" : "hidden", gridColumn: { xs: 3, md: "auto" }, gridRow: { xs: 1, md: "auto" }, width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .2s" }}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              </ModelLink>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const DIFF: { icon: React.ReactNode; label: string; get: (t: Type) => string }[] = [
  { icon: <LockOutlinedIcon />, label: "Closes with", get: (t) => t.closes },
  { icon: <StraightenRoundedIcon />, label: "Clamp size", get: (t) => (t.key === "single" ? "Thickness T 5.6–20 mm" : "Width W 16–30 mm") },
  { icon: <TuneOutlinedIcon />, label: "Options", get: (t) => t.options },
];
const BOTH: [string, string][] = [
  ["Sizes", "19 each, DN 6–DN 300"],
  ["Test pressure", "18–100 bar"],
  ["Finish", "Mechanical, electro or mirror polished"],
  ["Fits", "All tri-clamp ferrules"],
];

function Compare() {
  const [ref, on] = useInView<HTMLDivElement>(0.2);
  const tint = (i: number) => (i === 0 ? { bg: T.greenSoft, fg: T.greenDark, line: "#CFEBC6", head: "#FFFFFF" } : { bg: "#EAF4FF", fg: "#2F5E9E", line: "#CFE0F5", head: "#FFFFFF" });
  return (
    <Box component="section" aria-labelledby="h2-compare" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 720 }}>
          <Kicker>Compare</Kicker>
          <H2 id="h2-compare">Single pin or double-bolted?</H2>
          <Lead>Same sizes and finish. They differ in how they close and how much pressure they take.</Lead>
        </Box>
        <Box ref={ref} sx={{ position: "relative", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 2, md: 4 } }}>
          {/* vs badge */}
          <Box aria-hidden sx={{ display: { xs: "none", sm: "grid" }, position: "absolute", zIndex: 2, left: "50%", top: { sm: 190, md: 230 }, transform: "translate(-50%, -50%)", width: 52, height: 52, borderRadius: "50%", bgcolor: T.ink, color: "#fff", placeItems: "center", fontWeight: 800, fontSize: "0.9rem", boxShadow: "0 8px 20px -6px rgba(14,27,18,0.4)", border: "4px solid #fff" }}>vs</Box>
          {TYPES.map((t, i) => {
            const c = tint(i);
            return (
              <Reveal key={t.key} delay={i * 100}>
                <Box sx={{ height: "100%", boxSizing: "border-box", borderRadius: "26px", bgcolor: "#fff", border: `1.5px solid ${c.line}`, boxShadow: T.shadow, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ position: "relative", height: { xs: 190, md: 230 }, background: c.head, display: "grid", placeItems: "center", borderBottom: `4px solid ${c.bg}` }}>
                    <Box sx={{ width: { xs: 150, md: 180 }, height: { xs: 150, md: 180 }, borderRadius: "22px", bgcolor: "#F2F4F6", display: "grid", placeItems: "center" }}>
                      <Box component="img" src={t.img} alt={t.name} loading="lazy" sx={{ width: "84%", height: "84%", objectFit: "contain", mixBlendMode: "multiply" }} />
                    </Box>
                  </Box>
                  <Box sx={{ p: { xs: 2.25, md: 3 }, display: "flex", flexDirection: "column", flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                      <Box component="h3" sx={{ m: 0, fontSize: { xs: "1.3rem", md: "1.45rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>{t.key === "single" ? "Single pin" : "Double-bolted"}</Box>
                      <Box component="span" sx={{ px: 1.25, py: 0.4, borderRadius: 999, bgcolor: c.bg, color: c.fg, fontSize: "0.75rem", fontWeight: 800 }}>{t.code}</Box>
                    </Box>
                    {/* headline figure */}
                    <Box sx={{ mt: 2.25, p: 2, borderRadius: "16px", bgcolor: c.bg }}>
                      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 1 }}>
                        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: c.fg }}>Max. working pressure</Box>
                        <Box sx={{ fontSize: "0.78rem", color: T.body }}>{t.key === "single" ? "9–50 bar at 150 °C" : "9–18 bar"}</Box>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.75, mt: 0.5 }}>
                        <Box sx={{ fontSize: { xs: "2.3rem", md: "2.7rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1 }}>{t.maxBar}</Box>
                        <Box sx={{ fontSize: "1rem", fontWeight: 800, color: c.fg }}>bar</Box>
                      </Box>
                      <Box sx={{ mt: 1.25, height: 8, borderRadius: 999, bgcolor: "rgba(255,255,255,0.8)", overflow: "hidden" }}>
                        <Box sx={{ height: "100%", width: on ? `${(t.maxBar / 50) * 100}%` : 0, borderRadius: 999, bgcolor: c.fg, transition: `width 1s cubic-bezier(.2,.8,.2,1) ${200 + i * 150}ms` }} />
                      </Box>
                      <Box sx={{ mt: 0.5, display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: T.muted }}><span>0</span><span>50 bar</span></Box>
                    </Box>
                    {/* what differs */}
                    <Box component="dl" sx={{ m: 0, mt: 2, flex: 1 }}>
                      {DIFF.map((d, k) => (
                        <Box key={d.label} sx={{ display: "flex", gap: 1.5, alignItems: "center", py: 1.5, borderTop: k ? `1px solid ${T.border}` : 0 }}>
                          <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "10px", bgcolor: c.bg, color: c.fg, display: "grid", placeItems: "center", "& svg": { fontSize: 19 } }}>{d.icon}</Box>
                          <Box>
                            <Box component="dt" sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }}>{d.label}</Box>
                            <Box component="dd" sx={{ m: 0, fontSize: "0.95rem", fontWeight: 700, color: T.ink, lineHeight: 1.35 }}>{d.get(t)}</Box>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    {MODELS_LIVE && <Box component={Link} href={`${CLAMP_BASE}/products?type=${t.key}`} sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 0.75, py: 1.3, borderRadius: 999, border: `1.5px solid ${c.fg}`, color: c.fg, fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", transition: "all .2s", "&:hover": { bgcolor: c.fg, color: "#fff" } }}>
                      See {t.sizes} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                    </Box>}
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>
        {/* shared by both */}
        <Reveal delay={200}>
          <Box sx={{ mt: { xs: 2, md: 3 }, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden" }}>
            <Box sx={{ px: { xs: 2, md: 3 }, py: 1.5, bgcolor: "#FAFCFA", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 1, fontWeight: 800, color: T.ink }}>
              <CheckRoundedIcon sx={{ fontSize: 20, color: T.greenDark }} /> The same on both clamps
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" } }}>
              {BOTH.map(([k, v], n) => (
                <Box key={k} sx={{ p: { xs: 2, md: 2.5 }, borderLeft: { md: n ? `1px solid ${T.border}` : 0, xs: n % 2 ? `1px solid ${T.border}` : 0 }, borderTop: { xs: n > 1 ? `1px solid ${T.border}` : 0, md: 0 } }}>
                  <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T.muted }}>{k}</Box>
                  <Box sx={{ mt: 0.25, fontSize: "0.92rem", fontWeight: 700, color: T.ink, lineHeight: 1.4 }}>{v}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

/* ── Anatomy: each clamp drawn front-on, closing on a loop ── */
const RING = { cx: 200, cy: 165, r: 96, R: 112 };
const topHalf = `M ${RING.cx - RING.r} ${RING.cy} A ${RING.r} ${RING.r} 0 0 1 ${RING.cx + RING.r} ${RING.cy} L ${RING.cx + RING.R} ${RING.cy} A ${RING.R} ${RING.R} 0 0 0 ${RING.cx - RING.R} ${RING.cy} Z`;
const botHalf = `M ${RING.cx - RING.r} ${RING.cy} A ${RING.r} ${RING.r} 0 0 0 ${RING.cx + RING.r} ${RING.cy} L ${RING.cx + RING.R} ${RING.cy} A ${RING.R} ${RING.R} 0 0 1 ${RING.cx - RING.R} ${RING.cy} Z`;
const lbl = { fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;

function ClampArt({ kind, on }: { kind: "single" | "double"; on: boolean }) {
  const single = kind === "single";
  const play = on ? "infinite" : "0";
  return (
    <Box
      component="svg"
      viewBox="0 0 420 330"
      role="img"
      aria-label={single ? "Single pin clamp: the two halves pivot on a hinge pin and a wing nut on a swing bolt closes them" : "Double-bolted clamp: two halves drawn together by a bolt on each side"}
      sx={{
        width: "100%", height: "auto", display: "block",
        "& text": { fontSize: { xs: "16px", sm: "14px", md: "13px" } },
        "@keyframes spOpen": { "0%,12%": { transform: "rotate(-24deg)" }, "40%,88%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(-24deg)" } },
        "@keyframes spBolt": { "0%,40%": { transform: "rotate(70deg)" }, "60%,88%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(70deg)" } },
        "@keyframes spNut": { "0%,60%": { transform: "translateY(-14px)" }, "75%,88%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-14px)" } },
        "@keyframes dbTop": { "0%,12%": { transform: "translateY(-22px)" }, "45%,88%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-22px)" } },
        "@keyframes dbBot": { "0%,12%": { transform: "translateY(22px)" }, "45%,88%": { transform: "translateY(0)" }, "100%": { transform: "translateY(22px)" } },
        "@keyframes dbNut": { "0%,12%": { transform: "translateY(-24px)" }, "45%,60%": { transform: "translateY(-8px)" }, "75%,88%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-24px)" } },
        "@keyframes okIn": { "0%,76%": { opacity: 0 }, "80%,88%": { opacity: 1 }, "96%,100%": { opacity: 0 } },
        "& .top, & .bolt, & .nut, & .bot, & .ok": { transformBox: "view-box" },
        "& .sp .top": { transformOrigin: `${RING.cx - RING.R + 6}px ${RING.cy}px`, animation: `spOpen 6s ease-in-out ${play}` },
        "& .sp .bolt": { transformOrigin: "318px 196px", animation: `spBolt 6s ease-in-out ${play}` },
        "& .sp .nut": { animation: `spNut 6s ease-in-out ${play}` },
        "& .db .top": { animation: `dbTop 6s ease-in-out ${play}` },
        "& .db .bot": { animation: `dbBot 6s ease-in-out ${play}` },
        "& .db .nut": { animation: `dbNut 6s ease-in-out ${play}` },
        "& .ok": { opacity: 0, animation: `okIn 6s ease-in-out ${play}` },
      }}
    >
      <defs>
        <linearGradient id={`cl-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F7FA" />
          <stop offset=".5" stopColor="#D3DCE5" />
          <stop offset="1" stopColor="#AEBBC8" />
        </linearGradient>
      </defs>
      {/* ferrule flange inside the clamp (what it closes round) */}
      <circle cx={RING.cx} cy={RING.cy} r={RING.r - 4} fill="#F7F9FB" stroke="#DCE3EA" strokeWidth="2" strokeDasharray="5 5" />
      {/* dimension A across the opening */}
      <g>
        <path d={`M ${RING.cx - RING.r + 8} ${RING.cy + 30} H ${RING.cx + RING.r - 8}`} stroke={T.greenDark} strokeWidth="2" />
        <path d={`M ${RING.cx - RING.r + 8} ${RING.cy + 30} l 9 -5 v 10 z M ${RING.cx + RING.r - 8} ${RING.cy + 30} l -9 -5 v 10 z`} fill={T.greenDark} />
        <text x={RING.cx} y={RING.cy + 22} textAnchor="middle" style={{ ...lbl, fill: T.greenDark, fontWeight: 800 }}>A</text>
        <text x={RING.cx} y={RING.cy + 52} textAnchor="middle" style={{ ...lbl, fontWeight: 600, fill: T.muted }}>flange it fits</text>
      </g>

      {single ? (
        <g className="sp">
          {/* bottom half with the lug that carries the swing bolt */}
          <path d={botHalf} fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
          <rect x="300" y="168" width="36" height="22" rx="5" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
          {/* top half pivots on the hinge pin */}
          <g className="top">
            <path d={topHalf} fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
            <path d="M300 141 h36 v21 h-11 v-8 h-14 v8 h-11 z" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
          </g>
          <circle cx={RING.cx - RING.R + 6} cy={RING.cy} r="11" fill="#fff" stroke="#5C6B7A" strokeWidth="3" />
          {/* swing bolt + wing nut */}
          <g className="bolt">
            <rect x="314" y="122" width="8" height="76" rx="3" fill="#9AA9B6" stroke="#5C6B7A" strokeWidth="1.5" />
            <g className="nut">
              <path d="M300 128 q-14 -4 -18 -18 q16 2 26 12 z M336 128 q14 -4 18 -18 q-16 2 -26 12 z" fill={T.greenDark} />
              <rect x="306" y="120" width="24" height="12" rx="4" fill={T.greenDark} />
            </g>
          </g>
          <text x="6" y="108" style={lbl}>Hinge pin</text>
          <path d="M44 114 L80 154" stroke="#B9C4CE" strokeDasharray="3 3" />
          <text x="414" y="92" textAnchor="end" style={lbl}>Wing nut</text>
          <path d="M370 98 L334 116" stroke="#B9C4CE" strokeDasharray="3 3" />
          <text x="414" y="236" textAnchor="end" style={lbl}>Swing bolt</text>
        </g>
      ) : (
        <g className="db">
          <g className="bot">
            <path d={botHalf} fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
            <rect x="64" y="168" width="36" height="22" rx="5" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
            <rect x="300" y="168" width="36" height="22" rx="5" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
          </g>
          <g className="top">
            <path d={topHalf} fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
            <rect x="64" y="140" width="36" height="22" rx="5" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
            <rect x="300" y="140" width="36" height="22" rx="5" fill={`url(#cl-${kind})`} stroke="#7C8B9A" strokeWidth="2" />
          </g>
          {[82, 318].map((x) => (
            <g key={x}>
              <rect x={x - 4} y="118" width="8" height="84" rx="3" fill="#9AA9B6" stroke="#5C6B7A" strokeWidth="1.5" />
              <path d={`M${x - 11} 196 h22 l3 5 -3 5 h-22 l-3 -5 z`} fill="#C08A2E" />
              <g className="nut">
                <path d={`M${x - 12} 124 h24 l4 7 -4 7 h-24 l-4 -7 z`} fill="#C08A2E" />
              </g>
            </g>
          ))}
          <text x="6" y="98" style={lbl}>Bolt + nut</text>
          <path d="M58 104 L76 120" stroke="#B9C4CE" strokeDasharray="3 3" />
          <text x="414" y="98" textAnchor="end" style={lbl}>Bolt + nut</text>
        </g>
      )}
      <g className="ok">
        <rect x="130" y="290" width="160" height="30" rx="15" fill={T.greenSoft} />
        <text x="210" y="310" textAnchor="middle" style={{ ...lbl, fill: T.greenDark, fontWeight: 800 }}>Joint closed</text>
      </g>
    </Box>
  );
}

function Anatomy() {
  const [ref, on] = useInView<HTMLDivElement>(0.25);
  return (
    <Box component="section" aria-labelledby="h2-anatomy" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 720 }}>
          <Kicker>How they close</Kicker>
          <H2 id="h2-anatomy">Anatomy of a clamp</H2>
          <Lead>Both clamps close round the ferrule flanges. The clamp size A is the flange diameter it fits, so it always matches the ferrule.</Lead>
        </Box>
        <Box ref={ref} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 2, md: 3 } }}>
          {TYPES.map((t, i) => (
            <Reveal key={t.key} delay={i * 100}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 1.5, md: 2.5 }, borderRadius: "26px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, px: { xs: 0.75, md: 0.5 }, pt: { xs: 0.75, md: 0 } }}>
                  <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "1.05rem" }}>{t.key === "single" ? "Single pin" : "Double-bolted"}</Box>
                  <Box component="span" sx={{ px: 1.1, py: 0.3, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.74rem", fontWeight: 800, color: T.ink }}>{t.code}</Box>
                </Box>
                <ClampArt kind={t.key} on={on} />
                <Box sx={{ px: { xs: 0.75, md: 0.5 }, pb: { xs: 0.75, md: 0 }, fontSize: "0.88rem", color: T.body, lineHeight: 1.55 }}>
                  {t.key === "single"
                    ? "The halves pivot on a hinge pin. A swing bolt drops into the slot and the wing nut is turned down by hand."
                    : "No hinge: a bolt on each side draws the two halves together, tightened with a tool for high operating pressures."}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ── Marking: as cast on every clamp, plus optional engraving ── */
function Marking() {
  const [ref, on] = useInView<HTMLDivElement>(0.35);
  const cast = ["ADAPTIX", "2½″", "HEAT No.", "1.4301"];
  const points: [React.ReactNode, string, string][] = [
    [<VerifiedOutlinedIcon key="a" />, "As cast on every clamp", "Maker’s name or logo, size, heat number and material grade."],
    [<EditOutlinedIcon key="b" />, "Engraved on request", "Your own information, for example a line or tag number, so the right clamp goes on the right joint."],
    [<DescriptionOutlinedIcon key="c" />, "3.1 certificate", "An EN 10204 3.1 material certificate comes with every delivery."],
  ];
  return (
    <Box component="section" aria-labelledby="h2-mark" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box ref={ref} sx={{ borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: "hidden", display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" } }}>
          {/* text */}
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Kicker>Traceability</Kicker>
            <H2 id="h2-mark">Marked on the clamp</H2>
            <Box component="ul" sx={{ m: 0, mt: 3, p: 0, listStyle: "none", display: "grid", gap: 2.25 }}>
              {points.map(([icon, k, v]) => (
                <Box component="li" key={k} sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}>
                  <Box sx={{ flexShrink: 0, width: 42, height: 42, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 21 } }}>{icon}</Box>
                  <Box>
                    <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "1rem" }}>{k}</Box>
                    <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.55, mt: 0.25 }}>{v}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          {/* visual */}
          <Box sx={{ position: "relative", p: { xs: 2.5, md: 4 }, background: "linear-gradient(160deg, #EEF3F8 0%, #F7F9FB 60%, #EEF9EA 100%)", borderLeft: { md: `1px solid ${T.border}` }, borderTop: { xs: `1px solid ${T.border}`, md: 0 }, display: "flex", flexDirection: "column", justifyContent: "center", gap: 2.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ flexShrink: 0, width: { xs: 96, md: 120 }, height: { xs: 96, md: 120 }, borderRadius: "50%", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, display: "grid", placeItems: "center" }}>
                <Box component="img" src={TYPES[0].img} alt={TYPES[0].name} sx={{ width: "78%", height: "78%", objectFit: "contain", mixBlendMode: "multiply" }} />
              </Box>
              <Box sx={{ fontSize: "0.88rem", color: T.body, lineHeight: 1.5 }}>
                <Box sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.greenDark, mb: 0.5 }}>Close-up of the band</Box>
                Example of the marking on a 2½″ clamp, with an optional engraved line.
              </Box>
            </Box>
            {/* polished band */}
            <Box sx={{ position: "relative", borderRadius: "18px", p: { xs: 2, md: 2.5 }, background: "linear-gradient(180deg, #F5F8FA 0%, #D7DFE6 46%, #EEF2F5 54%, #C4CED7 100%)", border: "2px solid #A9B6C2", boxShadow: "inset 0 2px 6px rgba(255,255,255,0.9), 0 10px 24px -10px rgba(14,27,18,0.25)", overflow: "hidden" }}>
              <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.75) 45%, transparent 60%)", backgroundSize: "250% 100%", animation: on ? "shine 4s ease-in-out infinite" : "none", "@keyframes shine": { "0%": { backgroundPosition: "120% 0" }, "100%": { backgroundPosition: "-120% 0" } } }} />
              <Box sx={{ position: "relative", display: "flex", flexWrap: "wrap", columnGap: { xs: 1, md: 2 }, rowGap: 0.5 }}>
                {cast.map((w, k) => (
                  <Box key={w} component="span" sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace !important", fontWeight: 800, letterSpacing: { xs: "0.03em", md: "0.08em" }, fontSize: { xs: "0.86rem", md: "1.15rem" }, color: "#5C6B7A", textShadow: "0 1px 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(0,0,0,0.18)", opacity: on ? 1 : 0, transform: on ? "none" : "translateY(6px)", transition: `all .5s ease ${k * 220}ms` }}>
                    {w}
                  </Box>
                ))}
              </Box>
              <Box sx={{ position: "relative", mt: 1.5, pt: 1.5, borderTop: "1px dashed rgba(92,107,122,0.45)" }}>
                <Box sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace !important", fontWeight: 800, letterSpacing: "0.08em", fontSize: { xs: "0.95rem", md: "1.05rem" }, color: T.greenDark, whiteSpace: "nowrap", overflow: "hidden", width: on ? "100%" : 0, transition: "width 1.4s steps(18) 1s" }}>
                  LINE 3 · CIP RETURN
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, fontSize: "0.82rem", color: T.body }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}><Box sx={{ width: 12, height: 12, borderRadius: "3px", bgcolor: "#8E9CAB" }} /> Cast on every clamp</Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}><Box sx={{ width: 12, height: 12, borderRadius: "3px", bgcolor: T.greenDark }} /> Your engraving (optional)</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SizeFinder() {
  const [i, setI] = React.useState(2); // 50.5 mm, 1″–1½″
  const s = SIZES[i];
  const eq = [s.iso, s.din, s.bs].filter((x) => x !== "–");
  return (
    <Box component="section" id="size" aria-labelledby="h2-size" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.85fr 1.15fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
        <Box>
          <Kicker>Size finder</Kicker>
          <H2 id="h2-size">Find your clamp size</H2>
          <Lead>Pick your line size. We’ll show the clamp diameter, the matching standard sizes and the part code for each type.</Lead>
          <Box role="group" aria-label="Line size" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 3 }}>
            {SIZES.map((x, k) => (
              <Box
                key={x.a}
                component="button"
                type="button"
                aria-pressed={k === i}
                onClick={() => setI(k)}
                sx={{ cursor: "pointer", fontFamily: "inherit", px: 1.4, py: 0.7, borderRadius: 999, fontSize: "0.84rem", fontWeight: k === i ? 700 : 600, border: `1px solid ${k === i ? T.greenDark : T.border}`, bgcolor: k === i ? T.greenDark : "#fff", color: k === i ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark } }}
              >
                {x.label}
              </Box>
            ))}
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box aria-live="polite" sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, flexWrap: "wrap" }}>
                <Box sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1 }}>{s.a}<Box component="span" sx={{ fontSize: "0.45em", ml: 0.5, color: T.greenDark }}>mm</Box></Box>
                <Box sx={{ fontSize: "0.9rem", color: T.body }}>clamp diameter (A)</Box>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.75 }}>
                {[["ISO 2852", s.iso], ["DIN 32676", s.din], ["BS 4825", s.bs]].map(([k, v]) => (
                  <Box key={k} sx={{ px: 1.25, py: 0.6, borderRadius: "10px", bgcolor: v === "–" ? "#F7F8F7" : T.surface, border: `1px solid ${T.border}`, fontSize: "0.8rem", color: v === "–" ? T.muted : T.ink }}>
                    <Box component="span" sx={{ fontWeight: 700, color: T.muted, mr: 0.75 }}>{k}</Box>
                    {v === "–" ? "not listed" : v}
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 2.5, pt: 2.25, borderTop: `1px solid ${T.border}`, display: "grid", gap: 1 }}>
                {[
                  { t: TYPES[0], code: s.single, dim: `T ${s.t} mm` },
                  { t: TYPES[1], code: s.double, dim: `W ${s.w} mm` },
                ].map(({ t, code, dim }) => (
                  <ModelLink key={t.key} href={`${CLAMP_BASE}/products/${code}`} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, bgcolor: "#fff", textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft } }}>
                    <Box sx={{ flexShrink: 0, width: 52, height: 52, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center" }}>
                      <Box component="img" src={t.img} alt={t.name} sx={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ fontSize: "0.8rem", color: T.body }}>{t.key === "single" ? "Single pin (S type)" : "Double-bolted (SSH type)"}</Box>
                      <Box sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 800, fontSize: "1rem", color: T.ink }}>{code}</Box>
                    </Box>
                    <Box sx={{ fontSize: "0.8rem", fontWeight: 700, color: T.muted, whiteSpace: "nowrap" }}>{dim}</Box>
                    {MODELS_LIVE && <ArrowForwardRoundedIcon sx={{ fontSize: 16, color: T.muted }} />}
                  </ModelLink>
                ))}
              </Box>
              <Box sx={{ mt: 2, fontSize: "0.82rem", color: T.body, lineHeight: 1.55 }}>
                {eq.length ? `Fits lines listed as ${eq.join(", ")}. ` : ""}Tell us the material and finish when you ask for a quote.
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 5, md: 8 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ maxWidth: 900 }}>
          <FAQ items={FAQS} title="Tri-clamp clamp questions" />
        </Box>
      </Box>
    </Box>
  );
}

function Cta() {
  return (
    <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need the ferrules too?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Every joint needs two ferrules and a gasket as well as the clamp. Send us the line size and quantities and we’ll quote the set, with the 3.1 certificate included.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href={`${SAN_BASE}/ferrules-end-caps`} sx={pillBtn(false)}>
              Ferrules &amp; end caps
            </Box>
            <Box component={Link} href={SAN_BASE} sx={pillBtn(false)}>
              All sanitary fittings
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function TriClampView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Types />
      <Anatomy />
      <Compare />
      <SizeFinder />
      <Marking />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
