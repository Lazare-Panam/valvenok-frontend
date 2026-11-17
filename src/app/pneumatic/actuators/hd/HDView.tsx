"use client";

// HD series page. Model figures are Susin I-Tork's HD "General specification" table
// (susingroup.com/products/hd-rotary), as are pressure and temperature; features from Susin I-Tork's IS & IC catalogue.

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import ModularBuild from "../_series/ModularBuild";
import HdTables from "./HdTables";
import { HD_MODELS, HD_SERIES, HD_BODIES, HD_IMAGE, HD_CATALOG, maxTorque } from "./hdData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = HD_MODELS.length;
const MAX = Math.max(...HD_MODELS.map(maxTorque));
const MIN = Math.min(...HD_MODELS.filter((m) => m.da).map((m) => m.da![0][1]));

// One rung per Susin I-Tork series; each opens that series in the model list
const RUNGS: Rung[] = HD_SERIES.map((S, i) => {
  const ms = HD_MODELS.filter((m) => m.series === S.code);
  const lo = Math.min(...ms.map((m) => (m.da ? m.da[0][1] : Math.min(...m.sr!.map((x) => x.spring[1])))));
  const hi = Math.max(...ms.map(maxTorque));
  return {
    code: S.code,
    tab: "",
    name: `${S.code} series`,
    count: ms.length,
    note: `${S.text} Body sizes ${HD_BODIES[0]}–${HD_BODIES[HD_BODIES.length - 1]}, ${ms.length} models.`,
    lo,
    hi,
    range: `${nm(lo)} – ${nm(hi)} Nm`,
    side: S.action === "Double acting" ? "2.8 – 7 bar" : "spring and air torque",
    chips: [S.yoke, S.action],
    href: `/pneumatic/actuators/hd/products?series=${S.code}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["HD heavy-duty", "scotch yoke"],
  lead: (
    <>
      Susin I-Tork heavy-duty scotch yoke actuators for large ball, butterfly and plug valves and dampers, on/off or modulating. Four series, ISD, ICD, ISR and ICR, with a symmetric or canted yoke, double acting or spring return: {TOTAL} models up to {nm(MAX)} Nm.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} in 4 series`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Air supply", "3.5 – 10 bar"],
    ["Temperature", "−20 to +85 °C"],
    ["Mounting", "ISO 5211 F10–F40"],
    ["Protection", "IP66"],
  ],
  total: TOTAL,
  productsHref: "/pneumatic/actuators/hd/products",
  catalog: HD_CATALOG,
  image: HD_IMAGE,
  imageAlt: "Susin I-Tork HD heavy-duty scotch yoke pneumatic actuator",
  howTitle: "One modular build, every configuration",
  how: <ModularBuild />,
  ladder: {
    kicker: "Series",
    title: "Four series: pick the yoke and the action",
    lead: "IS is the symmetric yoke and IC the canted one; D is double acting and R spring return. Each bar runs from the lowest to the highest listed torque. Every model’s figures are in the technical tables below.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 300,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork HD actuator",
    points: [
      ["Modular", "Power cylinder, centre body and spring cartridge combine to suit the duty, and are interchangeable for service and spares."],
      ["Symmetric or canted yoke", "IS gives its highest torque at both ends of the stroke; IC at the open or the close end."],
      ["Ductile iron body", "Heavy-duty housing with a sealed, corrosion-resistant finish, rated IP66."],
      ["Four configurations", "Double acting, or spring return fail close or fail open, each with a symmetric (IS) or canted (IC) yoke."],
      ["Standards", "ISO 5211 mounting (MSS-SP101 on request); Susin I-Tork lists the range as ATEX / IECEx certified for hazardous areas."],
    ],
  },
  extra: <HdTables />,
  faqTitle: "HD actuator questions",
  faq: [
    { q: "Symmetric (IS) or canted (IC) yoke?", a: "A symmetric yoke gives its highest torque at both ends of the 90° stroke. A canted yoke gives its highest torque at either the close or the open end, which suits valves that need most torque at one end.", icon: CompareArrowsOutlinedIcon },
    { q: "How do I choose the model?", a: "Pick the series first: IS or IC yoke, double acting or spring return. Then take the valve’s highest torque, add a safety factor, and find the smallest model that delivers it at your lowest air supply in the technical tables. For spring return, the spring end torque must also close the valve. The model code gives the body size and cylinder, e.g. ISD 03-38 is body 03, cylinder 38.", icon: SquareFootOutlinedIcon },
    { q: "Double acting or spring return?", a: "Double acting models use air to open and close. Spring return models use air one way and springs the other, so the valve goes to its safe position, fail close or fail open, if air is lost.", icon: ShieldOutlinedIcon },
    { q: "What air supply do they need?", a: "Instrument air, at 3.5 to 10 bar (40 to 145 psig). The standard temperature range is −20 to +85 °C, with −30 to +100 °C available as an option.", icon: AirOutlinedIcon },
    { q: "What certification do they have?", a: "Susin I-Tork lists the HD range as ATEX / IECEx certified for hazardous areas, IP66, with ISO 5211 and NAMUR mounting. If your project needs another certificate, such as SIL or PED, tell us when you request a quote and we’ll confirm it with Susin I-Tork.", icon: VerifiedOutlinedIcon },
    { q: "Can they be operated by hand?", a: "Yes. A manual handwheel (jackscrew), hydraulic override or declutchable gearbox can be fitted, along with limit switches, solenoid valves and positioners.", icon: PanToolOutlinedIcon },
  ],
  cta: {
    title: "Know the torque?",
    body: `Compare all ${TOTAL} HD models across the ISD, ICD, ISR and ICR series, or send us the valve torque and air supply and we’ll pick the model.`,
  },
};

export default function HDView() {
  return <SeriesView def={DEF} />;
}
