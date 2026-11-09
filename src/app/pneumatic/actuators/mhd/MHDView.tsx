"use client";

// MHD (Micro) series page under Actuators › Pneumatic Actuators, in the same
// format as Needle Valves: split hero with an animated scotch-yoke cut-away,
// a ladder of the four configurations, an exploded-view band, FAQ.
// Every figure is from the Susin "Pneumatic Actuator Micro Series SS & CS" catalogue.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { MHD_ACTUATOR_DATA, MHD_EXPLODED, MHD_IMAGE, MHD_TORQUE_RANGE } from "./products/hooks/mhdActuatorData";

const BASE = "/pneumatic/actuators/mhd/products";
const TOTAL = MHD_ACTUATOR_DATA.length;
const SUSIN_LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp";
const nm = (n: number) => n.toLocaleString("en-GB");

// The four configurations: yoke × action, with their torque range from the data
type Config = { code: string; yoke: "IS" | "IC"; action: "DA" | "SR"; name: string; note: string; models: typeof MHD_ACTUATOR_DATA };
const CONFIGS: Config[] = [
  { code: "ISD", yoke: "IS", action: "DA", name: "Symmetric, double acting", note: "Highest torque at both ends of the stroke; air opens and closes." },
  { code: "ISR", yoke: "IS", action: "SR", name: "Symmetric, spring return", note: "Air drives one way, springs return the valve to its safe position." },
  { code: "ICD", yoke: "IC", action: "DA", name: "Canted, double acting", note: "Highest torque at the open or the close end, where the valve needs it." },
  { code: "ICR", yoke: "IC", action: "SR", name: "Canted, spring return", note: "Canted yoke with spring return, fail-close or fail-open." },
].map((c) => ({ ...c, models: MHD_ACTUATOR_DATA.filter((m) => m.model.startsWith(c.code)) })) as Config[];
const MAX = Math.max(...MHD_ACTUATOR_DATA.map((m) => m.torqueNmMax));

const SPECS = [
  ["Models", `${TOTAL}`],
  ["Torque", MHD_TORQUE_RANGE],
  ["Air supply", "3.7 – 10 bar"],
  ["Temperature", "−20 to +80 °C"],
  ["Mounting", "ISO 5211 F07 / F10"],
  ["Protection", "IP66"],
];

const FAQ = [
  { q: "Symmetric (IS) or canted (IC) yoke?", a: "A symmetric yoke gives its highest torque at both ends of the 90° stroke. A canted yoke gives its highest torque at either the open or the close end, which suits valves that need most torque at one end." },
  { q: "Double acting or spring return?", a: "Double acting models (ISD, ICD) use air to open and close. Spring return models (ISR, ICR) use air one way and springs the other, so the valve goes to a safe position if air is lost. The design is modular, so one can be converted to the other." },
  { q: "What is the difference between Micro SS and Micro CS?", a: "Both have a ductile iron centre body. Micro SS has stainless steel cylinders, Micro CS has carbon steel cylinders." },
  { q: "Can I adjust the travel?", a: "Yes. Stopper bolts at both cylinder ends set the open and close positions between 85° and 95°." },
  { q: "Which accessories can be fitted?", a: "A manual handwheel (jackscrew), hydraulic override, limit switches, solenoid valves and positioners." },
];
const FAQ_ICONS = [CompareArrowsOutlinedIcon, ShieldOutlinedIcon, AirOutlinedIcon, BuildOutlinedIcon, ExtensionOutlinedIcon];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/* ── Animated cut-away: air drives the pistons, the yoke turns the shaft 90° ── */
function YokeCutaway() {
  const [ref, on] = useInView<HTMLDivElement>(0.3);
  const lbl = { fontSize: 13, fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="Cut-away of a scotch yoke actuator: air pushes the pistons, the piston rod's pin slides in the yoke slot and turns the output shaft a quarter turn"
        sx={{
          width: "100%", height: "auto", display: "block",
          "@keyframes ykRod": { "0%,12%": { transform: "translateX(-46px)" }, "45%,62%": { transform: "translateX(46px)" }, "95%,100%": { transform: "translateX(-46px)" } },
          "@keyframes ykArm": { "0%,12%": { transform: "rotate(-45deg)" }, "45%,62%": { transform: "rotate(45deg)" }, "95%,100%": { transform: "rotate(-45deg)" } },
          "@keyframes ykAirL": { "0%,10%": { opacity: 0 }, "15%,40%": { opacity: 1 }, "48%,100%": { opacity: 0 } },
          "@keyframes ykAirR": { "0%,62%": { opacity: 0 }, "67%,90%": { opacity: 1 }, "96%,100%": { opacity: 0 } },
          "& .rod": { transformBox: "view-box", animation: on ? "ykRod 6s ease-in-out infinite" : "none", transform: "translateX(-46px)" },
          "& .arm": { transformBox: "view-box", transformOrigin: "210px 220px", animation: on ? "ykArm 6s ease-in-out infinite" : "none", transform: "rotate(-45deg)" },
          "& .ind": { transformBox: "view-box", transformOrigin: "210px 52px", animation: on ? "ykArm 6s ease-in-out infinite" : "none", transform: "rotate(-45deg)" },
          "& .airL": { animation: on ? "ykAirL 6s ease-in-out infinite" : "none", opacity: 0 },
          "& .airR": { animation: on ? "ykAirR 6s ease-in-out infinite" : "none", opacity: 0 },
        }}
      >
        <defs>
          <linearGradient id="ykSteel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6F9FB" />
            <stop offset=".5" stopColor="#DCE3EA" />
            <stop offset="1" stopColor="#B7C3CF" />
          </linearGradient>
        </defs>
        {/* cylinders */}
        <rect x="20" y="118" width="130" height="64" rx="10" fill="url(#ykSteel)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="270" y="118" width="130" height="64" rx="10" fill="url(#ykSteel)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="28" y="126" width="114" height="48" fill="#fff" />
        <rect x="278" y="126" width="114" height="48" fill="#fff" />
        {/* centre body */}
        <rect x="150" y="104" width="120" height="160" rx="14" fill="#E2554F" opacity=".14" stroke="#C2413B" strokeWidth="2" />
        {/* air in */}
        <path className="airL" d="M34 150 h50" stroke="#7CB9F0" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        <path className="airR" d="M386 150 h-50" stroke="#7CB9F0" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 7" />
        {/* yoke arm (behind rod), pivoting on the shaft */}
        <g className="arm">
          <path d="M200 220 L200 120 Q210 104 220 120 L220 220 Z" fill={T.greenDark} />
          <rect x="205" y="122" width="10" height="70" rx="5" fill="#fff" />
        </g>
        {/* pistons + rod + roller pin */}
        <g className="rod">
          <rect x="96" y="128" width="16" height="44" rx="3" fill="#5C6B7A" />
          <rect x="308" y="128" width="16" height="44" rx="3" fill="#5C6B7A" />
          <rect x="112" y="145" width="196" height="10" rx="5" fill="#9AA9B6" />
          <circle cx="210" cy="150" r="9" fill="#F4C95D" stroke="#A06F1E" strokeWidth="2" />
        </g>
        {/* output shaft */}
        <circle cx="210" cy="220" r="16" fill="#fff" stroke="#5C6B7A" strokeWidth="3" />
        <rect x="203" y="213" width="14" height="14" rx="2" fill="#5C6B7A" />
        {/* position indicator on top */}
        <circle cx="210" cy="52" r="26" fill="#fff" stroke="#9AA9B6" strokeWidth="2" />
        <rect className="ind" x="206" y="30" width="8" height="44" rx="4" fill={T.green} />
        <text x="250" y="50" style={lbl}>Position</text>
        <text x="250" y="66" style={lbl}>indicator</text>
        {/* labels */}
        <text x="20" y="108" style={lbl}>Cylinder</text>
        <text x="40" y="214" style={lbl}>Piston</text>
        <path d="M80 208 L102 172" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="290" y="246" style={lbl}>Yoke</text>
        <path d="M288 242 L222 206" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="250" y="96" style={lbl}>Roller pin</text>
        <path d="M262 100 L218 144" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="124" y="296" style={lbl}>Output shaft turns 90° (85–95°)</text>
        <path d="M210 238 V280" stroke="#B9C4CE" strokeDasharray="3 3" />
      </Box>
      <Box sx={{ mt: 1.5, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, fontSize: "0.8rem", fontWeight: 600, color: T.body }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 18, height: 4, borderRadius: 2, bgcolor: "#7CB9F0" }} /> Air drives the pistons
        </Box>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
          <Box component="span" sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F4C95D", border: "2px solid #A06F1E" }} /> The pin turns the yoke
        </Box>
      </Box>
    </Box>
  );
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #FFF7E6 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Kicker>Pneumatic actuators</Kicker>
            <Box sx={{ mb: 1.25, display: "inline-flex", px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box component="img" src={SUSIN_LOGO} alt="Susin" sx={{ height: 18, width: "auto", display: "block" }} />
            </Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="MHD micro" />
            <Words text="scotch yoke" start={200} sx={gradientText} />
          </Box>
          <Lead>
            The compact member of the Susin scotch yoke family, for on/off and control of double offset butterfly valves. Symmetric or canted yoke, double acting or spring return: {TOTAL} models from {MHD_TORQUE_RANGE}.
          </Lead>
          <Box component="dl" sx={{ m: 0, mt: 3, display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" }, gap: 1, "& > div": { p: 1.5, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}` }, "& dt": { fontSize: "0.72rem", fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" }, "& dd": { m: 0, mt: 0.25, fontSize: "0.9rem", fontWeight: 700, color: T.ink } }}>
            {SPECS.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1fr", gap: 1.25, mt: 3.5 }}>
            <Box component={Link} href={BASE} sx={{ ...pillBtn(true), justifyContent: "center" }}>
              View all {TOTAL} models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), justifyContent: "center" }}>Get a quote</Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 2.5, rowGap: 0.75, mt: 2, fontSize: "0.85rem" }}>
            <Box component={Link} href="/brands/susin" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              About Susin <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
            </Box>
            <Box component="a" href={SUSIN_CATALOG.MHD} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              <DownloadRoundedIcon sx={{ fontSize: 16 }} /> Download catalogue (PDF)
            </Box>
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box sx={{ mb: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark }}>How a scotch yoke works</Box>
            <YokeCutaway />
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function ConfigLadder() {
  const [yoke, setYoke] = React.useState<"All" | "IS" | "IC">("All");
  const list = CONFIGS.filter((c) => yoke === "All" || c.yoke === yoke);
  const tabs = [
    { k: "All" as const, label: `All (${TOTAL})` },
    { k: "IS" as const, label: `Symmetric (${CONFIGS.filter((c) => c.yoke === "IS").reduce((n, c) => n + c.models.length, 0)})` },
    { k: "IC" as const, label: `Canted (${CONFIGS.filter((c) => c.yoke === "IC").reduce((n, c) => n + c.models.length, 0)})` },
  ];
  return (
    <Box component="section" id="models" aria-labelledby="h2-models" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 2, mb: 4 }}>
          <Box>
            <Kicker>Configurations</Kicker>
            <H2 id="h2-models">Pick a yoke and action</H2>
            <Lead>Four configurations, each in three sizes (01-12, 01-15, 01-17). Each one opens the model table filtered to it.</Lead>
          </Box>
          <Box role="tablist" aria-label="Yoke" sx={{ display: "inline-flex", p: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, alignSelf: { xs: "flex-start", md: "auto" } }}>
            {tabs.map((t) => (
              <Box key={t.k} component="button" role="tab" aria-selected={yoke === t.k} onClick={() => setYoke(t.k)}
                sx={{ cursor: "pointer", border: 0, fontFamily: "inherit", px: 2, py: 0.9, borderRadius: 999, fontSize: "0.88rem", fontWeight: 700, bgcolor: yoke === t.k ? "#fff" : "transparent", color: yoke === t.k ? T.ink : T.body, boxShadow: yoke === t.k ? "0 1px 4px rgba(14,27,18,0.12)" : "none", transition: "all .15s" }}>
                {t.label}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "grid", gap: 1.5 }}>
          {list.map((c, i) => {
            const lo = Math.min(...c.models.map((m) => m.torqueNmMin)), hi = Math.max(...c.models.map((m) => m.torqueNmMax));
            return (
              <Reveal key={c.code} delay={i * 60}>
                <Box component={Link} href={`${BASE}?yoke=${c.yoke}&action=${c.action}`}
                  sx={{
                    display: "grid", gridTemplateColumns: { xs: "72px 1fr 32px", md: "96px 1.3fr 1.4fr 1fr 40px" }, gap: { xs: 1.5, md: 3 }, alignItems: "center", p: { xs: 1.5, md: 2 },
                    borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none", transition: "all .2s",
                    "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-2px)" }, "&:hover .arr": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green },
                  }}>
                  <Box sx={{ width: { xs: 72, md: 96 }, height: { xs: 72, md: 96 }, borderRadius: "16px", bgcolor: c.yoke === "IS" ? "#EAF4FF" : "#FFF7DD", display: "grid", placeItems: "center", overflow: "hidden" }}>
                    <Box component="img" src={MHD_IMAGE} alt={`MHD ${c.name}`} sx={{ width: "86%", height: "86%", objectFit: "contain", mixBlendMode: "multiply" }} />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                      <Box component="span" sx={{ px: 1, py: 0.2, borderRadius: 999, bgcolor: T.ink, color: "#fff", fontSize: "0.72rem", fontWeight: 800, fontFamily: "ui-monospace, Menlo, monospace" }}>{c.code}</Box>
                      <Box component="span" sx={{ fontSize: "0.75rem", fontWeight: 700, color: T.muted }}>{c.models.length} models</Box>
                    </Box>
                    <Box sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{c.name}</Box>
                    <Box sx={{ fontSize: "0.85rem", color: T.body, lineHeight: 1.45 }}>{c.note}</Box>
                  </Box>
                  <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, gridRow: { xs: 2, md: "auto" } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, fontSize: "0.82rem" }}>
                      <Box component="span" sx={{ fontWeight: 800, color: T.ink }}>{nm(lo)} – {nm(hi)} Nm</Box>
                      <Box component="span" sx={{ color: T.muted }}>{c.action === "DA" ? "air 2.8–7 bar" : "air 4.2–7 bar"}</Box>
                    </Box>
                    <Box sx={{ position: "relative", height: 10, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                      <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${Math.round((lo / MAX) * 1000) / 10}%`, width: `${Math.round(((hi - lo) / MAX) * 1000) / 10}%`, borderRadius: 999, background: `linear-gradient(90deg, #B8EAA8, ${T.green})` }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "flex" }, flexWrap: "wrap", gap: 0.5 }}>
                    {c.models.map((m) => (
                      <Box key={m.model} component="span" sx={{ px: 1, py: 0.3, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.74rem", fontWeight: 700, color: T.body, fontFamily: "ui-monospace, Menlo, monospace" }}>{m.model.slice(4)}</Box>
                    ))}
                  </Box>
                  <Box className="arr" sx={{ gridColumn: { xs: 3, md: "auto" }, gridRow: { xs: 1, md: "auto" }, width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .2s" }}>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

function Exploded() {
  const points = [
    ["Ductile iron centre body", "Piston and end covers in ductile iron; cylinders in stainless (Micro SS) or carbon steel (Micro CS)."],
    ["Roller and pin drive", "Heat-treated roller and pin transfer piston force to the yoke by rolling, for less friction."],
    ["PTFE bushings", "Support every moving part and keep side load off the valve stem packing."],
    ["Modular", "Converts between double acting and spring return; springs load and unload with tie rods, no special tools."],
  ];
  return (
    <Box component="section" aria-labelledby="h2-build" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 5 }, alignItems: "center", p: { xs: 3, md: 4 }, borderRadius: "24px", background: "linear-gradient(120deg, #EAF4FF 0%, #F3EEFF 100%)", border: "1px solid #DCE6F5" }}>
          <Box sx={{ borderRadius: "18px", bgcolor: "#fff", p: 2, display: "grid", placeItems: "center" }}>
            <Box component="img" src={MHD_EXPLODED} alt="Exploded view of the MHD Micro scotch yoke actuator" loading="lazy" sx={{ width: "100%", height: "auto", maxWidth: 560 }} />
          </Box>
          <Box>
            <Box component="h2" id="h2-build" sx={{ m: 0, mb: 2, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>Built to be serviced</Box>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 1.5 }}>
              {points.map(([k, v]) => (
                <Box component="li" key={k} sx={{ display: "flex", gap: 1.25 }}>
                  <Box component="span" sx={{ flexShrink: 0, mt: "7px", width: 8, height: 8, borderRadius: "50%", bgcolor: T.green }} />
                  <Box sx={{ fontSize: "0.92rem", color: T.body, lineHeight: 1.55 }}><Box component="strong" sx={{ color: T.ink }}>{k}.</Box> {v}</Box>
                </Box>
              ))}
            </Box>
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
          <H2 id="h2-faq">MHD actuator questions</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {FAQ.map((f, i) => (
            <Box component="details" key={f.q} open={i === 0}
              sx={{
                borderRadius: "16px", bgcolor: "#fff", border: `1px solid ${T.border}`,
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', flexShrink: 0, width: 28, height: 28, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", lineHeight: "28px", textAlign: "center" },
                "&[open] summary::after": { content: '"–"' },
              }}>
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Know the model?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Compare all {TOTAL} MHD models by yoke, action and torque, or send us the valve torque and air pressure and we’ll pick the size.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href={BASE} sx={pillBtn(true)}>
              Compare models <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/pneumatic/actuators" sx={pillBtn(false)}>All pneumatic actuators</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function MHDView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <ConfigLadder />
      <Exploded />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
