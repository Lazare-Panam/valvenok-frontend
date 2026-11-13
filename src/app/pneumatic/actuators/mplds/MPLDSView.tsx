"use client";

// MPLDS series page: MPLD (double acting) and MPLS (spring return) micro linear
// actuators. Every figure is from Susin I-Tork's MPLD and MPLS pages on susingroup.com.

import * as React from "react";
import { Box } from "@mui/material";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import FailSafe from "../_series/FailSafe";
import { MPLDS_SIZES, MPLDS_BARS, MPLDS_IMAGE } from "./mpldsData";

const kn = (n: number) => n.toLocaleString("en-GB", { minimumFractionDigits: 1 });
const MIN = Math.min(...MPLDS_SIZES.map((s) => Math.min(...s.thrust[0])));
const MAX = Math.max(...MPLDS_SIZES.map((s) => s.thrust[5][0]));
const TOTAL = MPLDS_SIZES.length * 2;
const TABLE = "#model-tables";

const RUNGS: Rung[] = MPLDS_SIZES.map((s, i) => {
  const lo = Math.min(...s.thrust[0]), hi = s.thrust[5][0];
  return {
    code: `${s.bore} mm bore`,
    tab: "",
    name: `MPLD-${s.bore} · MPLS-${s.bore}`,
    note: `${s.rod} mm piston rod. Spring return MPLS-${s.bore}: ${s.mplsStroke[0]}–${s.mplsStroke[1]} mm stroke.`,
    lo,
    hi,
    range: `${kn(lo)} – ${kn(hi)} kN`,
    side: "MPLD, 2.8–7 bar",
    chips: [`Rod ${s.rod} mm`, `¼" NPT`],
    href: TABLE,
    tone: i % 2 ? "amber" : "blue",
  };
});

const th = { px: 1.5, py: 1.1, textAlign: "left" as const, fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" as const, color: T.muted, bgcolor: T.surface, whiteSpace: "nowrap" as const, borderBottom: `1px solid ${T.border}` };
const td = { px: 1.5, py: 1.1, fontSize: "0.88rem", color: T.ink, borderBottom: `1px solid ${T.border}`, whiteSpace: "nowrap" as const };

function Tables() {
  const [t, setT] = React.useState<"MPLD" | "MPLS">("MPLD");
  return (
    <Box component="section" id="model-tables" aria-labelledby="h2-tables" sx={{ pb: { xs: 7, md: 10 }, scrollMarginTop: 140 }}>
      <Box sx={wrap}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { md: "flex-end" }, gap: 2, mb: 3 }}>
          <Box>
            <Kicker>Model data</Kicker>
            <H2 id="h2-tables">{t === "MPLD" ? "MPLD thrust, kN" : "MPLS stroke and dimensions, mm"}</H2>
            <Lead>{t === "MPLD" ? "Double acting thrust to close and to open, at each air pressure." : "Spring return models: stroke range, overall dimensions and air port."}</Lead>
          </Box>
          <Box role="tablist" aria-label="Series" sx={{ display: "inline-flex", p: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, alignSelf: { xs: "flex-start", md: "auto" } }}>
            {(["MPLD", "MPLS"] as const).map((k) => (
              <Box key={k} component="button" role="tab" aria-selected={t === k} onClick={() => setT(k)}
                sx={{ cursor: "pointer", border: 0, fontFamily: "inherit", px: 2, py: 0.9, borderRadius: 999, fontSize: "0.88rem", fontWeight: 700, bgcolor: t === k ? "#fff" : "transparent", color: t === k ? T.ink : T.body, boxShadow: t === k ? "0 1px 4px rgba(14,27,18,0.12)" : "none" }}>
                {k === "MPLD" ? "MPLD double acting" : "MPLS spring return"}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ overflowX: "auto", borderRadius: "16px", border: `1px solid ${T.border}`, bgcolor: "#fff" }}>
          {t === "MPLD" ? (
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
              <thead>
                <tr>
                  <Box component="th" sx={th}>Model</Box>
                  <Box component="th" sx={th}>Bore / rod</Box>
                  {MPLDS_BARS.map((b) => <Box component="th" key={b} sx={th}>{b} bar<br />close / open</Box>)}
                </tr>
              </thead>
              <tbody>
                {MPLDS_SIZES.map((s) => (
                  <tr key={s.bore}>
                    <Box component="td" sx={{ ...td, fontWeight: 800 }}>MPLD-{s.bore}</Box>
                    <Box component="td" sx={td}>{s.bore} / {s.rod}</Box>
                    {s.thrust.map(([c, o], i) => <Box component="td" key={i} sx={td}>{kn(c)} / {kn(o)}</Box>)}
                  </tr>
                ))}
              </tbody>
            </Box>
          ) : (
            <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr>
                  {["Model", "Stroke", "A", "B", "C", "D", "E", "Port"].map((h) => <Box component="th" key={h} sx={th}>{h}</Box>)}
                </tr>
              </thead>
              <tbody>
                {MPLDS_SIZES.map((s) => (
                  <tr key={s.bore}>
                    <Box component="td" sx={{ ...td, fontWeight: 800 }}>MPLS-{s.bore}</Box>
                    <Box component="td" sx={td}>{s.mplsStroke[0]}–{s.mplsStroke[1]}</Box>
                    {(["A", "B", "C", "D", "E"] as const).map((k) => <Box component="td" key={k} sx={td}>{s.mplsDims[k]}</Box>)}
                    <Box component="td" sx={td}>{"¼\" NPT"}</Box>
                  </tr>
                ))}
              </tbody>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["MPLDS micro", "linear actuators"],
  lead: (
    <>
      Susin I-Tork’s compact linear actuators for smaller valves: MPLD double acting, with {kn(MIN)} to {kn(MAX)} kN of thrust, and MPLS spring return for fail-safe duty. Four bore sizes from 100 to 200 mm.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (4 bores × 2)`],
    ["Thrust, MPLD", `${kn(MIN)} – ${kn(MAX)} kN`],
    ["Bore", "100 – 200 mm"],
    ["Stroke, MPLS", "50 – 300 mm"],
    ["Temperature", "−20 to +80 °C"],
    ["Body", "Hard anodised aluminium"],
  ],
  total: TOTAL,
  productsHref: TABLE,
  catalog: "https://www.susingroup.com/products/mplds-linear",
  catalogLabel: "MPLDS on susingroup.com",
  image: MPLDS_IMAGE,
  imageAlt: "Susin I-Tork MPLDS micro linear pneumatic actuator",
  howTitle: "Spring return: fail-safe on air loss",
  how: <FailSafe />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a bore by thrust",
    lead: "Four bore sizes, each as MPLD double acting or MPLS spring return. The bar shows MPLD thrust from 2.8 to 7 bar.",
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork MPLDS actuator",
    points: [
      ["Hard anodised aluminium body", "25–30 µm anodising with epoxy-coated end caps as standard."],
      ["Corrosion options", "Fully PU-coated (C5), marine grade with AISI 316 fasteners, PTFE-coated, electroless nickel plated, or fully stainless steel AISI 316."],
      ["Temperature options", "Standard −20 to +80 °C; high −10 to +140 °C; low −45 °C; extreme low −55 °C."],
      ["Modular spring return", "MPLS is single acting and modular, for flexible thrust and easy field maintenance."],
    ],
  },
  extra: <Tables />,
  faqTitle: "MPLDS actuator questions",
  faq: [
    { q: "MPLD or MPLS?", a: "MPLD is double acting: air drives the stem both ways. MPLS is spring return (single acting): air drives one way and springs the other, so the valve goes to its safe position if air is lost.", icon: CompareArrowsOutlinedIcon },
    { q: "How long a stroke can I get?", a: "MPLS models run 50–250 mm on the 100 and 125 mm bores, up to 275 mm on MPLS-160 and up to 300 mm on MPLS-200.", icon: StraightenOutlinedIcon },
    { q: "Can they work in hot or very cold sites?", a: "Yes. The standard range is −20 to +80 °C. High-temperature (−10 to +140 °C), low-temperature (−45 °C) and extreme low-temperature (−55 °C) builds are available.", icon: ThermostatOutlinedIcon },
    { q: "Are there corrosion-resistant versions?", a: "Yes: fully PU-coated C5 builds, a marine grade with AISI 316 parts and fasteners, PTFE-coated, electroless nickel plated, and fully stainless steel (AISI 316) for continuous immersion in fresh water.", icon: WaterDropOutlinedIcon },
  ],
  cta: {
    title: "Need a bigger stroke or more thrust?",
    body: "The PLDS series goes from 100 to 975 mm bore and up to 444 kN. Or send us the valve thrust, stroke and air supply and we’ll pick the size.",
  },
};

export default function MPLDSView() {
  return <SeriesView def={DEF} />;
}
