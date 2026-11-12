"use client";

// ITQ Micro series page, on the shared series template. Every figure is from the
// Susin / i-Tork ITQ Micro (economic style) catalogue: one page per model with
// its features, performance table and standard specification.

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import MicroLineup from "./MicroLineup";
import { ITQM_MODELS, ITQM_IMAGE, ITQM_CATALOG } from "./itqMicroData";

const TOTAL = ITQM_MODELS.length;
const MIN = Math.min(...ITQM_MODELS.map((m) => m.torqueNm));
const MAX = Math.max(...ITQM_MODELS.map((m) => m.torqueNm));
const stem = (m: (typeof ITQM_MODELS)[number]) => m.specs.find((s) => s.label === "Stem Adaption")!.value.split(" ")[0] + " × " + m.specs.find((s) => s.label === "Stem Adaption")!.value.split(" ")[2] + " mm";

const RUNGS: Rung[] = ITQM_MODELS.map((m, i) => ({
  code: m.mounting.replace("ISO 5211 ", ""),
  tab: "",
  name: m.model,
  note: `${m.summary} ${stem(m)} drive, ${m.enclosure}.`,
  lo: m.torqueNm,
  hi: m.torqueNm,
  range: `${m.torqueNm} Nm`,
  side: m.speed.split(" (")[0] + " at 50 Hz",
  chips: [m.enclosure, m.power.includes("380") ? "1 & 3 phase" : m.power.startsWith("85") ? "Free voltage" : "1 phase"],
  href: `/actuators/electric/itq-micro/products?model=${encodeURIComponent(m.model)}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["ITQ Micro", "compact electric"],
  lead: (
    <>
      Susin economic-style electric actuators for small ball and plug valves and dampers. {TOTAL} compact models from {MIN} to {MAX} Nm, ISO 5211 mounted, on/off or modulating.
    </>
  ),
  specs: [
    ["Models", "ITQ 0020 · 0040 · 0080"],
    ["Torque", `${MIN} – ${MAX} Nm`],
    ["Operating time", "11 – 16 s"],
    ["Enclosure", "IP66 / IP67"],
    ["Mounting", "ISO 5211 F03 – F07"],
    ["Temperature", "−20 to +70 °C"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/itq-micro/products",
  catalog: ITQM_CATALOG,
  image: ITQM_IMAGE,
  imageAlt: "Susin ITQ Micro compact electric actuators",
  howTitle: "Three sizes for small valves",
  how: <MicroLineup />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "One model per row, with its ISO 5211 flange on the left. The bar shows rated torque; each row opens the model in the table.",
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How they’re built",
    imageAlt: "Susin ITQ Micro electric actuators",
    points: [
      ["ITQ 0020: free voltage, very compact", "A DC motor that runs on 85–265 VAC single phase (24 VAC/DC option), sized for small 1\" ball valves. IP66, O-ring sealed, with a PG11 gland and wires fitted."],
      ["ITQ 0040: spur gears and a declutchable lever", "An induction motor with high starting torque and thermal protection, spur gearing for high efficiency, and a dome position indicator. IP67."],
      ["ITQ 0080: self-locking, no brake", "A spur and worm gear combination holds the valve in position, with external stopper bolts adjustable to 90° ± 10°. Runs on 1 or 3 phase or 24 VDC. IP67."],
      ["Manual operation", "A hex wrench and declutchable lever on the ITQ 0040 (6 turns), or an M6 wrench straight onto the worm gear on the ITQ 0080 (7 turns)."],
      ["Wiring and coating", "Spring loaded push-type terminals and 2 × M20 cable entries on the ITQ 0040 and 0080; polyester coated housings."],
    ],
  },
  faqTitle: "ITQ Micro questions",
  faq: [
    { q: "Which model do I need?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest model that covers it: ITQ 0020 gives 25 Nm for small 1\" ball valves, ITQ 0040 gives 40 Nm and ITQ 0080 gives 80 Nm. Then check the ISO 5211 flange and drive square against the valve.", icon: SquareFootOutlinedIcon },
    { q: "Which supply voltages are available?", a: "ITQ 0020: 85–265 VAC free voltage, with a 24 VAC/DC option. ITQ 0040: 110 / 220 VAC or 24 VDC. ITQ 0080: 110 / 220 VAC single phase, 380 / 440 VAC three phase or 24 VDC.", icon: ElectricBoltOutlinedIcon },
    { q: "Which valve mountings do they fit?", a: "ISO 5211 F03 on the ITQ 0020 (11 × 11 mm square, with a 9 × 9 mm insert), F03 / F04 / F05 / F07 on the ITQ 0040 (14 × 14 mm double square) and F05 / F07 on the ITQ 0080 (17 × 17 mm double square).", icon: SettingsOutlinedIcon },
    { q: "Can they modulate?", a: "The ITQ 0040 and ITQ 0080 take the RPC remote position controller option (4–20 mA input and output), and the ITQ 0080 also a 4–20 mA current transmitter. Both are rated S4 50% for modulating duty.", icon: TuneOutlinedIcon },
    { q: "Can I operate the valve by hand?", a: "Yes on the ITQ 0040 (declutchable lever and hex wrench, 6 turns) and the ITQ 0080 (M6 wrench on the worm gear, 7 turns).", icon: PanToolOutlinedIcon },
    { q: "ITQ Micro or ITQ?", a: "ITQ Micro covers small valves up to 80 Nm. For 100 Nm and above, or for features such as torque switches and control modules, the heavy-duty ITQ series runs from 100 to 9,000 Nm.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know the torque?",
    body: `Compare all ${TOTAL} ITQ Micro models by torque, time, flange and supply, or send us the valve details and power supply and we’ll pick the model.`,
  },
};

export default function ITQMicroView() {
  return <SeriesView def={DEF} />;
}
