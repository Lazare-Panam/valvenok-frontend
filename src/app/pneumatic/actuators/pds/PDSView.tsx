"use client";

// PDS series page. Every figure is from the Susin "PDS Series" catalogue
// (torque tables p.5–7, dimensions p.8) and the Susin pneumatic IOM manual.

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import SeriesView, { type SeriesDef, type Rung } from "../_series/SeriesView";
import TorqueCurve from "../_series/TorqueCurve";
import { PD_ACTUATOR_DATA } from "./products/hooks/pdActuatorData";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp";
const nm = (n: number) => n.toLocaleString("en-GB", { maximumFractionDigits: n < 100 ? 1 : 0 });

// Operating time (s, at 5.5 bar) per size, catalogue p.5
const TIME: Record<string, string> = { "45": "< 0.3", "50": "< 0.3", "55": "< 0.4", "70": "< 0.6", "75": "< 0.9", "85": "< 1.0", "100": "< 2.0", "125": "< 3.0", "160": "< 5.0", "200": "< 6.0" };

const SIZES = Array.from(new Set(PD_ACTUATOR_DATA.filter((r) => r.series === "PD").map((r) => r.model.slice(2))));
const PD_ALL = PD_ACTUATOR_DATA.filter((r) => r.series === "PD");
const torques = (r: (typeof PD_ALL)[number]) => [r.torque_2_8_bar!, r.torque_8_bar!];
const DA_MIN = Math.min(...PD_ALL.map((r) => torques(r)[0]));
const DA_MAX = Math.max(...PD_ALL.map((r) => torques(r)[1]));
const PS_ALL = PD_ACTUATOR_DATA.filter((r) => r.series === "PS");
const SPRING_MIN = Math.min(...PS_ALL.map((r) => r.springEndTorqueNmMin!));
const SPRING_MAX = Math.max(...PS_ALL.map((r) => r.springEndTorqueNmMax!));
const MODELS = PD_ALL.length / 3 + PS_ALL.length; // PD rows are listed at 0°, 45° and 90°

const RUNGS: Rung[] = SIZES.map((size, i) => {
  const pd = PD_ALL.filter((r) => r.model === `PD${size}`);
  const ps = PS_ALL.find((r) => r.model === `PS${size}`)!;
  const lo = Math.min(...pd.map((r) => r.torque_2_8_bar!));
  const hi = Math.max(...pd.map((r) => r.torque_8_bar!));
  return {
    code: `PDS ${size}`,
    tab: "",
    name: `PD${size} · PS${size}`,
    note: `Air ${pd[0].airConsumptionOpen} L per stroke, under ${TIME[size].slice(2)} s at 5.5 bar. Spring return: ${nm(ps.springEndTorqueNmMin!)}–${nm(ps.springEndTorqueNmMax!)} Nm spring torque.`,
    lo,
    hi,
    range: `${nm(lo)} – ${nm(hi)} Nm`,
    side: "double acting, 2.8–8 bar",
    chips: [`ISO ${pd[0].iso5211}`, `${TIME[size]} s`],
    href: `/pneumatic/actuators/pds/products?size=${size}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Pneumatic actuators",
  h1: ["PDS series", "scotch yoke"],
  lead: (
    <>
      Susin scotch yoke actuators from PDS 45 to PDS 200, for quarter-turn ball, butterfly and plug valves and dampers. Double acting (PD) up to {nm(DA_MAX)} Nm, or spring return (PS) with {nm(SPRING_MIN)}–{nm(SPRING_MAX)} Nm of spring torque.
    </>
  ),
  specs: [
    ["Models", `${MODELS} (10 sizes)`],
    ["Torque, double acting", `${nm(DA_MIN)} – ${nm(DA_MAX)} Nm`],
    ["Air supply", "2.8 – 8 bar"],
    ["Temperature", "−20 to +80 °C"],
    ["Mounting", "ISO 5211 F03–F16"],
    ["Cylinder", "Anodised aluminium"],
  ],
  total: MODELS,
  productsHref: "/pneumatic/actuators/pds/products",
  catalog: SUSIN_CATALOG.PDS,
  image: IMAGE,
  imageAlt: "Susin PDS series scotch yoke pneumatic actuator",
  howTitle: "Why scotch yoke: torque across the stroke",
  how: <TorqueCurve />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "Ten body sizes, each as double acting (PD) or spring return (PS). The bar shows double acting torque from 2.8 to 8 bar; each size opens its models in the table.",
    rungs: RUNGS,
    max: DA_MAX,
    logFrom: 4,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin PDS series actuator",
    points: [
      ["Hardened scotch yoke", "More torque at the open and close positions, where a valve needs it most, in a compact unit."],
      ["Extruded anodised aluminium cylinder", "With O-rings treated for low friction and a long working life."],
      ["Pre-compressed spring pack", "Spring return models ship with the springs pre-compressed, for safer handling."],
      ["Double square drive shaft", "Female drive in sizes from 11 × 11 to 46 × 46 mm to suit the valve stem."],
      ["Standard mounting", "ISO 5211 and DIN 3337 valve mounting; NAMUR (VDI/VDE 3845) for accessories; 1/4\" BSP air ports."],
    ],
  },
  faqTitle: "PDS actuator questions",
  faq: [
    { q: "Double acting (PD) or spring return (PS)?", a: "Double acting PD models use air to open and to close. Spring return PS models use air one way and springs the other, so the valve moves to its fail position if the air supply is lost. Spring return comes as spring close (fail close) or spring open (fail open).", icon: ShieldOutlinedIcon },
    { q: "How do I choose the size?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest size that delivers it at your lowest air supply, across the whole stroke. For spring return, check both the air-stroke torque and the spring torque. Then match the ISO 5211 flange and drive square to the valve top.", icon: SquareFootOutlinedIcon },
    { q: "Why a scotch yoke rather than rack and pinion?", a: "A scotch yoke gives more torque at the start and end of the stroke, which matches the torque a ball or butterfly valve needs to break out and seat. A rack and pinion gives the same torque all the way through.", icon: CompareArrowsOutlinedIcon },
    { q: "What air supply do they need?", a: "Clean, dry, filtered air or inert gas. Torque is listed from 2.8 to 8 bar for double acting and 4.2 to 7 bar for spring return. The maximum is 8 bar and 5.5 bar is standard.", icon: AirOutlinedIcon },
    { q: "Can I adjust the open and close positions?", a: "Yes. A centre stopper bolt adjusts both the open and the close position.", icon: TuneOutlinedIcon },
    { q: "Which accessories can be fitted?", a: "The NAMUR shaft and mounting holes take limit switch boxes, solenoid valves and positioners directly. A side handwheel or declutchable gearbox can be added for manual operation.", icon: ExtensionOutlinedIcon },
  ],
  cta: {
    title: "Know the torque?",
    body: `Compare all ${MODELS} PDS models by size, angle and air pressure, or send us the valve torque and air supply and we’ll pick the size.`,
  },
};

export default function PDSView() {
  return <SeriesView def={DEF} />;
}
