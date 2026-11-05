"use client";

// Needle Valves: type page under Hydrogen & High Pressure › Hydrogen Valves.
// Its own look (light, split hero with an animated needle-valve cut-away) and
// its own job: compare the series and jump into the right one.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { groupSite } from "@/src/app/Common/group";
import { HP_NEEDLE_VALVE_DATA } from "@/src/app/high-pressure/valves/needle-valves/hooks/hpNeedleValveData";
import { wrap, Kicker, H2, Lead, pillBtn, BRAND_LOGO } from "./HydrogenHub";

const BASE = "/high-pressure/valves/needle-valves/products";
const TOTAL = HP_NEEDLE_VALVE_DATA.length;
const count = (brand: string, series?: string) => HP_NEEDLE_VALVE_DATA.filter((v) => v.brand === brand && (!series || v.series === series)).length;

type Series = { code: string; brand: "Panam" | "Hiflux"; name: string; psi: number; psiLabel: string; conn: string; patterns: string[]; note: string; img: string };
const PANAM_IMG = "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg";
const HIFLUX_IMG = "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png";

const SERIES: Series[] = [
  { code: "HP", brand: "Panam", name: "HP series", psi: 10000, psiLabel: "10,000 psi", conn: "NPT", patterns: ["Straight", "Angle"], note: "Everyday high-pressure isolation with NPT threads, 1/8 to 1 inch.", img: PANAM_IMG },
  { code: "HP1", brand: "Panam", name: "HP1 series", psi: 15000, psiLabel: "15,000 psi", conn: "NPT", patterns: ["Straight", "Angle", "3-way", "Replaceable seat"], note: "Adds 3-way patterns and a replaceable seat.", img: PANAM_IMG },
  { code: "HP2", brand: "Panam", name: "HP2 series", psi: 20000, psiLabel: "20,000 psi", conn: "MP cone & thread", patterns: ["Straight", "Angle", "3-way", "2-stem manifold"], note: "Medium-pressure cone & thread, the most configurations.", img: PANAM_IMG },
  { code: "HP3", brand: "Panam", name: "HP3 series", psi: 30000, psiLabel: "30,000 psi", conn: "HP cone & thread", patterns: ["Straight", "Angle", "3-way", "2-stem manifold"], note: "High-pressure cone & thread, 1/4 to 9/16 inch.", img: PANAM_IMG },
  { code: "HP6", brand: "Panam", name: "HP6 series", psi: 60000, psiLabel: "60,000 psi", conn: "HP cone & thread", patterns: ["Straight", "Angle", "3-way", "2-stem manifold"], note: "Panam’s highest-rated needle valves.", img: PANAM_IMG },
  { code: "H-NV", brand: "Hiflux", name: "H-NV series", psi: 60000, psiLabel: "20,000–60,000 psi", conn: "MP & HP cone & thread", patterns: ["Straight", "Angle", "3-way"], note: "Vee and regulating stems for shut-off or flow control.", img: HIFLUX_IMG },
  { code: "HRS", brand: "Hiflux", name: "H70 refuelling", psi: 10150, psiLabel: "70 MPa", conn: "MP cone & thread", patterns: ["Straight"], note: "Needle valves for 70 MPa hydrogen fuel stations, in STS 316CW.", img: HIFLUX_IMG },
];

const SPECS = [
  ["Models", `${TOTAL}`],
  ["Pressure", "10,000–60,000 psi, plus H70"],
  ["Body", "SS 316 / STS 316CW"],
  ["Connections", "NPT · MP cone · HP cone"],
  ["Patterns", "Straight · angle · 3-way · 2-stem manifold"],
  ["Stems", "Vee · regulating"],
];

const FAQ = [
  { q: "Which series do I need?", a: "Start from your working pressure and connection. NPT lines up to 15,000 psi suit HP or HP1; medium-pressure cone & thread suits HP2 or Hiflux H-NV; up to 60,000 psi, HP3, HP6 or H-NV. For 70 MPa fuel stations, use the H70 refuelling valves." },
  { q: "Vee stem or regulating stem?", a: "A vee stem gives tight shut-off and some throttling. A regulating stem has a finer taper for smoother flow control. Hiflux H-NV valves come with either." },
  { q: "What is a 2-stem manifold?", a: "Two needle valves in one body, usually to isolate and vent a pressure instrument. Panam HP2, HP3 and HP6 include 2-stem manifold models." },
  { q: "Do you supply certificates?", a: "Yes. Ask for the approval or material certificate you need when you request a quote. Certification varies by model." },
];
const FAQ_ICONS = [CompareArrowsOutlinedIcon, TuneOutlinedIcon, CableOutlinedIcon, VerifiedOutlinedIcon];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/* ── Animated cut-away: turning the handle drives the needle into the seat ── */
function NeedleCutaway() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 360"
        role="img"
        aria-label="Cut-away of a needle valve: turning the handle drives the tapered needle into the seat, closing the flow path"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          "@keyframes nvStem": { "0%,15%": { transform: "translateY(0)" }, "45%,70%": { transform: "translateY(22px)" }, "100%": { transform: "translateY(0)" } },
          "@keyframes nvHandle": { "0%,15%": { transform: "scaleX(1)" }, "30%": { transform: "scaleX(0.25)" }, "45%,70%": { transform: "scaleX(1)" }, "85%": { transform: "scaleX(0.25)" }, "100%": { transform: "scaleX(1)" } },
          "@keyframes nvFlow": { "0%,12%": { opacity: 1 }, "40%,72%": { opacity: 0 }, "100%": { opacity: 1 } },
          "@keyframes nvDot": { from: { transform: "translateX(0)" }, to: { transform: "translateX(360px)" } },
          "@keyframes nvShut": { "0%,38%": { opacity: 0 }, "45%,68%": { opacity: 1 }, "75%,100%": { opacity: 0 } },
          "& .stem": { animation: on ? "nvStem 6s ease-in-out infinite" : "none" },
          "& .handle": { transformOrigin: "210px 52px", animation: on ? "nvHandle 6s ease-in-out infinite" : "none" },
          "& .flow": { animation: on ? "nvFlow 6s ease-in-out infinite" : "none" },
          "& .shut": { animation: on ? "nvShut 6s ease-in-out infinite" : "none", opacity: 0 },
        }}
      >
        <defs>
          <linearGradient id="nvSteel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E3EAF1" />
            <stop offset=".5" stopColor="#FBFDFE" />
            <stop offset="1" stopColor="#C9D4DF" />
          </linearGradient>
          <linearGradient id="nvBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F3F6F9" />
            <stop offset="1" stopColor="#D2DBE4" />
          </linearGradient>
          <pattern id="nvHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#C3CCD5" strokeWidth="1.2" />
          </pattern>
        </defs>

        {/* body, cut away */}
        <rect x="70" y="150" width="280" height="150" rx="16" fill="url(#nvBody)" stroke="#8E9CAB" strokeWidth="2" />
        <rect x="70" y="150" width="280" height="150" rx="16" fill="url(#nvHatch)" opacity=".6" />
        {/* passages: inlet runs under the seat, rises through it into the chamber, leaves by the outlet */}
        <g fill="#fff" stroke="#8E9CAB" strokeWidth="2">
          <path d="M70 252 H220 V226 H200 V252" stroke="none" />
          <rect x="70" y="252" width="150" height="20" stroke="none" />
          <rect x="200" y="226" width="20" height="46" stroke="none" />
          <rect x="186" y="176" width="48" height="50" stroke="none" />
          <rect x="234" y="190" width="116" height="20" stroke="none" />
          <path d="M70 252 H200 V226 M70 272 H220 V226 M186 176 V214 M234 176 V190 H350 M234 210 V214 M234 210 H350" fill="none" />
        </g>
        {/* conical seat */}
        <path d="M186 214 L200 226 M234 214 L220 226" fill="none" stroke="#5C6B7A" strokeWidth="3" />

        {/* flow */}
        <g className="flow">
          <path d="M80 262 H210 V200 H342" fill="none" stroke={T.green} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 8" />
        </g>
        <g className="shut">
          <circle cx="210" cy="226" r="15" fill="none" stroke="#E2554F" strokeWidth="3" />
          <text x="244" y="246" style={{ fontSize: 13, fontWeight: 800, fill: "#C2413B", fontFamily: "inherit" }}>Sealed</text>
        </g>

        {/* bonnet */}
        <rect x="178" y="100" width="64" height="52" rx="6" fill="url(#nvSteel)" stroke="#8E9CAB" strokeWidth="2" />
        <rect x="186" y="84" width="48" height="20" rx="4" fill="#E9D27A" stroke="#C6A93E" strokeWidth="2" />

        {/* stem + needle, moves down to close */}
        <g className="stem">
          <rect x="203" y="40" width="14" height="140" rx="3" fill="url(#nvSteel)" stroke="#7C8B9A" strokeWidth="1.5" />
          <path d="M203 180 H217 L210 204 Z" fill="#AEBBC8" stroke="#7C8B9A" strokeWidth="1.5" />
          <g className="handle">
            <rect x="130" y="44" width="160" height="16" rx="8" fill={T.greenDark} />
          </g>
          <circle cx="210" cy="52" r="10" fill="#fff" stroke={T.greenDark} strokeWidth="3" />
        </g>

        {/* labels */}
        {[
          { x: 300, y: 56, t: "Handle" },
          { x: 252, y: 124, t: "Bonnet & packing" },
          { x: 104, y: 194, t: "Needle" },
          { x: 14, y: 290, t: "Inlet" },
          { x: 300, y: 180, t: "Outlet" },
        ].map((l) => (
          <text key={l.t} x={l.x} y={l.y} style={{ fontSize: 13, fontWeight: 700, fill: T.body, fontFamily: "inherit" }}>
            {l.t}
          </text>
        ))}
        <path d="M152 190 H198" stroke="#B9C4CE" strokeDasharray="3 3" />
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: T.green }} /> Open: flow passes the seat
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #E2554F" }} /> Closed: needle seals the seat
        </Box>
      </Box>
    </Box>
  );
}

function Hero() {
  const panam = groupSite("Panam Valves");
  const hiflux = groupSite("Hiflux UK");
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #FFF7E6 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Hydrogen valves</Kicker>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Needle" />
            <Words text="valves" start={200} sx={gradientText} />
          </Box>
          <Lead>
            A tapered needle closes onto a conical seat for tight isolation and fine flow control on small high-pressure lines. {TOTAL} models from Panam and Hiflux, 10,000 to 60,000 psi, plus H70 valves for hydrogen fuel stations.
          </Lead>
          <Box component="dl" sx={{ m: 0, mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1, "& > div": { p: 1.5, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}` }, "& dt": { fontSize: "0.72rem", fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }, "& dd": { m: 0, mt: 0.25, fontSize: "0.9rem", fontWeight: 700, color: T.ink } }}>
            {SPECS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr 1fr", gap: 1.25, mt: 3.5 }}>
            <Box component={Link} href={BASE} sx={{ ...pillBtn(true), justifyContent: "center" }}>
              View all {TOTAL} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), justifyContent: "center" }}>
              Get a quote
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 2.5, rowGap: 0.75, mt: 2, fontSize: "0.85rem" }}>
            {[panam, hiflux].map((s) => (
              <Box key={s.url} component="a" href={s.url} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                {s.name} website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box sx={{ mb: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark }}>How a needle valve works</Box>
            <NeedleCutaway />
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function SeriesLadder() {
  const [brand, setBrand] = React.useState<"All" | "Panam" | "Hiflux">("All");
  const list = SERIES.filter((s) => brand === "All" || s.brand === brand);
  const max = 60000;
  return (
    <Box component="section" id="series" aria-labelledby="h2-series" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 2, mb: 4 }}>
          <Box>
            <Kicker>Series</Kicker>
            <H2 id="h2-series">Pick a series by pressure</H2>
            <Lead>Seven series, lowest to highest pressure. Each one opens the product table filtered to that series.</Lead>
          </Box>
          <Box role="tablist" aria-label="Brand" sx={{ display: "inline-flex", p: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, alignSelf: { xs: "flex-start", md: "auto" } }}>
            {(["All", "Panam", "Hiflux"] as const).map((b) => (
              <Box
                key={b}
                component="button"
                role="tab"
                aria-selected={brand === b}
                onClick={() => setBrand(b)}
                sx={{ cursor: "pointer", border: 0, fontFamily: "inherit", px: 2, py: 0.9, borderRadius: 999, fontSize: "0.88rem", fontWeight: 700, bgcolor: brand === b ? "#fff" : "transparent", color: brand === b ? T.ink : T.body, boxShadow: brand === b ? "0 1px 4px rgba(14,27,18,0.12)" : "none", transition: "all .15s" }}
              >
                {b === "All" ? `All (${TOTAL})` : `${b} (${count(b)})`}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: 1.5 }}>
          {list.map((s, i) => (
            <Reveal key={s.code} delay={i * 60}>
              <Box
                component={Link}
                href={`${BASE}?series=${encodeURIComponent(s.code)}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "72px 1fr 32px", md: "96px 1.3fr 1.4fr 1fr 40px" },
                  gap: { xs: 1.5, md: 3 },
                  alignItems: "center",
                  p: { xs: 1.5, md: 2 },
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  border: `1px solid ${T.border}`,
                  textDecoration: "none",
                  transition: "all .2s",
                  "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-2px)" },
                  "&:hover .arr": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                }}
              >
                <Box sx={{ width: { xs: 72, md: 96 }, height: { xs: 72, md: 96 }, borderRadius: "16px", bgcolor: s.brand === "Panam" ? "#EAF4FF" : "#FFF7DD", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={s.img} alt="" sx={{ width: "80%", height: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                    <Box component="img" src={BRAND_LOGO[s.brand]} alt={s.brand} sx={{ height: 16, maxWidth: 60, objectFit: "contain" }} />
                    <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{count(s.brand, s.code)} models</Box>
                  </Box>
                  <Box sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{s.name}</Box>
                  <Box sx={{ fontSize: "0.85rem", color: T.body, lineHeight: 1.45 }}>{s.note}</Box>
                </Box>
                <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, gridRow: { xs: 2, md: "auto" } }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, fontSize: "0.82rem" }}>
                    <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{s.psiLabel}</Box>
                    <Box component="span" sx={{ color: T.muted }}>{s.conn}</Box>
                  </Box>
                  <Box sx={{ height: 10, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                    <Box sx={{ height: "100%", width: `${Math.min(100, (s.psi / max) * 100)}%`, borderRadius: 999, background: `linear-gradient(90deg, #B8EAA8, ${T.green})` }} />
                  </Box>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: "wrap", gap: 0.5 }}>
                  {s.patterns.map((p) => (
                    <Box key={p} component="span" sx={{ px: 1, py: 0.3, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.74rem", fontWeight: 600, color: T.body }}>{p}</Box>
                  ))}
                </Box>
                <Box className="arr" sx={{ gridColumn: { xs: 3, md: "auto" }, gridRow: { xs: 1, md: "auto" }, width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .2s" }}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function H70() {
  return (
    <Box component="section" aria-labelledby="h2-h70" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "auto 1fr auto" }, gap: { xs: 2, md: 4 }, alignItems: "center", p: { xs: 3, md: 4 }, borderRadius: "24px", background: "linear-gradient(120deg, #EAF4FF 0%, #F3EEFF 100%)", border: "1px solid #DCE6F5" }}>
          <Box sx={{ width: 64, height: 64, borderRadius: "18px", bgcolor: "#fff", color: "#3C6EB4", display: "grid", placeItems: "center", "& svg": { fontSize: 32 } }}>
            <LocalGasStationOutlinedIcon />
          </Box>
          <Box>
            <Box component="h2" id="h2-h70" sx={{ m: 0, mb: 0.5, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>Building a hydrogen fuel station?</Box>
            <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.6 }}>Hiflux H70 needle valves are made for 70 MPa refuelling, in cold-worked STS 316CW, including a KGS-certified refuelling valve.</Box>
          </Box>
          <Box component={Link} href={`${BASE}?series=HRS`} sx={pillBtn(true)}>
            See H70 valves <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Needle valve questions</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {FAQ.map((f, i) => (
            <Box
              component="details"
              key={f.q}
              open={i === 0}
              sx={{
                borderRadius: "16px",
                bgcolor: "#fff",
                border: `1px solid ${T.border}`,
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", lineHeight: "28px", textAlign: "center" },
                "&[open] summary::after": { content: '"–"' },
              }}
            >
              <Box component="summary">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.75 }}>
                  <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center" }}>
                    {React.createElement(FAQ_ICONS[i % FAQ_ICONS.length], { sx: { fontSize: 21 } })}
                  </Box>
                  <Box component="h3" sx={{ m: 0, font: "inherit" }}>{f.q}</Box>
                </Box>
              </Box>
              <Box component="p" sx={{ m: 0, pl: { xs: 2.5, sm: "78px" }, pr: 2.5, pb: 2.25, color: T.body, lineHeight: 1.7 }}>{f.a}</Box>
            </Box>
          ))}
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Know the part number?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Search all {TOTAL} needle valves by size, connection and pattern, or send us your duty and we’ll pick the model.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href={BASE} sx={pillBtn(true)}>
              Search models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={pillBtn(false)}>
              Get a quote
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function NeedleValves() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <SeriesLadder />
      <H70 />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
