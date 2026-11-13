"use client";

// PA-HX series page, on the shared series template. Every figure is from the
// hydraulic data sheet (see paHxData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import HydraulicRackPinion from "@/src/app/pneumatic/actuators/_series/HydraulicRackPinion";
import { PAHX_MODELS, PAHX_IMAGE, PAHX_CATALOG, type PaHxKind } from "./paHxData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = PAHX_MODELS.length;
const MAX = Math.max(...PAHX_MODELS.map((m) => m.torqueNm));
const of = (k: PaHxKind) => PAHX_MODELS.filter((m) => m.kind === k);

const ROWS: { kind: PaHxKind; code: string; note: string; side: string; chips: string[] }[] = [
  { kind: "Double acting", code: "D", note: "Oil opens and closes the valve. Torque at 100 bar.", side: "at 100 bar", chips: ["Double acting"] },
  { kind: "Spring to close", code: "SC", note: "Oil opens, the springs close it: fails closed when pressure is lost. Spring end torque.", side: "spring end", chips: ["Spring return", "Fail closed"] },
  { kind: "Spring to open", code: "SO", note: "Oil closes, the springs open it: fails open when pressure is lost. Spring start torque.", side: "spring start", chips: ["Spring return", "Fail open"] },
];

const RUNGS: Rung[] = ROWS.map((r, i) => {
  const ms = of(r.kind);
  const lo = Math.min(...ms.map((m) => m.torqueNm)), hi = Math.max(...ms.map((m) => m.torqueNm));
  return {
    code: r.code, tab: "", name: r.kind, count: ms.length,
    note: `${r.note} ${ms[0].code} – ${ms[ms.length - 1].code}.`,
    lo, hi, range: `${nm(lo)} – ${nm(hi)} Nm`, side: r.side, chips: r.chips,
    href: `/actuators/hydraulic/pa-hx/products?type=${encodeURIComponent(r.kind)}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Hydraulic actuators",
  h1: ["PA-HX series", "hydraulic rack & pinion"],
  lead: (
    <>
      Rack & pinion part-turn actuators that turn hydraulic pressure into a 90° turn, for ball, butterfly and plug valves. Driven from your hydraulic supply at 80 to 160 bar: double acting up to {nm(MAX)} Nm, or spring return to close or to open. {TOTAL} models.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (D005 – D110, E05 – E110)`],
    ["Torque", `35 – ${nm(MAX)} Nm`],
    ["Working pressure", "80 – 160 bar"],
    ["Fail-safe", "Spring to close or open"],
    ["Mounting", "ISO 5211, F05 – F30"],
    ["Hazardous areas", "ATEX conformity"],
  ],
  total: TOTAL,
  productsHref: "/actuators/hydraulic/pa-hx/products",
  catalog: PAHX_CATALOG,
  catalogLabel: "Download hydraulic data sheet (PDF)",
  image: PAHX_IMAGE,
  imageAlt: "Hydraulic rack and pinion part-turn actuators",
  howTitle: "How a hydraulic rack & pinion works",
  how: <HydraulicRackPinion />,
  ladder: {
    kicker: "Types",
    title: "Double acting or spring return",
    lead: "Double acting sizes give their torque at 100 bar. Spring to close sizes are listed by the spring’s end torque, spring to open by its start torque. Every size is in the model list.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 20,
  },
  build: {
    title: "How it’s built",
    points: [
      ["Rack and pinion", "Two pistons drive V2A stainless steel racks that turn the pinion through 90°, giving the same torque all the way through the stroke."],
      ["Steel body", "S235JR housing and covers, EN 8 pistons and 50CrV4 springs in a separate spring cartridge."],
      ["Hydraulic connection", "Female thread 1/4\", 3/8\" or 1/2\", with a customised valve block available: solenoid valves, pressure reducing valves and more."],
      ["Manual operation", "A hand pump is available to operate the valve without the hydraulic supply."],
      ["Mounting", "ISO 5211, DIN 3337, NAMUR and VDI/VDE 3845, F05 to F30."],
      ["Site conditions", "−10 to +60 °C (option −40 to +80 °C), submersible on request, ATEX conformity, with a wide range of limit switches."],
    ],
  },
  faqTitle: "PA-HX actuator questions",
  faq: [
    { q: "What does it need to run?", a: "A hydraulic supply at 80 to 160 bar, with HLP 15…46 oil to DIN 51524-2 / ISO 6743-4. Unlike the PANDA and PA, the PA-HX has no motor or pump of its own.", icon: WaterDropOutlinedIcon },
    { q: "Double acting or spring return?", a: "Double acting units use oil to open and close. Spring to close units fail closed and spring to open units fail open when the pressure is lost.", icon: ShieldOutlinedIcon },
    { q: "How do I choose the size?", a: "For double acting, pick the smallest PA-HX whose torque at 100 bar covers the valve’s. For spring return, the spring torque must operate the valve on its own. Then check the ISO 5211 flange and the shaft.", icon: SquareFootOutlinedIcon },
    { q: "Can I operate it by hand?", a: "Yes. A hand pump is available to move the valve without the hydraulic supply.", icon: PanToolOutlinedIcon },
    { q: "Can it go in a hazardous area?", a: "Yes, it has ATEX conformity. Tell us the zone and gas group and we’ll confirm the build.", icon: LocalFireDepartmentOutlinedIcon },
    { q: "PA-HX or PA?", a: "The PA-HX is a hydraulic actuator driven from your supply. The PA and PANDA are electro-hydraulic, with their own motor, pump and oil, so they only need electric power.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/hydraulic", label: "All hydraulic actuators" },
  cta: {
    title: "Know the valve torque?",
    body: `Compare all ${TOTAL} PA-HX models, or send us the valve torque, flange, supply pressure and the fail position you need and we’ll pick the model.`,
  },
};

export default function PaHxView() {
  return <SeriesView def={DEF} />;
}
