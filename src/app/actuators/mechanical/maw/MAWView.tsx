"use client";

// MAW series page, on the shared series template. Every figure is from the
// Susin I-Tork MAW worm gear catalogue (see mawData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import WormGear from "@/src/app/pneumatic/actuators/_series/WormGear";
import GearSizer from "@/src/app/pneumatic/actuators/_series/GearSizer";
import { MAW_MODELS, MAW_IMAGE, MAW_EXPLODED, MAW_CATALOG } from "./mawData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = MAW_MODELS.length;
const STANDARD = MAW_MODELS.filter((m) => m.stage === "Standard");
const MIN = Math.min(...STANDARD.map((m) => m.torqueNm));
const MAX = Math.max(...STANDARD.map((m) => m.torqueNm));

const RUNGS: Rung[] = STANDARD.map((m, i) => {
  const variants = MAW_MODELS.filter((x) => x.size === m.size);
  return {
    code: m.flange,
    tab: "",
    name: m.size,
    count: variants.length,
    note: `Ratio ${variants.map((x) => x.ratio).join(" / ")}; ${variants.map((x) => x.turns).join(" / ")} handwheel turns for 90°. ${m.weightKg} kg standard.`,
    lo: m.torqueNm,
    hi: m.torqueNm,
    range: `${nm(m.torqueNm)} Nm`,
    side: "max torque",
    chips: [variants.map((x) => (x.stage === "Standard" ? "Std" : x.stage)).join(" · "), `Ø ${m.handwheel} mm wheel`],
    href: `/actuators/mechanical/maw/products?size=${encodeURIComponent(m.size)}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Mechanical actuators",
  h1: ["MAW series", "worm gear actuators"],
  lead: (
    <>
      Susin I-Tork quarter-turn manual worm gear actuators for ball, butterfly and plug valves and dampers. {STANDARD.length} sizes from {nm(MIN)} to {nm(MAX)} Nm, each as standard or, from the MAW-300, with a single or double stage reduction: {TOTAL} models in all.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (MAW-012 – 3200)`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Turns for 90°", "8 – 248"],
    ["Stroke adjustment", "±5°"],
    ["Protection", "IP54, IP55, IP65 or IP67M"],
    ["Mounting", "ISO 5211, F05 – F35"],
  ],
  total: TOTAL,
  productsHref: "/actuators/mechanical/maw/products",
  catalog: MAW_CATALOG,
  image: MAW_IMAGE,
  imageAlt: "Susin I-Tork MAW worm gear actuator with handwheel",
  howTitle: "How a worm gear actuator works",
  how: <WormGear />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "Fifteen sizes, with the ISO 5211 flange on the left. Every gearing of a size has the same torque; open a size to compare its gearings.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 60,
  },
  build: {
    title: "How it’s built",
    image: MAW_EXPLODED,
    imageAlt: "Exploded view of a Susin I-Tork MAW worm gear actuator: housing, worm wheel, drive bush, worm shaft and handwheel",
    points: [
      ["Worm and worm wheel", "A carbon steel worm shaft drives a ductile iron worm wheel, turning the valve 90° on bearings with thrust washers above and below."],
      ["Splined drive bush", "The splines let the valve stem key line up accurately."],
      ["Stop bolts", "Set the open and shut positions, with ±5° of stroke adjustment."],
      ["Ductile iron housing", "Housing, cover and end covers in ductile iron (cast iron option), with non-asbestos gaskets."],
      ["Position indicator", "A pointer on the top cover shows the valve position."],
      ["Ready for more", "Limit switches or an electric actuator mount on site without machining; the MOV flange is ISO 5210."],
    ],
  },
  extra: (
    <GearSizer
      name="MAW"
      models={MAW_MODELS}
      products="/actuators/mechanical/maw/products"
      lead="From the MAW-300 up, each size also comes with a single (1S) or double (2S) stage helical reduction. More mechanical advantage means less force on the rim but more turns of the handwheel."
      text={{
        Standard: "Worm gear only. The fewest turns: 8 to 17 for 90°.",
        "1S": "A single stage helical reduction on the input, for sizes MAW-300 to 3200. 25.5 to 62 turns for 90°.",
        "2S": "A double stage helical reduction, for MAW-900 to 3200. The lightest effort, from 132 to 248 turns.",
      }}
    />
  ),
  faqTitle: "MAW worm gear questions",
  faq: [
    { q: "How do I choose the size?", a: "Take the valve’s maximum operating torque and pick the smallest MAW whose output torque covers it, then check the ISO 5211 flange (standard or option) and the stem fits the drive bush.", icon: SquareFootOutlinedIcon },
    { q: "Standard, 1S or 2S?", a: "All gearings of a size have the same torque. A reduction stage raises the mechanical advantage, so the rim pull falls, but the handwheel takes more turns. Use the rim effort check above; Susin I-Tork’s standard limit is 360 N.", icon: PanToolOutlinedIcon },
    { q: "Which valves does it suit?", a: "Quarter-turn valves: ball, butterfly and plug valves and dampers, in general industry, chemical, power, HVAC and waterworks. For gate and globe valves, which need many turns, use a multi-turn bevel gear such as the MAB.", icon: CompareArrowsOutlinedIcon },
    { q: "Can I adjust the open and shut positions?", a: "Yes. Stop bolts set both end positions, with ±5° of adjustment.", icon: TuneOutlinedIcon },
    { q: "Can it be motorised later?", a: "Yes. An electric actuator mounts on the MOV flange to ISO 5210, and limit switches can be fitted on site without machining.", icon: ElectricalServicesOutlinedIcon },
    { q: "Which temperatures can it take?", a: "Standard is −20 to +85 °C. A low temperature version covers −45 to +120 °C.", icon: ThermostatOutlinedIcon },
  ],
  parent: { href: "/actuators/mechanical", label: "All mechanical actuators" },
  cta: {
    title: "Know the valve torque?",
    body: `Compare all ${TOTAL} MAW models, or send us the valve torque, flange and stem and we’ll pick the size and gearing.`,
  },
};

export default function MAWView() {
  return <SeriesView def={DEF} />;
}
