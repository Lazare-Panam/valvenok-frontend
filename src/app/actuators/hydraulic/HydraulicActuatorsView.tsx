"use client";

// Hydraulic Actuators: type page under the Actuators tab, in the same format as
// Pneumatic and Electric Actuators: centred hero with a series strip, stats,
// finder, every type, a torque comparison, the rest of the package, FAQ.

import { titleCase } from "@/src/app/Common/titleCase";
import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import OilBarrelOutlinedIcon from "@mui/icons-material/OilBarrelOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesChips from "@/src/app/actuators/components/SeriesChips";

const V = "https://pblol2.blob.core.windows.net/valvenok-images";
const B = `${V}/brands/susin`;
const SUSIN_LOGO = `${V}/logo/susin-logo.webp`;

type Series = {
  key: string;
  code: string;
  name: string;
  kind: string;
  brand: string;
  text: string;
  tag: string;
  min?: number;
  max?: number;
  img: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  note: string;
};

// Figures from Susin I-Tork's hydraulic catalogues: the PANDA / PA brochure and the
// hydraulic & electro-hydraulic data sheet (PA-HX, HRSDA / HRSSA, HLDA tables).
export const SERIES: Series[] = [
  // Rotary series in ascending order of max torque, then the linear HLDA
  { key: "pa", code: "PA", name: "PA electro-hydraulic, high pressure", kind: "Electro-hydraulic", brand: "Susin", text: "High-pressure compact units at up to 180 bar for more torque from a small body; up to 10,000 Nm on request.", tag: "250 – 4,000 Nm", min: 250, max: 4000, img: `${B}/ktc-panda-pa.jpg`, href: "/actuators/hydraulic/pa", icon: <BoltOutlinedIcon />, color: "#F4C95D", note: "180 bar · ATEX Zone 1 & 2" },
  { key: "lp", code: "LP-HD / LP-HS", name: "LP-HD / LP-HS low-pressure scotch yoke", kind: "Electro-hydraulic", brand: "Susin", text: "A scotch yoke actuator with its own 8 bar motor and pump: no compressed air needed. Double acting, or spring return to fail close or open.", tag: "Up to 4,635 Nm", min: 20.68, max: 4635, img: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/lp-hd.webp", href: "/actuators/hydraulic/lp-scotch-yoke", icon: <AirOutlinedIcon />, color: "#F2B84B", note: "8 bar on board · Zone 1 & 2" },
  { key: "panda", code: "PANDA", name: "PANDA electro-hydraulic, low pressure", kind: "Electro-hydraulic", brand: "Susin", text: "Compact units with their own pump, 8 bar on board: only electric power needed. Double acting or spring return.", tag: "46 – 9,274 Nm", min: 46, max: 9274, img: `${B}/ktc-panda-pa.jpg`, href: "/actuators/hydraulic/panda", icon: <CompressOutlinedIcon />, color: "#8FD47C", note: "8 bar · ATEX Zone 1 & 2" },
  { key: "pahx", code: "PA-HX", name: "PA-HX rack & pinion", kind: "Hydraulic rack & pinion", brand: "Susin", text: "Hydraulic rack & pinion at 80–160 bar: double acting, spring to close or spring to open, 26 models.", tag: "35 – 10,000 Nm", min: 35, max: 10000, img: `${B}/pa-hx.jpg`, href: "/actuators/hydraulic/pa-hx", icon: <SettingsOutlinedIcon />, color: "#F4A6A0", note: "80–160 bar · DA & spring return" },
  { key: "hrs", code: "HRSDA / HRSSA", name: "Scotch yoke, HRSDA / HRSSA", kind: "Hydraulic scotch yoke", brand: "Susin", text: "Hydraulic or electro-hydraulic scotch yoke for the largest valves, up to 200 bar: double acting (HRSDA) or spring return (HRSSA).", tag: "147 – 112,595 Nm", min: 147, max: 112595, img: `${B}/ktc-hrsda.jpg`, href: "/actuators/hydraulic/scotch-yoke", icon: <FitnessCenterOutlinedIcon />, color: "#B7A6F0", note: "Up to 200 bar · DA & spring return" },
  { key: "hlda", code: "HLDA", name: "HLDA linear piston, double acting", kind: "Linear piston", brand: "Susin", text: "Hydraulic (HLDA) or electro-hydraulic (EHLDA) linear piston for globe, gate and control valves: 11 bores from 32 to 200 mm, up to 200 bar.", tag: "6 – 402 kN", img: `${B}/ktc-hlda.jpg`, href: "/actuators/hydraulic/hlda", icon: <SwapVertOutlinedIcon />, color: "#7CB9F0", note: "Linear · IP66M / IP67M" },
];
const S = Object.fromEntries(SERIES.map((s) => [s.key, s]));
const ROTARY = SERIES.filter((s) => s.max);

const STATS = [
  { value: String(SERIES.length), unit: "types", label: "Electro-hydraulic, rack & pinion, scotch yoke and linear piston" },
  { value: "112,595", unit: "Nm", label: "Highest output torque (HRSDA at 160 bar)" },
  { value: "200", unit: "bar", label: "Maximum hydraulic pressure (scotch yoke, linear)" },
  { value: "402", unit: "kN", label: "Highest linear thrust (HLDA-200 at 160 bar)" },
];

// Finder: what the actuator must do, then the torque the valve needs
const DUTIES: { label: string; picks: string[]; rotary: boolean }[] = [
  { label: "Replace a pneumatic actuator (no air)", picks: ["lp", "panda", "pa"], rotary: true },
  { label: "Fail-safe on loss of power", picks: ["panda", "pa", "lp", "pahx", "hrs"], rotary: true },
  { label: "Large valve, very high torque", picks: ["hrs", "pahx"], rotary: true },
  { label: "Hazardous area (ATEX Zone 1 & 2)", picks: ["panda", "pa", "lp"], rotary: true },
  { label: "Compact, high torque from a small body", picks: ["pa", "panda"], rotary: true },
  { label: "Existing hydraulic supply (80–160 bar)", picks: ["pahx", "hrs"], rotary: true },
  { label: "Linear stroke: globe, gate or control valve", picks: ["hlda"], rotary: false },
];
const TORQUES = [100, 1000, 5000, 20000, 100000];
const nm = (n: number) => n.toLocaleString("en-GB");

const FAQ_ICONS = [CompareArrowsOutlinedIcon, ShieldOutlinedIcon, ElectricBoltOutlinedIcon, OilBarrelOutlinedIcon, WarningAmberOutlinedIcon, SwapVertOutlinedIcon];
const FAQ = [
  { q: "Why choose a hydraulic actuator?", a: "Hydraulics give very high torque from a small body and little input power, because the pump drives the cylinder directly with no gearbox. Most wear parts run in oil, so they wear very little, and they suit outdoor, marine and hazardous locations." },
  { q: "What happens if the power fails?", a: "Choose a spring return model (PANDA, PA, LP-HS, PA-HX or HRSSA), or a pressure accumulator, to store the energy that moves the valve to its safe position when power is lost." },
  { q: "What power supply do PANDA and PA need?", a: "The motor runs on 400 V 50/60 Hz or 230 V 50 Hz, and the solenoid valve on 24 VDC or 230 V. Only electric power is needed: the pump and oil are built in." },
  { q: "Which hydraulic oil do they use?", a: "HLP hydraulic oil, filtered to at least 10 µm." },
  { q: "Can they be used in hazardous areas?", a: "Yes. PANDA and PA are available ATEX certified for Zone 1 and 2, and in SIL 2 certified versions. Tell us the zone and gas group and we’ll confirm the build." },
  { q: "Do you have hydraulic actuators for globe and gate valves?", a: "Yes. The HLDA linear piston actuator pushes and pulls the valve stem: 11 bores from 32 to 200 mm, giving 6 to 402 kN of closing thrust at 100 to 160 bar. It comes hydraulic (HLDA) or electro-hydraulic (EHLDA) with a power pack." },
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #FFEFEC 0%, #FFF7F5 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(200,60,40,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Actuators</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Hydraulic" />
          <Words text="Actuators" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Hydraulic power for quarter-turn valves, from 35 to 112,595 Nm: compact electro-hydraulic units that need only electric power, rack & pinion and scotch yoke actuators up to 200 bar for the largest valves, plus linear piston actuators up to 402 kN for globe, gate and control valves.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#finder" sx={pillBtn(true)}>
            Help me choose <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>Get a quote</Box>
        </Box>
      </Box>

      {/* Series strip: one tap to each series page */}
      <Box sx={{ position: "relative", mt: { xs: 4.5, md: 6 }, maxWidth: 1240, mx: "auto", px: { xs: 0, md: 4 } }}>
        <SeriesChips items={SERIES} />
        <Box sx={{ display: { xs: "none", sm: "flex" }, flexWrap: "wrap", rowGap: 1.5, columnGap: { sm: 1, md: 1.5 }, justifyContent: "center", pb: 1 }}>
          {SERIES.map((s, i) => (
            <Box key={s.key} component={Link} href={s.href}
              sx={{ flexShrink: 0, width: { xs: "auto", sm: 120, md: 136 }, minWidth: 0, textAlign: "center", textDecoration: "none", animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 60}ms both`, "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" }, "&:hover .nm": { color: T.greenDark } }}>
              <Box className="ph" sx={{ mx: "auto", width: { xs: 84, sm: 100, md: 112 }, height: { xs: 84, sm: 100, md: 112 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
                <Box component="img" src={s.img} alt={s.name} loading="eager" sx={{ width: "74%", height: "74%", ...photo }} />
              </Box>
              <Box className="nm" sx={{ mt: 1.25, fontSize: "0.86rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{s.code}</Box>
              <Box sx={{ mt: 0.25, fontSize: "0.74rem", color: T.muted }}>{s.max ? `up to ${nm(s.max)} Nm` : "linear, up to 402 kN"}</Box>
            </Box>
          ))}
        </Box>
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
              <Box sx={{ fontSize: { xs: "1.5rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
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
  const [duty, setDuty] = React.useState(0);
  const [t, setT] = React.useState(1);
  const d = DUTIES[duty];
  const need = TORQUES[t];
  const picks = d.picks.map((k) => S[k]);
  // rotary: keep series rated at or above the torque the valve needs
  const fits = d.rotary ? picks.filter((s) => (s.max ?? 0) >= need) : picks;
  const chip = (on: boolean) => ({
    cursor: "pointer", fontFamily: "inherit", px: 1.5, py: 0.8, borderRadius: 999, fontSize: "0.84rem", fontWeight: on ? 700 : 600,
    border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
  });
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Actuator finder</Kicker>
          <H2 id="h2-finder">Not Sure Which Actuator?</H2>
          <Lead>Pick what the actuator has to do and the torque your valve needs. We’ll point you to the series that fit.</Lead>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>1. What does it need to do?</Box>
              <Box role="group" aria-label="Duty" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.25 }}>
                {DUTIES.map((x, i) => (
                  <Box key={x.label} component="button" type="button" aria-pressed={i === duty} onClick={() => setDuty(i)} sx={chip(i === duty)}>{x.label}</Box>
                ))}
              </Box>
              {d.rotary && (
                <>
                  <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>2. Valve torque up to</Box>
                  <Box role="group" aria-label="Torque" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                    {TORQUES.map((v, i) => (
                      <Box key={v} component="button" type="button" aria-pressed={i === t} onClick={() => setT(i)} sx={chip(i === t)}>{nm(v)} Nm</Box>
                    ))}
                  </Box>
                </>
              )}
              <Box aria-live="polite" sx={{ borderTop: `1px solid ${T.border}`, pt: 2 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, mb: 1.25 }}>
                  {fits.length ? (fits.length === 1 ? "Start with" : "Good options") : "Outside our standard ranges"}
                </Box>
                {fits.length ? (
                  <Box sx={{ display: "grid", gap: 1 }}>
                    {fits.map((s) => (
                      <Box key={s.key} component={Link} href={s.href}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, textDecoration: "none", bgcolor: "#fff", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft }, "&:hover .arr": { bgcolor: T.green, color: T.greenDeep } }}>
                        <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                          <Box component="img" src={s.img} alt={s.name} sx={{ width: "82%", height: "82%", ...photo }} />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "0.95rem" }}>{s.name}</Box>
                          <Box sx={{ fontSize: "0.8rem", color: T.body }}>{s.tag} · {s.brand}</Box>
                        </Box>
                        <Box className="arr" sx={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .15s" }}>
                          <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.6 }}>
                    None of these series is listed that high.{" "}
                    <Box component={Link} href="/contact" sx={{ color: T.greenDark, fontWeight: 700 }}>Send us the valve torque</Box> and we’ll size an actuator.
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}

function SeriesCard({ s }: { s: Series }) {
  return (
    <Box component={Link} href={s.href}
      sx={{
        display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: { xs: "16px", sm: "22px" }, bgcolor: "#fff", border: `1px solid ${T.border}`,
        overflow: "hidden", textDecoration: "none", color: "inherit", transition: "transform .25s, box-shadow .25s, border-color .25s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" }, "&:hover .go": { bgcolor: T.green, color: T.greenDeep }, "&:hover .pic": { transform: "scale(1.06)" },
      }}>
      <Box sx={{ position: "relative", height: { xs: 118, sm: 190 }, bgcolor: L.mint, display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box className="pic" component="img" src={s.img} alt={s.name} loading="lazy" sx={{ height: { xs: 92, sm: 150 }, width: "auto", maxWidth: "76%", transition: "transform .4s", ...photo }} />
        <Box sx={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", px: 1.25, py: 0.6, borderRadius: 999, bgcolor: "#fff", boxShadow: "0 1px 4px rgba(14,27,18,0.08)" }}>
          <Box component="img" src={SUSIN_LOGO} alt="Susin" title="Susin" sx={{ height: 22, maxWidth: 90, objectFit: "contain", display: "block" }} />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1.5, sm: 2.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, mb: 0.5 }}>{s.kind}</Box>
        <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.1rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{titleCase(s.name)}</Box>
        <Box component="p" sx={{ m: 0, mb: { xs: 1.25, sm: 2 }, fontSize: { xs: "0.78rem", sm: "0.9rem" }, lineHeight: 1.5, color: T.body, flex: 1 }}>{s.text}</Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: { xs: "0.7rem", sm: "0.78rem" }, fontWeight: 700, whiteSpace: "nowrap" }}>{s.tag}</Box>
          <Box className="go" component="span" sx={{ display: { xs: "none", sm: "inline-flex" }, alignItems: "center", gap: 0.5, whiteSpace: "nowrap", px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, transition: "all .2s" }}>
            View range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Types() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Kicker>Types</Kicker>
          <H2 id="h2-types">Every Hydraulic Actuator We Supply</H2>
          <Lead center>Pick a type to see its sizes and torque tables, with a quote.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(5, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
          {SERIES.map((s, i) => (
            <Reveal key={s.key} delay={(i % 4) * 70}>
              <SeriesCard s={s} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// log scale 10 Nm … 200,000 Nm so small and large types both read
const LMIN = 1, LMAX = Math.log10(200000);
const pos = (v: number) => Math.round(((Math.log10(v) - LMIN) / (LMAX - LMIN)) * 10000) / 100; // rounded so server and browser agree
const TICKS = [10, 100, 1000, 10000, 100000];

function Compare() {
  const [ref, on] = useInView<HTMLDivElement>(0.15);
  return (
    <Box component="section" aria-labelledby="h2-compare" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Torque ranges</Kicker>
          <H2 id="h2-compare">How Much Torque Does Each Type Give?</H2>
          <Lead>Each bar shows the torque range of a rotary type, from 35 to 112,595 Nm on a log scale. Ratings vary by size and pressure, so check the torque tables. The HLDA linear piston is rated in thrust (6–402 kN), not torque.</Lead>
        </Box>
        <Box ref={ref} sx={{ borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, p: { xs: 1.5, md: 2.5 } }}>
          <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "300px 1fr 150px", gap: 3, px: 1.5, pb: 1.25, borderBottom: `1px solid ${T.border}` }}>
            <Box />
            <Box sx={{ position: "relative", height: 18 }}>
              {TICKS.map((t) => (
                <Box key={t} component="span" sx={{ position: "absolute", left: `${pos(t)}%`, transform: t === 10 ? "none" : "translateX(-50%)", fontSize: "0.72rem", fontWeight: 600, color: T.muted, whiteSpace: "nowrap" }}>
                  {t >= 1000 ? `${t / 1000}k` : t}{t === 100000 ? " Nm" : ""}
                </Box>
              ))}
            </Box>
            <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, textAlign: "right" }}>Brand</Box>
          </Box>
          {ROTARY.map((s, i) => (
            <Box key={s.key} component={Link} href={s.href}
              sx={{ display: "grid", gridTemplateColumns: { xs: "44px 1fr 30px", md: "300px 1fr 150px" }, gap: { xs: 1.5, md: 3 }, alignItems: "center", px: 1.5, py: { xs: 1.75, md: 1.5 }, borderRadius: "14px", textDecoration: "none", transition: "background-color .15s", "&:hover": { bgcolor: T.greenSoft }, "&:hover .ic": { bgcolor: T.green, color: T.greenDeep }, "&:hover .ttl": { color: T.greenDark } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0, gridColumn: { xs: "1 / 3", md: "auto" } }}>
                <Box className="ic" sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", transition: "all .15s", "& svg": { fontSize: 22 } }}>{s.icon}</Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box className="ttl" sx={{ fontWeight: 800, color: T.ink, fontSize: "0.98rem", transition: "color .15s" }}>{s.name}</Box>
                  <Box sx={{ fontSize: "0.82rem", color: T.body, lineHeight: 1.45 }}>{s.note}</Box>
                </Box>
              </Box>
              <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, gridRow: { xs: 2, md: "auto" } }}>
                <Box sx={{ position: "relative", height: 14, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                  {TICKS.slice(1, -1).map((t) => <Box key={t} sx={{ position: "absolute", top: 0, bottom: 0, left: `${pos(t)}%`, width: "1px", bgcolor: "#fff" }} />)}
                  <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${pos(s.min!)}%`, width: on ? `${pos(s.max!) - pos(s.min!)}%` : 0, borderRadius: 999, bgcolor: s.color, transition: `width 1s cubic-bezier(.2,.8,.2,1) ${i * 90}ms` }} />
                </Box>
                <Box sx={{ mt: 0.5, fontSize: "0.78rem", fontWeight: 700, color: T.ink }}>{nm(s.min!)}–{nm(s.max!)} Nm</Box>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                <Box component="img" src={SUSIN_LOGO} alt="Susin" title="Susin" sx={{ height: 22, maxWidth: 90, objectFit: "contain", display: "block" }} />
              </Box>
              <Box sx={{ display: { xs: "grid", md: "none" }, gridColumn: 3, gridRow: 1, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, placeItems: "center", color: T.ink }}>
                <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 1.5, fontSize: "0.85rem", color: T.muted }}>
          Scotch yoke figures are from the 100–160 bar tables; HRSSA shows the spring torque. PA goes up to 10,000 Nm on request.
        </Box>
      </Box>
    </Box>
  );
}

const MORE = [
  { title: "Limit switch boxes", text: "Signal open and closed positions to the control room; they mount on the actuator.", tag: "IP67 / IP68", img: `${V}/products/actuators/limit-switches/susin-limit-switch.webp`, href: "/actuators/accessories" },
  { title: "Pneumatic actuators", text: "Where compressed air is available: rack & pinion, scotch yoke and linear, up to 120,867 Nm.", tag: "Double acting or spring return", img: `${V}/products/actuators/pneumatic/pdf.webp`, href: "/pneumatic/actuators" },
  { title: "Mechanical gearboxes", text: "Manual override or hand operation for large valves, ISO 5211 mounting.", tag: "Up to 32,000 Nm", img: `${V}/products/actuators/mechanical/itg.webp`, href: "/actuators/mechanical" },
  { title: "Electric actuators", text: "Quarter-turn, multi-turn and linear, including a spring-return fail-safe series.", tag: "25 – 9,000 Nm", img: `${V}/products/actuators/electric/itq.webp`, href: "/actuators/electric" },
];

function CompleteLine() {
  return (
    <Box component="section" aria-labelledby="h2-line" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Complete the package</Kicker>
          <H2 id="h2-line">Controls and Other Actuators</H2>
          <Lead>Add a limit switch box to report the valve position, or choose another type where hydraulics aren’t the right fit.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
          {MORE.map((m, i) => (
            <Reveal key={m.href} delay={i * 70}>
              <Box component={Link} href={m.href}
                sx={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", borderRadius: { xs: "16px", sm: "22px" }, bgcolor: "#fff", border: `1px solid ${T.border}`, overflow: "hidden", textDecoration: "none", color: "inherit", transition: "transform .25s, box-shadow .25s", "&:hover": { transform: "translateY(-4px)", boxShadow: T.shadowHover, borderColor: "#CFEBC6" } }}>
                <Box sx={{ height: { xs: 110, sm: 160 }, bgcolor: "#EAF4FF", display: "grid", placeItems: "center", overflow: "hidden" }}>
                  <Box component="img" src={m.img} alt={m.title} loading="lazy" sx={{ height: { xs: 84, sm: 124 }, width: "auto", maxWidth: "78%", ...photo }} />
                </Box>
                <Box sx={{ p: { xs: 1.5, sm: 2.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.08rem" }, fontWeight: 800, color: T.ink }}>{titleCase(m.title)}</Box>
                  <Box component="p" sx={{ m: 0, mb: 1.5, fontSize: { xs: "0.78rem", sm: "0.88rem" }, lineHeight: 1.5, color: T.body, flex: 1 }}>{m.text}</Box>
                  <Box component="span" sx={{ alignSelf: "flex-start", px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: "0.75rem", fontWeight: 700 }}>{m.tag}</Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Box component={Link} href="/actuators" sx={pillBtn(false)}>
            See all actuators <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Faq() {
  return (
    <Box component="section" aria-labelledby="h2-faq" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={{ ...wrap, maxWidth: 900 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Kicker>FAQ</Kicker>
          <H2 id="h2-faq">Hydraulic Actuator Questions</H2>
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
    <Box component="section" aria-labelledby="h2-cta" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ p: { xs: 3.5, md: 6 }, borderRadius: "28px", background: `linear-gradient(120deg, ${L.mint} 0%, #EAF4FF 55%, #FFF7DD 100%)`, border: `1px solid ${T.border}`, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Not Sure Which Actuator?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the valve, its torque, your power supply and the fail-safe position, and we’ll size the actuator and quote it with its controls.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/quick-order" sx={pillBtn(false)}>Quick Order</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function HydraulicActuatorsView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Finder />
      <Types />
      <Compare />
      <CompleteLine />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
