"use client";

// Actuators hub: the umbrella page for the Actuators menu tab, laid out like the
// Hydrogen & High Pressure hub (hero → stats → how it works → families →
// categories → why us → selector → specifying → standards → brands → FAQ).
// Only the five categories are shown here; series live on the category pages.
// Figures come from our own category and series pages.

import { titleCase } from "@/src/app/Common/titleCase";
import { brandsFor } from "@/src/app/Common/brandRegistry";
import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, LightBackdrop, Words, Reveal, gradientText, useInView, L } from "@/src/app/Common/LightMotion";
import { groupSite } from "@/src/app/Common/group";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const P = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators";

/* ───────────────────────── data ───────────────────────── */

type Cat = { key: string; label: string; title: string; text: string; tag: string; series: number; img: string; href: string; tint: string };

const CATS: Cat[] = [
  { key: "pneumatic", label: "Pneumatic", title: "Pneumatic actuators", text: "Scotch yoke actuators for quarter-turn valves, plus linear actuators. Double acting or spring return for a fail-safe position, ISO 5211 mounting.", tag: "Up to 120,867 Nm", series: 5, img: `${P}/pneumatic/hd.webp`, href: "/pneumatic/actuators", tint: L.mint },
  { key: "electric", label: "Electric", title: "Electric actuators", text: "Quarter-turn, linear and multi-turn electric actuators for on/off and modulating duty. Need only power and a control signal, no air supply.", tag: "On/off & modulating", series: 7, img: `${P}/electric/itq.webp`, href: "/actuators/electric", tint: "#EAF4FF" },
  { key: "hydraulic", label: "Hydraulic", title: "Hydraulic actuators", text: "Compact electro-hydraulic units that need only power, hydraulic rack & pinion and scotch yoke actuators for the largest valves, and linear piston actuators.", tag: "35 – 112,595 Nm", series: 5, img: `${P}/hydraulic/adf.webp`, href: "/actuators/hydraulic", tint: "#FFF7DD" },
  { key: "mechanical", label: "Mechanical", title: "Mechanical actuators", text: "Worm, bevel and industrial gear operators so one person can turn a large valve by hand, or a powered actuator has a manual override.", tag: "Up to 32,000 Nm", series: 3, img: `${P}/mechanical/itg.webp`, href: "/actuators/mechanical", tint: "#F3EEFF" },
  { key: "switches", label: "Accessories", title: "Accessories: limit switch boxes", text: "Valve position indicators that tell the control room whether a valve is open or closed. Mechanical or proximity switches, weatherproof and explosion-proof.", tag: "IP67 / IP68", series: 1, img: `${P}/limit-switches/susin-limit-switch.webp`, href: "/actuators/accessories", tint: "#E6F6FA" },
];

const STATS = [
  { value: "5", unit: "types", label: "Pneumatic, electric, hydraulic, mechanical, accessories" },
  { value: "120,867", unit: "Nm", label: "Highest output torque (HD scotch yoke)" },
  { value: "ISO 5211", unit: "", label: "Standard mounting on quarter-turn actuators" },
  { value: "3", unit: "brands", label: "Susin I-Tork · KOSAPLUS · SPAC" },
];

// Torque at a glance (maximum by category, from the series pages); log scale
const TORQUE = [
  { name: "Pneumatic", note: "10 – 120,867 Nm", from: 10, to: 120867, color: "#8FD47C" },
  { name: "Mechanical (gearboxes)", note: "60 – 32,000 Nm", from: 60, to: 32000, color: "#B7A6F0" },
  { name: "Hydraulic", note: "35 – 112,595 Nm", from: 35, to: 112595, color: "#F4C95D" },
  { name: "Electric (quarter-turn)", note: "25 – 9,000 Nm", from: 25, to: 9000, color: "#7CB9F0" },
];
const LOG_MIN = 1, LOG_MAX = Math.log10(200000);
const pos = (v: number) => Math.round(((Math.log10(v) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 10000) / 100; // rounded so server and browser agree

const CIRCLES = [
  ["5 types", "One supplier"],
  ["ISO 5211", "Direct mounting"],
  ["Fail-safe", "Spring return options"],
  ["UK", "Support & delivery"],
];

const BENEFITS = [
  { icon: <ExtensionOutlinedIcon />, title: "Fits the valve you have", text: "ISO 5211 and NAMUR interfaces, with brackets and couplings for the rest." },
  { icon: <TuneOutlinedIcon />, title: "Controls in the same order", text: "Limit switch boxes, solenoid valves, positioners and manual overrides." },
  { icon: <Inventory2OutlinedIcon />, title: "Every power source", text: "Air, electric, electro-hydraulic or manual, so the choice follows the site, not the catalogue." },
  { icon: <EngineeringOutlinedIcon />, title: "Help with sizing", text: "Send the valve and its torque and we’ll size the actuator with a safety factor." },
];

const WHICH = [
  { app: "Plant air is available at the valve", pick: "Pneumatic actuators: simple, fast and economical on quarter-turn valves", key: "pneumatic" },
  { app: "The valve must go to a safe position if air or power fails", pick: "Spring-return pneumatic actuators, fail-close or fail-open", key: "pneumatic" },
  { app: "No air, only electricity", pick: "Electric actuators, quarter-turn, linear or multi-turn", key: "electric" },
  { app: "Gate or globe valve needing many turns", pick: "Multi-turn electric actuators, or a bevel gearbox for manual service", key: "electric" },
  { app: "Very high torque from a compact unit", pick: "Electro-hydraulic actuators that need only an electrical supply", key: "hydraulic" },
  { app: "The valve is operated rarely, by hand", pick: "A manual worm or bevel gearbox", key: "mechanical" },
  { app: "Show the valve position in the control room", pick: "A limit switch box on the actuator", key: "switches" },
];

const CHECKS = [
  ["Torque", "Size on the valve’s break-out torque, not its running torque, and add a safety factor. A valve that has sat closed for months needs more torque to move."],
  ["Supply", "Air, electricity or both. For pneumatic actuators, size on the lowest pressure the actuator will see; for electric, give the voltage and phase."],
  ["Fail-safe position", "Decide what the valve must do when air or power is lost: close, open or stay where it is. Spring return gives a guaranteed position."],
  ["Duty and control", "On/off or modulating, how often it cycles, and the control signal (for example 4–20 mA)."],
  ["Area and protection", "Hazardous-area classification and ingress protection narrow the choice. Certification varies by model, so check the series page."],
  ["Mounting", "The valve’s top flange (ISO 5211 or ISO 5210) and stem size, so the actuator mounts directly or with the right bracket."],
];

const STANDARDS = [
  ["ISO 5211", "Mounting flange and drive for quarter-turn actuators, so an actuator fits any valve with the same flange.", "Pneumatic, electric, hydraulic, gearboxes"],
  ["ISO 5210", "Mounting interface for multi-turn actuators on gate and globe valves.", "Multi-turn electric, bevel gearboxes"],
  ["NAMUR", "Standard interface for mounting solenoid valves and limit switch boxes on the actuator.", "Pneumatic actuators"],
  ["ATEX / IECEx", "Certification for equipment used in explosive atmospheres.", "Selected models"],
  ["SIL", "Safety integrity level for actuators in safety instrumented functions.", "Selected models"],
  ["IP rating", "Protection against dust and water, e.g. IP67 (temporary immersion), IP68 (continuous).", "Varies by model"],
];

const FAQ_ICONS = [CompareArrowsOutlinedIcon, SettingsInputComponentOutlinedIcon, ShieldOutlinedIcon, BoltOutlinedIcon, SensorsOutlinedIcon, BuildOutlinedIcon];

const HUB_FAQ = [
  { q: "Pneumatic or electric actuator?", a: "Pneumatic actuators are fast, simple and economical where plant air is available, and spring return gives a fail-safe position. Electric actuators need only power and a signal, and suit sites without air." },
  { q: "How do I size an actuator?", a: "Start from the valve’s break-out torque, add a safety factor, and size on the lowest air pressure or supply voltage the actuator will see. Our sizing guide walks through it step by step." },
  { q: "What does spring return mean?", a: "A spring-return actuator uses air or power to move the valve, and a spring to drive it back to a set position when the supply is lost. Double-acting actuators use air for both directions and stay put on loss of air." },
  { q: "When is a hydraulic actuator the right choice?", a: "When the torque is beyond a reasonably sized pneumatic or electric actuator, space is tight, or only electricity is available at a remote valve. Electro-hydraulic units carry their own pump and reservoir." },
  { q: "Can I add limit switches and a positioner?", a: "Yes. Our actuators accept limit switch boxes, solenoid valves and positioners. Tell us the control signal and we’ll quote the full package." },
  { q: "Do I need a gearbox instead of an actuator?", a: "If the valve is operated only a few times a year, a manual gearbox is usually enough: nothing to power, nothing to fail, and far cheaper." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HUB_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "families", label: "Families" },
  { id: "categories", label: "All categories" },
  { id: "why", label: "Why Valvenok" },
  { id: "selector", label: "Find your actuator" },
  { id: "specifying", label: "Specifying" },
  { id: "standards", label: "Standards" },
  { id: "brands", label: "Brands" },
  { id: "faq", label: "FAQ" },
];

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

/* ───────────────────────── sections ───────────────────────── */

function SectionNav() {
  const [active, setActive] = React.useState(SECTIONS[0].id);
  const [progress, setProgress] = React.useState(0);
  const bar = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const f = () => {
      let cur = SECTIONS[0].id;
      for (const x of SECTIONS) {
        const el = document.getElementById(x.id);
        if (el && el.getBoundingClientRect().top <= 240) cur = x.id;
      }
      setActive(cur);
      const h = document.documentElement;
      setProgress(Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)));
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  React.useEffect(() => {
    const el = bar.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el && bar.current) bar.current.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [active]);
  return (
    <Box component="nav" aria-label="On this page" sx={{ position: "sticky", top: { xs: 84, md: 135 }, zIndex: 150, mt: { xs: 4, md: 6 }, px: { xs: 1.5, md: 4 }, pointerEvents: "none" }}>
      <Box sx={{ position: "relative", maxWidth: 1180, mx: "auto", display: "flex", alignItems: "center", gap: 1, pl: { xs: 0.75, md: 1 }, pr: 0.75, py: 0.6, borderRadius: 999, bgcolor: "rgba(255,255,255,0.82)", backdropFilter: "saturate(1.6) blur(14px)", border: "1px solid rgba(207,235,198,0.9)", boxShadow: "0 10px 30px -12px rgba(14,27,18,0.22)", overflow: "hidden", pointerEvents: "auto" }}>
        <Box sx={{ display: { xs: "none", md: "inline-flex" }, alignItems: "center", gap: 1, flexShrink: 0, pl: 0.5, pr: 1.75, mr: 0.5, borderRight: `1px solid ${T.border}` }}>
          <Box sx={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg, ${T.green}, #9BEA7E)`, color: T.greenDeep, display: "grid", placeItems: "center", "& svg": { fontSize: 17 } }}>
            <SettingsInputComponentOutlinedIcon />
          </Box>
          <Box component="span" sx={{ fontSize: "0.86rem", fontWeight: 800, color: T.ink, whiteSpace: "nowrap" }}>Actuators</Box>
        </Box>
        <Box ref={bar} sx={{ flex: 1, display: "flex", gap: 0.25, overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {SECTIONS.map((x) => {
            const on = x.id === active;
            return (
              <Box key={x.id} data-id={x.id} component="a" href={`#${x.id}`} aria-current={on ? "true" : undefined}
                sx={{ flexShrink: 0, px: 1.5, py: 0.7, borderRadius: 999, fontSize: "0.82rem", fontWeight: on ? 700 : 500, color: on ? "#fff" : T.body, bgcolor: on ? T.greenDark : "transparent", textDecoration: "none", transition: "all .2s", "&:hover": { color: on ? "#fff" : T.greenDark, bgcolor: on ? T.greenDark : T.greenSoft } }}>
                {x.label}
              </Box>
            );
          })}
        </Box>
        <Box aria-hidden sx={{ position: "absolute", left: 0, bottom: 0, height: 2, width: `${progress * 100}%`, background: `linear-gradient(90deg, ${T.green}, #9BEA7E)`, transition: "width .1s linear" }} />
      </Box>
    </Box>
  );
}

function Hero() {
  const tiles = [...CATS.map((c) => ({ key: c.key, img: c.img, label: c.key === "switches" ? "Accessories" : c.title, sub: `${c.series} ${c.series === 1 ? "series" : "series"}`, href: c.href })), { key: "help", img: "", label: "Not sure?", sub: "Find your actuator", href: "#selector" }];
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: L.cream, pt: { xs: 4, md: 9 }, pb: { xs: 6, md: 10 } }}>
      <LightBackdrop />
      <Box sx={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "1fr 1fr" }, gap: { xs: 3.5, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Products</Kicker>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.9rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="Valve" />
            <Words text="Actuators" start={250} sx={gradientText} />
          </Box>
          <Lead>
            Pneumatic, electric, hydraulic and manual actuators to open, close and position your valves, plus limit switch boxes to report where they are. One UK supplier for the whole automation package.
          </Lead>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 0.75, md: 1 }, mt: { xs: 2.5, md: 3 } }}>
            {["#quarter-turn", "#spring-return", "#ISO5211", "#multi-turn", "#fail-safe", "#limit-switches"].map((t) => (
              <Box key={t} component="span" sx={{ flexShrink: 0, px: { xs: 1.1, md: 1.5 }, py: 0.4, borderRadius: 999, fontSize: { xs: "0.74rem", md: "0.8rem" }, fontWeight: 600, color: T.greenDark, bgcolor: "rgba(255,255,255,0.75)", border: "1px solid #D6EDCE" }}>{t}</Box>
            ))}
          </Box>
          <Box sx={{ display: { xs: "grid", sm: "flex" }, gridTemplateColumns: "1.25fr 1fr", flexWrap: "wrap", gap: 1, mt: { xs: 3, md: 4 } }}>
            <Box component="a" href="#categories" sx={{ ...pillBtn(true), justifyContent: "center", gap: 0.5, px: { xs: 1, sm: 3 }, fontSize: { xs: "0.86rem", sm: "0.95rem" } }}>
              <Box component="span" sx={{ whiteSpace: "nowrap" }}>Browse categories</Box> <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/contact" sx={{ ...pillBtn(false), justifyContent: "center", px: { xs: 1.5, sm: 3 }, fontSize: { xs: "0.9rem", sm: "0.95rem" } }}>
              Get a quote
            </Box>
          </Box>
          {/* Brands we also distribute through their own websites: logo chips that open the site */}
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, mt: { xs: 2, md: 3 } }}>
            <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: 600, color: T.muted, mr: 0.25 }}>Also from</Box>
            {brandsFor("actuators").filter((b) => b.external).map(({ brand, href }) => (
              <Box key={brand.slug} component="a" href={href} target="_blank" rel="noopener" aria-label={`${brand.name} website`}
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, pl: 0.75, pr: 1.25, py: 0.6, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: "0 1px 3px rgba(14,27,18,0.06)", textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", transform: "translateY(-1px)" }, "&:hover svg": { color: T.greenDark } }}>
                <Box sx={{ width: 64, height: 26, display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={brand.logo} alt={brand.name} sx={{ display: "block", maxWidth: 56, maxHeight: 22, objectFit: "contain", transform: brand.logoScale ? `scale(${Math.min(brand.logoScale, 1.8)})` : undefined }} />
                </Box>
                <ArrowOutwardRoundedIcon sx={{ fontSize: 15, color: T.muted, transition: "color .15s" }} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* 5 categories + "Not sure?": 2 columns on phones, 3 × 2 on desktop */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: 1, md: 1.5 } }}>
          {tiles.map((t) => (
            <Box
              key={t.key}
              component={t.href.startsWith("#") ? "a" : Link}
              href={t.href}
              sx={{
                textDecoration: "none",
                transition: "border-color .2s, box-shadow .2s, transform .2s",
                "&:hover": { borderColor: "#BFE5B3", boxShadow: T.shadowHover, transform: "translateY(-4px)" },
                "&:hover .tile-go": { color: T.greenDark },
                bgcolor: t.key === "help" ? T.greenSoft : "#fff",
                borderRadius: { xs: "16px", md: "22px" },
                border: `1px solid ${t.key === "help" ? "#CFEBC6" : T.border}`,
                boxShadow: T.shadow,
                p: { xs: 0.75, md: 1.5 },
                display: { xs: "flex", md: "block" },
                alignItems: "center",
                gap: 1,
                minWidth: 0,
              }}
            >
              <Box sx={{ flexShrink: 0, width: { xs: 52, md: "auto" }, height: { xs: 52, md: 104 }, borderRadius: { xs: "12px", md: "16px" }, bgcolor: t.key === "help" ? "#fff" : T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                {t.img ? (
                  <Box component="img" src={t.img} alt={t.label} loading="eager" sx={{ ...photo, width: "78%", height: "78%" }} />
                ) : (
                  <HelpOutlineRoundedIcon sx={{ fontSize: { xs: 26, md: 48 }, color: T.greenDark }} />
                )}
              </Box>
              <Box sx={{ mt: { xs: 0, md: 1.25 }, textAlign: { xs: "left", md: "center" }, minWidth: 0 }}>
                <Box component="p" sx={{ m: 0, fontSize: { xs: "0.8rem", md: "0.92rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink }}>{t.label}</Box>
                <Box component="p" className="tile-go" sx={{ m: 0, mt: 0.25, display: "inline-flex", alignItems: "center", gap: 0.25, fontSize: { xs: "0.72rem", md: "0.78rem" }, fontWeight: 600, color: T.muted, transition: "color .2s" }}>
                  {t.sub} <ArrowForwardRoundedIcon sx={{ fontSize: 13 }} />
                </Box>
              </Box>
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
              <Box sx={{ fontSize: { xs: "1.5rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                {s.value}
                {s.unit && <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>}
              </Box>
              {s.unit === "brands" ? (
                // Brand logos instead of names (display only, not links)
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.25 }}>
                  {brandsFor("actuators").map(({ brand }) => (
                    <Box key={brand.slug} title={brand.name}
                      sx={{ width: 52, height: 36, borderRadius: "10px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
                      <Box component="img" src={brand.logo} alt={brand.name} sx={{ display: "block", maxWidth: 40, maxHeight: 24, objectFit: "contain", transform: brand.logoScale ? `scale(${Math.min(brand.logoScale, 2)})` : undefined }} />
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: "0.85rem", color: T.body, lineHeight: 1.4 }}>{s.label}</Box>
              )}
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

/** How a quarter-turn actuator works: the actuator turns the stem 90° and the valve opens.
 *  Plays when scrolled into view; buttons switch between closed and open. */
function ActuatorDiagram() {
  const [ref, on] = useInView<HTMLDivElement>(0.35);
  const [open, setOpen] = React.useState<boolean | null>(null); // null = auto-play
  const anim = open === null && on;
  const state = open ?? false;
  const lbl = { fontWeight: 700, fill: T.body, fontFamily: "inherit" } as const;
  return (
    <Box ref={ref}>
      <Box
        component="svg"
        viewBox="0 0 420 330"
        role="img"
        aria-label="A quarter-turn actuator mounted on a valve through an ISO 5211 flange. Air or power drives the actuator, which turns the stem 90 degrees to open or close the valve."
        sx={{
          width: "100%", height: "auto", display: "block",
          "& text": { fontSize: { xs: "15px", sm: "14px", md: "13px" } },
          "@keyframes acDisc": { "0%,20%": { transform: "rotate(0deg)" }, "45%,75%": { transform: "rotate(90deg)" }, "100%": { transform: "rotate(0deg)" } },
          "@keyframes acPiston": { "0%,20%": { transform: "translateX(0)" }, "45%,75%": { transform: "translateX(-26px)" }, "100%": { transform: "translateX(0)" } },
          "@keyframes acPistonR": { "0%,20%": { transform: "translateX(0)" }, "45%,75%": { transform: "translateX(26px)" }, "100%": { transform: "translateX(0)" } },
          "@keyframes acFlow": { "0%,40%": { opacity: 0 }, "50%,72%": { opacity: 1 }, "85%,100%": { opacity: 0 } },
          "& .disc, & .pl, & .pr, & .flow": { transformBox: "fill-box", transformOrigin: "center", transition: "transform .6s ease, opacity .4s ease" },
          "& .disc": anim ? { animation: "acDisc 6s ease-in-out infinite" } : { transform: state ? "rotate(90deg)" : "none" },
          "& .pl": anim ? { animation: "acPiston 6s ease-in-out infinite" } : { transform: state ? "translateX(-26px)" : "none" },
          "& .pr": anim ? { animation: "acPistonR 6s ease-in-out infinite" } : { transform: state ? "translateX(26px)" : "none" },
          "& .flow": anim ? { animation: "acFlow 6s ease-in-out infinite" } : { opacity: state ? 1 : 0 },
        }}
      >
        <defs>
          <linearGradient id="acBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6F9FB" />
            <stop offset=".5" stopColor="#DCE3EA" />
            <stop offset="1" stopColor="#B7C3CF" />
          </linearGradient>
        </defs>
        {/* actuator body with two pistons */}
        <rect x="90" y="40" width="240" height="70" rx="16" fill="url(#acBody)" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="104" y="58" width="22" height="34" rx="4" className="pl" fill={T.greenDark} />
        <rect x="294" y="58" width="22" height="34" rx="4" className="pr" fill={T.greenDark} />
        <circle cx="210" cy="75" r="20" fill="#fff" stroke="#7C8B9A" strokeWidth="2" />
        <path d="M200 75 h20 M210 65 v20" stroke="#7C8B9A" strokeWidth="3" />
        <text x="210" y="28" textAnchor="middle" style={{ ...lbl, fill: T.ink, fontWeight: 800 }}>Actuator</text>
        <text x="350" y="70" style={{ ...lbl, fontSize: 13 }}>Air or</text>
        <text x="350" y="86" style={{ ...lbl, fontSize: 13 }}>power in</text>
        <path d="M340 75 h-8" stroke={T.greenDark} strokeWidth="3" />
        {/* ISO 5211 mounting flange + stem */}
        <rect x="170" y="112" width="80" height="12" rx="3" fill="#C9D3DC" stroke="#7C8B9A" strokeWidth="2" />
        <rect x="204" y="124" width="12" height="44" fill="#9AA9B6" stroke="#5C6B7A" strokeWidth="1.5" />
        <text x="12" y="122" style={lbl}>ISO 5211 flange</text>
        <path d="M120 118 L168 118" stroke="#B9C4CE" strokeDasharray="3 3" />
        <text x="12" y="150" style={lbl}>Stem turns 90°</text>
        <path d="M120 146 L200 146" stroke="#B9C4CE" strokeDasharray="3 3" />
        {/* pipe and valve body */}
        <rect x="20" y="210" width="380" height="60" fill="url(#acBody)" stroke="#8E9CAB" strokeWidth="2" />
        <rect x="20" y="222" width="380" height="36" fill="#fff" />
        <circle cx="210" cy="240" r="56" fill="#EEF2F5" stroke="#5C6B7A" strokeWidth="2.5" />
        <circle cx="210" cy="240" r="40" fill="#fff" stroke="#9AA9B6" strokeWidth="2" />
        {/* disc (seen from above: a bar across the bore) */}
        <rect className="disc" x="204" y="202" width="12" height="76" rx="6" fill={T.greenDark} />
        <rect x="204" y="168" width="12" height="32" fill="#9AA9B6" stroke="#5C6B7A" strokeWidth="1.5" />
        <path className="flow" d="M30 240 H160 M260 240 H392" stroke={T.green} strokeWidth="6" strokeLinecap="round" strokeDasharray="10 8" />
        <text x="210" y="320" textAnchor="middle" style={lbl}>Valve: closed ↔ open in a quarter turn</text>
      </Box>
      <Box role="group" aria-label="Show the valve" sx={{ mt: 1.5, display: "flex", justifyContent: "center", gap: 1 }}>
        {([["Closed", false], ["Open", true]] as const).map(([label, v]) => {
          const active = open === v;
          return (
            <Box key={label} component="button" type="button" aria-pressed={active} onClick={() => setOpen(v)}
              sx={{ cursor: "pointer", fontFamily: "inherit", px: 2, py: 0.75, borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, border: `1px solid ${active ? T.green : T.border}`, bgcolor: active ? T.greenSoft : "#fff", color: active ? T.greenDark : T.body }}>
              {label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Intro() {
  return (
    <Box component="section" id="overview" aria-labelledby="h2-intro" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 12 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
        <Reveal from="left">
          <Box sx={{ p: { xs: 1.5, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <ActuatorDiagram />
          </Box>
        </Reveal>
        <Reveal from="right">
          <Kicker>How it works</Kicker>
          <H2 id="h2-intro">
            <Box component="span" sx={gradientText}>A Quarter Turn,</Box> on Command
          </H2>
          <Lead>
            An actuator replaces the hand on the valve. It mounts on the valve’s top flange and turns the stem: a quarter turn for ball, butterfly and plug valves, many turns for gate and globe valves. Air, electricity or hydraulic power drives it; a spring can return it to a safe position if the supply fails. Valvenok supplies <Box component="strong" sx={{ color: T.ink }}>pneumatic, electric, hydraulic and manual actuators</Box>, plus the limit switches that report their position.
          </Lead>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 3.5 }}>
            <Box component={Link} href="/news/how-to-choose-a-valve-actuator" sx={{ ...pillBtn(false), py: 1.1 }}>
              Read: how to choose a valve actuator <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Showcase() {
  const [i, setI] = React.useState(0);
  const s = CATS[i];
  return (
    <Box component="section" id="families" aria-label="Actuator families" sx={{ scrollMarginTop: 190, position: "relative", overflow: "hidden", py: { xs: 6, md: 9 }, background: `linear-gradient(135deg, ${L.mint} 0%, #F3F7FB 60%, #FFF9E8 100%)` }}>
      <Box sx={{ ...wrap, position: "relative" }}>
        <Kicker>Actuator families · hover or tap to switch</Kicker>
        <Box role="tablist" aria-label="Families" sx={{ display: "flex", gap: { xs: 1.5, md: 2.5 }, alignItems: "stretch", mb: { xs: 3, md: 2 } }}>
          <Box sx={{ position: "relative", width: 34, flexShrink: 0, borderRadius: 999, bgcolor: "#fff", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)", display: { xs: "none", sm: "block" } }}>
            <Box sx={{ position: "absolute", left: 4, width: 26, height: 26, borderRadius: "50%", bgcolor: T.green, top: `calc(4px + ${i} * (100% - 8px - 26px) / ${CATS.length - 1})`, transition: "top .25s cubic-bezier(.2,.8,.2,1)", boxShadow: "0 2px 6px rgba(46,139,30,0.35)" }} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" }, gap: { xs: 1, sm: 0.25 }, flexWrap: "wrap" }}>
            {CATS.map((x, k) => (
              <Box key={x.key} component="button" role="tab" aria-selected={k === i} onClick={() => setI(k)} onMouseEnter={() => setI(k)} onFocus={() => setI(k)}
                sx={{ textAlign: "left", cursor: "pointer", border: 0, bgcolor: { xs: k === i ? "#fff" : "transparent", sm: "transparent" }, borderRadius: 999, px: { xs: 1.5, sm: 0 }, py: { xs: 0.75, sm: 0.6 }, fontFamily: "inherit", fontSize: { xs: "0.9rem", md: "1.1rem" }, fontWeight: k === i ? 700 : 500, color: k === i ? T.greenDark : T.body, transition: "color .2s", "&:hover": { color: T.greenDark } }}>
                {x.title}
              </Box>
            ))}
          </Box>
        </Box>
        <Box key={s.key} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" }, gap: { xs: 3, md: 6 }, alignItems: "center", minHeight: { md: 420 } }}>
          <Box sx={{ display: "grid", placeItems: "center", height: { xs: 260, md: 420 }, borderRadius: "32px", bgcolor: "#fff", boxShadow: "0 30px 60px -30px rgba(14,27,18,0.18)", overflow: "hidden", animation: "wordIn .3s cubic-bezier(.2,.8,.2,1) both" }}>
            <Box component="img" src={s.img} alt={s.title} sx={{ height: { xs: 190, md: 320 }, width: "auto", maxWidth: "80%", ...photo }} />
          </Box>
          <Box sx={{ animation: "wordIn .3s cubic-bezier(.2,.8,.2,1) .05s both" }}>
            <Box component="h2" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", md: "3.6rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: T.ink }}>{titleCase(s.title)}</Box>
            <Box component="p" sx={{ m: 0, mb: 2, maxWidth: 520, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>{s.text}</Box>
            <Box component="span" sx={{ display: "inline-block", mb: 3.5, px: 1.5, py: 0.6, borderRadius: 999, bgcolor: "#fff", color: T.greenDark, fontSize: "0.85rem", fontWeight: 700 }}>{s.tag}</Box>
            <Box>
              <Box component={Link} href={s.href} sx={{ ...pillBtn(false), bgcolor: T.ink, color: "#fff", border: 0, "&:hover": { bgcolor: T.greenDark, color: "#fff" } }}>
                View {s.title.toLowerCase()} <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function CatCard({ c }: { c: Cat }) {
  return (
    <Box component={Link} href={c.href}
      sx={{
        display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: { xs: "16px", sm: "22px" }, bgcolor: "#fff", border: `1px solid ${T.border}`,
        overflow: "hidden", textDecoration: "none", color: "inherit", transition: "transform .25s, box-shadow .25s, border-color .25s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" },
        "&:hover .go": { bgcolor: T.green, color: T.greenDeep }, "&:hover img": { transform: "scale(1.06)" },
      }}>
      <Box sx={{ height: { xs: 150, sm: 210 }, bgcolor: c.tint, display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box component="img" src={c.img} alt={c.title} loading="lazy" sx={{ height: { xs: 120, sm: 170 }, width: "auto", maxWidth: "78%", transition: "transform .4s", ...photo }} />
      </Box>
      <Box sx={{ p: { xs: 1.75, sm: 2.75 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "1.05rem", sm: "1.3rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{titleCase(c.title)}</Box>
        <Box component="p" sx={{ m: 0, mb: 2, fontSize: { xs: "0.85rem", sm: "0.92rem" }, lineHeight: 1.55, color: T.body, flex: 1 }}>{c.text}</Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.78rem", fontWeight: 700, whiteSpace: "nowrap" }}>{c.tag}</Box>
          <Box className="go" component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, whiteSpace: "nowrap", px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, transition: "all .2s" }}>
            View range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Categories() {
  return (
    <Box component="section" id="categories" aria-labelledby="h2-cats" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 190 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Kicker>Our categories</Kicker>
          <H2 id="h2-cats">Every Actuator We Supply</H2>
          <Lead center>Pick a category to see its series, sizes and models, with a quote on each.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(6, 1fr)" }, gap: { xs: 1.5, md: 2.5 }, "& > *": { gridColumn: { lg: "span 2" } }, "& > *:nth-of-type(n+4)": { gridColumn: { lg: "span 3" } } }}>
          {CATS.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 80}>
              <CatCard c={c} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function TorqueChart() {
  const [ref, on] = useInView<HTMLDivElement>(0.25);
  return (
    <Box ref={ref} sx={{ p: { xs: 2.5, md: 4 }, borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
      <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1.05rem", fontWeight: 800, color: T.ink }}>Torque Range at a Glance</Box>
      <Box component="p" sx={{ m: 0, mb: 3, fontSize: "0.85rem", color: T.muted }}>Output torque by category, 10 to 120,867 Nm (log scale). Ratings vary by model.</Box>
      <Box sx={{ display: "grid", gap: 2.25 }}>
        {TORQUE.map((p, i) => (
          <Box key={p.name}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", columnGap: 2, mb: 0.75, fontSize: "0.88rem" }}>
              <Box component="span" sx={{ fontWeight: 700, color: T.ink }}>{p.name}</Box>
              <Box component="span" sx={{ color: T.body }}>{p.note}</Box>
            </Box>
            <Box sx={{ position: "relative", height: 12, borderRadius: 999, bgcolor: T.surface, overflow: "hidden" }}>
              <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${pos(p.from)}%`, width: on ? `${pos(p.to) - pos(p.from)}%` : 0, borderRadius: 999, bgcolor: p.color, transition: `width 1.1s cubic-bezier(.2,.8,.2,1) ${i * 150}ms` }} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1.5, fontSize: "0.72rem", color: T.muted }}>
        <span>10</span><span>100</span><span>1,000</span><span>10,000</span><span>100,000 Nm</span>
      </Box>
    </Box>
  );
}

function Why() {
  return (
    <Box component="section" id="why" aria-labelledby="h2-why" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Kicker>Buying from Valvenok</Kicker>
          <H2 id="h2-why">Sized, Fitted and Ready to Control</H2>
        </Box>
        <Box sx={{ display: { xs: "grid", md: "flex" }, gridTemplateColumns: "repeat(2, auto)", justifyContent: "center", alignItems: "center", gap: { xs: 1.5, md: 2 }, mb: { xs: 7, md: 10 } }}>
          {CIRCLES.map(([big, small], k) => (
            <React.Fragment key={big}>
              {k > 0 && <Box aria-hidden sx={{ display: { xs: "none", md: "block" }, fontSize: "2.4rem", fontWeight: 300, color: T.green, lineHeight: 1 }}>+</Box>}
              <Reveal from="zoom" delay={k * 120}>
                <Box sx={{ width: { xs: 132, sm: 160, md: 200 }, aspectRatio: "1 / 1", borderRadius: "50%", border: `1.5px solid ${T.ink}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", p: 2, boxSizing: "border-box", bgcolor: "#fff", transition: "all .25s", "&:hover": { bgcolor: T.greenSoft, borderColor: T.greenDark, transform: "translateY(-4px)" } }}>
                  <Box sx={{ fontSize: { xs: "1.05rem", md: "1.45rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.ink, lineHeight: 1.1 }}>
                    {big}<Box component="span" sx={{ color: T.green }}>.</Box>
                  </Box>
                  <Box sx={{ mt: 0.75, fontSize: { xs: "0.72rem", md: "0.85rem" }, color: T.body, lineHeight: 1.3 }}>{small}</Box>
                </Box>
              </Reveal>
            </React.Fragment>
          ))}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: { xs: 3, md: 3.5 } }}>
            {BENEFITS.map((b, k) => (
              <Reveal key={b.title} from="left" delay={k * 100}>
                <Box component="li" sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
                  <Box sx={{ flexShrink: 0, width: 58, height: 58, borderRadius: "50%", bgcolor: T.greenSoft, border: "1px solid #CFEBC6", color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 28 } }}>{b.icon}</Box>
                  <Box>
                    <Box component="h3" sx={{ m: 0, fontSize: { xs: "1.15rem", md: "1.35rem" }, fontWeight: 700, color: T.ink, letterSpacing: "-0.01em" }}>{titleCase(b.title)}</Box>
                    <Box component="p" sx={{ m: 0, mt: 0.25, fontSize: "0.95rem", color: T.body, lineHeight: 1.55 }}>{b.text}</Box>
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
          <Reveal from="right">
            <TorqueChart />
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}

function Selector() {
  const [i, setI] = React.useState(0);
  const pick = WHICH[i];
  const c = CATS.find((x) => x.key === pick.key)!;
  return (
    <Box component="section" id="selector" aria-labelledby="h2-which" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Quick selector</Kicker>
          <H2 id="h2-which">Which Actuator Do I Need?</H2>
          <Lead>Choose what matters most at the valve and we’ll point you to the right category.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 2.5, md: 4 }, alignItems: "stretch" }}>
          <Box sx={{ display: "grid", gap: 1 }}>
            {WHICH.map((w, k) => {
              const on = k === i;
              return (
                <Box key={w.app} component="button" onClick={() => setI(k)} aria-pressed={on}
                  sx={{ textAlign: "left", cursor: "pointer", fontFamily: "inherit", fontSize: "0.95rem", fontWeight: on ? 700 : 500, px: 2.25, py: 1.5, borderRadius: "14px", border: `1px solid ${on ? "#BFE5B3" : T.border}`, bgcolor: on ? T.greenSoft : "#fff", color: on ? T.greenDeep : T.ink, display: "flex", alignItems: "center", gap: 1.5, transition: "all .2s", "&:hover": { borderColor: "#BFE5B3" } }}>
                  <Box component="span" aria-hidden sx={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", border: `2px solid ${on ? T.greenDark : "#C5D0C8"}`, display: "grid", placeItems: "center" }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: T.greenDark, transform: on ? "scale(1)" : "scale(0)", transition: "transform .2s" }} />
                  </Box>
                  <Box component="span" sx={{ flex: 1 }}>{w.app}</Box>
                </Box>
              );
            })}
          </Box>
          <Box key={i} sx={{ borderRadius: "24px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: "hidden", display: "flex", flexDirection: "column", animation: "wordIn .45s cubic-bezier(.2,.8,.2,1) both" }}>
            <Box sx={{ height: { xs: 200, md: 260 }, bgcolor: c.tint, display: "grid", placeItems: "center", overflow: "hidden" }}>
              <Box component="img" src={c.img} alt={c.title} sx={{ height: { xs: 160, md: 210 }, width: "auto", maxWidth: "70%", ...photo }} />
            </Box>
            <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
              <Box component="p" sx={{ m: 0, mb: 0.75, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase !important", color: T.muted }}>Start with</Box>
              <Box component="p" sx={{ m: 0, mb: 2.5, fontSize: { xs: "1.2rem", md: "1.4rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{pick.pick}</Box>
              <Box component={Link} href={c.href} sx={pillBtn(true)}>
                Go to {c.title.toLowerCase()} <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Specifying() {
  return (
    <Box component="section" id="specifying" aria-labelledby="h2-spec" sx={{ py: { xs: 8, md: 11 }, scrollMarginTop: 190 }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Before you order</Kicker>
          <H2 id="h2-spec">Specifying an Actuator</H2>
          <Lead>Check these six points before you order. If you’re unsure, send us the valve details and we’ll size it.</Lead>
        </Box>
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          {CHECKS.map(([k, v], i) => (
            <Box component="li" key={k} sx={{ display: "flex", gap: 2, p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center" }}>{i + 1}</Box>
              <Box>
                <Box component="h3" sx={{ m: 0, mb: 0.5, fontSize: "1rem", fontWeight: 800, color: T.ink }}>{titleCase(k)}</Box>
                <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.65, fontSize: "0.93rem" }}>{v}</Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box component={Link} href="/news/valve-actuator-sizing-torque-guide" sx={{ ...pillBtn(false), py: 1.1 }}>
            Read: actuator sizing explained <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Standards() {
  return (
    <Box component="section" id="standards" aria-labelledby="h2-std" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Standards</Kicker>
          <H2 id="h2-std">Standards Explained</H2>
          <Lead>Certification varies by model, so check the series page for each actuator.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 2 }}>
          {STANDARDS.map(([code, what, where], i) => (
            <Reveal key={code} delay={(i % 3) * 70}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 2.5, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
                <Box component="h3" sx={{ m: 0, mb: 1, fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.02em", ...gradientText }}>{titleCase(code)}</Box>
                <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: "0.9rem", lineHeight: 1.55, color: T.body }}>{what}</Box>
                <Box component="p" sx={{ m: 0, fontSize: "0.78rem", fontWeight: 700, color: T.muted }}>Where: {where}</Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Brands() {
  const kosa = groupSite("KOSAPLUS UK");
  const spac = groupSite("SPAC Pneumatic");
  const list = [
    { name: "Susin", logo: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp", text: "Scotch yoke and linear pneumatic actuators, quarter-turn, linear and multi-turn electric actuators, gearboxes and limit switch boxes.", links: [{ label: "About Susin I-Tork", href: "/brands/susin" }, { label: "Pneumatic", href: "/pneumatic/actuators" }, { label: "Electric", href: "/actuators/electric" }] },
    { name: "KOSAPLUS", logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png", text: "Scotch yoke pneumatic actuators, compact electric actuators and limit switch boxes.", links: [], site: kosa },
    { name: "SPAC", logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp", text: "Spring-return rack & pinion pneumatic actuators, priced and ready to order online.", links: [], site: spac },
  ];
  return (
    <Box component="section" id="brands" aria-labelledby="h2-brands" sx={{ scrollMarginTop: 190, py: { xs: 8, md: 11 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Shop by brand</Kicker>
          <H2 id="h2-brands">The Brands Behind the Range</H2>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2.5 }}>
          {list.map((b, i) => (
            <Reveal key={b.name} delay={i * 90}>
              <Box sx={{ height: "100%", boxSizing: "border-box", p: 3, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column" }}>
                <Box sx={{ height: 52, display: "flex", alignItems: "center", mb: 2 }}>
                  <Box component="img" src={b.logo} alt={`${b.name} logo`} sx={{ height: b.name === "KOSAPLUS" ? 90 : 44, maxWidth: b.name === "KOSAPLUS" ? 220 : 150, objectFit: "contain", display: "block" }} />
                </Box>
                <Box component="p" sx={{ m: 0, mb: 2, fontSize: "0.93rem", lineHeight: 1.6, color: T.body, flex: 1 }}>{b.text}</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {b.links.map((l) => (
                    <Box key={l.href} component={Link} href={l.href} sx={{ px: 1.5, py: 0.6, borderRadius: 999, bgcolor: T.greenSoft, border: "1px solid #CFEBC6", color: T.greenDark, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", "&:hover": { bgcolor: "#DDF3D6" } }}>{l.label}</Box>
                  ))}
                  {b.site && (
                    <Box component="a" href={b.site.url} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, color: T.ink, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", "&:hover": { borderColor: T.greenDark, color: T.greenDark } }}>
                      Visit {b.site.name} website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
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
    <Box component="section" id="faq" aria-labelledby="h2-faq" sx={{ scrollMarginTop: 190, py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Actuator Questions</H2>
        </Box>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {HUB_FAQ.map((f, i) => (
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need Help Choosing?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the valve type and size, its torque if you know it, the supply available and the fail-safe position, and we’ll recommend the actuator and quote it with its accessories.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Request a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/quick-order" sx={pillBtn(false)}>Quick Order</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ActuatorsHub() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <SectionNav />
      <Intro />
      <Showcase />
      <Categories />
      <Why />
      <Selector />
      <Specifying />
      <Standards />
      <Brands />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
