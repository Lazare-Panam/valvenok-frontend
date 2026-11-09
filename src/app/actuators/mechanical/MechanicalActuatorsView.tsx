"use client";

// Mechanical Actuators: type page under the Actuators tab, in the same format as
// the Pneumatic, Electric and Hydraulic pages: centred hero with a series strip,
// stats, finder, every series, a torque comparison, the rest of the package, FAQ.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";

const V = "https://pblol2.blob.core.windows.net/valvenok-images";
const LOGO: Record<string, string> = {
  Susin: `${V}/logo/susin-logo.webp`,
};

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

// Figures from each series page (MAW, ITG, MAB)
const SERIES: Series[] = [
  { key: "maw", code: "MAW", name: "MAW worm gear", kind: "Quarter-turn", brand: "Susin", text: "Manual worm gear operators for ball, butterfly and plug valves, with a handwheel and position indicator. ISO 5211 mounting.", tag: "100 – 32,000 Nm", min: 100, max: 32000, img: `${V}/products/actuators/mechanical/worm-gearboxes.webp`, href: "/actuators/mechanical/maw", icon: <RotateRightOutlinedIcon />, color: "#8FD47C", note: "Handwheel · ISO 5211 · up to IP67M" },
  { key: "itg", code: "ITG", name: "ITG declutchable gear", kind: "Quarter-turn override", brand: "Susin", text: "Fits between an actuator and the valve: a declutch lever switches from automatic to handwheel operation. Works with pneumatic, hydraulic and electric actuators.", tag: "60 – 28,000 Nm", min: 60, max: 28000, img: `${V}/products/actuators/mechanical/itg.webp`, href: "/actuators/mechanical/itg", icon: <PanToolOutlinedIcon />, color: "#F4C95D", note: "Manual override · ISO 5211 / 5210" },
  { key: "mab", code: "MAB", name: "MAB bevel gear", kind: "Multi-turn", brand: "Susin", text: "Bevel gear operators for gate, globe and sluice valves, with thrust bases from 75 to 2,500 kN. IP68, ISO 5210 mounting.", tag: "250 – 18,000 Nm", min: 250, max: 18000, img: `${V}/products/actuators/mechanical/mab.webp`, href: "/actuators/mechanical/mab", icon: <SyncOutlinedIcon />, color: "#B7A6F0", note: "Multi-turn · IP68 · 75–2,500 kN thrust" },
];
const S = Object.fromEntries(SERIES.map((s) => [s.key, s]));
const ROTARY = SERIES;

const STATS = [
  { value: String(SERIES.length), unit: "series", label: "Worm gear, declutchable override and bevel gear" },
  { value: "32,000", unit: "Nm", label: "Highest output torque (MAW)" },
  { value: "2,500", unit: "kN", label: "Highest thrust (MAB thrust base)" },
  { value: "IP68", unit: "", label: "Submersible protection (MAB)" },
];

// Finder: what the gear must do, then the torque the valve needs
const DUTIES: { label: string; picks: string[]; rotary: boolean }[] = [
  { label: "Hand-operate a quarter-turn valve", picks: ["maw", "itg"], rotary: true },
  { label: "Manual override on an actuated valve", picks: ["itg"], rotary: true },
  { label: "Gate, globe or sluice valve (multi-turn)", picks: ["mab"], rotary: true },
  { label: "Buried or flooded location (IP68)", picks: ["mab"], rotary: true },
];
const TORQUES = [100, 1000, 5000, 18000, 28000, 32000];
const nm = (n: number) => n.toLocaleString("en-GB");

const FAQ_ICONS = [CompareArrowsOutlinedIcon, PanToolOutlinedIcon, ExtensionOutlinedIcon, AcUnitOutlinedIcon, StraightenOutlinedIcon];
const FAQ = [
  { q: "Worm gear or bevel gear?", a: "Worm gear operators (MAW, ITG) turn quarter-turn valves such as ball, butterfly and plug valves through 90°. Bevel gear operators (MAB) are multi-turn, for gate, globe and sluice valves that need many turns of the stem." },
  { q: "What is a declutchable gear override?", a: "The ITG fits between an actuator and the valve. In normal service the actuator drives the valve; a declutch lever disengages it so the valve can be turned by handwheel, for example during commissioning or a power or air failure." },
  { q: "Can I fit an actuator later?", a: "The ITG is made to work with pneumatic (double acting and spring return), hydraulic and electric actuators. Tell us the actuator and valve and we’ll confirm the mounting." },
  { q: "Are low and high temperature versions available?", a: "Yes. The standard range is about -20°C to +85°C (MAB -20°C to +80°C), with low-temperature options down to -45°C and high-temperature options on the series pages." },
  { q: "Which mounting standards do they use?", a: "Quarter-turn gears (MAW, ITG) mount to ISO 5211 valve flanges; the ITG also offers ISO 5210. Multi-turn MAB gears use ISO 5210." },
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EEF1F4 0%, #F6F8FA 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(70,90,110,0.12) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Actuators</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Mechanical" />
          <Words text="actuators" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Gear operators for valves turned by hand: worm gears for quarter-turn valves up to 32,000 Nm, a declutchable override for actuated valves, and bevel gears for multi-turn gate and globe valves. No power or air needed.
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
        <Box sx={{ display: "flex", gap: { xs: 1, md: 1.5 }, justifyContent: { lg: "center" }, overflowX: "auto", px: { xs: 2, md: 0 }, pb: 1, scrollSnapType: "x mandatory", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {SERIES.map((s, i) => (
            <Box key={s.key} component={Link} href={s.href}
              sx={{ flexShrink: 0, width: { xs: 112, md: 136 }, scrollSnapAlign: "start", textAlign: "center", textDecoration: "none", animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 60}ms both`, "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" }, "&:hover .nm": { color: T.greenDark } }}>
              <Box className="ph" sx={{ mx: "auto", width: { xs: 96, md: 112 }, height: { xs: 96, md: 112 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
                <Box component="img" src={s.img} alt={s.name} loading="eager" sx={{ width: "74%", height: "74%", ...photo }} />
              </Box>
              <Box className="nm" sx={{ mt: 1.25, fontSize: "0.86rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{s.code} series</Box>
              <Box sx={{ mt: 0.25, fontSize: "0.74rem", color: T.muted }}>up to {nm(s.max!)} Nm</Box>
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
          <Kicker>Gear finder</Kicker>
          <H2 id="h2-finder">Not sure which gear?</H2>
          <Lead>Pick what the gear has to do and the torque your valve needs. We’ll point you to the series that fit.</Lead>
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
          <Kicker>Series</Kicker>
          <H2 id="h2-types">Every mechanical actuator we supply</H2>
          <Lead center>Pick a series to see every size and model, with torque, ratio and a quote.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
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

// log scale 10 Nm … 100,000 Nm
const LMIN = 1, LMAX = 5;
const pos = (v: number) => Math.round(((Math.log10(v) - LMIN) / (LMAX - LMIN)) * 10000) / 100; // rounded so server and browser agree
const TICKS = [10, 100, 1000, 10000, 100000];

function Compare() {
  const [ref, on] = useInView<HTMLDivElement>(0.15);
  return (
    <Box component="section" aria-labelledby="h2-compare" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Torque ranges</Kicker>
          <H2 id="h2-compare">How much torque does each series give?</H2>
          <Lead>Each bar shows the output torque range of a series, from 60 to 32,000 Nm on a log scale, including gear reduction attachments. Check each series’ model table for ratios and input torque.</Lead>
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
                <Box component="img" src={LOGO[s.brand]} alt={s.brand} title={s.brand} sx={{ height: s.brand === "KOSAPLUS" ? 44 : 22, my: s.brand === "KOSAPLUS" ? -1.5 : 0, maxWidth: 90, objectFit: "contain" }} />
              </Box>
              <Box sx={{ display: { xs: "grid", md: "none" }, gridColumn: 3, gridRow: 1, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, placeItems: "center", color: T.ink }}>
                <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 1.5, fontSize: "0.85rem", color: T.muted }}>
          MAB thrust bases take 75 to 2,500 kN of axial load: see the MAB page.
        </Box>
      </Box>
    </Box>
  );
}

const MORE = [
  { title: "Limit switch boxes", text: "Signal open and closed positions to the control room; they mount on the actuator.", tag: "IP67 / IP68", img: `${V}/products/actuators/limit-switches/ks-limit-switch.jpg`, href: "/actuators/limit-switches" },
  { title: "Pneumatic actuators", text: "Where compressed air is available: rack & pinion, scotch yoke and linear, up to 120,867 Nm.", tag: "Double acting or spring return", img: `${V}/products/actuators/pneumatic/pdf.webp`, href: "/pneumatic/actuators" },
  { title: "Electric actuators", text: "Quarter-turn, multi-turn and linear, including a spring-return fail-safe series.", tag: "8 – 9,000 Nm", img: `${V}/products/actuators/electric/itq.webp`, href: "/actuators/electric" },
  { title: "Hydraulic actuators", text: "Electro-hydraulic and hydraulic scotch yoke actuators for the largest valves.", tag: "46 – 112,595 Nm", img: `${V}/products/actuators/hydraulic/adf.webp`, href: "/actuators/hydraulic" },
];

function CompleteLine() {
  return (
    <Box component="section" aria-labelledby="h2-line" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Complete the package</Kicker>
          <H2 id="h2-line">Controls and other actuators</H2>
          <Lead>Add a limit switch box to report the valve position, or automate the valve with a powered actuator.</Lead>
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
          <H2 id="h2-faq">Mechanical actuator questions</H2>
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Not sure which gear?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the valve, its torque, the mounting flange and whether it is quarter-turn or multi-turn, and we’ll size the gear and quote it.
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

export default function MechanicalActuatorsView() {
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
