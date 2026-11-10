"use client";

// Accessories: type page under the Actuators tab, in the same format as the
// Electric, Hydraulic and Mechanical pages. Limit switch boxes (KLS, ITS).
// KLS figures from the KLS series page (KOSAPLUS); ITS figures from Susin's ITS catalogue
// (Accessories - ITS.pdf): ITS 200 weatherproof, ITS 400 explosion proof, ITS 500 special material.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const V = "https://pblol2.blob.core.windows.net/valvenok-images";
const LOGO: Record<string, string> = {
  Susin: `${V}/logo/susin-logo.webp`,
  KOSAPLUS: `${V}/brands/kosaplus-logo.png`,
};

type Series = {
  key: string;
  code: string;
  name: string;
  kind: string;
  brand: string;
  text: string;
  tag: string;
  img: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  note: string;
};

const SERIES: Series[] = [
  { key: "kls", code: "KLS", name: "KLS limit switch box", kind: "Limit switch box", brand: "KOSAPLUS", text: "Weatherproof (KLS1x) and explosion-proof (KLS2x) boxes with a 3-way indicator, quick-set cam, and aluminium or stainless steel body.", tag: "IP67 / IP68 · IECEx / KCs", img: `${V}/products/actuators/limit-switches/ks-limit-switch.jpg`, href: "/actuators/limit-switches/kls", icon: <SensorsOutlinedIcon />, color: "#8FD47C", note: "" },
  { key: "its", code: "ITS", name: "ITS position monitoring switch", kind: "Limit switch box", brand: "Susin", text: "Weatherproof ITS 200, explosion-proof ITS 400 (Ex d IIC T6) and 316L / Duplex stainless ITS 500 for offshore, with a 0–90° dome indicator.", tag: "IP67 / IP68 · Ex d IIC T6", img: `${V}/products/actuators/limit-switches/susin-limit-switch.webp`, href: "/actuators/limit-switches/its", icon: <SensorsOutlinedIcon />, color: "#7CB9F0", note: "" },
];
const S = Object.fromEntries(SERIES.map((s) => [s.key, s]));

const STATS = [
  { value: String(SERIES.length), unit: "series", label: "Limit switch boxes from KOSAPLUS and Susin" },
  { value: "IIC T6", unit: "", label: "Explosion-proof gas group and class (KLS2x, ITS 400 / 500)" },
  { value: "IP68", unit: "", label: "Optional submersion protection (both series)" },
  { value: "-40", unit: "°C", label: "Low-temperature options (both series)" },
];

// Finder: where the box will be installed
const DUTIES: { label: string; picks: string[]; why: Record<string, string> }[] = [
  { label: "Safe area, weatherproof", picks: ["kls", "its"], why: { kls: "KLS1x weatherproof models, IP67", its: "ITS 200 weatherproof, IP67" } },
  { label: "Hazardous area (explosion proof)", picks: ["kls", "its"], why: { kls: "KLS2x: Ex db IIC T6 Gb, IECEx / KCs", its: "ITS 400: Ex d IIC T6, Zone 1 & 2" } },
  { label: "Corrosive or offshore", picks: ["its", "kls"], why: { its: "ITS 500: 316L or Duplex stainless housing", kls: "SUS304, SUS316 or SUS316L body" } },
  { label: "Wet or submerged (IP68)", picks: ["kls", "its"], why: { kls: "IP68 option", its: "IP68 option (ITS 400 / 500)" } },
  { label: "Proximity sensors instead of switches", picks: ["kls", "its"], why: { kls: "PNP, NPN, 2-wire, P&F or SOLDO proximity", its: "P&F or Autonics proximity, magnetic sensors" } },
  { label: "Position feedback (4–20 mA)", picks: ["its"], why: { its: "Position transmitter option, 0–1 kΩ or 4–20 mA (ITS 400 / 500)" } },
];

const FAQ_ICONS = [SensorsOutlinedIcon, LocalFireDepartmentOutlinedIcon, ToggleOnOutlinedIcon, WaterDropOutlinedIcon, BuildOutlinedIcon];
const FAQ = [
  { q: "What does a limit switch box do?", a: "It sits on top of the actuator and signals when the valve is fully open or fully closed, so the control system knows the valve position. A dome or 3-way indicator also shows the position on site." },
  { q: "Which one for a hazardous area?", a: "Choose an explosion-proof model: KLS2x (Ex db IIC T6 Gb, IECEx and KCs) or ITS 400 (Ex d IIC T6, for Zone 1 and 2). Tell us the zone and gas group and we’ll confirm the build." },
  { q: "Mechanical switches or proximity sensors?", a: "Mechanical 2-SPDT switches are the standard on both series. Proximity sensors have no moving contacts: KLS offers PNP, NPN, 2-wire, P&F and SOLDO; ITS offers P&F and Autonics proximity and magnetic sensors." },
  { q: "Can they be used outdoors or offshore?", a: "Yes. Both are IP67 as standard with IP68 as an option. For corrosive and offshore service, KLS comes in SUS304, SUS316 or SUS316L, and ITS 500 has a 316L or Duplex stainless housing." },
  { q: "Will it fit my actuator?", a: "Both mount to standard actuator tops: ITS brackets follow VDI/VDE 3845 (NAMUR), and KLS has five bracket options (BS1–BS4, MB1). Send us the actuator make and size and we’ll supply the right bracket." },
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EAF6F1 0%, #F4FAF7 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(40,120,90,0.12) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Actuators</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Actuator" />
          <Words text="accessories" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          <Box component="strong" sx={{ fontWeight: 800, ...gradientText }}>Limit switch boxes</Box> that sit on top of the actuator and tell the control room when the valve is open or closed. Weatherproof, explosion-proof and stainless versions, with mechanical switches or proximity sensors.
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
        <Box sx={{ display: "flex", gap: { xs: 1, md: 1.5 }, justifyContent: "center", overflowX: "auto", px: { xs: 2, md: 0 }, pb: 1, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {SERIES.map((s, i) => (
            <Box key={s.key} component={Link} href={s.href}
              sx={{ flexShrink: 0, width: { xs: 112, md: 136 }, textAlign: "center", textDecoration: "none", animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 60}ms both`, "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" }, "&:hover .nm": { color: T.greenDark } }}>
              <Box className="ph" sx={{ mx: "auto", width: { xs: 96, md: 112 }, height: { xs: 96, md: 112 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
                <Box component="img" src={s.img} alt={s.name} loading="eager" sx={{ width: "74%", height: "74%", ...photo }} />
              </Box>
              <Box className="nm" sx={{ mt: 1.25, fontSize: "0.86rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{s.code} series</Box>
              <Box sx={{ mt: 0.25, fontSize: "0.74rem", color: T.muted }}>Limit switch box · {s.brand}</Box>
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
  const d = DUTIES[duty];
  const fits = d.picks.map((k) => S[k]);
  const chip = (on: boolean) => ({
    cursor: "pointer", fontFamily: "inherit", px: 1.5, py: 0.8, borderRadius: 999, fontSize: "0.84rem", fontWeight: on ? 700 : 600,
    border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : "#fff", color: on ? "#fff" : T.ink, transition: "all .15s", "&:hover": { borderColor: T.greenDark },
  });
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 }, alignItems: "center" }}>
        <Box>
          <Kicker>Switch box finder</Kicker>
          <H2 id="h2-finder">Which limit switch box?</H2>
          <Lead>Pick where the box will be installed or what it has to do. We’ll show the series and model that fit.</Lead>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
            <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>
              <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>What do you need?</Box>
              <Box role="group" aria-label="Need" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.25 }}>
                {DUTIES.map((x, i) => (
                  <Box key={x.label} component="button" type="button" aria-pressed={i === duty} onClick={() => setDuty(i)} sx={chip(i === duty)}>{x.label}</Box>
                ))}
              </Box>
              <Box aria-live="polite" sx={{ borderTop: `1px solid ${T.border}`, pt: 2 }}>
                <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, mb: 1.25 }}>
                  {fits.length === 1 ? "Start with" : "Good options"}
                </Box>
                <Box sx={{ display: "grid", gap: 1 }}>
                  {fits.map((s) => (
                    <Box key={s.key} component={Link} href={s.href}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, textDecoration: "none", bgcolor: "#fff", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft }, "&:hover .arr": { bgcolor: T.green, color: T.greenDeep } }}>
                      <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                        <Box component="img" src={s.img} alt={s.name} sx={{ width: "82%", height: "82%", ...photo }} />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "0.95rem" }}>{s.name}</Box>
                        <Box sx={{ fontSize: "0.8rem", color: T.body }}>{d.why[s.key]} · {s.brand}</Box>
                      </Box>
                      <Box className="arr" sx={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .15s" }}>
                        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
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
          <Box component="img" src={LOGO[s.brand]} alt={s.brand} title={s.brand} sx={{ height: s.brand === "KOSAPLUS" ? 40 : 22, my: s.brand === "KOSAPLUS" ? -1.2 : 0, maxWidth: 90, objectFit: "contain", display: "block" }} />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1.5, sm: 2.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, mb: 0.5 }}>{s.kind}</Box>
        <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.1rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{s.name}</Box>
        <Box component="p" sx={{ m: 0, mb: { xs: 1.25, sm: 2 }, fontSize: { xs: "0.78rem", sm: "0.9rem" }, lineHeight: 1.5, color: T.body, flex: 1 }}>{s.text}</Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Box component="span" sx={{ px: 1.25, py: 0.5, borderRadius: 999, bgcolor: T.greenSoft, color: T.greenDark, fontSize: { xs: "0.7rem", sm: "0.78rem" }, fontWeight: 700, whiteSpace: "nowrap" }}>{s.tag}</Box>
          <Box className="go" component="span" sx={{ display: { xs: "none", sm: "inline-flex" }, alignItems: "center", gap: 0.5, whiteSpace: "nowrap", px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${T.border}`, fontSize: "0.82rem", fontWeight: 700, color: T.ink, transition: "all .2s" }}>
            View series <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
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
          <Kicker>Limit switch boxes</Kicker>
          <H2 id="h2-types">Every limit switch box we supply</H2>
          <Lead center>Pick a series to see its models, options and a quote, or <Box component={Link} href="/actuators/limit-switches" sx={{ color: T.greenDark, fontWeight: 700 }}>compare them on the limit switch boxes page</Box>.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: 1.25, md: 2.5 }, maxWidth: 860, mx: "auto" }}>
          {SERIES.map((s, i) => (
            <Reveal key={s.key} delay={i * 70}>
              <SeriesCard s={s} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const ROWS: [string, string, string][] = [
  ["Brand", "KOSAPLUS", "Susin"],
  ["Weatherproof", "KLS1x, IP67", "ITS 200, IP67"],
  ["Explosion proof", "KLS2x: Ex db IIC T6 Gb / Ex tb IIIC T80°C Db", "ITS 400: Ex d IIC T6, Zone 1 & 2"],
  ["Certification", "IECEx, KCs", "EN 50014 & 50018 construction"],
  ["Submersion", "IP68 option", "IP68 option (ITS 400 / 500)"],
  ["Housing", "ALDC12 aluminium; SUS304, SUS316, SUS316L", "Aluminium die-cast; ITS 500 316L or Duplex"],
  ["Indicator", "3-way visual indicator", "Dome 0°–90° (option 3-way L-port, T-port)"],
  ["Switches", "2 × SPDT mechanical; PNP, NPN, 2-wire, P&F, SOLDO proximity", "2-SPDT mechanical; DPDT, P&F / Autonics proximity, magnetic, 4–20 mA transmitter"],
  ["Ambient temperature", "-20°C to +60°C (low temp -40°C)", "-20°C to +80°C (options -40°C, ~100°C)"],
  ["Cable entries", "PF1/2 (KLS1x); PF3/4 or NPT3/4 (KLS2x)", "NPT1/2 (ITS 200); 2 × PF3/4 (ITS 400); other threads"],
  ["Mounting", "Brackets BS1–BS4, MB1", "Brackets to VDI/VDE 3845 (SSIN1–4)"],
];

function Compare() {
  return (
    <Box component="section" aria-labelledby="h2-compare" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Side by side</Kicker>
          <H2 id="h2-compare">KLS or ITS?</H2>
          <Lead>Both report open and closed positions and come weatherproof or explosion-proof. Here is how they differ, from each maker’s catalogue.</Lead>
        </Box>
        <Box sx={{ borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: "hidden" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "220px 1fr 1fr" }, bgcolor: T.greenSoft, fontWeight: 800, color: T.ink, fontSize: "0.9rem" }}>
            <Box sx={{ display: { xs: "none", md: "block" }, p: 2 }} />
            {SERIES.map((s) => (
              <Box key={s.key} component={Link} href={s.href} sx={{ p: 2, color: T.greenDark, textDecoration: "none" }}>{s.code} series →</Box>
            ))}
          </Box>
          {ROWS.map(([label, a, b]) => (
            <Box key={label} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "220px 1fr 1fr" }, borderTop: `1px solid ${T.border}`, fontSize: "0.88rem", lineHeight: 1.5 }}>
              <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, px: 2, pt: { xs: 1.5, md: 1.5 }, pb: { xs: 0, md: 1.5 }, fontWeight: 700, color: T.ink }}>{label}</Box>
              <Box sx={{ px: 2, py: 1.5, color: T.body }}>{a}</Box>
              <Box sx={{ px: 2, py: 1.5, color: T.body }}>{b}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const MORE = [
  { title: "Pneumatic actuators", text: "Rack & pinion, scotch yoke and linear, double acting or spring return.", tag: "Up to 120,867 Nm", img: `${V}/products/actuators/pneumatic/pdf.webp`, href: "/pneumatic/actuators" },
  { title: "Electric actuators", text: "Quarter-turn, multi-turn and linear, including a spring-return fail-safe series.", tag: "8 – 9,000 Nm", img: `${V}/products/actuators/electric/itq.webp`, href: "/actuators/electric" },
  { title: "Hydraulic actuators", text: "Electro-hydraulic, rack & pinion, scotch yoke and linear piston.", tag: "Up to 112,595 Nm", img: `${V}/brands/susin/ktc-hrsda.jpg`, href: "/actuators/hydraulic" },
  { title: "Mechanical actuators", text: "Worm and bevel gear operators and declutchable overrides.", tag: "Up to 32,000 Nm", img: `${V}/products/actuators/mechanical/itg.webp`, href: "/actuators/mechanical" },
];

function CompleteLine() {
  return (
    <Box component="section" aria-labelledby="h2-line" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Actuators</Kicker>
          <H2 id="h2-line">The actuators they fit</H2>
          <Lead>Limit switch boxes mount on top of our actuators. Pick the actuator type that drives your valve.</Lead>
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
                  <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.08rem" }, fontWeight: 800, color: T.ink }}>{m.title}</Box>
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
          <H2 id="h2-faq">Actuator accessory questions</H2>
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Need a limit switch box?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Tell us the actuator make and size, the area classification and the switch type you need, and we’ll match the box and bracket and quote it.
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

export default function AccessoriesView() {
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
