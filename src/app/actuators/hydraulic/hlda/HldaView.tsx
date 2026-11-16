"use client";

// HLDA linear piston series page, on the shared series template. Every figure is
// from the hydraulic data sheet (see hldaData): linear piston p.18–20, electro-
// hydraulic controls p.21–22.

import { Box } from "@mui/material";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import LinearCutaway from "@/src/app/pneumatic/actuators/_series/LinearCutaway";
import { HLDA_MODELS, HLDA_IMAGE, HLDA_CATALOG, PRESSURES, PSI } from "./hldaData";

const n = (v: number) => v.toLocaleString("en-GB");
const TOTAL = HLDA_MODELS.length;
const MIN = HLDA_MODELS[0].kN[0][0];
const MAX = HLDA_MODELS[TOTAL - 1].kN[2][0];
const BORES = `${HLDA_MODELS[0].boreMm} – ${HLDA_MODELS[TOTAL - 1].boreMm} mm`;

// One row per pressure: the closing thrust across the 11 bores
const RUNGS: Rung[] = PRESSURES.map((p, k) => {
  const close = HLDA_MODELS.map((m) => m.kN[k][0]);
  const open = HLDA_MODELS.map((m) => m.kN[k][1]);
  return {
    code: String(p), tab: "", name: `At ${p} bar (${PSI[p]})`, count: TOTAL,
    note: `Closing thrust from the ${HLDA_MODELS[0].model} to the ${HLDA_MODELS[TOTAL - 1].model}; opening thrust ${n(Math.min(...open))} – ${n(Math.max(...open))} kN.`,
    lo: Math.min(...close), hi: Math.max(...close), range: `${n(Math.min(...close))} – ${n(Math.max(...close))} kN`, side: "closing thrust",
    chips: [`${TOTAL} bores`, `Open ${n(Math.min(...open))} – ${n(Math.max(...open))} kN`],
    href: "/actuators/hydraulic/hlda/products", tone: k % 2 ? "amber" : "blue",
  };
});

// Electro-hydraulic control options (data sheet p.21–22)
function Controls() {
  const packs: [string, string][] = [
    ["Power pack", "An electrically driven hydraulic pump makes the pressure that moves the actuator. This build has no hand pump for emergency operation."],
    ["Power pack with hand pump", "Adds a lever-operated hand pump that forces oil into the lines, so the actuator can be worked by hand."],
  ];
  const rows: [string, string][] = [
    ["Position feedback", "Potentiometer kit, 0 – 1 kΩ, geared directly to the drive for continuous position"],
    ["Current transmitter (CT)", "4 – 20 mA output, zero and span adjustment"],
    ["Modulating (RPC) input", "4 – 20 mA, 0 – 10 V, 2 – 10 V, 1 – 5 V or 0 – 5 V DC"],
    ["Modulating (RPC) output", "4 – 20 mA (option 0 – 10 V, 2 – 10 V, 1 – 5 V, 0 – 5 V DC)"],
    ["Signal fail position", "Close, open or stop; auto-calibration and reverse acting"],
    ["Main power", "3-phase 220 / 380 / 440 V AC or 1-phase 110 / 220 V AC"],
    ["Local controls", "Open / close and local / stop / remote selectors, status lamps; digital version adds an LCD display"],
  ];
  return (
    <Box component="section" aria-labelledby="h2-controls" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Electro-hydraulic</Kicker>
          <H2 id="h2-controls">Power Pack and Controls</H2>
          <Lead>The EHLDA versions bring their own hydraulic power, so the valve needs only electric power and a control signal. These are the options in Susin I-Tork’s data sheet.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5, mb: 3 }}>
          {packs.map(([t, d]) => (
            <Box key={t} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink, mb: 0.75 }}>{t}</Box>
              <Box sx={{ fontSize: "0.88rem", color: T.body, lineHeight: 1.55 }}>{d}</Box>
            </Box>
          ))}
        </Box>
        <Box component="dl" sx={{ m: 0, borderRadius: "20px", bgcolor: T.surface, border: `1px solid ${T.border}`, overflow: "hidden" }}>
          {rows.map(([k, v], i) => (
            <Box key={k} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "220px 1fr" }, gap: { xs: 0.25, sm: 2 }, px: { xs: 2, md: 3 }, py: 1.5, borderTop: i ? `1px solid ${T.border}` : 0 }}>
              <Box component="dt" sx={{ fontSize: "0.86rem", fontWeight: 700, color: T.ink }}>{k}</Box>
              <Box component="dd" sx={{ m: 0, fontSize: "0.88rem", color: T.body, lineHeight: 1.55 }}>{v}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const DEF: SeriesDef = {
  kicker: "Hydraulic actuators",
  h1: ["HLDA series", "linear piston"],
  lead: (
    <>
      Double acting linear piston actuators that turn hydraulic pressure into a straight push or pull, for onshore and offshore valves. Run from a hydraulic supply at up to 200 bar or built electro-hydraulic (EHLDA): {TOTAL} bores from {BORES}, {n(MIN)} to {n(MAX)} kN of closing thrust.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (HLDA-030 – 200)`],
    ["Thrust", `${n(MIN)} – ${n(MAX)} kN`],
    ["Cylinder bore", BORES],
    ["Pressure", "Up to 200 bar"],
    ["Protection", "IP66M / IP67M"],
    ["Override", "Manual, on power failure"],
  ],
  total: TOTAL,
  productsHref: "/actuators/hydraulic/hlda/products",
  catalog: HLDA_CATALOG,
  catalogLabel: "Download hydraulic data sheet (PDF)",
  image: HLDA_IMAGE,
  imageAlt: "HLDA linear piston hydraulic actuator on a valve",
  howTitle: "How a hydraulic linear piston works",
  how: <LinearCutaway medium="oil" />,
  ladder: {
    kicker: "Thrust",
    title: "Thrust by supply pressure",
    lead: "Every bore is listed at 100, 130 and 160 bar. The bars show the closing thrust across the eleven bores; opening thrust is lower because the piston rod takes up part of the area.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 5,
  },
  build: {
    title: "How it’s built",
    imageAlt: "HLDA linear piston hydraulic actuator installed on a gate valve on site",
    imageFit: "cover",
    points: [
      ["High strength stem", "A high yield strength actuator stem takes large thrust loads, with an outstanding strength-to-weight ratio."],
      ["Low friction cylinder", "Honed, hot chrome plated carbon steel cylinders and a chrome plated piston rod."],
      ["No chattering", "A dynamic sailing piston seal minimises friction and stops chattering, even after long idle periods."],
      ["Precise, controlled travel", "Accurate, smooth linear motion with speed control, for applications that need fine adjustment."],
      ["Manual override", "Operates the valve when the power fails."],
      ["Built for site", "Custom engineered for onshore and offshore installations; O-ring sealed to IP66M / IP67M."],
    ],
  },
  extra: <Controls />,
  faqTitle: "HLDA linear actuator questions",
  faq: [
    { q: "How do I choose the size?", a: "Take the valve’s thrust in each direction and your supply pressure, then pick the smallest bore whose close and open thrust both cover it at that pressure. Every model page has the thrust at 100, 130 and 160 bar.", icon: SquareFootOutlinedIcon },
    { q: "Why is closing thrust higher than opening?", a: "Oil closes the valve on the full piston area and opens it on the rod side, where the piston rod takes up part of the area. On the HLDA-200 at 160 bar that is 402 kN to close and 302 kN to open.", icon: SwapVertOutlinedIcon },
    { q: "What pressure does it need?", a: "Up to 200 bar (2,900 psi). Susin I-Tork’s table gives the thrust at 100, 130 and 160 bar.", icon: WaterOutlinedIcon },
    { q: "What if there is no hydraulic supply?", a: "Choose the electro-hydraulic EHLDA, with its own power pack, with or without a hand pump.", icon: ElectricalServicesOutlinedIcon },
    { q: "Can it modulate?", a: "Yes. The RPC option takes a 4 – 20 mA or voltage signal and gives a 4 – 20 mA position output, with a signal fail position of close, open or stop.", icon: TuneOutlinedIcon },
    { q: "Can I operate it without power?", a: "Yes. The manual override operates it when the power fails, and the power pack can include a hand pump.", icon: PanToolOutlinedIcon },
  ],
  parent: { href: "/actuators/hydraulic", label: "All hydraulic actuators" },
  cta: {
    title: "Know the valve thrust?",
    body: `Compare all ${TOTAL} HLDA models, or send us the valve thrust in both directions, the stroke and your supply pressure and we’ll pick the bore.`,
  },
};

export default function HldaView() {
  return <SeriesView def={DEF} />;
}
