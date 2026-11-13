"use client";

// PA series page, on the shared series template. Every figure is from
// Susin I-Tork's PANDA / PA hydraulic brochure (see paData).

import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import ElectroHydraulic from "@/src/app/pneumatic/actuators/_series/ElectroHydraulic";
import { PA_MODELS, PA_IMAGE, PA_CATALOG } from "./paData";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = PA_MODELS.length;
const DA = PA_MODELS.filter((m) => m.kind === "Double acting");
const SR = PA_MODELS.filter((m) => m.kind === "Spring return");
const MAX = Math.max(...PA_MODELS.map((m) => m.torqueNm));

// Two rows: double acting and spring return, each opening its models in the list
const RUNGS: Rung[] = [
  {
    code: "D",
    tab: "",
    name: "Double acting",
    count: DA.length,
    note: `Reversible pump drives the valve open and closed, with the same torque both ways. ${DA[0].code} – ${DA[DA.length - 1].code}.`,
    lo: DA[0].torqueNm!,
    hi: DA[DA.length - 1].torqueNm!,
    range: `${nm(DA[0].torqueNm!)} – ${nm(DA[DA.length - 1].torqueNm!)} Nm`,
    side: "open / close",
    chips: ["Double acting"],
    href: "/actuators/hydraulic/pa/products?type=Double%20acting",
    tone: "blue",
  },
  {
    code: "E",
    tab: "",
    name: "Spring return",
    count: SR.length,
    note: `Oil opens the valve and loads the spring; the spring closes it if power is lost. ${SR[0].code} – ${SR[SR.length - 1].code}.`,
    lo: Math.min(...SR.filter((m) => m.close).map((m) => m.close![1])),
    hi: Math.max(...SR.filter((m) => m.open).map((m) => m.open![0])),
    range: `${nm(Math.min(...SR.filter((m) => m.close).map((m) => m.close![1])))} – ${nm(Math.max(...SR.filter((m) => m.open).map((m) => m.open![0])))} Nm`,
    side: "spring end – oil start",
    chips: ["Spring return", "Fail-safe"],
    href: "/actuators/hydraulic/pa/products?type=Spring%20return",
    tone: "amber",
  },
];

const DEF: SeriesDef = {
  kicker: "Hydraulic actuators",
  h1: ["PA series", "electro-hydraulic, high pressure"],
  lead: (
    <>
      Susin I-Tork compact electro-hydraulic part-turn actuators working at up to 180 bar on board, for high torque from a small body. Motor, pump and oil are built in, so only electric power is needed. {DA.length} double acting sizes from {nm(DA[0].torqueNm)} to {nm(DA[DA.length - 1].torqueNm)} Nm, {SR.length} spring return sizes, and up to 10,000 Nm on request.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (D10 – D60, E30 – E60)`],
    ["Torque", `${nm(SR[0].close![1])} – ${nm(MAX)} Nm, 10,000 on request`],
    ["On-board pressure", "Max 180 bar"],
    ["Power supply", "400 V 50/60 Hz or 230 V 50 Hz"],
    ["Control", "Open / close or modulating"],
    ["Hazardous areas", "Zone 1 and 2, Ex-proof option"],
  ],
  total: TOTAL,
  productsHref: "/actuators/hydraulic/pa/products",
  catalog: PA_CATALOG,
  catalogLabel: "Download PANDA / PA brochure (PDF)",
  image: PA_IMAGE,
  imageAlt: "Susin I-Tork electro-hydraulic part-turn actuator with motor, pump and limit switch box",
  howTitle: "How an electro-hydraulic actuator works",
  how: <ElectroHydraulic pressure="max 180 bar" />,
  ladder: {
    kicker: "Sizes",
    title: "Double acting or spring return",
    lead: "Double acting sizes give the same torque both ways. Spring return sizes run from the spring’s torque at the end of its stroke to the oil’s torque at the start; the valve must need less than the spring end figure to close. Above 4,000 Nm, up to 10,000 Nm is available on request. Every size is in the model list.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 40,
  },
  build: {
    title: "How it’s built",
    points: [
      ["High pressure, small body", "Up to 180 bar on board, so the PA gives more torque from a compact body than the 8 bar PANDA."],
      ["Only power needed", "Motor, pump, oil and control block are built in, so there is no compressed air or separate hydraulic supply."],
      ["Reversible pump or spring", "Double acting units use a reversible pump and motor; on spring return units a solenoid valve holds the position."],
      ["Runs in oil", "Most wear parts are permanently wetted with oil, and the pump connects directly to the cylinder, so the actuators run nearly free of wear."],
      ["Valve mounting", "ISO 5211 flanges F10 to F14 on the spring return sizes, with a D, L or DS connection; 90° range, adjustable; speed set by a throttle."],
      ["Complete control", "Available with a complete control cabinet and modulating software, or an on-board control box."],
    ],
  },
  faqTitle: "PA actuator questions",
  faq: [
    { q: "What power does it need?", a: "Only electric power: the motor runs on 400 V 50/60 Hz or 230 V 50 Hz, and the solenoid valve on 24 VDC or 230 V 50 Hz. Pump and oil are on board.", icon: PowerOutlinedIcon },
    { q: "Double acting or spring return?", a: "Double acting units use a reversible pump to drive the valve both ways, with the same torque open and close. Spring return units open on oil and close on the spring, so they go to the safe position when power is lost.", icon: SwapHorizOutlinedIcon },
    { q: "How do I choose the size?", a: "For double acting, pick the smallest PA whose torque covers the valve’s. For spring return, the oil must beat the valve torque to open and the spring’s end-of-stroke torque must still close it. Then check the ISO 5211 flange and connection. Need more than 4,000 Nm? Up to 10,000 Nm is available on request.", icon: SquareFootOutlinedIcon },
    { q: "What happens if the power fails?", a: "Choose a spring return model, or a pressure accumulator, to store the energy that moves the valve to its safe position.", icon: ShieldOutlinedIcon },
    { q: "Can it go in a hazardous area?", a: "Yes, Zone 1 and 2, with Ex-proof and SIL 2 versions. Tell us the zone and gas group and we’ll confirm the build.", icon: LocalFireDepartmentOutlinedIcon },
    { q: "PA or PANDA?", a: "PA works at up to 180 bar on board for more torque from a smaller body. PANDA is the low pressure version at a maximum of 8 bar, with more sizes from 46 Nm.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/hydraulic", label: "All hydraulic actuators" },
  cta: {
    title: "Know the valve torque?",
    body: `Compare all ${TOTAL} PA models, or send us the valve torque, flange, the fail-safe position you need and the power supply, and we’ll pick the model.`,
  },
};

export default function PaView() {
  return <SeriesView def={DEF} />;
}
