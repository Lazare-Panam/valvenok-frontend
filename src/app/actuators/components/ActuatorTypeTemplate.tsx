"use client";

// TEMPLATE for a level-2 type page (Pneumatic / Electric Actuators), same format
// as Sanitary Fittings. Not used yet: kept to adapt when those pages are redesigned.
// only: it helps the buyer pick one of the five categories. Series details,
// model lists and quotes live on the category and series pages.
// Figures come from our own series pages (nothing new is claimed here).

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { FAQ } from "@/src/app/news/components/Article";

const P = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators";

type Category = {
  key: "pneumatic" | "electric" | "hydraulic" | "mechanical" | "switches";
  title: string;
  does: string;
  text: string;
  series: string[];
  tag: string;
  img: string;
  href: string;
};

const CATEGORIES: Category[] = [
  {
    key: "pneumatic",
    title: "Pneumatic Actuators",
    does: "Air-powered, fast and fail-safe with spring return",
    text: "Rack & pinion and scotch yoke actuators for quarter-turn valves, plus linear actuators. Double acting or spring return, ISO 5211 mounting.",
    series: ["SRA", "AD", "PDS", "HD", "MHD", "PLDS", "MPLDS"],
    tag: "up to 120,867 Nm",
    img: `${P}/pneumatic/hd.webp`,
    href: "/pneumatic/actuators",
  },
  {
    key: "electric",
    title: "Electric Actuators",
    does: "Runs from mains power, no air supply needed",
    text: "Quarter-turn, linear and multi-turn electric actuators for on/off and modulating duty, with handwheel override.",
    series: ["ITQ", "IQL", "ITL", "ITM", "PVAE"],
    tag: "on/off & modulating",
    img: `${P}/electric/itq.webp`,
    href: "/actuators/electric",
  },
  {
    key: "hydraulic",
    title: "Hydraulic Actuators",
    does: "High torque from a compact unit, needs only power",
    text: "Electro-hydraulic rotary actuators with their own pump and reservoir, low-pressure PANDA and high-pressure PA variants.",
    series: ["PANDA", "PA"],
    tag: "46 – 10,000 Nm",
    img: `${P}/hydraulic/adf.webp`,
    href: "/actuators/hydraulic",
  },
  {
    key: "mechanical",
    title: "Mechanical Actuators",
    does: "Manual gearboxes for valves that rarely move",
    text: "Worm, bevel and industrial gear operators that let one person turn a large valve by hand, or give a powered actuator a manual override.",
    series: ["MAB", "MAW", "ITG"],
    tag: "quarter-turn & multi-turn",
    img: `${P}/mechanical/itg.webp`,
    href: "/actuators/mechanical",
  },
  {
    key: "switches",
    title: "Limit Switch Boxes",
    does: "Tells the control room if the valve is open or closed",
    text: "Valve position indicators with mechanical or proximity switches, weatherproof and explosion-proof versions.",
    series: ["ITS", "KLS"],
    tag: "IP67 / IP68",
    img: `${P}/limit-switches/ks-limit-switch.jpg`,
    href: "/actuators/limit-switches",
  },
];
const CAT = Object.fromEntries(CATEGORIES.map((c) => [c.key, c])) as Record<Category["key"], Category>;
const SERIES_COUNT = CATEGORIES.reduce((n, c) => n + c.series.length, 0);

const STATS = [
  { value: "5", unit: "types", label: "Pneumatic, electric, hydraulic, mechanical and limit switches" },
  { value: String(SERIES_COUNT), unit: "series", label: "From Susin, KOSAPLUS, SPAC and Danfoss" },
  { value: "ISO 5211", unit: "", label: "Standard mounting on quarter-turn actuators" },
  { value: "120,867", unit: "Nm", label: "Highest output torque (HD scotch yoke)" },
];

// Finder: what the buyer needs → which category
const JOBS: { label: string; pick: Category["key"]; why: string }[] = [
  { label: "There’s plant air on site", pick: "pneumatic", why: "Pneumatic actuators are simple, fast and the most economical on quarter-turn valves where instrument air is already available." },
  { label: "Valve must close if power or air fails", pick: "pneumatic", why: "A spring-return pneumatic actuator drives the valve to its safe position on loss of air or signal. Choose fail-close or fail-open." },
  { label: "No air, only electricity", pick: "electric", why: "Electric actuators need only a power supply and a control signal, and suit on/off or modulating duty." },
  { label: "Very high torque, compact size", pick: "hydraulic", why: "Electro-hydraulic actuators give high torque from a compact unit and need only an electrical supply." },
  { label: "Valve is rarely operated", pick: "mechanical", why: "A manual gearbox is the simplest option: nothing to power, nothing to fail, and it lets one person turn a large valve." },
  { label: "Show valve position in the control room", pick: "switches", why: "A limit switch box mounts on the actuator and signals open and closed positions to the control system." },
];

const STEPS = [
  { icon: <SettingsInputComponentOutlinedIcon />, title: "Torque", text: "Size on the valve’s break-out torque plus a safety factor, not its running torque." },
  { icon: <BoltOutlinedIcon />, title: "Power", text: "Air, electricity or both: what’s available at the valve decides the shortlist." },
  { icon: <ShieldOutlinedIcon />, title: "Fail-safe", text: "Decide what the valve must do when air or power is lost: close, open or stay put." },
  { icon: <PlaceOutlinedIcon />, title: "Area", text: "Hazardous area, ingress protection and mounting (ISO 5211 or NAMUR) narrow it down." },
];

const WITH_ORDER = [
  { icon: <ExtensionOutlinedIcon />, title: "ISO 5211 mounting", text: "on quarter-turn actuators, to fit the valve directly or with a bracket" },
  { icon: <TuneOutlinedIcon />, title: "Accessories ready", text: "limit switches, solenoid valves, positioners and manual overrides" },
  { icon: <DescriptionOutlinedIcon />, title: "Data sheets on request", text: "certification varies by model; tell us what you need" },
  { icon: <SupportAgentOutlinedIcon />, title: "UK technical support", text: "help with sizing and selection from enquiry to delivery" },
];

const USES: [string, string][] = [
  ["Oil & gas", "/applications/oil-gas"],
  ["Chemical & refining", "/applications/chemical"],
  ["Power generation", "/applications/power"],
  ["Water & wastewater", "/applications/water"],
  ["Marine", "/applications/marine"],
  ["Automation & pneumatics", "/applications/automation"],
];

const FAQS = [
  { q: "Pneumatic or electric actuator?", a: "Pneumatic actuators are fast, simple and economical where plant air is available, and spring return gives a fail-safe position. Electric actuators need only power and a signal, and suit sites without air or valves that need positioning." },
  { q: "How do I size an actuator?", a: "Start from the valve’s break-out torque, add a safety factor, and size on the lowest air pressure or supply voltage the actuator will see. Our sizing guide walks through it step by step." },
  { q: "What is the difference between rack & pinion and scotch yoke?", a: "Rack & pinion gives an even torque through the stroke and suits smaller valves. Scotch yoke gives its highest torque at the ends of the stroke, where most valves need it, and suits larger valves." },
  { q: "Can I add limit switches and a positioner?", a: "Yes. Our actuators accept limit switch boxes, solenoid valves and positioners. Tell us the control signal and we’ll quote the full package." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { width: "74%", height: "74%", objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EEF5FF 0%, #F6FAFF 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(60,110,180,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Valve automation</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Valve" />
          <Words text="actuators" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Pneumatic, electric, hydraulic and manual actuators to open, close and position your valves, plus limit switch boxes to report where they are. One UK supplier for the whole package.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#finder" sx={pillBtn(true)}>
            Help me choose <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>
            Get a quote
          </Box>
        </Box>
      </Box>

      {/* The five categories */}
      <Box sx={{ position: "relative", mt: { xs: 4.5, md: 6 }, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: { xs: 2.5, md: 5 }, px: 2 }}>
        {CATEGORIES.map((c, i) => (
          <Box
            key={c.key}
            component={Link}
            href={c.href}
            sx={{
              width: { xs: 130, md: 150 },
              textAlign: "center",
              textDecoration: "none",
              animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 80}ms both`,
              "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" },
              "&:hover .nm": { color: T.greenDark },
            }}
          >
            <Box className="ph" sx={{ mx: "auto", width: { xs: 110, md: 132 }, height: { xs: 110, md: 132 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
              <Box component="img" src={c.img} alt={c.title} loading="eager" sx={photo} />
            </Box>
            <Box className="nm" sx={{ mt: 1.5, fontSize: "0.92rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{c.title}</Box>
            <Box sx={{ mt: 0.25, fontSize: "0.78rem", color: T.muted, lineHeight: 1.4 }}>{c.series.length} series</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function Stats() {
  return (
    <Box sx={{ ...wrap, mt: { xs: 1, md: 2 }, position: "relative", zIndex: 1 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 } }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, borderTop: `4px solid ${[L.lime, L.sky, L.sun, "rgba(183,166,240,0.6)"][i]}` }}>
              <Box sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.1rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                {s.value}
                {s.unit && <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>}
              </Box>
              <Box component="p" sx={{ m: 0, mt: 0.75, fontSize: "0.85rem", color: T.body, lineHeight: 1.4 }}>{s.label}</Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  );
}

function Finder() {
  const [job, setJob] = React.useState(0);
  const j = JOBS[job];
  const c = CAT[j.pick];
  const chip = (on: boolean) => ({
    cursor: "pointer", fontFamily: "inherit", px: 1.5, py: 0.8, borderRadius: 999, fontSize: "0.84rem", fontWeight: on ? 700 : 600,
    border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
  });
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Actuator finder</Kicker>
          <H2 id="h2-finder">Not sure which actuator?</H2>
          <Lead>Pick what matters most at the valve and we’ll point you to the right type.</Lead>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>What do you need?</Box>
              <Box role="group" aria-label="Need" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                {JOBS.map((d, i) => (
                  <Box key={d.label} component="button" type="button" aria-pressed={i === job} onClick={() => setJob(i)} sx={chip(i === job)}>
                    {d.label}
                  </Box>
                ))}
              </Box>
              <Box aria-live="polite" sx={{ borderTop: `1px solid ${T.border}`, pt: 2 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, mb: 1.25 }}>We’d suggest</Box>
                <Box sx={{ fontSize: "0.95rem", color: T.body, lineHeight: 1.6, mb: 1.75 }}>{j.why}</Box>
                <Box component={Link} href={c.href} sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, textDecoration: "none", bgcolor: "#fff", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft } }}>
                  <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                    <Box component="img" src={c.img} alt={c.title} sx={{ ...photo, width: "82%", height: "82%" }} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "0.95rem" }}>{c.title}</Box>
                    <Box sx={{ fontSize: "0.8rem", color: T.body }}>{c.does}</Box>
                  </Box>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18, color: T.muted }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Categories() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Kicker>Categories</Kicker>
          <H2 id="h2-types">Every actuator we supply</H2>
          <Lead center>Five types, {SERIES_COUNT} series. Each opens its full range with models and a quote.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(6, 1fr)" }, gap: { xs: 1.5, md: 2.5 }, "& > *": { gridColumn: { lg: "span 2" } }, "& > *:nth-of-type(n+4)": { gridColumn: { lg: "span 3" } } }}>
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 80}>
              <Box
                component={Link}
                href={c.href}
                sx={{
                  display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: "22px", bgcolor: "#fff",
                  border: `1px solid ${T.border}`, overflow: "hidden", textDecoration: "none", color: "inherit",
                  transition: "transform .25s, box-shadow .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" },
                }}
              >
                <Box sx={{ height: { xs: 170, md: 200 }, bgcolor: "#F2F5F8", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={c.img} alt={c.title} loading="lazy" sx={{ height: { xs: 136, md: 160 }, width: "auto", maxWidth: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />
                </Box>
                <Box sx={{ p: { xs: 2, md: 2.75 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "1.1rem", md: "1.25rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{c.title}</Box>
                  <Box component="p" sx={{ m: 0, mb: 1.75, fontSize: "0.92rem", lineHeight: 1.55, color: T.body }}>{c.text}</Box>
                  <Box component="ul" sx={{ m: 0, mb: 2, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 0.75, flex: 1, alignContent: "flex-start" }}>
                    {c.series.map((s) => (
                      <Box component="li" key={s} sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.8rem", fontWeight: 700, color: T.ink }}>{s}</Box>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                    <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.78rem", fontWeight: 700 }}>{c.tag}</Box>
                    <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, whiteSpace: "nowrap" }}>
                      View range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function HowToChoose() {
  return (
    <Box component="section" aria-labelledby="h2-how" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: { xs: 3.5, md: 5 }, maxWidth: 720 }}>
          <Kicker>How to choose</Kicker>
          <H2 id="h2-how">Four questions pick the actuator</H2>
          <Lead>Answer them in this order and the shortlist is usually one or two series.</Lead>
        </Box>
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 }, counterReset: "s" }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Box component="li" sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2.25, md: 2.75 }, borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.75 }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: "14px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", "& svg": { fontSize: 22 } }}>{s.icon}</Box>
                  <Box sx={{ fontSize: "2rem", fontWeight: 800, color: "#E3EAE5", lineHeight: 1 }}>{i + 1}</Box>
                </Box>
                <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "1.05rem", mb: 0.5 }}>{s.title}</Box>
                <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.55 }}>{s.text}</Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1.25 }}>
          <Box component={Link} href="/news/how-to-choose-a-valve-actuator" sx={pillBtn(false)}>
            How to choose a valve actuator <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/news/valve-actuator-sizing-torque-guide" sx={pillBtn(false)}>
            Actuator sizing guide <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function WithEvery() {
  return (
    <Box component="section" aria-labelledby="h2-with" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
        <Box>
          <Kicker>With every actuator</Kicker>
          <H2 id="h2-with">Ready to fit and control</H2>
          <Lead>We quote the actuator as a package with the mounting and controls it needs, so it arrives ready for the valve.</Lead>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: "24px", bgcolor: T.greenSoft, border: "1px solid #D5EFCB" }}>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.25 }}>
              {WITH_ORDER.map((it) => (
                <Box component="li" key={it.title} sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}>
                  <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", bgcolor: "#fff", color: T.greenDark, display: "grid", placeItems: "center", boxShadow: "0 2px 8px rgba(14,27,18,0.06)", "& svg": { fontSize: 22 } }}>{it.icon}</Box>
                  <Box>
                    <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "1rem", lineHeight: 1.3 }}>{it.title}</Box>
                    <Box sx={{ fontSize: "0.88rem", color: T.body, lineHeight: 1.45 }}>{it.text}</Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function Uses() {
  return (
    <Box component="section" aria-labelledby="h2-uses" sx={{ py: { xs: 7, md: 9 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3, md: 4 }, borderRadius: "24px", background: "linear-gradient(120deg, #EAF4FF 0%, #F1FAEE 100%)", border: "1px solid #DCE6F5" }}>
          <Box component="h2" id="h2-uses" sx={{ m: 0, mb: 2, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>Where they’re used</Box>
          <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 1 }}>
            {USES.map(([u, href]) => (
              <Box component="li" key={u}>
                <Box component={Link} href={href} sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.5, py: 0.75, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.88rem", fontWeight: 600, color: T.body, textDecoration: "none", transition: "all .15s", "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft }, "&:hover svg": { transform: "translateX(2px)" } }}>
                  {u} <ArrowForwardRoundedIcon sx={{ fontSize: 15, opacity: 0.6, transition: "transform .15s" }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: T.surface }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <FAQ items={FAQS} title="Actuator questions" />
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need an actuator?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the valve type and size, its torque if you know it, the supply available and the fail-safe position, and we’ll quote the actuator with its accessories.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component="a" href="https://www.kosaplus.co.uk/" target="_blank" rel="noopener" sx={pillBtn(false)}>
              KOSAPLUS UK ↗
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ActuatorsView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Finder />
      <Categories />
      <HowToChoose />
      <WithEvery />
      <Uses />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
