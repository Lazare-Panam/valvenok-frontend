"use client";

// Safety & relief valves hub (type level under Valves). Pulls together the
// relief products that live elsewhere on the site, each on its one home page:
//   - PANAM RVL / RVH / PRVH instrumentation relief valves
//   - Hiflux high-pressure relief valves, rupture discs and safety heads
//   - Youngdo hydrogen cylinder valves with thermal relief
//   - Pietro Fiorentini VS/AM 58 relief valve for gas networks
// Figures come from those pages. Industrial steam/air safety valves are not on
// the site yet, so this page does not claim them.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { titleCase } from "@/src/app/Common/titleCase";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, LightBackdrop, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const PAGE = "https://www.valvenok.com/valves/safety-relief-valves";
const HIFLUX_SAFETY = "/hydrogen-cryogenic/valves/products?type=Safety%20Valve";

/* ───────────────────────── data ───────────────────────── */

type Range = {
  key: string;
  brand: string;
  title: string;
  text: string;
  points: string[];
  tag: string;
  img: string;
  href: string;
  cta: string;
  tint: string;
  note?: string;
};

const RANGES: Range[] = [
  {
    key: "instrument",
    brand: "PANAM",
    title: "Instrumentation relief valves: RVL, RVH and PRVH",
    text: "Compact SS 316 relief valves for instrument, sampling and hydraulic lines, spring-adjustable from 50 to 15,000 psi in 340 configurations.",
    points: [
      "RVL low pressure and RVH high pressure series, plus PRVH-10K and PRVH-15K for 10,000 and 15,000 psi",
      "Sizes 1/4\", 3/8\", 1/2\", M20×1.5 and 6, 8, 10 and 12 mm",
      "NPT, BSPT and BSPP threads; female × female, male × female, male × OD and tube fitting ends",
      "FKM seals; colour-coded spring ranges",
    ],
    tag: "50 – 15,000 psi",
    img: "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png",
    href: "/valves/instrumentation-valves/relief-valves",
    cta: "View instrumentation relief valves",
    tint: L.mint,
    note: "For code-required protection on boilers and pressure vessels, use a certified safety valve.",
  },
  {
    key: "hiflux",
    brand: "Hiflux",
    title: "High-pressure safety and relief valves",
    text: "Relief valves for test rigs, hydraulic systems, hydrogen and other high-pressure service, with UNF connections.",
    points: [
      "Proportional and field-adjustable relief valves for water and liquid service",
      "Factory-set relief valves from 3,000 to 60,000 psi",
      "KC-certified proportional gas relief valves, 1,000 to 29,000 psi",
      "Certification varies by model",
    ],
    tag: "1,000 – 60,000 psi",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png",
    href: HIFLUX_SAFETY,
    cta: "View Hiflux safety and relief valves",
    tint: "#EAF4FF",
  },
  {
    key: "rupture",
    brand: "Hiflux",
    title: "Rupture discs and safety heads",
    text: "Non-reclosing pressure relief. A rupture disc bursts at a set pressure; the safety head holds it in the line. Use it alone, or upstream of a relief valve to protect the valve from the process fluid.",
    points: ["Low, medium and high pressure discs, about 11,500 to 60,000 psi", "Matching safety heads", "UNF connections"],
    tag: "~11,500 – 60,000 psi",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/rupture-disc.png",
    href: HIFLUX_SAFETY,
    cta: "View rupture discs",
    tint: "#FFF7DD",
  },
  {
    key: "thermal",
    brand: "Youngdo",
    title: "Thermal relief for hydrogen cylinder valves",
    text: "Selected Youngdo hydrogen cylinder valves, rated 35 and 70 MPa, include a thermally activated pressure relief device that vents the cylinder in a fire.",
    points: ["Glass bulb activation at about 105–110 °C, where fitted", "Integral to the cylinder valve", "Certification varies by model"],
    tag: "Activates ~105–110 °C",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
    href: "/hydrogen-cryogenic/hydrogen",
    cta: "View hydrogen cylinder valves",
    tint: "#F3EEFF",
  },
  {
    key: "gas",
    brand: "Pietro Fiorentini",
    title: "Gas network relief valves",
    text: "The VS/AM 58 is a compact relief and monitor valve that protects downstream gas distribution systems against overpressure.",
    points: ["For natural gas distribution networks", "Supplied with Pietro Fiorentini regulators and valves"],
    tag: "Gas networks",
    img: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/vs-am-58.jpg",
    href: "/brands/pietro-fiorentini",
    cta: "View Pietro Fiorentini",
    tint: "#E6F6FA",
  },
];

const STATS = [
  { value: "50 – 60,000", unit: "psi", label: "Set pressure range across the ranges" },
  { value: "340", unit: "configs", label: "Instrumentation relief valves, online" },
  { value: "5", unit: "ranges", label: "Relief valves, rupture discs and thermal relief" },
  { value: "4", unit: "brands", label: "PANAM · Hiflux · Youngdo · Pietro Fiorentini" },
];

const COMPARE = {
  head: ["Range", "Type", "Pressure range", "Service", "Connections", "Brand"],
  rows: [
    ["RVL / RVH / PRVH", "Spring-adjustable relief", "50 – 15,000 psi", "Liquids and gases on instrument lines", "NPT, BSPT, BSPP, tube fitting", "PANAM"],
    ["High-pressure relief valves", "Proportional, field-adjustable, factory-set", "1,000 – 60,000 psi", "Water, liquid, gas", "UNF", "Hiflux"],
    ["Rupture discs", "Non-reclosing", "~11,500 – 60,000 psi", "Liquid and gas", "Safety head, UNF", "Hiflux"],
    ["Thermal relief", "Thermally activated", "Activates ~105–110 °C", "Hydrogen cylinders", "Integral to cylinder valve", "Youngdo"],
    ["VS/AM 58", "Relief and monitor valve", "By model", "Natural gas networks", "By model", "Pietro Fiorentini"],
  ],
};

const STEPS = [
  ["Set pressure", "At or below the maximum allowable working pressure (MAWP) of the equipment it protects."],
  ["Fluid", "Steam, gas or air usually need a safety valve; liquids a relief valve. Trapped liquid that can heat up needs a small thermal relief valve."],
  ["Relieving capacity", "The valve must pass the flow from the worst credible overpressure case, such as a blocked outlet, a failed regulator or a fire."],
  ["Back pressure", "If the outlet discharges into a header, check the back pressure. Conventional valves have limits; balanced bellows or pilot-operated designs cope with more."],
  ["Connections and size", "Match the inlet and outlet connections, and keep the inlet line short so pressure loss stays low."],
  ["Materials and seals", "Match the body, trim and seals to the fluid and temperature, for example SS 316 and FKM."],
  ["Code and certification", "Pressure vessels and boilers usually need a certified safety valve (ASME, PED/UKCA or ISO 4126). Ask for the certificate with the order."],
];

const STANDARDS = [
  ["PSSR 2000", "Pressure Systems Safety Regulations: the UK duty to protect pressure systems, including a written scheme of examination for protective devices."],
  ["PE(S)R 2016", "Pressure Equipment (Safety) Regulations: UK conformity (UKCA) for pressure equipment and safety accessories."],
  ["PED 2014/68/EU", "EU conformity (CE). Safety accessories are generally category IV."],
  ["ASME BPVC I & VIII", "Safety valves for boilers (Section I) and pressure relief devices for pressure vessels (Section VIII)."],
  ["API 520 / 526 / 527", "Sizing and installation; flanged valve dimensions and orifice sizes; seat tightness."],
  ["ISO 4126-1", "Safety valves for protection against excessive pressure."],
];

const BRANDS = [
  { name: "PANAM", logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png", text: "RVL, RVH and PRVH instrumentation relief valves in SS 316.", href: "/valves/instrumentation-valves/relief-valves", site: "https://www.panamvalve.com/" },
  { name: "Hiflux", logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/hiflux-logo.png", text: "High-pressure relief valves, rupture discs and safety heads to 60,000 psi.", href: "/brands/hiflux", site: "https://www.hiflux.uk.com/" },
  { name: "Youngdo", logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/youngdo-logo.png", text: "Hydrogen cylinder valves with thermally activated pressure relief.", href: "/brands/youngdo" },
  { name: "Pietro Fiorentini", logo: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg", text: "VS/AM 58 relief and monitor valve for gas networks.", href: "/brands/pietro-fiorentini" },
];

const FAQ_ICONS = [CompareArrowsOutlinedIcon, HelpOutlineRoundedIcon, SpeedOutlinedIcon, ShieldOutlinedIcon, AdjustOutlinedIcon, VerifiedOutlinedIcon];

const FAQ = [
  { q: "What is the difference between a safety valve and a relief valve?", a: "A safety valve opens fully and quickly at its set pressure and is used for gases, steam and air. A relief valve opens gradually in proportion to the overpressure and is used for liquids. A safety relief valve can work either way." },
  { q: "What is a pressure relief valve?", a: "Pressure relief valve is the general term for any valve that opens automatically to release pressure above a set point. Safety valves, relief valves and safety relief valves are all types of pressure relief valve." },
  { q: "What pressure ranges do you supply?", a: "PANAM instrumentation relief valves cover 50 to 15,000 psi, and Hiflux high-pressure relief valves cover 1,000 to 60,000 psi. Hiflux rupture discs run from about 11,500 to 60,000 psi." },
  { q: "Can an instrumentation relief valve be used as a safety valve?", a: "Not where a code requires a certified safety valve. Instrumentation relief valves protect lines and instruments; boilers and pressure vessels need a safety valve certified to the relevant code. Ask us which certificates are available for a given model." },
  { q: "What is a rupture disc?", a: "A rupture disc is a thin, non-reclosing membrane that bursts at a set pressure. It is used alone, or upstream of a relief valve to protect the valve from the process fluid." },
  { q: "Do you supply certificates with safety and relief valves?", a: "Certificates are available on request and vary by model. Tell us the code and certificates you need when you request a quote." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Safety Valves & Pressure Relief Valves | Valvenok",
      description: "Pressure relief valves, high-pressure safety valves, rupture discs and thermal relief from partner brands, 50 to 60,000 psi, for gas, liquid and instrument lines.",
      inLanguage: "en-GB",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          { name: "Instrumentation relief valves", url: "https://www.valvenok.com/valves/instrumentation-valves/relief-valves" },
          { name: "Hiflux high-pressure safety and relief valves", url: `https://www.valvenok.com${HIFLUX_SAFETY}` },
          { name: "Hydrogen cylinder valves with thermal relief", url: "https://www.valvenok.com/hydrogen-cryogenic/hydrogen" },
          { name: "Pietro Fiorentini gas network relief valves", url: "https://www.valvenok.com/brands/pietro-fiorentini" },
        ].map((x, i) => ({ "@type": "ListItem", position: i + 1, ...x })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE}#faq`,
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

/* ───────────────────────── sections ───────────────────────── */

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: L.cream, pt: { xs: 4, md: 9 }, pb: { xs: 6, md: 10 } }}>
      <LightBackdrop />
      <Box sx={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1.05fr 0.95fr" }, gap: { xs: 3.5, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Valves</Kicker>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.06, color: T.ink }}>
            <Words text="Safety Valves and" />
            <Words text="Pressure Relief Valves" start={250} sx={gradientText} />
          </Box>
          <Lead>
            Every pressure system needs a last line of defence against overpressure. Valvenok supplies pressure relief valves, high-pressure safety valves, rupture discs and thermal relief devices from specialist partner manufacturers, from 50 psi instrument lines to 60,000 psi test systems, with certificates on request.
          </Lead>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
            {["50 – 60,000 psi set pressure", "SS 316 instrument bodies", "NPT, BSPT, BSPP and UNF"].map((t) => (
              <Box key={t} component="span" sx={{ px: 1.5, py: 0.5, borderRadius: 999, fontSize: "0.8rem", fontWeight: 600, color: T.greenDark, bgcolor: "rgba(255,255,255,0.75)", border: "1px solid #D6EDCE" }}>{t}</Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: { xs: 3, md: 4 } }}>
            <Box component="a" href="#ranges" sx={{ ...pillBtn(true), gap: 0.5 }}>
              Browse ranges <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={pillBtn(false)}>Request a quote</Box>
          </Box>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: { xs: 1, md: 1.5 } }}>
          {RANGES.slice(0, 4).map((r) => (
            <Box key={r.key} component={Link} href={r.href}
              sx={{ textDecoration: "none", bgcolor: "#fff", borderRadius: { xs: "16px", md: "22px" }, border: `1px solid ${T.border}`, boxShadow: T.shadow, p: { xs: 1, md: 1.5 }, transition: "all .2s", "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-4px)" } }}>
              <Box sx={{ height: { xs: 90, md: 130 }, borderRadius: "14px", bgcolor: r.tint, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <Box component="img" src={r.img} alt={r.title} loading="eager" sx={{ ...photo, display: "block", height: { xs: 70, md: 104 }, width: "auto", maxWidth: "80%" }} />
              </Box>
              <Box component="p" sx={{ m: 0, mt: 1, fontSize: { xs: "0.8rem", md: "0.9rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.25 }}>{r.title.split(":")[0]}</Box>
              <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: "0.75rem", fontWeight: 600, color: T.muted }}>{r.tag}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Stats() {
  return (
    <Box sx={{ ...wrap, mt: { xs: -3, md: -5 }, position: "relative", zIndex: 1 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 } }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, borderTop: `4px solid ${[L.lime, L.sky, L.sun, "rgba(183,166,240,0.6)"][i]}` }}>
              <Box sx={{ fontSize: { xs: "1.3rem", md: "2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1 }}>
                {s.value}
                <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>
              </Box>
              <Box component="p" sx={{ m: 0, mt: 1, fontSize: { xs: "0.78rem", md: "0.88rem" }, color: T.body, lineHeight: 1.45 }}>{s.label}</Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

// Lift against pressure: a safety valve pops to full lift at set pressure,
// a relief valve opens in proportion to the overpressure.
function LiftCurve() {
  const x0 = 60, x1 = 400, y0 = 220, y1 = 30;
  const set = 220;
  return (
    <Box component="figure" sx={{ m: 0, p: { xs: 2, md: 3 }, borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
      <Box component="svg" viewBox="0 0 430 270" role="img" aria-label="Lift against pressure: a safety valve jumps to full lift at set pressure; a relief valve opens gradually" sx={{ width: "100%", height: "auto", display: "block" }}>
        <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="#9AA9A0" strokeWidth="1.5" />
        <line x1={x0} y1={y0} x2={x0} y2={y1 - 10} stroke="#9AA9A0" strokeWidth="1.5" />
        <line x1={set} y1={y0} x2={set} y2={y1 - 10} stroke="#C5D0C8" strokeDasharray="4 4" />
        <text x={set} y={y0 + 18} textAnchor="middle" style={{ fontSize: 12, fill: T.muted, fontWeight: 700 }}>Set pressure</text>
        <text x={(x0 + x1) / 2} y={y0 + 40} textAnchor="middle" style={{ fontSize: 12, fill: T.muted }}>Pressure</text>
        <text x={20} y={(y0 + y1) / 2} textAnchor="middle" transform={`rotate(-90 20 ${(y0 + y1) / 2})`} style={{ fontSize: 12, fill: T.muted }}>Lift</text>
        <polyline points={`${x0},${y0} ${set},${y0} ${set + 6},${y1} ${x1},${y1}`} fill="none" stroke={T.green} strokeWidth="4" strokeLinejoin="round" />
        <polyline points={`${x0},${y0 - 2} ${set},${y0 - 2} ${x1 - 20},${y1 + 40}`} fill="none" stroke="#7CB9F0" strokeWidth="4" strokeLinejoin="round" />
        <text x={set + 14} y={y1 - 10} style={{ fontSize: 13, fill: T.greenDark, fontWeight: 800 }}>Safety valve: pops to full lift</text>
        <text x={x0 + 14} y={y1 + 70} style={{ fontSize: 13, fill: "#2F6FA8", fontWeight: 800 }}>
          <tspan x={x0 + 14}>Relief valve:</tspan>
          <tspan x={x0 + 14} dy="16">opens gradually</tspan>
        </text>
      </Box>
      <Box component="figcaption" sx={{ mt: 1, fontSize: "0.82rem", color: T.muted }}>Lift against pressure (illustrative).</Box>
    </Box>
  );
}

function Difference() {
  return (
    <Box component="section" id="difference" aria-labelledby="h2-diff" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
        <Reveal from="left">
          <Kicker>The basics</Kicker>
          <H2 id="h2-diff">Safety Valve or Relief Valve?</H2>
          <Lead>
            A <strong>safety valve</strong> opens fully and almost instantly (it “pops”) when pressure reaches its set point. It is used on gases, steam and air, where pressure must be released fast. A <strong>relief valve</strong> opens gradually, in proportion to the overpressure, and suits liquids. A <strong>safety relief valve</strong> can do either, depending on the service.
          </Lead>
          <Box sx={{ mt: 3 }}>
            <Box component={Link} href="/news/safety-valve-vs-relief-valve" sx={{ ...pillBtn(false), py: 1.1 }}>
              Read the full guide: safety valve vs relief valve <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Reveal>
        <Reveal from="right">
          <LiftCurve />
        </Reveal>
      </Box>
    </Box>
  );
}

function RangeCard({ r }: { r: Range }) {
  return (
    <Box sx={{ height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden" }}>
      <Box sx={{ height: { xs: 160, sm: 200 }, bgcolor: r.tint, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <Box component="img" src={r.img} alt={r.title} loading="lazy" sx={{ ...photo, display: "block", height: { xs: 120, sm: 150 }, width: "auto", maxWidth: "70%" }} />
        <Box component="span" sx={{ position: "absolute", top: 12, left: 12, px: 1.25, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.75rem", fontWeight: 700, color: T.ink }}>{r.brand}</Box>
      </Box>
      <Box sx={{ p: { xs: 2, sm: 2.75 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box component="h3" sx={{ m: 0, mb: 1, fontSize: { xs: "1.1rem", sm: "1.25rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink }}>{titleCase(r.title)}</Box>
        <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: "0.92rem", lineHeight: 1.6, color: T.body }}>{r.text}</Box>
        <Box component="ul" sx={{ m: 0, mb: 2, pl: 2.25, color: T.body, fontSize: "0.88rem", lineHeight: 1.6, flex: 1 }}>
          {r.points.map((p) => <li key={p}>{p}</li>)}
        </Box>
        {r.note && <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.82rem", color: T.muted, fontStyle: "italic" }}>{r.note}</Box>}
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.78rem", fontWeight: 700 }}>{r.tag}</Box>
          <Box component={Link} href={r.href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, textDecoration: "none", "&:hover": { bgcolor: T.green, color: T.greenDeep, borderColor: T.green } }}>
            {r.cta} <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Ranges() {
  return (
    <Box component="section" id="ranges" aria-labelledby="h2-ranges" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Kicker>Our ranges</Kicker>
          <H2 id="h2-ranges">Our Safety and Relief Valve Ranges</H2>
          <Lead>Each range has its own page with full specifications and models. Pick the one that matches your pressure and service.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.5 } }}>
          {RANGES.map((r, i) => (
            <Reveal key={r.key} delay={(i % 3) * 80}>
              <RangeCard r={r} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Compare() {
  return (
    <Box component="section" id="compare" aria-labelledby="h2-compare" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 3 }}>
          <Kicker>At a glance</Kicker>
          <H2 id="h2-compare">Compare the Ranges</H2>
        </Box>
        <Box sx={{ overflowX: "auto", borderRadius: "18px", border: `1px solid ${T.border}` }}>
          <Box component="table" sx={{ width: "100%", minWidth: 760, borderCollapse: "collapse", fontSize: "0.9rem", "& th, & td": { textAlign: "left", px: 2, py: 1.5, borderBottom: `1px solid ${T.border}`, verticalAlign: "top" }, "& th": { bgcolor: T.greenSoft, color: T.greenDeep, fontWeight: 800 }, "& tr:last-of-type td": { borderBottom: 0 }, "& td:first-of-type": { fontWeight: 700, color: T.ink }, "& td": { color: T.body } }}>
            <thead>
              <tr>{COMPARE.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}
            </tbody>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Choose() {
  return (
    <Box component="section" id="choose" aria-labelledby="h2-choose" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Before you order</Kicker>
          <H2 id="h2-choose">How to Choose a Safety or Relief Valve</H2>
          <Lead>Work through these seven points. Not sure? Send us the fluid, set pressure, required capacity, temperature and connections, and we will match the valve.</Lead>
        </Box>
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          {STEPS.map(([k, v], i) => (
            <Box component="li" key={k} sx={{ display: "flex", gap: 2, p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center" }}>{i + 1}</Box>
              <Box>
                <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>{titleCase(k)}</Box>
                <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.65, fontSize: "0.93rem" }}>{v}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Standards() {
  return (
    <Box component="section" id="standards" aria-labelledby="h2-std" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Standards</Kicker>
          <H2 id="h2-std">Standards and UK Regulations</H2>
          <Lead>Certification varies by model, so ask for the certificates you need with your quote.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 2 }}>
          {STANDARDS.map(([code, what], i) => (
            <Reveal key={code} delay={(i % 3) * 70}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                <Box component="h3" sx={{ m: 0, mb: 1, fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em", ...gradientText }}>{code}</Box>
                <Box component="p" sx={{ m: 0, fontSize: "0.9rem", lineHeight: 1.55, color: T.body }}>{what}</Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Brands() {
  return (
    <Box component="section" id="brands" aria-labelledby="h2-brands" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Partner brands</Kicker>
          <H2 id="h2-brands">The Brands Behind the Range</H2>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2.5 }}>
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={i * 90}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 3, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column" }}>
                <Box sx={{ height: 52, display: "flex", alignItems: "center", mb: 2 }}>
                  <Box component="img" src={b.logo} alt={`${b.name} logo`} sx={{ height: 44, maxWidth: 150, objectFit: "contain", display: "block" }} />
                </Box>
                <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.93rem", lineHeight: 1.6, color: T.body, flex: 1 }}>{b.text}</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Box component={Link} href={b.href} sx={{ px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, border: "1px solid #CFEBC6", color: T.greenDark, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>View range</Box>
                  {b.site && (
                    <Box component="a" href={b.site} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, color: T.ink, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
                      Visit website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
                    </Box>
                  )}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" id="faq" aria-labelledby="h2-faq" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 } }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Safety and Relief Valve FAQs</H2>
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
    <Box component="section" aria-labelledby="h2-cta" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Request a Quote</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the fluid, set pressure, required capacity, temperature, connections and code, and we will match the right safety or relief valve from our partner brands.
            </Box>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SafetyReliefHub() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Difference />
      <Ranges />
      <Compare />
      <Choose />
      <Standards />
      <Brands />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
