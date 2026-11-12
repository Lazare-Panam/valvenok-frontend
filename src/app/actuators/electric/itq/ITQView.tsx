"use client";

// ITQ series page, on the shared series template. Every figure is from the
// Susin / i-Tork ITQ catalogue (features p.3, construction p.4–5, technical
// information and standard specification p.6, options p.7–8).

import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import ElectricDrive from "@/src/app/pneumatic/actuators/_series/ElectricDrive";
import ItqOptions from "./ItqOptions";
import { ITQ_MODELS, ITQ_IMAGE, ITQ_ON_VALVE, ITQ_CATALOG } from "./itqData";
import { ITQ_BODIES, bodyOf } from "./products/items";

const nm = (n: number) => n.toLocaleString("en-GB");
const TOTAL = ITQ_MODELS.length;
const MIN = Math.min(...ITQ_MODELS.map((m) => m.torqueNm));
const MAX = Math.max(...ITQ_MODELS.map((m) => m.torqueNm));

// One rung per body: models that share operating time, bore, flange and weight
const RUNGS: Rung[] = ITQ_BODIES.map((names, i) => {
  const ms = ITQ_MODELS.filter((m) => names.includes(m.model));
  const first = ms[0], lo = ms[0].torqueNm, hi = ms[ms.length - 1].torqueNm;
  return {
    code: first.mounting.replace("ISO 5211 ", ""),
    tab: "",
    name: ms.length > 1 ? `${ms[0].model} · ${ms[1].model}` : first.model,
    note: `${first.time50} s to open or close at 50 Hz (${first.time60} s at 60 Hz), ${first.weightKg} kg, ${first.handwheelTurns} handwheel turns.${first.a24v ? " 24 VDC available." : ""}`,
    count: ms.length,
    lo,
    hi,
    range: lo === hi ? `${nm(lo)} Nm` : `${nm(lo)} – ${nm(hi)} Nm`,
    side: "rated torque",
    chips: ms.map((m) => m.model.replace("ITQ ", "")),
    href: `/actuators/electric/itq/products?body=${encodeURIComponent(bodyOf(first.model))}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

const DEF: SeriesDef = {
  kicker: "Electric actuators",
  h1: ["ITQ series", "quarter-turn electric"],
  lead: (
    <>
      Susin heavy-duty electric actuators for ball, butterfly and plug valves and dampers. {TOTAL} models from {nm(MIN)} to {nm(MAX)} Nm, on/off or modulating, with self-locking double worm gearing and a handwheel for manual operation.
    </>
  ),
  specs: [
    ["Models", `${TOTAL}`],
    ["Torque", `${nm(MIN)} – ${nm(MAX)} Nm`],
    ["Power supply", "1 ph 110/220 V · 3 ph 380/440 V"],
    ["Enclosure", "IP67, NEMA 4X & 6"],
    ["Mounting", "ISO 5211 F07 – F30"],
    ["Temperature", "−20 to +70 °C"],
  ],
  total: TOTAL,
  productsHref: "/actuators/electric/itq/products",
  catalog: ITQ_CATALOG,
  image: ITQ_IMAGE,
  imageAlt: "Susin ITQ series quarter-turn electric actuator",
  howTitle: "How it drives the valve",
  how: <ElectricDrive />,
  ladder: {
    kicker: "Sizes",
    title: "Pick a size by torque",
    lead: "Models that share a body are grouped together, with the ISO 5211 flange on the left. The bar shows rated torque; each group opens its models in the table.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 40,
  },
  build: {
    title: "How it’s built",
    image: ITQ_ON_VALVE,
    imageAlt: "Susin ITQ electric actuator with a local control module, mounted on a flanged ball valve",
    points: [
      ["Hard-anodised aluminium housing", "Anodised inside and out, with an external powder coat for severe industrial sites. All external bolts are stainless steel and captive."],
      ["Self-locking double worm gear", "Precisely machined with minimal backlash. It holds the valve in position against reverse torque, so no brake is needed."],
      ["Sealed to IP67", "O-rings on every interface (IP67, NEMA 4, 4X and 6), with double O-rings for the IP68 option."],
      ["Protected motor", "Induction motor with high starting torque, class F insulation and a thermal protector against overheating."],
      ["Switches and stoppers", "Two limit switches and one torque switch for each end of travel (no torque switches on ITQ 0100), plus adjustable external stoppers."],
      ["Manual override", "Auto / manual lever with a padlock, and a handwheel that releases automatically when the motor starts."],
    ],
  },
  extra: <ItqOptions />,
  faqTitle: "ITQ actuator questions",
  faq: [
    { q: "How do I choose the size?", a: "Take the valve’s highest torque, add a safety factor, and pick the smallest ITQ whose rated torque covers it. Then check the ISO 5211 flange and the maximum bore against the valve stem, and that the operating time suits the process.", icon: SquareFootOutlinedIcon },
    { q: "Which power supplies can it run on?", a: "1 phase 110 or 220 VAC, or 3 phase 380 or 440 VAC, at 50 or 60 Hz ±10%. ITQ 0100 to ITQ 0500 are also available for 24 VDC.", icon: ElectricBoltOutlinedIcon },
    { q: "On/off or modulating?", a: "On/off duty is S2, 10 to 30 minutes. With the RPC option the actuator positions the valve from a 4–20 mA or voltage signal; modulating duty is S4, 30 to 50% (25% on the larger models), at 300 to 1,200 starts an hour.", icon: TuneOutlinedIcon },
    { q: "What happens if the power fails?", a: "The double worm gear is self-locking, so the valve stays where it is. You can then turn it with the handwheel. For a fail-safe move to a set position, the BP battery backup option is available on 1 phase ITQ 0160 to ITQ 0500.", icon: PowerOffOutlinedIcon },
    { q: "How long does it take to open or close?", a: "From 21 seconds (ITQ 0100 at 50 Hz) to 178 seconds (ITQ 6000 and ITQ 9000). At 60 Hz each model is a little faster. The model list shows the time for every model.", icon: TimerOutlinedIcon },
    { q: "Can it be used in hazardous areas?", a: "Yes, as an option: explosion proof Ex d II B T4, which Susin lists as approved by KTL, ATEX and NEPSI. Tell us the zone and gas group and we’ll confirm the build.", icon: LocalFireDepartmentOutlinedIcon },
  ],
  parent: { href: "/actuators/electric", label: "All electric actuators" },
  cta: {
    title: "Know the torque?",
    body: `Compare all ${TOTAL} ITQ models by torque, time, flange and current, or send us the valve torque, power supply and control signal and we’ll pick the model and options.`,
  },
};

export default function ITQView() {
  return <SeriesView def={DEF} />;
}
