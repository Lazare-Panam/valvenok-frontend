"use client";

// HRS hydraulic scotch yoke series page (HRSDA / HRSSA), on the shared series
// template. Every figure is from the hydraulic data sheet (see hrsData).

import { Box } from "@mui/material";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import HydraulicScotchYoke from "@/src/app/pneumatic/actuators/_series/HydraulicScotchYoke";
import { HRS_DA, HRS_SR, SR_SIZES, HRS_IMAGE, HRS_CATALOG } from "./hrsData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = HRS_DA.length + HRS_SR.length;
const MAX = Math.max(...HRS_DA.map((m) => m.torque[160][1]));
const DA_MIN = Math.min(...HRS_DA.map((m) => m.torque[100][0]));
const SR_MIN = Math.min(...HRS_SR.map((m) => m.springT[0]));
const SR_MAX = Math.max(...HRS_SR.map((m) => m.springT[0]));

// Two summary rows, as on the other hydraulic series pages
const RUNGS: Rung[] = [
  {
    code: "DA", tab: "", name: "HRSDA double acting", count: HRS_DA.length,
    note: `Oil opens and closes the valve. ${HRS_DA.length} sizes over body sizes A1 to 06; the bar runs from the open torque at 100 bar to the close torque at 160 bar.`,
    lo: DA_MIN, hi: MAX, range: `${nm(DA_MIN)} – ${nm(MAX)} Nm`, side: "100 – 160 bar", chips: ["Double acting", "Also EHRSDA"],
    href: "/actuators/hydraulic/scotch-yoke/products?type=Double%20acting", tone: "blue",
  },
  {
    code: "SR", tab: "", name: "HRSSA spring return", count: HRS_SR.length,
    note: `Oil strokes it, the spring returns it to fail close or fail open. ${SR_SIZES.length} sizes over body sizes A1 to 05, each with up to three springs. Spring start torque.`,
    lo: SR_MIN, hi: SR_MAX, range: `${nm(SR_MIN)} – ${nm(SR_MAX)} Nm`, side: "spring start", chips: ["Fail close or open", "Also EHRSSA"],
    href: "/actuators/hydraulic/scotch-yoke/products?type=Spring%20return", tone: "amber",
  },
];

// How to read the data sheet's torque tables (p.4–6)
function TorqueGuide() {
  const ex = HRS_SR.find((m) => m.model === "HRSSA-02-080" && m.spring === "S-3")!;
  const cards: [string, string][] = [
    ["Start, run and end", "A scotch yoke’s torque changes through the stroke, so the spring return table gives it at the start, through the run and at the end. Check each against the valve’s torque at the same point."],
    ["Fail close", "Read the spring torque as the closing torque and the oil torque as the opening torque."],
    ["Fail open", "Read the spring torque as the opening torque and the oil torque as the closing torque."],
    ["Supply pressure", "Oil torque rises with pressure, so every size is listed at 100, 130 and 160 bar. Where a spring has no figure at a pressure, we show “Not listed”: choose a higher pressure or another spring."],
  ];
  return (
    <Box component="section" aria-labelledby="h2-torque" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Reading the tables</Kicker>
          <H2 id="h2-torque">Spring Torque and Oil Torque</H2>
          <Lead>A spring return actuator has two torques: the spring’s, which turns the valve when the pressure goes, and the oil’s, which strokes it against the spring. Here is how Susin I-Tork’s table reads.</Lead>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 1.5, mb: 3 }}>
          {cards.map(([t, d]) => (
            <Box key={t} sx={{ p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` }}>
              <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink, mb: 0.75 }}>{t}</Box>
              <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55 }}>{d}</Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: "20px", bgcolor: T.surface, border: `1px solid ${T.border}` }}>
          <Box sx={{ fontSize: "0.95rem", fontWeight: 800, color: T.ink, mb: 1.5 }}>Example: {ex.model}, spring {ex.spring}, Nm</Box>
          <Box sx={{ overflowX: "auto" }}>
            <Box component="table" sx={{ width: "100%", minWidth: 480, borderCollapse: "collapse", fontSize: "0.88rem", "& th, & td": { textAlign: "right", px: 1.5, py: 1, borderBottom: `1px solid ${T.border}` }, "& th:first-of-type, & td:first-of-type": { textAlign: "left" }, "& th": { fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: T.muted } }}>
              <thead>
                <tr><th scope="col">Torque</th><th scope="col">Start</th><th scope="col">Run</th><th scope="col">End</th></tr>
              </thead>
              <tbody>
                <tr><td style={{ fontWeight: 700 }}>Spring</td>{ex.springT.map((v, k) => <td key={k} style={{ fontWeight: 700 }}>{nm(v)}</td>)}</tr>
                {([100, 130, 160] as const).map((p) => (
                  <tr key={p}><td>Oil at {p} bar</td>{(ex.oil[p] ?? [null, null, null]).map((v, k) => <td key={k}>{v == null ? "Not listed" : nm(v)}</td>)}</tr>
                ))}
              </tbody>
            </Box>
          </Box>
          <Box sx={{ mt: 1.5, fontSize: "0.84rem", color: T.body, lineHeight: 1.55 }}>
            Fitted fail close, this actuator closes the valve with {nm(ex.springT[0])} Nm at the start of the spring stroke, and at 160 bar the oil opens it with {nm(ex.oil[160]![0])} Nm at the start.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const DEF: SeriesDef = {
  kicker: "Hydraulic actuators",
  h1: ["HRS series", "hydraulic scotch yoke"],
  lead: (
    <>
      Scotch yoke part-turn actuators for the largest valves, run from a hydraulic supply at up to 200 bar or built electro-hydraulic. HRSDA double acting from {nm(DA_MIN)} to {nm(MAX)} Nm, and HRSSA spring return to fail close or fail open, from {nm(SR_MIN)} Nm spring torque. {TOTAL} models.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (${HRS_DA.length} HRSDA, ${HRS_SR.length} HRSSA)`],
    ["Double acting", `${nm(DA_MIN)} – ${nm(MAX)} Nm`],
    ["Spring start torque", `${nm(SR_MIN)} – ${nm(SR_MAX)} Nm`],
    ["Pressure", "Up to 200 bar"],
    ["Protection", "IP66M / IP67M"],
    ["Mounting", "ISO 5211, NAMUR"],
  ],
  total: TOTAL,
  productsHref: "/actuators/hydraulic/scotch-yoke/products",
  catalog: HRS_CATALOG,
  catalogLabel: "Download hydraulic data sheet (PDF)",
  image: HRS_IMAGE,
  imageAlt: "HRSDA hydraulic scotch yoke actuator",
  howTitle: "How a hydraulic scotch yoke works",
  how: <HydraulicScotchYoke />,
  ladder: {
    kicker: "Types",
    title: "Double acting or spring return",
    lead: "Double acting sizes give their open and close torque at 100, 130 and 160 bar. Spring return models are listed by spring: every spring has its own spring torque and oil torque. Every model is in the model list.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 100,
  },
  build: {
    title: "How it’s built",
    points: [
      ["Enclosed centre body", "Fully enclosed and weather resistant, in ductile iron or stainless steel depending on size, for a high strength-to-weight ratio."],
      ["Symmetric or canted yoke", "Chosen to suit the valve’s torque demand at minimum weight and cost. Only the yoke L-plate needs replacing after wear."],
      ["Low friction", "Honed, hot chrome plated cylinders, chrome plated rods, bronze sliding blocks on the torque arm and a dynamic piston seal that stops chattering, even after long idle periods."],
      ["Bearings", "High-grade bronze or ceramic, with a surface heat-treated slide pin, slide bearing and yoke slide."],
      ["Travel stops", "Adjustable from −5° to +95°, with vertical-touch stoppers built to take shock."],
      ["Mounting and finish", "ISO 5211 direct mounting without a coupler or bracket, NAMUR for accessories, C4 paint to ISO 12944 (C5-M option)."],
    ],
  },
  extra: <TorqueGuide />,
  faqTitle: "HRS scotch yoke questions",
  faq: [
    { q: "How do I choose the size?", a: "For double acting, pick the smallest HRSDA whose open and close torque at your supply pressure cover the valve’s. For spring return, the spring torque must operate the valve on its own and the oil torque must beat the spring and the valve together; both are on each model page.", icon: SquareFootOutlinedIcon },
    { q: "Fail close or fail open?", a: "Every HRSSA can be set up either way. Fail close: the spring closes the valve and oil opens it. Fail open: the spring opens it and oil closes it.", icon: ShieldOutlinedIcon },
    { q: "What pressure does it need?", a: "Up to 200 bar (2,900 psi). Susin I-Tork’s tables give torque at 100, 130 and 160 bar; tell us your supply pressure and we’ll check the size.", icon: SpeedOutlinedIcon },
    { q: "What if there is no hydraulic supply?", a: "Choose the electro-hydraulic EHRSDA or EHRSSA. A remote hydraulic power pack can be mounted, and solar-charged power packs suit remote sites.", icon: ElectricalServicesOutlinedIcon },
    { q: "Which fail-safe options are there?", a: "Stay put, fail last, fail open or fail close, using the spring or energy stored in an accumulator. Double acting, tandem and spring return builds are modular.", icon: WaterDropOutlinedIcon },
    { q: "HRS or PA-HX?", a: "Both run on hydraulic oil. The PA-HX is a rack & pinion up to 10,000 Nm; the HRS scotch yoke goes up to 112,595 Nm for the largest valves.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/hydraulic", label: "All hydraulic actuators" },
  cta: {
    title: "Know the valve torque?",
    body: `Compare all ${TOTAL} HRS models, or send us the valve torques, ISO 5211 flange, supply pressure and fail position and we’ll pick the size and spring.`,
  },
};

export default function HrsView() {
  return <SeriesView def={DEF} />;
}
