"use client";

// Danfoss PVE page, on the shared series template. Every figure is from the
// Danfoss documents listed in pveData.

import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import SpoolControl from "@/src/app/pneumatic/actuators/_series/SpoolControl";
import PveMore from "./PveMore";
import { PVE_MODELS, PVE_IMAGE, PVE_TI } from "./pveData";

const TOTAL = PVE_MODELS.length;
const S7 = PVE_MODELS.filter((m) => m.t1);
const MAX = Math.max(...S7.map((m) => m.t1!));

const RUNGS: Rung[] = S7.map((m, i) => ({
  code: m.kind === "On/off" ? "ON/OFF" : "PROP",
  tab: m.kind === "On/off" ? "onoff" : "prop",
  name: m.model,
  note: `${m.role} ${m.supply}, ${m.connectors}.`,
  lo: m.t1!,
  hi: m.t1!,
  range: `${m.t1} ms`,
  side: "neutral → full stroke",
  chips: [m.hysteresis ? `Hysteresis ${m.hysteresis.split(" ")[0]}` : m.pilot + " pilot", m.monitoring.startsWith("Active") ? "Active monitoring" : m.monitoring.startsWith("Passive") ? "Passive monitoring" : "Power LED"],
  href: `/actuators/electric/pvae32/products?model=${m.model}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["Danfoss PVE", "electrohydraulic"],
  lead: (
    <>
      Danfoss electrohydraulic actuators that drive the spool of PVG proportional valves on mobile and industrial hydraulic machines. On/off, proportional, CAN bus and explosion-proof versions, {TOTAL} families in all.
    </>
  ),
  specs: [
    ["Families", `${TOTAL} (PVEO to PVE-EX)`],
    ["Supply", "9–32 VDC; on/off 12 or 24 VDC"],
    ["Reaction", "From 90 ms"],
    ["Temperature", "−40 to +90 °C"],
    ["Fits", "PVG 32, 100, 120, 128, 256"],
    ["Connectors", "DEUTSCH, AMP, DIN/Hirschmann"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/pvae32/products",
  catalog: PVE_TI,
  catalogLabel: "PVE Series 7 technical information",
  image: PVE_IMAGE,
  imageAlt: "Danfoss PVE Series 7 electrohydraulic actuator",
  howTitle: "How a PVE moves the valve spool",
  how: <SpoolControl />,
  brand: "Danfoss",
  ladder: {
    kicker: "Series 7 analog",
    title: "Pick by control and speed",
    lead: "The bar shows the reaction time from neutral to full spool stroke on PVG 32 / 100 at constant supply: shorter is faster. Each row opens the model.",
    tabs: [{ k: "onoff", label: "On/off" }, { k: "prop", label: "Proportional" }],
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Danfoss PVE Series 7 actuator",
    points: [
      ["Closed-loop spool control", "On proportional models an integrated microcontroller and LVDT spool feedback hold the spool where the signal sets it; on/off models run open loop."],
      ["Fault monitoring", "Active or passive event monitoring with reaction and recovery, and a status LED; Danfoss’s dual demodulator LVDT gives enhanced diagnostics."],
      ["Multi-voltage", "Proportional models run on 9–32 VDC; on/off models on a fixed 12 or 24 VDC. Ratiometric, 0–10 VDC (-U) or PWM control signals."],
      ["Built for the outdoors", "Corrosion-protected metal parts, a new encapsulation standard, improved EMC immunity and −40 to +90 °C operation."],
      ["Plug and perform", "Replaces PVE Series 4 directly. DEUTSCH, AMP or DIN/Hirschmann connectors, with an E-mark for on-road machines."],
      ["Power Save", "Lowers power use on Series 7 actuators."],
    ],
  },
  extra: <PveMore />,
  faqTitle: "Danfoss PVE questions",
  faq: [
    { q: "What does a PVE actuator do?", a: "It moves the main spool of a Danfoss PVG proportional valve by directing pilot oil, so an electrical signal from a joystick or controller sets the oil flow to each function of the machine.", icon: SwapHorizOutlinedIcon },
    { q: "On/off or proportional?", a: "PVEO is on/off: the spool goes to neutral or full stroke. PVEM, PVEA, PVEH and PVES are proportional: the spool follows the control signal, from medium performance (PVEM) to high performance and reaction (PVES).", icon: CompareArrowsOutlinedIcon },
    { q: "Which supply voltage do I need?", a: "Proportional PVEM, PVEA, PVEH and PVES take 9–32 VDC. On/off PVEO is fixed at 12 VDC or 24 VDC.", icon: ElectricBoltOutlinedIcon },
    { q: "Active or passive fault monitoring?", a: "Both detect faults and light the error LED. With active monitoring the actuator reacts to the event as well; PVEA, PVEH and PVES offer either, PVEM has passive monitoring.", icon: ShieldOutlinedIcon },
    { q: "Which connector should I choose?", a: "DEUTSCH, AMP or DIN/Hirschmann, depending on the model: PVEM is DIN or Hirschmann, PVEA is DEUTSCH or AMP, and PVEO, PVEH and PVES come with any of the three. Match it to your machine’s wiring harness.", icon: SettingsInputComponentOutlinedIcon },
    { q: "What conditions can they work in?", a: "Series 7 actuators operate from −40 to +90 °C with oil of 12–75 cSt and cleanliness to ISO 4406 18/16/13. For explosive atmospheres, choose PVE-EX.", icon: ThermostatOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know your PVG valve?",
    body: "Compare all the PVE actuators, or send us the PVG valve, supply voltage, control signal and connector and we’ll confirm the actuator and part number.",
  },
};

export default function PVEView() {
  return <SeriesView def={DEF} />;
}
