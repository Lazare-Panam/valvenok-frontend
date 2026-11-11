"use client";

// HD series page. Model figures are Susin's HD "General specification" table
// (susingroup.com/products/hd-rotary), as are pressure and temperature; features from Susin's IS & IC catalogue.

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import ModularBuild from "../_series/ModularBuild";
import { HD_ACTUATOR_DATA } from "./products/hooks/hdActuatorData";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp";
const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = HD_ACTUATOR_DATA.length;
const MIN = Math.min(...HD_ACTUATOR_DATA.map((m) => m.torqueNmMin));
const MAX = Math.max(...HD_ACTUATOR_DATA.map((m) => m.torqueNmMax));

// Max stem diameter / height (mm), from the same Susin table
const STEM: Record<string, [string, number]> = { A1: ["SQ-22", 30], "01": ["Ø45", 45], "02": ["Ø65", 120], "03": ["Ø80", 130], "04": ["Ø110", 150], "05": ["Ø125", 185], "06": ["Ø165", 245] };

const RUNGS: Rung[] = HD_ACTUATOR_DATA.map((m, i) => ({
  code: `HD ${m.model}`,
  tab: "",
  name: `Body size ${m.model}`,
  note: `Spring end torque ${nm(m.springEndTorqueNmMin)}–${nm(m.springEndTorqueNmMax)} Nm. Stem up to ${STEM[m.model][0]} mm, ${STEM[m.model][1]} mm high.`,
  lo: m.torqueNmMin,
  hi: m.torqueNmMax,
  range: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)} Nm`,
  side: `ISO 5211 ${m.iso5211}`,
  chips: [m.iso5211, STEM[m.model][0]],
  href: `/pneumatic/actuators/hd/products?model=${m.model}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["HD heavy-duty", "scotch yoke"],
  lead: (
    <>
      Susin IS and IC series scotch yoke actuators for large ball, butterfly and plug valves and dampers, on/off or modulating. {TOTAL} body sizes from {nm(MIN)} to {nm(MAX)} Nm, double acting or spring return.
    </>
  ),
  specs: [
    ["Body sizes", `${TOTAL} (A1 – 06)`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Air supply", "3.5 – 10 bar"],
    ["Temperature", "−20 to +85 °C"],
    ["Mounting", "ISO 5211 F10–F40"],
    ["Protection", "IP66 / IP67"],
  ],
  total: TOTAL,
  productsHref: "/pneumatic/actuators/hd/products",
  catalog: SUSIN_CATALOG.HD,
  image: IMAGE,
  imageAlt: "Susin HD heavy-duty scotch yoke pneumatic actuator",
  howTitle: "One modular build, every configuration",
  how: <ModularBuild />,
  ladder: {
    kicker: "Body sizes",
    title: "Pick a body size by torque",
    lead: "Seven body sizes. The bar shows each size’s torque range across its cylinder and spring options; each one opens its model in the table.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 100,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin HD actuator",
    points: [
      ["Modular", "Power cylinder, centre body and spring cartridge combine to suit the duty, and are interchangeable for service and spares."],
      ["Symmetric or canted yoke", "IS gives its highest torque at both ends of the stroke; IC at the open or the close end."],
      ["Ductile iron body", "Heavy-duty housing with a sealed, corrosion-resistant finish, rated IP66 / IP67."],
      ["Four configurations", "Double acting, tandem double acting, and spring return fail close or fail open."],
      ["Standards", "ISO 5211 mounting (MSS-SP101 on request), tested to EN 15714-3:2009. Susin lists ATEX, SIL3 and PED compliance."],
    ],
  },
  faqTitle: "HD actuator questions",
  faq: [
    { q: "Symmetric (IS) or canted (IC) yoke?", a: "A symmetric yoke gives its highest torque at both ends of the 90° stroke. A canted yoke gives its highest torque at either the close or the open end, which suits valves that need most torque at one end.", icon: CompareArrowsOutlinedIcon },
    { q: "How do I choose the body size?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest body size that delivers it at your lowest air supply. For spring return, check the spring end torque too. Then check the maximum stem diameter and height against the valve stem, and match the ISO 5211 flange to the valve top.", icon: SquareFootOutlinedIcon },
    { q: "Double acting or spring return?", a: "Double acting (and tandem double acting) models use air to open and close. Spring return models use air one way and springs the other, so the valve goes to its safe position, fail close or fail open, if air is lost.", icon: ShieldOutlinedIcon },
    { q: "What air supply do they need?", a: "Instrument air, at 3.5 to 10 bar (40 to 145 psig). The standard temperature range is −20 to +85 °C, with −30 to +100 °C available as an option.", icon: AirOutlinedIcon },
    { q: "What certification do they have?", a: "Susin lists ATEX, SIL3 and PED compliance, IP66 / IP67 protection and testing to EN 15714-3:2009 for the HD range. Ask for the certificate you need when you request a quote.", icon: VerifiedOutlinedIcon },
    { q: "Can they be operated by hand?", a: "Yes. A manual handwheel (jackscrew), hydraulic override or declutchable gearbox can be fitted, along with limit switches, solenoid valves and positioners.", icon: PanToolOutlinedIcon },
  ],
  cta: {
    title: "Know the torque?",
    body: `Compare all ${TOTAL} HD body sizes by torque and mounting, or send us the valve torque and air supply and we’ll pick the size.`,
  },
};

export default function HDView() {
  return <SeriesView def={DEF} />;
}
