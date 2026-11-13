"use client";

// ITG series page, on the shared series template. Every figure is from the
// Susin I-Tork ITG declutchable worm gear catalogue (see itgData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import WormGear from "@/src/app/pneumatic/actuators/_series/WormGear";
import GearSizer from "@/src/app/pneumatic/actuators/_series/GearSizer";
import { ITG_MODELS, ITG_IMAGE, ITG_ON_VALVE, ITG_CATALOG } from "./itgData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = ITG_MODELS.length;
const STANDARD = ITG_MODELS.filter((m) => m.stage === "Standard");
const MIN = Math.min(...STANDARD.map((m) => m.torqueNm));
const MAX = Math.max(...STANDARD.map((m) => m.torqueNm));

const RUNGS: Rung[] = STANDARD.map((m, i) => {
  const variants = ITG_MODELS.filter((x) => x.size === m.size);
  return {
    code: m.flange,
    tab: "",
    name: m.size,
    count: variants.length,
    note: `Actuator flange ${m.actFlange}${m.actFlangeOpt ? ` (option ${m.actFlangeOpt})` : ""}. Ratio ${variants.map((x) => x.ratio).join(" / ")}; ${variants.map((x) => x.turns).join(" / ")} handwheel turns for 90°.`,
    lo: m.torqueNm,
    hi: m.torqueNm,
    range: `${nm(m.torqueNm)} Nm`,
    side: "max torque",
    chips: [variants.map((x) => (x.stage === "Standard" ? "Std" : x.stage)).join(" · "), `${m.weightKg} kg`],
    href: `/actuators/mechanical/itg/products?size=${encodeURIComponent(m.size)}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Mechanical actuators",
  h1: ["ITG series", "declutchable gear overrides"],
  lead: (
    <>
      Susin I-Tork declutchable worm gears that fit between a pneumatic actuator and a quarter-turn valve, so an operator can turn the valve by hand when the air fails or during commissioning and maintenance. {STANDARD.length} sizes from {nm(MIN)} to {nm(MAX)} Nm: {TOTAL} models with the reduction versions.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (ITG-012 – 3200)`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Turns for 90°", "7.5 – 248"],
    ["Fits", "Double-acting and spring-return actuators"],
    ["Protection", "IP54, IP55, IP65 or IP67M"],
    ["Mounting", "ISO 5211 valve and actuator, F05 – F35"],
  ],
  total: TOTAL,
  productsHref: "/actuators/mechanical/itg/products",
  catalog: ITG_CATALOG,
  image: ITG_IMAGE,
  imageAlt: "Susin I-Tork ITG declutchable worm gear with handwheel and declutch lever",
  howTitle: "How a declutchable gear works",
  how: <WormGear declutch />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "Fifteen sizes, with the valve ISO 5211 flange on the left; the actuator flange is in each note. Every gearing of a size has the same torque.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 30,
  },
  build: {
    title: "How it’s built",
    image: ITG_ON_VALVE,
    imageAlt: "Susin I-Tork ITG declutchable gear mounted between a pneumatic actuator and a butterfly valve",
    points: [
      ["Inline mounting", "The ITG bolts between the valve and the actuator, with a universal actuator mounting flange on top and the valve flange below, both ISO 5211."],
      ["Declutch lever", "In Auto the worm is out of mesh and the actuator drives the valve; in Manual the worm engages so the handwheel turns it."],
      ["Worm and worm wheel", "Carbon steel A576-1045 worm shaft and ductile iron A536-80-55-06 worm wheel, on thrust needle roller bearings."],
      ["Drive shaft and bush", "Plain and machinable, so the shaft and bush can be made to suit the actuator, gearbox and valve."],
      ["Air relief system", "An integrated aluminium air relief valve."],
      ["Ductile iron body", "Housing, cover and end caps in A536-65-45-12 (cast iron option), NBR gaskets, ±5° stroke adjustment."],
    ],
  },
  extra: (
    <GearSizer
      name="ITG"
      models={ITG_MODELS}
      products="/actuators/mechanical/itg/products"
      example={3000}
      lead="From the ITG-400 up, each size also comes with a single (1S) or double (2S) stage helical reduction. More mechanical advantage means less force on the rim in manual, but more turns of the handwheel."
      text={{
        Standard: "Worm gear only. The fewest turns: 7.5 to 17 for 90°.",
        "1S": "A single stage helical reduction on the input, for sizes ITG-400 to 3200. 32.5 to 62 turns for 90°.",
        "2S": "A double stage helical reduction, for ITG-900 to 3200. The lightest effort, from 130.5 to 248 turns.",
      }}
    />
  ),
  faqTitle: "ITG declutchable gear questions",
  faq: [
    { q: "How do I switch to manual?", a: "With the lever in Auto the gearbox connects to the pneumatic actuator. Pull the locking unit holder, turn the lever to Manual and check the gears are fully engaged with the worm; the handwheel now turns the valve. Put the lever back to Auto for pneumatic operation.", icon: SwapHorizOutlinedIcon },
    { q: "How do I choose the size?", a: "Take the valve torque and pick the smallest ITG whose output torque covers it. Then match the valve flange and the actuator flange (ISO 5211, standard or option) and the drive to the valve stem.", icon: SquareFootOutlinedIcon },
    { q: "Does it work with spring-return actuators?", a: "Yes. Susin I-Tork designed the ITG for both double-acting and spring-return pneumatic actuators.", icon: AirOutlinedIcon },
    { q: "Standard, 1S or 2S?", a: "All gearings of a size have the same torque. A reduction stage lowers the rim pull but adds handwheel turns. Use the rim effort check above; Susin I-Tork’s standard limit is 360 N.", icon: PanToolOutlinedIcon },
    { q: "ITG or MAW?", a: "The MAW is a manual worm gear on its own. The ITG sits under an actuator and only engages when you switch it to Manual, so the valve stays automated.", icon: LayersOutlinedIcon },
    { q: "Which temperatures can it take?", a: "Standard is −20 to +85 °C. A low temperature version covers −45 to +120 °C.", icon: ThermostatOutlinedIcon },
  ],
  parent: { href: "/actuators/mechanical", label: "All mechanical actuators" },
  cta: {
    title: "Adding an override to an actuated valve?",
    body: `Compare all ${TOTAL} ITG models, or send us the valve torque and the valve and actuator flanges and we’ll pick the size and gearing.`,
  },
};

export default function ITGView() {
  return <SeriesView def={DEF} />;
}
