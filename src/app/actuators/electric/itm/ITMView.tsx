"use client";

// ITM series page, on the shared series template. Every figure is from the
// Susin I-Tork ITM multi-turn catalogue (see itmData).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import MultiTurnDrive from "@/src/app/pneumatic/actuators/_series/MultiTurnDrive";
import ItmControls from "./ItmControls";
import { ITM_MODELS, ITM_IMAGE, ITM_ON_VALVE, ITM_CATALOG } from "./itmData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = ITM_MODELS.length;
const MIN = Math.min(...ITM_MODELS.map((m) => m.torqueNm));
const MAX = Math.max(...ITM_MODELS.map((m) => m.torqueNm));

const RUNGS: Rung[] = ITM_MODELS.map((m, i) => ({
  code: m.flange,
  tab: "",
  name: m.model,
  note: `${nm(m.thrustKn)} kN thrust, stem up to Ø ${m.stemKey} mm keyed or ${m.stemThread} mm threaded, ${m.weightKg} kg. ${m.body}, ${m.motors.map((x) => x.kw).join(" / ")} kW motors.`,
  lo: m.torqueNm,
  hi: m.torqueNm,
  range: `${nm(m.torqueNm)} Nm`,
  side: "max torque",
  chips: [m.body, `${m.weightKg} kg`],
  href: `/actuators/electric/itm/products?model=${encodeURIComponent(m.model)}`,
  tone: i % 2 ? "amber" : "blue",
}));

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["ITM series", "multi-turn electric"],
  lead: (
    <>
      Susin I-Tork multi-turn electric actuators for gate, globe and sluice valves and sluice gates. {TOTAL} sizes from {nm(MIN)} to {nm(MAX)} Nm with up to 686 kN of thrust, integral controls and an IP68 enclosure.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (ITM 0180 – 3000)`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Thrust", "Up to 686 kN"],
    ["Output speed", "12 – 118 rpm"],
    ["Power supply", "3 phase, 220 – 480 V"],
    ["Enclosure", "IP68, Ex d IIC T4 option"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/itm/products",
  catalog: ITM_CATALOG,
  image: ITM_IMAGE,
  imageAlt: "Susin I-Tork ITM multi-turn electric actuators",
  howTitle: "How a multi-turn actuator works",
  how: <MultiTurnDrive />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque and thrust",
    lead: "Five sizes, with the ISO 5210 flange on the left. The bar shows maximum torque; the torque at each output speed and motor is on each model’s page.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 60,
  },
  build: {
    title: "How it’s built",
    image: ITM_ON_VALVE,
    imageAlt: "Susin I-Tork ITM multi-turn actuators, one mounted on a rising-stem gate valve",
    points: [
      ["TENV motor", "Totally enclosed, high starting torque, class F insulation with a thermostat and a cooling plate. Mounted so it can be removed easily."],
      ["Single worm reduction gear", "Oil lubricated for quiet, efficient running and stable operation at low temperatures."],
      ["Detachable thrust unit", "Fits to the valve on its own, before the actuator, with two drive bushing types, for quarter-turn and multi-turn use. ISO 5210 mounting."],
      ["Top-mounted handwheel", "Switch to manual with the lever, even while the motor runs; the actuator returns to electric on its own when the motor starts."],
      ["Sealed to IP68", "10 m for 100 hours, with a double-sealed terminal compartment, so the inside stays dry when the terminal cover is off."],
      ["Built in", "52-pin (top handle) or 75-pin (side handle) terminals, a 10 W space heater and an aluminium alloy body."],
    ],
  },
  extra: <ItmControls />,
  faqTitle: "ITM actuator questions",
  faq: [
    { q: "How do I choose the size?", a: "Start from the valve’s torque and, for a rising stem, its thrust. Pick the smallest ITM whose maximum torque and allowable thrust both cover them, then check the stem fits the drive bushing and the ISO 5210 flange matches. Finally choose the output speed from the closing time you need.", icon: SquareFootOutlinedIcon },
    { q: "How fast does it close the valve?", a: "Output speeds run from 12/14 to 98/118 rpm at 50/60 Hz; 23/28, 48/57, 73/87 and 98/118 rpm are standard. Faster speeds give less torque, so each model’s page lists the torque at every speed and motor. Divide the turns the valve needs by the rpm to get the closing time in minutes.", icon: SpeedOutlinedIcon },
    { q: "Which power supply does it need?", a: "3 phase AC at 220, 380, 400, 415, 440, 460 or 480 V, 50 or 60 Hz ±10%. Control power is internal 24 VDC, or external 24–48 V AC/DC or 110 / 220 VAC.", icon: ElectricBoltOutlinedIcon },
    { q: "Multi-turn or quarter-turn?", a: "Multi-turn actuators turn many times to drive the stem of gate, globe and sluice valves. Quarter-turn actuators such as the ITQ turn 90° for ball, butterfly and plug valves.", icon: CompareArrowsOutlinedIcon },
    { q: "Can I operate it by hand?", a: "Yes. The handwheel on top drives the sleeve directly. Move the switching lever to manual, even while the motor is running; it goes back to electric on its own when the motor next starts.", icon: PanToolOutlinedIcon },
    { q: "Can it be used outdoors or under water?", a: "Yes. The enclosure is IP68, tested at 10 m for 100 hours, and the space heater prevents condensation. For hazardous areas, Ex d IIC T4 is an option.", icon: WaterDropOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know the torque and thrust?",
    body: `Compare all ${TOTAL} ITM models, or send us the valve torque, thrust, stem size, number of turns and closing time and we’ll pick the model, speed and motor.`,
  },
};

export default function ITMView() {
  return <SeriesView def={DEF} />;
}
