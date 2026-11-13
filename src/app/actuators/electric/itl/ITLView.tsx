"use client";

// ITL series page, on the shared series template. Every figure is from the
// Susin I-Tork ITL catalogue (see itlData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import ElectricLinear from "@/src/app/pneumatic/actuators/_series/ElectricLinear";
import ItlVsIql from "./ItlVsIql";
import { ITL_MODELS, ITL_IMAGE, ITL_CATALOG } from "./itlData";

const TOTAL = ITL_MODELS.length;

const RUNGS: Rung[] = ITL_MODELS.map((m, i) => ({
  code: `${m.stroke.replace(/ /g, "")} mm`,
  tab: "",
  name: m.model,
  note: `${m.stroke} mm stroke in ${m.time} s, ${m.current} A, ${m.weightKg} kg. ${m.body === "ITL01 / ITL02" ? "Folding handwheel; linkage available." : "Manual lever."}`,
  lo: m.thrustKn,
  hi: m.thrustKn,
  range: `${m.thrustKn} kN`,
  side: "thrust",
  chips: [`${m.weightKg} kg`, `Ø${m.size.split(" ")[0].slice(1)} mm`],
  href: `/actuators/electric/itl/products?model=${m.model}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["ITL series", "linear electric"],
  lead: (
    <>
      Susin I-Tork compact electric linear actuators for 2-way and 3-way globe and control valves. {TOTAL} models from 1 to 6 kN of thrust, with a continuous-duty motor and universal power supply.
    </>
  ),
  specs: [
    ["Models", "ITL01 · 02 · 04 · 06"],
    ["Thrust", "1 – 6 kN"],
    ["Stroke", "15 – 50 mm"],
    ["Speed", "1.2 mm/s"],
    ["Power supply", "AC 100–240 V or 24 V"],
    ["Enclosure", "IP66 & IP67"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/itl/products",
  catalog: ITL_CATALOG,
  image: ITL_IMAGE,
  imageAlt: "Susin I-Tork ITL electric linear actuator",
  howTitle: "How a linear actuator works",
  how: <ElectricLinear />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by thrust",
    lead: "Four models in two body sizes, with the stroke range on the left. The bar shows thrust; each row opens the model in the table.",
    rungs: RUNGS,
    max: 6,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork ITL electric linear actuator",
    points: [
      ["Continuous-duty motor", "A 100% duty cycle motor, so it can run on/off continuously or modulate at over 1,200 starts an hour."],
      ["Adjustable speed", "1.2 mm/s, adjustable from 70 to 130% without losing force."],
      ["Force and limit switches", "Disc springs set the seating force and a force switch stops the motor when it is reached; limit switches for each end, with auxiliary force switches as an option."],
      ["Simple setting", "DIP switches set direction, inching or holding and the input signal; an auto-scan button finds the stroke. Four LEDs show the status."],
      ["Hard-anodised housing", "Aluminium alloy, powder coated against corrosive sites, IP66 & IP67."],
      ["Manual operation", "A folding handwheel on ITL01 / 02, and a manual lever stored inside the housing so it can’t be damaged."],
    ],
  },
  extra: <ItlVsIql />,
  faqTitle: "ITL actuator questions",
  faq: [
    { q: "How do I choose the size?", a: "Take the force the valve needs to close against its pressure, add a safety factor, and pick the smallest ITL whose thrust covers it. Then check the stroke: ITL01 / 02 cover 15 to 25 mm, ITL04 / 06 cover 40 to 50 mm.", icon: SquareFootOutlinedIcon },
    { q: "Which power supplies can it run on?", a: "AC 100 to 240 V universal, 50 or 60 Hz, or AC / DC 24 V. Rated current is 0.5 to 1.0 A on ITL01 / 02 and 1.5 to 1.9 A on ITL04 / 06.", icon: ElectricBoltOutlinedIcon },
    { q: "Can it modulate?", a: "Yes. It takes a 4–20 mA control signal in and out as standard, with 0–10, 0–5, 1–5 and 2–10 VDC as options, and is rated for over 1,200 starts an hour. The RPC option adds position control and feedback.", icon: TuneOutlinedIcon },
    { q: "How is the closing force set?", a: "By the disc springs. As the plug seats they compress, and the force switch stops the motor at the set force, so the valve closes tightly without overloading the stem.", icon: CompressOutlinedIcon },
    { q: "Can I operate it by hand?", a: "Yes. ITL01 / 02 have a folding handwheel, and every model has a manual lever stored inside the housing.", icon: PanToolOutlinedIcon },
    { q: "Which options are available?", a: "A digital display controller, the RPC remote position controller, local control with an infrared remote, and auxiliary force switches. A linkage is available for ITL01 / 02.", icon: ExtensionOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know the thrust and stroke?",
    body: `Compare all ${TOTAL} ITL models, or send us the valve, stroke, force and control signal and we’ll pick the model.`,
  },
};

export default function ITLView() {
  return <SeriesView def={DEF} />;
}
