"use client";

// QS series page, on the shared series template. Every figure is from the
// Susin / i-Tork QS fail-safe (spring return) catalogue: what is different
// (p.2), technical data and spring speed (p.3–4), dimensions (p.5).

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import SpringFailSafe from "@/src/app/pneumatic/actuators/_series/SpringFailSafe";
import QsDifference from "./QsDifference";
import { QS_MODELS, QS_IMAGE, QS_CATALOG } from "./qsData";

const TOTAL = QS_MODELS.length;
const MIN = Math.min(...QS_MODELS.map((m) => m.torqueNm));
const MAX = Math.max(...QS_MODELS.map((m) => m.torqueNm));

const RUNGS: Rung[] = QS_MODELS.map((m, i) => ({
  code: m.mounting.replace("ISO 5211 ", ""),
  tab: "",
  name: m.model,
  note: `Motor and spring both ${m.torqueNm} Nm. Opens in ${m.speed.replace(" (50 Hz)", " at 50 Hz").replace(" (60 Hz)", " at 60 Hz")}; spring return 1.8 s. ${m.weightKg} kg.`,
  lo: m.torqueNm,
  hi: m.torqueNm,
  range: `${m.torqueNm} Nm`,
  side: "motor and spring torque",
  chips: [`${m.weightKg} kg`, "1.8 s return"],
  href: `/actuators/electric/qs/products?model=${m.model}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["QS series", "fail-safe electric"],
  lead: (
    <>
      Susin spring return electric actuators for ball, butterfly and plug valves that must go to a safe position when the power fails. {TOTAL} models from {MIN} to {MAX} Nm; an independent spiral spring returns the valve in 1.8 seconds.
    </>
  ),
  specs: [
    ["Models", "QS05 · QS10 · QS20 · QS30"],
    ["Torque", `${MIN} – ${MAX} Nm`],
    ["Spring return", "1.8 s (2, 3, 4 s option)"],
    ["Power supply", "AC 110 – 440 V, 24 VDC"],
    ["Enclosure", "IP67 (IP68 option)"],
    ["Temperature", "−20 to +70 °C"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/qs/products",
  catalog: QS_CATALOG,
  image: QS_IMAGE,
  imageAlt: "Susin QS series fail-safe spring return electric actuator",
  howTitle: "How it fails safe",
  how: <SpringFailSafe motorTime="21–34 s" springTime="1.8 s" />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "Four models in two body sizes, with the ISO 5211 flange on the left. Motor and spring torque are the same; each row opens the model in the table.",
    rungs: RUNGS,
    max: MAX,
  },
  build: {
    title: "How it’s built",
    imageAlt: "Susin QS fail-safe electric actuator",
    points: [
      ["Magnetic brake and spiral spring", "The brake holds the spring while power is on. If power is lost it releases, and the spring alone turns the valve to its safe position in 1.8 s, or 2, 3 or 4 s as an option."],
      ["Special reducer", "The motor drives only the reducer in normal running, so it can be smaller and draw less current."],
      ["Switches", "Two limit switches and two torque switches for open and close (SPDT 250 VAC / 10 A); two auxiliary force switches as an option."],
      ["On/off or modulating", "S2 30 min on/off, or S4 50% modulating with a 4–20 mA signal (0–10, 0–5, 1–5 or 2–10 VDC as options)."],
      ["Manual operation and indication", "A manual handwheel and lever, stopper bolts and a mechanical position indicator on top."],
      ["Sealed and heated", "IP67, IP68 as an option, with a 2 W space heater and six cable entries."],
    ],
  },
  extra: <QsDifference />,
  faqTitle: "QS actuator questions",
  faq: [
    { q: "What happens when the power fails?", a: "The magnetic brake releases and the independent spiral spring turns the valve to its safe position in 1.8 seconds (2, 3 or 4 seconds as options). In normal running the motor drives only the reducer, not the spring.", icon: ShieldOutlinedIcon },
    { q: "How do I choose the size?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest QS that covers it. Motor and spring torque are the same on every model, so the valve gets the same torque on the spring stroke. Then check the ISO 5211 flange: F07 on QS05 and QS10, F10 / F12 on QS20 and QS30.", icon: SquareFootOutlinedIcon },
    { q: "Which supply voltages can it run on?", a: "AC 110, 220, 380 or 440 V, or 24 VDC.", icon: ElectricBoltOutlinedIcon },
    { q: "Can it modulate as well as open and close?", a: "Yes. It runs on/off (S2, 30 min) or modulating (S4, 50%) with a 4–20 mA control signal, or 0–10, 0–5, 1–5 or 2–10 VDC as options. Susin notes that the ITQ series options are also available on the QS.", icon: TuneOutlinedIcon },
    { q: "Is it suitable for hazardous areas?", a: "No. The QS is IP67 (IP68 option) but is not available explosion proof; Susin lists it as under development. For a hazardous area, the ITQ series has an explosion proof option.", icon: WarningAmberOutlinedIcon },
    { q: "QS or ITQ with a battery backup?", a: "Both move the valve to a set position on power loss. The QS does it with a spring, from 50 to 300 Nm. The ITQ’s BP battery backup option does it with a rechargeable battery, on 1 phase ITQ 0160 to ITQ 0500.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Need a valve to fail safe?",
    body: `Compare all ${TOTAL} QS models by torque, time and flange, or send us the valve torque, power supply and safe position and we’ll pick the model.`,
  },
};

export default function QSView() {
  return <SeriesView def={DEF} />;
}
