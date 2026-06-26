import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ElectricActuatorsGrid from "./components/ElectricActuatorsGrid";

export const metadata: Metadata = {
  title: "Electric Actuators | Rotary & Linear | Valvenok",
  description:
    "Valvenok supplies a full range of electric rotary and linear actuators for precise valve automation. ITQ series quarter-turn electric actuators — ISO 5211 mounting, on-off and modulating service, IP67 protection.",
};

const ELECTRIC_FAMILIES: Category[] = [
    {
    code: "KP",
    title: "Kosaplus Series",
    subtitle: "Compact Electric Quarter-Turn Actuator",
    description:
      "Kosaplus compact electric quarter-turn actuators engineered for precise on-off and modulating valve automation. Robust construction with integrated control electronics for direct valve mounting across process plant and industrial service.",
    specs: [
      "Quarter-Turn",
      "On-Off & Modulating",
      "Compact Design",
      "Direct Valve Mount",
      "Integrated Electronics",
    ],
    applications: "Process Plants, Water Treatment, Chemical, Industrial Automation",
    href: "/pneumatic/actuators/scotch-yoke",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/ec-kosaplus.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png",
  },
  {
    code: "ITQ",
    title: "ITQ SERIES (Rotary)",
    subtitle: "Rotary Electric Actuator",
    description:
      "High-performance rotary electric actuators with torque from 100–9,000 Nm. Hard-anodized aluminum housing with IP67/NEMA 4X protection, double worm self-locking gear, auto-declutching handwheel and mechanical torque sensing for safe, reliable valve automation.",
    specs: [
      "100 – 9,000 Nm",
      "IP67 / NEMA 4X & 6",
      "-20°C to +70°C",
      "ISO 5211 Mount",
      "Double Worm Self-Locking",
      "110/220VAC · 380/440VAC · 24VDC",
    ],
    applications: "Oil & Gas, Power Generation, Water Treatment, Chemical, Pharmaceutical, Marine",
    href: "/actuators/electric/itq",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "IQL",
    title: "IQL SERIES (Linear)",
    subtitle: "Linear Electric Actuator",
    description: "Robust linear electric actuators engineered for precise modulating control of globe, gate valves and dampers. High thrust capacity from 4–25 kN, IP67 protection, battery backup fail-safe, and full modulating control via 4–20mA / 0–10V for demanding industrial automation.",
    specs: [
      "4 – 25 kN Thrust",
      "40 – 100 mm Stroke",
      "IP67 / IP68 Optional",
      "-20°C to +70°C",
      "4–20mA / 0–10V Control",
      "Battery Backup Fail-Safe",
    ],
    applications: "Globe & Gate Valves, Damper Automation, Power Plants, Water Treatment",
    href: "/actuators/electric/iql",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "ITL",
    title: "ITL Series (Linear)",
    subtitle: "Compact Linear Electric Actuator — 100% Duty Cycle",
    description: "Compact and powerful linear electric actuators with 100% duty cycle motor engineered for high-frequency modulating control. 1–10 kN thrust, IP66/67 protection, universal power supply and full 4–20mA / 0–10V control signal compatibility for demanding process automation.",
    specs: [
      "1 – 10 kN Thrust",
      "15 – 50 mm Stroke",
      "100% Duty Cycle",
      "IP66 / IP67",
      "-20°C to +70°C",
      "4–20mA / 0–10V Control",
    ],
    applications: "Control Valves, Industrial Dampers, Process Automation, High-Frequency Modulation",
    href: "/actuators/electric/itl",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "ITM",
    title: "ITM Series  (Multiturn)",
    subtitle: "Heavy-Duty Multi-Turn Electric Actuator",
    description: "Heavy-duty multi-turn electric actuators engineered for gate, globe and sluice valves requiring multi-revolution operation. Exceptional torque capability, IP68 waterproof protection, Hall incremental encoder feedback and smart local control for demanding Oil & Gas, Water Treatment and Petrochemical applications.",
    specs: [
      "Multi-Turn",
      "IP68 Waterproof",
      "-20°C to +70°C",
      "Hall Encoder Feedback",
      "TENV High-Torque Motor",
      "Ex d IIC T4 Optional",
    ],
    applications: "Oil & Gas, Petrochemical, Power Generation, Water Treatment, Sewage, Chemical, HVAC",
    href: "/actuators/electric/itm",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
  {
    code: "DFE",
    title: "Danfoss PVE Series",
    subtitle: "Electrohydraulic Actuators for Proportional Valves",
    description:
      "Danfoss PVE series electrohydraulic actuators for precise proportional control of PVG directional valves. PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series with active and passive fault monitoring, Isobus communication and 12V / 24V operation.",
    specs: [
      "PVEA / PVEH / PVEM / PVEO / PVES",
      "Active & Passive Fault Mon.",
      "1X4AMP / 1X4DIN / 1X4DEU",
      "12V / 24V",
      "Isobus (PVED32 CC)",
      "34 Models Available",
    ],
    applications: "Mobile Hydraulics, Agricultural Machinery, Construction Equipment, Marine, Industrial",
    href: "/actuators/electric/pvae32",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg",
  },

];
const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "IP67", label: "Ingress Protection" },
  { value: "100–9,000 Nm", label: "Torque Range" },
  { value: "Self-Locking", label: "Double Worm Gear" },
  { value: "Fast Dispatch", label: "Availability" },
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