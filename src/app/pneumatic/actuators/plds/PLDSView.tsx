"use client";

// PLDS series page. Every figure is from the Susin I-Tork "PLDS Series" linear piston
// actuator catalogue (technical data, structural framework, materials, overrides).

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import LinearCutaway from "../_series/LinearCutaway";
import PldsOverrides from "./PldsOverrides";
import { PLDS_ACTUATOR_DATA } from "./products/hooks/pldsActuatorData";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp";
const kn = (n: number) => n.toLocaleString("en-GB", { maximumFractionDigits: n < 100 ? 1 : 0 });
const TOTAL = PLDS_ACTUATOR_DATA.length;
const MIN = Math.min(...PLDS_ACTUATOR_DATA.map((m) => m.thrustKnMin));
const MAX = Math.max(...PLDS_ACTUATOR_DATA.map((m) => m.thrustKnMax));

// One rung per stem size: the sizes that share a stem
const STEMS = Array.from(new Set(PLDS_ACTUATOR_DATA.map((m) => m.stemSizeMm)));
const RUNGS: Rung[] = STEMS.map((stem, i) => {
  const ms = PLDS_ACTUATOR_DATA.filter((m) => m.stemSizeMm === stem);
  const lo = Math.min(...ms.map((m) => m.thrustKnMin)), hi = Math.max(...ms.map((m) => m.thrustKnMax));
  const bores = [ms[0].boreMm, ms[ms.length - 1].boreMm];
  const travel = Math.max(...ms.map((m) => m.maxTravelPldMm));
  return {
    code: `${stem} mm stem`,
    tab: "",
    name: ms.length > 1 ? `${ms[0].model} to ${ms[ms.length - 1].model}` : ms[0].model,
    note: `${bores[0] === bores[1] ? `${bores[0]} mm bore` : `${bores[0]}–${bores[1]} mm bore`}, travel up to ${kn(travel)} mm double acting.`,
    count: ms.length,
    lo,
    hi,
    range: `${kn(lo)} – ${kn(hi)} kN`,
    side: "double acting, 2.8–7 bar",
    chips: ms.map((m) => m.model.replace("PLDS-", "")),
    href: `/pneumatic/actuators/plds/products?stem=${stem}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["PLDS linear", "piston actuators"],
  lead: (
    <>
      Susin I-Tork linear piston actuators for on/off and control of knife edge, gate and globe control valves. {TOTAL} sizes from 100 to 975 mm bore, with {kn(MIN)} to {kn(MAX)} kN of thrust double acting, or spring return.
    </>
  ),
  specs: [
    ["Models", `${TOTAL}`],
    ["Thrust, double acting", `${kn(MIN)} – ${kn(MAX)} kN`],
    ["Bore", "100 – 975 mm"],
    ["Operating pressure", "Up to 10.3 bar"],
    ["Travel", "Up to 1,067 mm"],
    ["Stem", "25 – 75 mm"],
  ],
  total: TOTAL,
  productsHref: "/pneumatic/actuators/plds/products",
  catalog: SUSIN_CATALOG.PLDS,
  image: IMAGE,
  imageAlt: "Susin I-Tork PLDS linear piston pneumatic actuator",
  howTitle: "How a linear piston actuator works",
  how: <LinearCutaway />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by thrust",
    lead: "Sizes grouped by stem diameter. The bar shows double acting thrust from 2.8 to 7 bar; spring return thrust depends on the spring chosen. Each group opens its models in the table.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 1.2,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork PLDS linear actuator",
    points: [
      ["Cast steel cylinder", "Honed and hot chrome plated inside; stainless steel or aluminium on request. Cast iron end covers, carbon steel optional."],
      ["Coated and sealed", "Zinc-rich epoxy coated piston and end flanges; NBR seals as standard, others on request."],
      ["Guided stem", "Stainless steel piston rod with a brass guide bush; a guide rod on bores over 250 mm."],
      ["Field reversible", "From 100 mm bore, the action can be reversed on site."],
      ["Standards", "Designed to ISO 3322, ISO 4393 and ISO 5597; NPT air ports."],
    ],
  },
  extra: <PldsOverrides />,
  faqTitle: "PLDS actuator questions",
  faq: [
    { q: "PLD or PLS?", a: "PLD is double acting: air drives the stem both ways, giving the thrust shown in the table. PLS is spring return (single acting): air drives one way and springs the other, so the valve goes to its safe position if air is lost. PLS thrust depends on the spring selected, and its maximum travel is half that of PLD.", icon: CompareArrowsOutlinedIcon },
    { q: "How do I choose the size?", a: "Work out the thrust the valve needs, add a safety factor, and pick the smallest bore that delivers it at your lowest air supply. Check that the maximum travel covers the full valve stroke, and match the stem size to the valve or coupling.", icon: SquareFootOutlinedIcon },
    { q: "What air pressure do they work at?", a: "Thrust is listed from 2.8 to 7 bar. The actuators are rated for operating pressure up to 150 psi (10.3 bar), which gives more thrust than a diaphragm actuator of the same size.", icon: AirOutlinedIcon },
    { q: "How long a stroke can I get?", a: "Maximum travel runs from 203 mm on PLDS-100 to 1,067 mm on PLDS-730 and larger, for double acting models. For longer strokes or custom thrust, we’ll check with the factory.", icon: StraightenOutlinedIcon },
    { q: "Can I operate it by hand?", a: "Yes, with one of four manual overrides: a jack screw (PLDS-100 to 380), an MTG worm gear, an MAB bevel gear, or a hydraulic hand pump override (PLDS-530 to 980).", icon: PanToolOutlinedIcon },
    { q: "Which accessories can be fitted?", a: "Limit switches, solenoid valves and positioners.", icon: ExtensionOutlinedIcon },
  ],
  cta: {
    title: "Know the thrust and stroke?",
    body: `Compare all ${TOTAL} PLDS sizes by stem, piston area and travel, or send us the valve thrust, stroke and air supply and we’ll pick the size.`,
  },
};

export default function PLDSView() {
  return <SeriesView def={DEF} />;
}
