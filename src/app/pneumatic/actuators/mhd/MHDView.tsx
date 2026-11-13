"use client";

// MHD (Micro) series page under Actuators › Pneumatic Actuators, in the same
// format as Needle Valves: split hero with an animated scotch-yoke cut-away,
// a ladder of the four configurations, an exploded-view band, FAQ.
// Every figure is from the Susin I-Tork "Pneumatic Actuator Micro Series SS & CS" catalogue.

import * as React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, Words, Reveal, gradientText, L } from "@/src/app/Common/LightMotion";
import { wrap, Kicker, H2, Lead, pillBtn } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import YokeCutaway from "../_series/YokeCutaway";
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
  { q: "How do I choose the size?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest model that delivers it at your lowest air supply. Choose a symmetric (IS) yoke if the valve needs torque at both ends, canted (IC) if mostly at one end. For spring return, check the spring torque too." },
  { q: "Double acting or spring return?", a: "Double acting models (ISD, ICD) use air to open and close. Spring return models (ISR, ICR) use air one way and springs the other, so the valve goes to a safe position if air is lost. The design is modular, so one can be converted to the other." },
  { q: "What is the difference between Micro SS and Micro CS?", a: "Both have a ductile iron centre body. Micro SS has stainless steel cylinders, Micro CS has carbon steel cylinders." },
  { q: "Can I adjust the travel?", a: "Yes. Stopper bolts at both cylinder ends set the open and close positions between 85° and 95°." },
  { q: "Which accessories can be fitted?", a: "A manual handwheel (jackscrew), hydraulic override, limit switches, solenoid valves and positioners." },
];
const FAQ_ICONS = [CompareArrowsOutlinedIcon, SquareFootOutlinedIcon, ShieldOutlinedIcon, AirOutlinedIcon, BuildOutlinedIcon, ExtensionOutlinedIcon];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(120deg, ${L.mint} 0%, #FFFFFF 45%, #FFF7E6 100%)`, py: { xs: 5, md: 8 } }}>
      <Box sx={{ ...wrap, display: "grid", gridTemplateColumns: { xs: "minmax(0,1fr)", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Kicker>Pneumatic actuators</Kicker>
            <Box sx={{ mb: 1.25, display: "inline-flex", px: 1, py: 0.4, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box component="img" src={SUSIN_LOGO} alt="Susin I-Tork" sx={{ height: 18, width: "auto", display: "block" }} />
            </Box>
          </Box>
          <Box component="h1" sx={{ m: 0, mb: 2.5, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" }, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04, color: T.ink }}>
            <Words text="MHD Micro" />
            <Words text="Scotch Yoke" start={200} sx={gradientText} />
          </Box>
          <Lead>
            The compact member of the Susin I-Tork scotch yoke family, for on/off and control of double offset butterfly valves. Symmetric or canted yoke, double acting or spring return: {TOTAL} models from {MHD_TORQUE_RANGE}.
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
              About Susin I-Tork <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
            </Box>
            <Box component="a" href={SUSIN_CATALOG.MHD} target="_blank" rel="noopener" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: T.greenDark, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              <DownloadRoundedIcon sx={{ fontSize: 16 }} /> Download catalogue (PDF)
            </Box>
          </Box>
        </Box>
        <Reveal from="right">
          <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "28px", bgcolor: "#fff", border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
            <Box sx={{ mb: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.greenDark }}>How a scotch yoke works</Box>
            <YokeCutaway travel="Output shaft turns 90° (85–95°)" />
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
            <H2 id="h2-models">Pick a Yoke and Action</H2>
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

// Parts shown on the exploded view, from the Susin I-Tork Micro series parts list (catalogue p.7).
// DI / CS = ductile iron or carbon steel; SS = stainless steel.
const PARTS: { group: string; items: [number, string, string][] }[] = [
  { group: "Cylinder", items: [[1, "Cylinder", "SS"], [2, "Piston", "DI / CS"], [3, "Piston rod", "Chrome-plated steel"], [4, "Cylinder front cover", "DI / CS"], [5, "Cylinder end cover", "DI / CS"], [6, "Front cover bushing", "PTFE"], [7, "Tie rod", "SS"], [9, "Tie rod hex nut", "Steel"], [12, "Piston rod hex nut", "Steel"]] },
  { group: "Centre body", items: [[21, "Centre body", "DI / CS"], [22, "Centre body cover", "DI / CS"], [23, "Output shaft", "SS"], [24, "Yoke", "SS"], [25, "Upper bush", "PTFE"], [27, "Slide pin", "SS"], [28, "Slide roller", "SS"], [31, "Position indicator", "SS"], [40, "Stopper bolt", "Steel"], [41, "Stopper bolt hex nut", "Steel"]] },
  { group: "Spring cylinder", items: [[50, "Spring case", "SS"], [51, "Spring case front cover", "DI / CS"], [52, "Piston", "DI / CS"], [55, "Tie rod", "SS"], [56, "Tie rod hex nut", "Steel"], [60, "Spring case end cover", "DI / CS"]] },
];

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
            <Box component="h2" id="h2-build" sx={{ m: 0, mb: 2, fontSize: { xs: "1.3rem", md: "1.55rem" }, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em" }}>Built to Be Serviced</Box>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 1.5 }}>
              {points.map(([k, v]) => (
                <Box component="li" key={k} sx={{ display: "flex", gap: 1.25 }}>
                  <Box component="span" sx={{ flexShrink: 0, mt: "7px", width: 8, height: 8, borderRadius: "50%", bgcolor: T.green }} />
                  <Box sx={{ fontSize: "0.92rem", color: T.body, lineHeight: 1.55 }}><Box component="strong" sx={{ color: T.ink }}>{k}.</Box> {v}</Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ gridColumn: "1 / -1", pt: { xs: 1, md: 0 } }}>
            <Box component="h3" sx={{ m: 0, mb: 1.5, fontSize: "1.05rem", fontWeight: 800, color: T.ink }}>What the Numbers Show</Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.5 }}>
              {PARTS.map((g) => (
                <Box key={g.group} sx={{ p: 2, borderRadius: "16px", bgcolor: "#fff", border: "1px solid #DCE6F5" }}>
                  <Box sx={{ mb: 1, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.greenDark }}>{g.group}</Box>
                  <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 0.6 }}>
                    {g.items.map(([n, name, mat]) => (
                      <Box component="li" key={n} sx={{ display: "grid", gridTemplateColumns: "28px 1fr auto", alignItems: "center", gap: 1, fontSize: "0.84rem" }}>
                        <Box component="span" sx={{ width: 24, height: 24, borderRadius: "50%", border: `1.5px solid ${T.ink}`, display: "grid", placeItems: "center", fontSize: "0.7rem", fontWeight: 800, color: T.ink }}>{n}</Box>
                        <Box component="span" sx={{ fontWeight: 700, color: T.ink }}>{name}</Box>
                        <Box component="span" sx={{ color: T.muted, fontSize: "0.78rem", textAlign: "right" }}>{mat}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: 1.25, fontSize: "0.78rem", color: T.muted }}>From the Susin I-Tork Micro series parts list. DI / CS: ductile iron or carbon steel; SS: stainless steel. The full list of 65 parts is in the catalogue.</Box>
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
          <H2 id="h2-faq">MHD Actuator Questions</H2>
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
            <Box component="h2" id="h2-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.6rem", md: "2.2rem" }, fontWeight: 800, letterSpacing: "-0.03em", color: T.ink }}>Know the Model?</Box>
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
