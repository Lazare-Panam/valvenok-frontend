"use client";

// Hydrogen Valves: section page under the Hydrogen & High Pressure tab, in the
// same style as the hub (/hydrogen-cryogenic). Lists every valve type in the
// section, a side-by-side "which valve" guide, related fittings and tubing, FAQ.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L, useInView } from "@/src/app/Common/LightMotion";
import { groupSite } from "@/src/app/Common/group";
import { GROUPS, wrap, Kicker, H2, Lead, pillBtn, RangeCard, BRAND_LOGO } from "./HydrogenHub";

const VALVES = GROUPS.find((g) => g.key === "valves")!;
const MORE = [GROUPS.find((g) => g.key === "fittings")!, GROUPS.find((g) => g.key === "tubing")!];

const STATS = [
  { value: String(VALVES.ranges.length), unit: "types", label: "Of hydrogen and high-pressure valve" },
  { value: "100,000", unit: "psi", label: "Highest rated (Hiflux check valves)" },
  { value: "SS 316", unit: "", label: "Stainless body as standard" },
  { value: "2", unit: "brands", label: "Panam and Hiflux" },
];

type Row = { key: string; type: string; does: string; min: number; max: number; brands: string[]; use: string; href: string; icon: React.ReactNode; color: string };
const COMPARE: Row[] = [
  { key: "needle", type: "Needle valves", does: "Fine flow control and tight isolation on small lines", min: 10000, max: 60000, brands: ["Panam", "Hiflux"], use: "Gauges, sampling, H70 refuelling", href: "/high-pressure/valves/needle-valves", icon: <TuneOutlinedIcon />, color: "#8FD47C" },
  { key: "ball", type: "Ball valves", does: "Quick quarter-turn on/off; 2-way or 3-way", min: 10000, max: 60000, brands: ["Panam", "Hiflux"], use: "Shut-off and diverting", href: "/high-pressure/valves/ball-valves", icon: <PowerSettingsNewOutlinedIcon />, color: "#7CB9F0" },
  { key: "check", type: "Check valves", does: "Flow one way only, stops it coming back", min: 10000, max: 100000, brands: ["Hiflux"], use: "Compressor and pump discharge", href: "/high-pressure/valves/check-valves", icon: <EastOutlinedIcon />, color: "#F4C95D" },
  { key: "aov", type: "Air operated valves", does: "Open or close remotely from an air signal", min: 10000, max: 60000, brands: ["Hiflux"], use: "Automated and emergency shut-off", href: "/high-pressure/valves/aov", icon: <AirOutlinedIcon />, color: "#B7A6F0" },
  { key: "dbb", type: "Double block & bleed", does: "Two isolation points plus a bleed in one body", min: 15000, max: 20000, brands: ["Panam"], use: "Safe instrument isolation", href: "/high-pressure/valves/dbb-valves", icon: <LayersOutlinedIcon />, color: "#8FD47C" },
  { key: "safety", type: "Safety & relief valves", does: "Vent when pressure goes above the set point", min: 1000, max: 60000, brands: ["Hiflux"], use: "Overpressure protection", href: "/hydrogen-cryogenic/valves/products?type=Safety%20Valve", icon: <HealthAndSafetyOutlinedIcon />, color: "#F2A0A0" },
  { key: "special", type: "Special valves", does: "Wellhead gauge, bleed, control, high-temperature", min: 3000, max: 30000, brands: ["Hiflux"], use: "Upstream and wellhead service", href: "/hydrogen-cryogenic/valves/products?type=Special%20Valve", icon: <BuildOutlinedIcon />, color: "#F4C95D" },
  { key: "manifold", type: "2-valve manifolds", does: "Isolate and vent a pressure transmitter", min: 15000, max: 20000, brands: ["Panam"], use: "Transmitter hook-ups", href: "/high-pressure/manifolds", icon: <AccountTreeOutlinedIcon />, color: "#7CB9F0" },
];
const ROW = Object.fromEntries(COMPARE.map((r) => [r.key, r]));
const IMG_OF = (href: string) => VALVES.ranges.find((x) => x.href === href)?.img;

// Valve finder: what the valve must do, then the working pressure
const DUTIES = [
  { label: "Shut off a line", picks: ["ball", "needle"] },
  { label: "Fine flow control", picks: ["needle"] },
  { label: "Stop backflow", picks: ["check"] },
  { label: "Remote / automated shut-off", picks: ["aov"] },
  { label: "Isolate an instrument", picks: ["dbb", "manifold", "needle"] },
  { label: "Protect against overpressure", picks: ["safety"] },
  { label: "Wellhead / upstream", picks: ["special"] },
];
const PRESSURES = [15000, 20000, 30000, 60000, 100000];
const psi = (n: number) => n.toLocaleString("en-GB");

const FAQ_ICONS = [CompareArrowsOutlinedIcon, LocalGasStationOutlinedIcon, CableOutlinedIcon, VerifiedOutlinedIcon];

const FAQ = [
  { q: "Needle valve or ball valve?", a: "Use a needle valve when you need fine control or a tight seal on a small instrument line. Use a ball valve when you want quick quarter-turn on/off or need to divert flow with a 3-way pattern." },
  { q: "Which valves suit hydrogen refuelling?", a: "Hiflux supplies H70 needle valves for hydrogen fuel stations, including a KGS-certified refuelling needle valve. Tell us the station pressure and connection and we’ll confirm the model." },
  { q: "What connections are available?", a: "Most valves come with cone-and-thread (MP/HP) connections for high pressure, plus NPT, PT and ISO parallel threads on selected models. Check each range’s table for the exact options." },
  { q: "Do you supply certificates?", a: "Yes. Ask for the approval or material certificate you need when you request a quote. Certification varies by model." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function Hero() {
  const panam = groupSite("Panam Valves");
  const hiflux = groupSite("Hiflux UK");
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #EEF5FF 0%, #F6FAFF 55%, #FFFFFF 100%)", pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(60,110,180,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, black, transparent 80%)", pointerEvents: "none" }} />
      <Box sx={{ ...wrap, position: "relative", textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Kicker>Hydrogen & High Pressure</Kicker>
        </Box>
        <Box component="h1" sx={{ m: 0, mb: 2, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: T.ink }}>
          <Words text="Hydrogen" />
          <Words text="valves" start={200} sx={gradientText} />
        </Box>
        <Box component="p" sx={{ m: 0, mx: "auto", maxWidth: 700, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, color: T.body }}>
          Eight valve types in SS 316, from 1,000 to 100,000 psi depending on the range. For hydrogen refuelling, test systems, wellheads and high-pressure instrumentation.
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.25, mt: 3.5 }}>
          <Box component="a" href="#finder" sx={pillBtn(true)}>
            Help me choose <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Box component={Link} href="/contact" sx={pillBtn(false)}>
            Get a quote
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: 2.5, rowGap: 0.75, mt: 2, fontSize: "0.85rem" }}>
          {[panam, hiflux].map((s) => (
            <Box key={s.url} component="a" href={s.url} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              {s.name} website <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Product strip: every valve type, one tap to its page */}
      <Box sx={{ position: "relative", mt: { xs: 4.5, md: 6 }, maxWidth: 1240, mx: "auto", px: { xs: 0, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 1.5 },
            justifyContent: { lg: "center" },
            overflowX: "auto",
            px: { xs: 2, md: 0 },
            pb: 1,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {COMPARE.map((r, i) => (
            <Box
              key={r.key}
              component={Link}
              href={r.href}
              sx={{
                flexShrink: 0,
                width: { xs: 112, md: 128 },
                scrollSnapAlign: "start",
                textAlign: "center",
                textDecoration: "none",
                animation: `wordIn .6s cubic-bezier(.2,.8,.2,1) ${300 + i * 60}ms both`,
                "&:hover .ph": { transform: "translateY(-6px)", boxShadow: T.shadowHover, borderColor: "#BFD6F2" },
                "&:hover .nm": { color: T.greenDark },
              }}
            >
              <Box className="ph" sx={{ mx: "auto", width: { xs: 96, md: 112 }, height: { xs: 96, md: 112 }, borderRadius: "50%", bgcolor: "#fff", border: "1px solid #DCE6F2", boxShadow: T.shadow, display: "grid", placeItems: "center", overflow: "hidden", transition: "all .25s" }}>
                {IMG_OF(r.href) && <Box component="img" src={IMG_OF(r.href)} alt="" loading="eager" sx={{ width: "72%", height: "72%", objectFit: "contain", mixBlendMode: "multiply" }} />}
              </Box>
              <Box className="nm" sx={{ mt: 1.25, fontSize: "0.86rem", fontWeight: 700, color: T.ink, lineHeight: 1.25, transition: "color .2s" }}>{r.type}</Box>
              <Box sx={{ mt: 0.25, fontSize: "0.74rem", color: T.muted }}>up to {psi(r.max)} psi</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function Finder() {
  const [duty, setDuty] = React.useState(0);
  const [p, setP] = React.useState(2);
  const need = PRESSURES[p];
  const picks = DUTIES[duty].picks.map((k) => ROW[k]);
  const fits = picks.filter((r) => r.max >= need);
  const chip = (on: boolean) => ({
    cursor: "pointer",
    fontFamily: "inherit",
    px: 1.5,
    py: 0.8,
    borderRadius: 999,
    fontSize: "0.84rem",
    fontWeight: on ? 700 : 600,
    border: `1px solid ${on ? T.greenDark : T.border}`,
    bgcolor: on ? T.greenDark : "#fff",
    color: on ? "#fff" : T.ink,
    transition: "all .15s",
    "&:hover": { borderColor: T.greenDark },
  });
  return (
    <Box component="section" id="finder" aria-labelledby="h2-finder" sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
    <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 }, alignItems: "center" }}>
    <Box>
      <Kicker>Valve finder</Kicker>
      <H2 id="h2-finder">Not sure which valve?</H2>
      <Lead>Pick what the valve has to do and your working pressure. We’ll point you to the types that fit.</Lead>
    </Box>
    <Reveal from="right">
      <Box sx={{ p: "2px", borderRadius: "26px", background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)", backgroundSize: "300% 300%", animation: "bgShift 8s ease infinite", boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)" }}>
        <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", p: { xs: 2.5, md: 3.5 } }}>

          <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>1. What does it need to do?</Box>
          <Box role="group" aria-label="Duty" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.25 }}>
            {DUTIES.map((d, i) => (
              <Box key={d.label} component="button" type="button" aria-pressed={i === duty} onClick={() => setDuty(i)} sx={chip(i === duty)}>
                {d.label}
              </Box>
            ))}
          </Box>

          <Box sx={{ fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 1 }}>2. Working pressure up to</Box>
          <Box role="group" aria-label="Pressure" sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
            {PRESSURES.map((v, i) => (
              <Box key={v} component="button" type="button" aria-pressed={i === p} onClick={() => setP(i)} sx={chip(i === p)}>
                {psi(v)} psi
              </Box>
            ))}
          </Box>

          <Box aria-live="polite" sx={{ borderTop: `1px solid ${T.border}`, pt: 2 }}>
            <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, mb: 1.25 }}>
              {fits.length ? (fits.length === 1 ? "Start with" : "Good options") : "Outside our standard ranges"}
            </Box>
            {fits.length ? (
              <Box sx={{ display: "grid", gap: 1 }}>
                {fits.map((r) => (
                  <Box
                    key={r.key}
                    component={Link}
                    href={r.href}
                    sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1, pr: 1.5, borderRadius: "14px", border: `1px solid ${T.border}`, textDecoration: "none", bgcolor: "#fff", transition: "all .15s", "&:hover": { borderColor: "#BFE5B3", bgcolor: T.greenSoft }, "&:hover .arr": { bgcolor: T.green, color: T.greenDeep } }}
                  >
                    <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: "12px", bgcolor: T.surface, display: "grid", placeItems: "center", overflow: "hidden" }}>
                      {IMG_OF(r.href) && <Box component="img" src={IMG_OF(r.href)} alt="" sx={{ width: "80%", height: "80%", objectFit: "contain", mixBlendMode: "multiply" }} />}
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ fontWeight: 800, color: T.ink, fontSize: "0.95rem" }}>{r.type}</Box>
                      <Box sx={{ fontSize: "0.8rem", color: T.body }}>
                        {psi(r.min)}–{psi(r.max)} psi · {r.brands.join(" · ")}
                      </Box>
                    </Box>
                    <Box className="arr" sx={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, display: "grid", placeItems: "center", color: T.ink, transition: "all .15s" }}>
                      <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.6 }}>
                None of our standard {DUTIES[duty].label.toLowerCase()} valves are listed that high.{" "}
                <Box component={Link} href="/contact" sx={{ color: T.greenDark, fontWeight: 700 }}>Send us your pressure</Box> and we’ll check what we can supply.
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

function Stats() {
  return (
    <Box sx={{ ...wrap, mt: { xs: 1, md: 2 }, position: "relative", zIndex: 1 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2 } }}>
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <Box sx={{ height: "100%", boxSizing: "border-box", p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, borderTop: `4px solid ${[L.lime, L.sky, L.sun, "rgba(183,166,240,0.6)"][i]}` }}>
              <Box sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink, lineHeight: 1.1 }}>
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

function Types() {
  return (
    <Box component="section" id="types" aria-labelledby="h2-types" sx={{ py: { xs: 7, md: 10 }, bgcolor: T.surface, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Kicker>Valve types</Kicker>
          <H2 id="h2-types">Every hydrogen valve we supply</H2>
          <Lead center>Pick a type to see every series, size and model, with the full spec table.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
          {VALVES.ranges.map((r, i) => (
            <Reveal key={r.href} delay={(i % 4) * 70}>
              <RangeCard r={r} tint={VALVES.tint} />
            </Reveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const MAX = 100000;
const TICKS = [0, 25000, 50000, 75000, 100000];

function Compare() {
  const [ref, on] = useInView<HTMLDivElement>(0.15);
  return (
    <Box component="section" aria-labelledby="h2-compare" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 2, mb: 4 }}>
          <Box>
            <Kicker>Pressure ranges</Kicker>
            <H2 id="h2-compare">How high does each valve go?</H2>
            <Lead>Each bar shows the pressure range of that valve type, 0 to 100,000 psi. Ratings vary by model, so check each range’s table.</Lead>
          </Box>
        </Box>
        <Box ref={ref} sx={{ borderRadius: "22px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow, p: { xs: 1.5, md: 2.5 } }}>
          {/* scale */}
          <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "300px 1fr 150px", gap: 3, px: 1.5, pb: 1.25, borderBottom: `1px solid ${T.border}` }}>
            <Box />
            <Box sx={{ position: "relative", height: 18 }}>
              {TICKS.map((t) => (
                <Box key={t} component="span" sx={{ position: "absolute", left: `${(t / MAX) * 100}%`, transform: t === 0 ? "none" : t === MAX ? "translateX(-100%)" : "translateX(-50%)", fontSize: "0.72rem", fontWeight: 600, color: T.muted, whiteSpace: "nowrap" }}>
                  {t ? `${t / 1000}k` : "0"}{t === MAX ? " psi" : ""}
                </Box>
              ))}
            </Box>
            <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, textAlign: "right" }}>Brand</Box>
          </Box>
          {COMPARE.map((r, i) => (
            <Box
              key={r.key}
              component={Link}
              href={r.href}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "44px 1fr 30px", md: "300px 1fr 150px" },
                gap: { xs: 1.5, md: 3 },
                alignItems: "center",
                px: 1.5,
                py: { xs: 1.75, md: 1.5 },
                borderRadius: "14px",
                textDecoration: "none",
                transition: "background-color .15s",
                "&:hover": { bgcolor: T.greenSoft },
                "&:hover .ic": { bgcolor: T.green, color: T.greenDeep },
                "&:hover .ttl": { color: T.greenDark },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0, gridColumn: { xs: "1 / 3", md: "auto" } }}>
                <Box className="ic" sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: "12px", bgcolor: T.greenSoft, color: T.greenDark, display: "grid", placeItems: "center", transition: "all .15s", "& svg": { fontSize: 22 } }}>{r.icon}</Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box className="ttl" sx={{ fontWeight: 800, color: T.ink, fontSize: "0.98rem", transition: "color .15s" }}>{r.type}</Box>
                  <Box sx={{ fontSize: "0.82rem", color: T.body, lineHeight: 1.45 }}>{r.does}</Box>
                </Box>
              </Box>
              <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, gridRow: { xs: 2, md: "auto" } }}>
                <Box sx={{ position: "relative", height: 14, borderRadius: 999, bgcolor: "#EEF2EF", overflow: "hidden" }}>
                  {TICKS.slice(1, -1).map((t) => (
                    <Box key={t} sx={{ position: "absolute", top: 0, bottom: 0, left: `${(t / MAX) * 100}%`, width: "1px", bgcolor: "#fff" }} />
                  ))}
                  <Box sx={{ position: "absolute", top: 0, bottom: 0, left: `${(r.min / MAX) * 100}%`, width: on ? `${Math.max(((r.max - r.min) / MAX) * 100, 1.5)}%` : 0, borderRadius: 999, bgcolor: r.color, transition: `width 1s cubic-bezier(.2,.8,.2,1) ${i * 90}ms` }} />
                </Box>
                <Box sx={{ mt: 0.5, fontSize: "0.78rem", fontWeight: 700, color: T.ink }}>
                  {psi(r.min)}–{psi(r.max)} psi <Box component="span" sx={{ fontWeight: 500, color: T.muted }}>· {r.use}</Box>
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", alignItems: "center", gap: 1 }}>
                {r.brands.map((b) => (
                  <Box key={b} component="img" src={BRAND_LOGO[b]} alt={b} title={b} sx={{ height: 20, maxWidth: 64, objectFit: "contain" }} />
                ))}
              </Box>
              <Box sx={{ display: { xs: "grid", md: "none" }, gridColumn: 3, gridRow: 1, width: 30, height: 30, borderRadius: "50%", border: `1px solid ${T.border}`, placeItems: "center", color: T.ink }}>
                <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function CompleteLine() {
  return (
    <Box component="section" aria-labelledby="h2-line" sx={{ py: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Complete the line</Kicker>
          <H2 id="h2-line">Fittings and tubing to match</H2>
          <Lead>The same cone-and-thread connections run through the valves, fittings and tube, so one order covers the whole line.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: { xs: 1.25, md: 2.5 } }}>
          {MORE.flatMap((g) => g.ranges.slice(0, 2).map((r) => ({ r, tint: g.tint }))).map(({ r, tint }, i) => (
            <Reveal key={r.href} delay={i * 70}>
              <RangeCard r={r} tint={tint} />
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Box component={Link} href="/hydrogen-cryogenic#ranges" sx={pillBtn(false)}>
            See all Hydrogen & High Pressure products <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
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
          <H2 id="h2-faq">Hydrogen valve questions</H2>
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Not sure which valve?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: T.body }}>
              Send us the pressure, media, connection and approvals you need, and we’ll recommend the valve and quote it.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={pillBtn(true)}>
              Get a quote <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box component={Link} href="/quick-order" sx={pillBtn(false)}>
              Quick Order
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function HydrogenValves() {
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

