import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ElectricActuatorsGrid from "./components/ElectricActuatorsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/actuators/electric' },
  title: { absolute: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok" },
  description:
    "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
  openGraph: {
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    description: "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    url: "/actuators/electric",
    siteName: "Valvenok",
    type: "website",
  },
};

const ELECTRIC_FAMILIES: Category[] = [
  {
    code: "KP",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Compact Electric Quarter-Turn Actuator",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "Quarter-Turn",
      "On-Off & Modulating",
      "Compact Design",
      "Direct Valve Mount",
      "Integrated Electronics",
    ],
    applications:
      "Process Plants, Water Treatment, Chemical, Industrial Automation",
    href: "/actuators/electric/ke-series",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/ke-ac.jpeg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png",
  },
  {
    code: "ITQ",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Rotary Electric Actuator",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "100 – 9,000 Nm",
      "IP67 / NEMA 4X & 6",
      "-20°C to +70°C",
      "ISO 5211 Mount",
      "Double Worm Self-Locking",
      "110/220VAC · 380/440VAC · 24VDC",
    ],
    applications:
      "Oil & Gas, Power Generation, Water Treatment, Chemical, Pharmaceutical, Marine",
    href: "/actuators/electric/itq",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "IQL",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Linear Electric Actuator",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "4 – 25 kN Thrust",
      "40 – 100 mm Stroke",
      "IP67 / IP68 Optional",
      "-20°C to +70°C",
      "4–20mA / 0–10V Control",
      "Battery Backup Fail-Safe",
    ],
    applications:
      "Globe & Gate Valves, Damper Automation, Power Plants, Water Treatment",
    href: "/actuators/electric/iql",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "ITL",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Compact Linear Electric Actuator — 100% Duty Cycle",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "1 – 10 kN Thrust",
      "15 – 50 mm Stroke",
      "100% Duty Cycle",
      "IP66 / IP67",
      "-20°C to +70°C",
      "4–20mA / 0–10V Control",
    ],
    applications:
      "Control Valves, Industrial Dampers, Process Automation, High-Frequency Modulation",
    href: "/actuators/electric/itl",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "ITM",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Heavy-Duty Multi-Turn Electric Actuator",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "Multi-Turn",
      "IP68 Waterproof",
      "-20°C to +70°C",
      "Hall Encoder Feedback",
      "TENV High-Torque Motor",
      "Ex d IIC T4 Optional",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Water Treatment, Sewage, Chemical, HVAC",
    href: "/actuators/electric/itm",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "DFE",
    title: "Electric Valve Actuators — Rotary, Linear & Multi-Turn | Valvenok",
    subtitle: "Electrohydraulic Actuators for Proportional Valves",
    description:
      "Electric rotary, linear and multi-turn valve actuators for on-off and modulating service, with ISO 5211 mounting and IP67 protection. Request a quote.",
    specs: [
      "PVEA / PVEH / PVEM / PVEO / PVES",
      "Active & Passive Fault Mon.",
      "1X4AMP / 1X4DIN / 1X4DEU",
      "12V / 24V",
      "Isobus (PVED32 CC)",
      "34 Models Available",
    ],
    applications:
      "Mobile Hydraulics, Agricultural Machinery, Construction Equipment, Marine, Industrial",
    href: "/actuators/electric/pvae32",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg",
  },
];
const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "IP67", label: "Ingress Protection" },
  { value: "100–9,000 Nm", label: "Torque Range" },
  { value: "Self-Locking", label: "Double Worm Gear" },
  { value: "UK Based", label: "Technical Support" },
];

export default function ElectricActuatorsIndexPage() {
  return (
    <>
      <ProductHero
        title="Electric Actuators"
        subtitle="Rotary & Linear Electric Valve Actuators"
        description="A full range of electric actuators engineered for precise and reliable valve automation. Quarter-turn and multi-turn configurations with on-off and modulating service — ISO 5211 direct-mount, IP67 protection, and full accessory support."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp"
        imageAlt="Valvenok Electric Actuators"
        breadcrumb="Products / Electric Actuators"
      />
      <ElectricActuatorsGrid families={ELECTRIC_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
