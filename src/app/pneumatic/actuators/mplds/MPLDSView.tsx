"use client";

// MPLDS series page: MPLD (double acting) and MPLS (spring return) micro linear
// actuators. Every figure is from Susin I-Tork's MPLD and MPLS pages on susingroup.com.

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import FailSafe from "../_series/FailSafe";
import { MPLDS_SIZES, MPLDS_IMAGE } from "./mpldsData";

const kn = (n: number) => n.toLocaleString("en-GB", { minimumFractionDigits: 1 });
const MIN = Math.min(...MPLDS_SIZES.map((s) => Math.min(...s.thrust[0])));
const MAX = Math.max(...MPLDS_SIZES.map((s) => s.thrust[5][0]));
const TOTAL = MPLDS_SIZES.length * 2;
const PRODUCTS = "/pneumatic/actuators/mplds/products";

const RUNGS: Rung[] = MPLDS_SIZES.map((s, i) => {
  const lo = Math.min(...s.thrust[0]), hi = s.thrust[5][0];
  return {
    code: `${s.bore} mm bore`,
    tab: "",
    name: `MPLD-${s.bore} · MPLS-${s.bore}`,
    note: `${s.rod} mm piston rod. Spring return MPLS-${s.bore}: ${s.mplsStroke[0]}–${s.mplsStroke[1]} mm stroke.`,
    lo,
    hi,
    range: `${kn(lo)} – ${kn(hi)} kN`,
    side: "MPLD, 2.8–7 bar",
    chips: [`Rod ${s.rod} mm`, `¼" NPT`],
    href: `${PRODUCTS}?bore=${s.bore}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["MPLDS micro", "linear actuators"],
  lead: (
    <>
      Susin I-Tork’s compact linear actuators for smaller valves: MPLD double acting, with {kn(MIN)} to {kn(MAX)} kN of thrust, and MPLS spring return for fail-safe duty. Four bore sizes from 100 to 200 mm.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (4 bores × 2)`],
    ["Thrust, MPLD", `${kn(MIN)} – ${kn(MAX)} kN`],
    ["Bore", "100 – 200 mm"],
    ["Stroke, MPLS", "50 – 300 mm"],
    ["Temperature", "−20 to +80 °C"],
    ["Body", "Hard anodised aluminium"],
  ],
  total: TOTAL,
  productsHref: PRODUCTS,
  catalog: "https://www.susingroup.com/products/mplds-linear",
  catalogLabel: "MPLDS on susingroup.com",
  image: MPLDS_IMAGE,
  imageAlt: "Susin I-Tork MPLDS micro linear pneumatic actuator",
  howTitle: "Spring return: fail-safe on air loss",
  how: <FailSafe />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a bore by thrust",
    lead: "Four bore sizes, each as MPLD double acting or MPLS spring return. The bar shows MPLD thrust from 2.8 to 7 bar.",
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin I-Tork MPLDS actuator",
    points: [
      ["Hard anodised aluminium body", "25–30 µm anodising with epoxy-coated end caps as standard."],
      ["Corrosion options", "Fully PU-coated (C5), marine grade with AISI 316 fasteners, PTFE-coated, electroless nickel plated, or fully stainless steel AISI 316."],
      ["Temperature options", "Standard −20 to +80 °C; high −10 to +140 °C; low −45 °C; extreme low −55 °C."],
      ["Modular spring return", "MPLS is single acting and modular, for flexible thrust and easy field maintenance."],
    ],
  },
  faqTitle: "MPLDS actuator questions",
  faq: [
    { q: "MPLD or MPLS?", a: "MPLD is double acting: air drives the stem both ways. MPLS is spring return (single acting): air drives one way and springs the other, so the valve goes to its safe position if air is lost.", icon: CompareArrowsOutlinedIcon },
    { q: "How long a stroke can I get?", a: "MPLS models run 50–250 mm on the 100 and 125 mm bores, up to 275 mm on MPLS-160 and up to 300 mm on MPLS-200.", icon: StraightenOutlinedIcon },
    { q: "Can they work in hot or very cold sites?", a: "Yes. The standard range is −20 to +80 °C. High-temperature (−10 to +140 °C), low-temperature (−45 °C) and extreme low-temperature (−55 °C) builds are available.", icon: ThermostatOutlinedIcon },
    { q: "Are there corrosion-resistant versions?", a: "Yes: fully PU-coated C5 builds, a marine grade with AISI 316 parts and fasteners, PTFE-coated, electroless nickel plated, and fully stainless steel (AISI 316) for continuous immersion in fresh water.", icon: WaterDropOutlinedIcon },
  ],
  cta: {
    title: "Need a bigger stroke or more thrust?",
    body: "The PLDS series goes from 100 to 975 mm bore and up to 444 kN. Or send us the valve thrust, stroke and air supply and we’ll pick the size.",
  },
};

export default function MPLDSView() {
  return <SeriesView def={DEF} />;
}
