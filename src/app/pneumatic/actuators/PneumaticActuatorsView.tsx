"use client";

// Pneumatic Actuators: type page under the Actuators tab, in the same format as
// Hydrogen Valves (/high-pressure/valves): centred hero with a series strip,
// stats, finder, every series, a torque comparison, the rest of the package, FAQ.
// Figures come from each series page (and the KOSAPLUS A series from our actuator guide).

import { titleCase } from "@/src/app/Common/titleCase";
import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesChips from "@/src/app/actuators/components/SeriesChips";
import GroupShowcase from "@/src/app/actuators/components/GroupShowcase";
import BrandSwitcher from "@/src/app/actuators/components/BrandSwitcher";
import BrandLogos from "@/src/app/actuators/components/BrandLogos";

const V = "https://pblol2.blob.core.windows.net/valvenok-images";
const LOGO: Record<string, string> = {
  Susin: `${V}/logo/susin-logo.webp`,
  KOSAPLUS: "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg",
  SPAC: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp",
};

type Series = {
  key: string;
  code: string;
  name: string;
  kind: "Rack & pinion" | "Scotch yoke" | "Linear";
  brand: string;
  text: string;
  tag: string;
  min?: number;
  max?: number;
  sr: boolean; // spring return available
  img: string;
  href: string;
  icon: React.ReactNode;
  color: string;
};

export const SERIES: Series[] = [
  { key: "pds", code: "PDS", name: "PDS scotch yoke", kind: "Scotch yoke", brand: "Susin", text: "Double acting (PD) and spring return (PS) scotch yoke actuators, ISO 5211, NAMUR and VDI-VDE 3845 mounting.", tag: "10 – 4,000 Nm", min: 10, max: 4000, sr: true, img: `${V}/products/actuators/pneumatic/pdf.webp`, href: "/pneumatic/actuators/pds", icon: <SettingsInputComponentOutlinedIcon />, color: "#8FD47C" },
  { key: "hd", code: "HD", name: "HD heavy-duty scotch yoke", kind: "Scotch yoke", brand: "Susin", text: "Symmetric (IS) and canted (IC) yokes for the largest valves, 3.5–10 bar, IP66 / IP67.", tag: "132 – 120,867 Nm", min: 132, max: 120867, sr: true, img: `${V}/products/actuators/pneumatic/hd.webp`, href: "/pneumatic/actuators/hd", icon: <FitnessCenterOutlinedIcon />, color: "#B7A6F0" },
  { key: "mhd", code: "MHD", name: "MHD micro scotch yoke", kind: "Scotch yoke", brand: "Susin", text: "Compact IS and IC scotch yoke actuators for double offset butterfly valves, double acting or spring return.", tag: "63 – 1,474 Nm", min: 63, max: 1474, sr: true, img: "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/mhd.jpg", href: "/pneumatic/actuators/mhd", icon: <CompressOutlinedIcon />, color: "#7CB9F0" },
  { key: "plds", code: "PLDS", name: "PLDS linear cylinders", kind: "Linear", brand: "Susin", text: "Double acting linear actuators, 3–7 bar, IP66, built to ISO 3322 / 4393 / 5597 with several corrosion grades.", tag: "Linear · 3 – 7 bar", sr: false, img: `${V}/products/actuators/pneumatic/plds.webp`, href: "/pneumatic/actuators/plds", icon: <SwapVertOutlinedIcon />, color: "#8FD47C" },
  { key: "mplds", code: "MPLDS", name: "MPLDS micro linear", kind: "Linear", brand: "Susin", text: "Compact double acting linear actuators for tight spaces, IP66, positioner and solenoid ready.", tag: "Linear · 2.1 – 6.2 bar", sr: false, img: `${V}/products/actuators/pneumatic/mplds.webp`, href: "/pneumatic/actuators/mplds", icon: <SwapVertOutlinedIcon />, color: "#F4C95D" },
];
const S = Object.fromEntries(SERIES.map((s) => [s.key, s]));
const ROTARY = SERIES.filter((s) => s.max);

const STATS: { value: string; unit: string; label: string; logos?: string[] }[] = [
  { value: String(SERIES.length), unit: "series", label: "Scotch yoke and linear" },
  { value: "120,867", unit: "Nm", label: "Highest output torque (HD scotch yoke)" },
  { value: "ISO 5211", unit: "", label: "Direct mounting on quarter-turn series" },
  { value: "", unit: "", logos: ["Susin"], label: "Every series on this page is Susin I-Tork" },
];

// Finder: what the actuator must do, then the torque the valve needs
const DUTIES: { label: string; picks: string[]; rotary: boolean }[] = [
  { label: "Open / close a quarter-turn valve", picks: ["pds", "mhd", "hd"], rotary: true },
  { label: "Fail-safe on loss of air", picks: ["pds", "mhd", "hd"], rotary: true },
  { label: "Large valve, very high torque", picks: ["hd"], rotary: true },
  { label: "Butterfly valve, compact", picks: ["mhd", "pds"], rotary: true },
  { label: "Linear (push / pull) stroke", picks: ["plds", "mplds"], rotary: false },
];
const TORQUES = [100, 1000, 5000, 20000, 100000];
const nm = (n: number) => n.toLocaleString("en-GB");

const FAQ_ICONS = [CompareArrowsOutlinedIcon, ShieldOutlinedIcon, AirOutlinedIcon, ExtensionOutlinedIcon];
const FAQ = [
  { q: "Rack & pinion or scotch yoke?", a: "Rack & pinion actuators give an even torque through the stroke and suit smaller valves. Scotch yoke actuators give their highest torque at the ends of the stroke, where most valves need it, and suit larger valves." },
  { q: "Double acting or spring return?", a: "Double acting actuators use air to open and to close, and stay put if the air fails. Spring return actuators use air one way and a spring the other, so the valve goes to a safe position (fail-close or fail-open) when air is lost." },
  { q: "What air pressure do I need?", a: "It depends on the series: PDS runs on 3.5–8 bar, HD on 3.5–10 bar and PLDS on 3–7 bar. Size the actuator on the lowest pressure your supply will deliver." },
  { q: "Can I add a solenoid valve and limit switches?", a: "Yes. Our actuators accept NAMUR solenoid valves, limit switch boxes and positioners. Tell us the control signal and we’ll quote the full package." },
];
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const photo = { objectFit: "contain", mixBlendMode: "multiply" } as const;

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EEF5FF 0%, #F6FAFF 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(60,110,180,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Actuators</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Pneumatic" />
          <Words text="Actuators" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Five series of air-powered actuators: scotch yoke for quarter-turn valves from 10 to 120,867 Nm, and linear actuators for push / pull duty. Double acting or spring return for a fail-safe position.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#finder" sx={pillBtn(true)}>
            Help me choose <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>Get a quote</Box>
        </Box>
        <BrandSwitcher here={["Susin"]} category="pneumatic" />
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
              <Box className="nm" sx={{ mt: 1.25, fontSize: "0.86rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{s.code} series</Box>
              <Box sx={{ mt: 0.25, fontSize: "0.74rem", color: T.muted }}>{s.max ? `up to ${nm(s.max)} Nm` : s.kind === "Linear" ? "linear" : "buy online"}</Box>
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
              {"logos" in s && s.logos && <Box sx={{ mb: s.value ? 1 : 0.5 }}><BrandLogos names={s.logos} size={s.value ? "md" : "lg"} /></Box>}
              {s.value && <Box sx={{ fontSize: { xs: "1.5rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                {s.value}
                {s.unit && <Box component="span" sx={{ fontSize: "0.5em", ml: 0.75, color: T.greenDark }}>{s.unit}</Box>}
              </Box>}
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
  // rotary: keep series rated at or above the torque (SRA has no published figure: shown for small valves only)
  const fits = d.rotary ? picks.filter((s) => (s.max ? s.max >= need : need <= 100)) : picks;
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
                          <Box sx={{ fontSize: "0.8rem", color: T.body }}>{s.tag} · {s.brand}{s.sr ? " · spring return available" : ""}</Box>
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
        <Box component="h3" sx={{ m: 0, mb: 0.75, fontSize: { xs: "0.92rem", sm: "1.1rem" }, lineHeight: 1.25, fontWeight: 800, color: T.ink, letterSpacing: "-0.01em" }}>{titleCase(s.name)}</Box>
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
          <H2 id="h2-types">Every Pneumatic Actuator We Supply</H2>
          <Lead center>Pick a series to see every size and model, with the full torque table and a quote.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
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

// log scale 10 Nm … 200,000 Nm so small and large series both read
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
          <H2 id="h2-compare">How Much Torque Does Each Series Give?</H2>
          <Lead>Each bar shows the output torque of a quarter-turn series, 10 to 120,867 Nm on a log scale. Ratings vary by size and air pressure, so check each series’ table.</Lead>
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
                  <Box sx={{ fontSize: "0.82rem", color: T.body, lineHeight: 1.45 }}>{s.sr ? "Double acting or spring return" : "Double acting"}</Box>
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
          Linear series (PLDS, MPLDS) are rated by thrust and stroke: see their pages. For rack & pinion actuators, see “Also in our group” below.
        </Box>
      </Box>
    </Box>
  );
}

const MORE = [
  { title: "Limit switch boxes", text: "Signal open and closed positions to the control room; they mount on the actuator.", tag: "IP67 / IP68", img: `${V}/products/actuators/limit-switches/susin-limit-switch.webp`, href: "/actuators/accessories" },
  { title: "Electric actuators", text: "For valves where there’s no air supply: quarter-turn, linear and multi-turn.", tag: "On/off & modulating", img: `${V}/products/actuators/electric/itq.webp`, href: "/actuators/electric" },
  { title: "Mechanical gearboxes", text: "Manual override or hand operation for large valves, ISO 5211 mounting.", tag: "Up to 32,000 Nm", img: `${V}/products/actuators/mechanical/itg.webp`, href: "/actuators/mechanical" },
  { title: "Hydraulic actuators", text: "Electro-hydraulic, rack & pinion, scotch yoke and linear piston actuators.", tag: "35 – 112,595 Nm", img: `${V}/brands/susin/ktc-hrsda.jpg`, href: "/actuators/hydraulic" },
];

function CompleteLine() {
  return (
    <Box component="section" aria-labelledby="h2-line" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Complete the package</Kicker>
          <H2 id="h2-line">Controls and Other Actuators</H2>
          <Lead>Add a limit switch box to report the valve position, or choose another type where air isn’t the right fit.</Lead>
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
          <H2 id="h2-faq">Pneumatic Actuator Questions</H2>
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
              Send us the valve, its torque, your air pressure and the fail-safe position, and we’ll size the actuator and quote it with its accessories.
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

export default function PneumaticActuatorsView() {
  return (
    <MotionRoot sx={{ ...textReset, bgcolor: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Hero />
      <Stats />
      <Finder />
      <Types />
      <Compare />
      <GroupShowcase category="pneumatic" what="pneumatic actuators" />
      <CompleteLine />
      <Faq />
      <Cta />
    </MotionRoot>
  );
}
