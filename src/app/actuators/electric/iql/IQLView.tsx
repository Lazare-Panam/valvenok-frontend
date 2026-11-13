"use client";

// IQL series page, on the shared series template. Every figure is from the
// Susin I-Tork IQL catalogue (see iqlData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import ElectricLinear from "@/src/app/pneumatic/actuators/_series/ElectricLinear";
import IqlOptions from "./IqlOptions";
import { IQL_MODELS, IQL_IMAGE, IQL_CATALOG } from "./iqlData";

const TOTAL = IQL_MODELS.length;
const MAX = Math.max(...IQL_MODELS.map((m) => m.thrustKn));

const RUNGS: Rung[] = IQL_MODELS.map((m, i) => ({
  code: `${m.strokeMm} mm`,
  tab: "",
  name: m.model,
  note: `${m.strokeMm} mm stroke at ${m.speed} mm/s (50 / 60 Hz), ${m.weightKg} kg. ${m.force === "Not fitted" ? "Limit switches only." : "Limit and force switches."}`,
  lo: m.thrustKn,
  hi: m.thrustKn,
  range: `${m.thrustKn} kN`,
  side: "thrust",
  chips: [`${m.weightKg} kg`, m.s4.replace("50%, ", "")],
  href: `/actuators/electric/iql/products?model=${encodeURIComponent(m.model)}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["IQL series", "linear electric"],
  lead: (
    <>
      Susin I-Tork electric linear actuators for globe and control valves. {TOTAL} models from 4 to {MAX} kN of thrust and 40 to 100 mm of stroke, on/off or modulating, on 24 VDC, single or 3 phase power.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (IQL 04 – 25)`],
    ["Thrust", `4 – ${MAX} kN`],
    ["Stroke", "40 – 100 mm"],
    ["Speed", "0.7 – 1.1 mm/s"],
    ["Power supply", "24 VDC, 1 or 3 phase"],
    ["Enclosure", "IP67, EN 60529"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/iql/products",
  catalog: IQL_CATALOG,
  image: IQL_IMAGE,
  imageAlt: "Susin I-Tork IQL electric linear actuators, one mounted on a globe valve",
  howTitle: "How a linear actuator works",
  how: <ElectricLinear speed="0.7–1.1 mm/s" display="Display (option)" />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by thrust",
    lead: "Seven models, with the stroke on the left. The bar shows thrust; each row opens the model in the table.",
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork IQL electric linear actuators",
    points: [
      ["Disc spring arrangement", "Sets an accurate closing force and gives tight shut-off on the seat."],
      ["Hard-anodised housing", "Aluminium alloy, epoxy powder coated against corrosive sites; seals and O-rings to IP67."],
      ["Pillars, coupler and stroke scale", "The indicator on the coupler reads the stroke from a scale on the pillar; a folding stack protects the drive shaft."],
      ["Handwheel and lever", "A handwheel with a padlockable, switchable auto / manual lever for emergency operation."],
      ["Protected motor", "Thermal protector, class F, with a 5 W space heater against condensation."],
      ["Switches", "Limit switches on every model; IQL 08 to IQL 25 add force switches for open and close."],
    ],
  },
  extra: <IqlOptions />,
  faqTitle: "IQL actuator questions",
  faq: [
    { q: "How do I choose the size?", a: "Take the force the valve needs to close against its pressure, add a safety factor, and pick the smallest IQL whose thrust covers it. Then check the stroke (40, 50 or 100 mm) and that the valve stem thread fits: M20 up to IQL 12, M24 on IQL 20 and 25.", icon: SquareFootOutlinedIcon },
    { q: "Which power supplies can it run on?", a: "24 VDC, single phase 110 or 220 VAC, or 3 phase 380 or 440 VAC. Each model’s page lists its rated current on every supply.", icon: ElectricBoltOutlinedIcon },
    { q: "On/off or modulating?", a: "On/off duty is S2, up to 30 minutes. With the RPC option it positions the valve from a 4–20 mA or voltage signal; modulating duty is S4 50%, at 1,200 starts an hour (800 on IQL 20 and 25).", icon: TuneOutlinedIcon },
    { q: "What happens if the power fails?", a: "As standard the actuator stays where it is, and you can move the valve with the handwheel. With the BP battery backup option it moves to a fail position you choose: open, closed or stay put.", icon: PowerOffOutlinedIcon },
    { q: "Can I operate it by hand?", a: "Yes. Every IQL has a handwheel with a switchable, declutchable lever that can be padlocked.", icon: PanToolOutlinedIcon },
    { q: "IQL or ITL?", a: "Both are electric linear actuators. ITL is more compact, from 1 to 6 kN, with continuous duty on universal power. IQL goes from 4 to 25 kN with strokes up to 100 mm, and runs on 3 phase supplies too.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know the thrust and stroke?",
    body: `Compare all ${TOTAL} IQL models, or send us the valve, stroke, force, power supply and control signal and we’ll pick the model and options.`,
  },
};

export default function IQLView() {
  return <SeriesView def={DEF} />;
}
