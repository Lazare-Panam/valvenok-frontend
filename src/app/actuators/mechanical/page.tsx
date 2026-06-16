import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import MechanicalActuatorsGrid from "./MechanicalActuatorsGrid";

export const metadata: Metadata = {
  title: "Mechanical Actuators | Bevel & Worm Gearboxes | Valvenok",
  description:
    "Valvenok supplies manual bevel and worm gear actuators for multi-turn and quarter-turn valve operation. MAB bevel gear series up to 18,000 Nm and MAW worm gear series up to 32,000 Nm — ISO 5210/5211 mounting, IP68 protection, marine and offshore options.",
};

const MECHANICAL_FAMILIES: Category[] = [
  {
    code: "MAB",
    title: "MAB Series",
    subtitle: "Mechanical Actuator Bevel — Multi-Turn Bevel Gear",
    description:
      "Heavy-duty bevel gear actuators for multi-turn gate, globe and linear valve operation. Torque up to 18,000 Nm and thrust up to 2,500 kN. Ductile iron housing, IP68 protection and marine coating options for critical valve stations in Oil & Gas and Power Generation.",
    specs: [
      "250 – 18,000 Nm",
      "75 – 2,500 kN Thrust",
      "IP55 / IP65 / IP67M / IP68",
      "-20°C to +80°C",
      "ISO 5210 Mount",
      "Marine Coating Option",
    ],
    applications: "Oil & Gas, Power Generation, Water Treatment, Chemical, Marine & Offshore",
    href: "/actuators/mechanical/mab",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp",
     logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "MAW",
    title: "MAW Series",
    subtitle: "Manual Actuator Worm — Quarter-Turn Worm Gear",
    description:
      "Self-locking worm gear actuators for quarter-turn ball, butterfly and plug valve operation. Torque from 100–32,000 Nm, ±5° fine stroke adjustment, ISO 5211 direct mount and MOV compatible for electrical actuator upgrade without machining.",
    specs: [
      "100 – 32,000 Nm",
      "IP54 / IP55 / IP65 / IP67M",
      "-20°C to +85°C",
      "ISO 5211 Mount",
      "Self-Locking Worm Gear",
      "±5° Stroke Adjustment",
    ],
    applications: "Ball, Butterfly & Plug Valves, Dampers, HVAC, Chemical, Power, Water",
    href: "/actuators/mechanical/maw",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp",
     logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "ITG",
    title: "ITG Series",
    subtitle: "Industrial Gear Actuator — Quarter-Turn",
    description:
      "Precision-engineered quarter-turn gear actuators for ball, butterfly and plug valves. Torque from 60–28,000 Nm, self-locking design, declutchable manual override, ISO 5211/5210 mounting and full actuator integration compatibility for pneumatic, hydraulic and electric automation.",
    specs: [
      "60 – 28,000 Nm",
      "IP54 / IP55 / IP65 / IP67M",
      "-20°C to +85°C",
      "ISO 5211 / ISO 5210 Mount",
      "Declutchable Override",
      "±5° Stroke Adjustment",
    ],
    applications: "Ball, Butterfly & Plug Valves, Oil & Gas, Power Generation, Water & Wastewater, Chemical",
    href: "/actuators/mechanical/itg",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/itg.webp",
     logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
];

const TRUST_POINTS = [
  { value: "32,000 Nm", label: "Max Torque" },
  { value: "IP68", label: "Ingress Protection" },
  { value: "2,500 kN", label: "Max Thrust" },
  { value: "ISO 5210/5211", label: "Mounting Standard" },
  { value: "Marine Ready", label: "Offshore Coating Options" },
];

export default function MechanicalActuatorsIndexPage() {
  return (
    <>
      <ProductHero
        title="Mechanical Actuators"
        subtitle="Bevel & Worm Gear Actuators for Manual Valve Operation"
        description="Heavy-duty manual gearboxes for multi-turn and quarter-turn valve automation. MAB bevel gear series for gate and globe valves, MAW worm gear series for ball, butterfly and plug valves — ISO 5210/5211 compliant with full marine and offshore protection options."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp"
        imageAlt="Valvenok Mechanical Actuators"
        breadcrumb="Products / Mechanical Actuators"
      />
      <MechanicalActuatorsGrid families={MECHANICAL_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}