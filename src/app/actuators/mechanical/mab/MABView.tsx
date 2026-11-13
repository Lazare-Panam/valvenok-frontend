"use client";

// MAB series page, on the shared series template. Every figure is from the
// Susin I-Tork MAB bevel gear catalogue (see mabData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import ElectricalServicesOutlinedIcon from "@mui/icons-material/ElectricalServicesOutlined";
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import BevelGear from "@/src/app/pneumatic/actuators/_series/BevelGear";
import GearSizer from "@/src/app/pneumatic/actuators/_series/GearSizer";
import { MAB_MODELS, MAB_IMAGE, MAB_CUTAWAY, MAB_CATALOG } from "./mabData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = MAB_MODELS.length;
const STANDARD = MAB_MODELS.filter((m) => m.stage === "Standard");
const MIN = Math.min(...STANDARD.map((m) => m.torqueNm));
const MAX = Math.max(...STANDARD.map((m) => m.torqueNm));

const RUNGS: Rung[] = STANDARD.map((m, i) => {
  const variants = MAB_MODELS.filter((x) => x.size === m.size);
  const gearings = variants.map((x) => (x.stage === "Standard" ? "Std" : x.stage));
  return {
    code: m.flange,
    tab: "",
    name: m.size,
    count: variants.length,
    note: `${nm(m.thrustKn)} kN thrust, stem up to ${m.stem.split(" / ")[0]} mm (TW), ratio ${variants.map((x) => x.ratio).join(" / ")}. ${m.weightKg} kg standard.`,
    lo: m.torqueNm,
    hi: m.torqueNm,
    range: `${nm(m.torqueNm)} Nm`,
    side: "max torque",
    chips: [gearings.join(" · "), `${nm(m.thrustKn)} kN`],
    href: `/actuators/mechanical/mab/products?size=${encodeURIComponent(m.size)}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Mechanical actuators",
  h1: ["MAB series", "bevel gear actuators"],
  lead: (
    <>
      Susin I-Tork manual bevel gear actuators for gate, globe and other multi-turn valves. {STANDARD.length} sizes from {nm(MIN)} to {nm(MAX)} Nm with 75 to 2,500 kN of thrust, each as standard or with a single or double stage reduction: {TOTAL} models in all.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (MAB-075 – 2500)`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Thrust", "75 – 2,500 kN"],
    ["Gear ratio", "2.5:1 – 151.87:1"],
    ["Protection", "IP55, IP65, IP67M or IP68"],
    ["Mounting", "ISO 5210, F07 – F48"],
  ],
  total: TOTAL,
  productsHref: "/actuators/mechanical/mab/products",
  catalog: MAB_CATALOG,
  image: MAB_IMAGE,
  imageAlt: "Susin I-Tork MAB bevel gear actuator with handwheel",
  howTitle: "How a bevel gear actuator works",
  how: <BevelGear ratio="4:1" />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque and thrust",
    lead: "Eleven sizes, with the ISO 5210 flange on the left. Every gearing of a size has the same torque, thrust and stem; open a size to compare its gearings.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 150,
  },
  build: {
    title: "How it’s built",
    image: MAB_CUTAWAY,
    imageAlt: "Cut-away of a Susin I-Tork MAB bevel gear actuator showing the bevel gear, drive sleeve and input pinion",
    points: [
      ["Spiral bevel gear and pinion", "Alloy steel EN-19 / AISI 1045, turning the drive through a right angle on thrust bearings."],
      ["Replaceable stem bush", "A splined aluminium bronze bush inside the ductile iron drive sleeve, held by two locknuts and easy to change for a new stem."],
      ["Ductile iron housing", "A536 65-45-12 top and bottom housings with a non-asbestos gasket. Cast iron is an option."],
      ["MOV flange", "An ISO 5210 flange on top lets an electric actuator mount on the gearbox, for a motor operated valve."],
      ["Coated for site", "Epoxy and PU on the housing and a powder-coated handwheel; special paint systems for marine and offshore."],
      ["Sealed to IP68", "IP55, IP65, IP67M or IP68, from −20 to +80 °C; low and high temperature versions down to −70 °C and up to +120 °C."],
    ],
  },
  extra: (
    <GearSizer
      name="MAB"
      models={MAB_MODELS}
      products="/actuators/mechanical/mab/products"
      lead="Each size comes in up to three gearings with the same torque, thrust and stem. A reduction attachment adds mechanical advantage, so the operator pushes less on the rim but turns the handwheel more."
      text={{
        Standard: "Bevel gear only. The fewest handwheel turns, for smaller valves or where an electric actuator will drive it through the MOV flange.",
        "1S": "A single stage reduction attachment on the input. More mechanical advantage, so less force on the rim for the same valve.",
        "2S": "A double stage reduction attachment. The lightest handwheel effort, for large valves turned by one operator; it takes the most turns.",
      }}
    />
  ),
  faqTitle: "MAB bevel gear questions",
  faq: [
    { q: "How do I choose the size?", a: "Start from the valve’s maximum torque and, for a rising stem, its thrust. Pick the smallest MAB whose torque and thrust both cover them, then check the stem fits (TW thread or keyed bore) and the ISO 5210 flange matches the valve.", icon: SquareFootOutlinedIcon },
    { q: "Standard, 1S or 2S?", a: "All gearings of a size have the same torque and thrust. A single (1S) or double (2S) stage reduction raises the mechanical advantage, so there is less force on the rim but more turns of the handwheel. Use the rim effort check above: Susin I-Tork’s standard limit is 360 N.", icon: PanToolOutlinedIcon },
    { q: "Can an electric actuator drive it?", a: "Yes. The MOV flange on top is ISO 5210, so a multi-turn electric actuator can mount on the gearbox to make a motor operated valve.", icon: ElectricalServicesOutlinedIcon },
    { q: "Does it work with rising stems?", a: "Yes. The stem passes through the bronze stem bush in the drive sleeve and up into the stem cover. Allowable thrust runs from 75 kN on the MAB-075 to 2,500 kN on the MAB-2500.", icon: VerticalAlignTopOutlinedIcon },
    { q: "Can it be buried or flooded?", a: "IP68 is one of the protection ratings Susin I-Tork offers, alongside IP55, IP65 and IP67M. Tell us the site conditions and we’ll quote the right rating and paint system.", icon: WaterDropOutlinedIcon },
    { q: "Which temperatures can it take?", a: "Standard is −20 to +80 °C. Low temperature versions go from −45 to +100 °C and high temperature versions from −70 to +120 °C.", icon: ThermostatOutlinedIcon },
  ],
  parent: { href: "/actuators/mechanical", label: "All mechanical actuators" },
  cta: {
    title: "Know the valve torque?",
    body: `Compare all ${TOTAL} MAB models, or send us the valve torque, thrust, stem size and flange and we’ll pick the size and gearing.`,
  },
};

export default function MABView() {
  return <SeriesView def={DEF} />;
}
