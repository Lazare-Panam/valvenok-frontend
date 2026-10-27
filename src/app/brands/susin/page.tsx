import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const SUSIN_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/susin" },
  title: "Susin Valve Actuators",
  description:
    "Valvenok supplies the Susin actuator range — ITQ rotary, IQL/ITL linear and ITM multi-turn electric actuators, PDS/HD scotch yoke and PLDS/MPLDS linear pneumatic actuators, and ITS position monitoring switches. ISO 5211, ATEX, SIL3 and IP67/IP68 rated for process automation.",
  openGraph: {
    title: "Susin Valve Actuators | Valvenok",
    description: "Valvenok supplies the Susin actuator range — ITQ rotary, IQL/ITL linear and ITM multi-turn electric actuators, PDS/HD scotch yoke and PLDS/MPLDS linear pneumatic actuators, and ITS position monitoring switches. ISO 5211, ATEX, SIL3 and IP67/IP68 rated for process automation.",
    url: "/brands/susin",
    siteName: "Valvenok",
    type: "website",
  },
};

const SUSIN_SERIES: Category[] = [
  {
    code: "ITQ",
    title: "ITQ Series Rotary Electric Actuator",
    subtitle: "Rotary Electric Actuator — 100–9,000 Nm",
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
    applications:
      "Oil & Gas, Power Generation, Water Treatment, Chemical, Pharmaceutical, Marine",
    href: "/actuators/electric/itq",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp",
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "ITM",
    title: "ITM Series Multi-Turn Electric Actuator",
    subtitle: "Heavy-Duty Multi-Turn Electric Actuator",
    description:
      "Heavy-duty multi-turn electric actuators engineered for gate, globe and sluice valves requiring multi-revolution operation. Exceptional torque capability, IP68 waterproof protection, Hall incremental encoder feedback and smart local control for demanding Oil & Gas, Water Treatment and Petrochemical applications.",
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
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "IQL",
    title: "IQL Series Linear Electric Actuator",
    subtitle: "Linear Electric Actuator — 4–25 kN",
    description:
      "Robust linear electric actuators engineered for precise modulating control of globe, gate valves and dampers. High thrust capacity from 4–25 kN, IP67 protection, battery backup fail-safe, and full modulating control via 4–20mA / 0–10V for demanding industrial automation.",
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
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "ITL",
    title: "ITL Series Compact Linear Electric Actuator",
    subtitle: "Compact Linear Electric Actuator — 100% Duty Cycle",
    description:
      "Compact and powerful linear electric actuators with 100% duty cycle motor engineered for high-frequency modulating control. 1–10 kN thrust, IP66/67 protection, universal power supply and full 4–20mA / 0–10V control signal compatibility for demanding process automation.",
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
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "HD",
    title: "HD Scotch Yoke Pneumatic Actuator",
    subtitle: "Heavy-Duty Scotch Yoke — IS & IC Series",
    description:
      "Heavy-duty scotch yoke pneumatic actuators in Symmetric (IS) and Canted (IC) configurations, engineered for demanding industrial valve automation. Wide torque range for ball, butterfly and plug valves — on-off and modulating service. ATEX, SIL3 and PED certified.",
    specs: [
      "Scotch Yoke IS & IC",
      "132 – 120,867 Nm",
      "3.5 – 10 bar",
      "-20°C to +85°C",
      "IP66 / IP67",
      "ISO 5211 / ATEX / SIL3",
    ],
    applications:
      "Oil & Gas, Pipeline, Offshore, Petrochemical, Heavy Industry",
    href: "/pneumatic/actuators/hd",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp",
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "PDS",
    title: "PDS Scotch Yoke Pneumatic Actuator",
    subtitle: "Scotch Yoke Pneumatic Actuator — Double & Single Acting",
    description:
      "Scotch-Yoke pneumatic actuators engineered for superior break-out torque in demanding flow control environments. Available in double acting (PD) and single acting spring return (PS) configurations with hard anodized aluminum construction for corrosion resistance.",
    specs: [
      "Scotch Yoke",
      "3.5–8 Bar",
      "-20°C to +80°C",
      "ISO 5211 / NAMUR / VDI-VDE 3845",
      "±5° Adjustable Travel Stops",
    ],
    applications:
      "Oil & Gas, Pipeline, Offshore, Heavy Industry, Challenging Environments",
    href: "/pneumatic/actuators/pds",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp",
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "PLDS",
    title: "PLDS Linear Pneumatic Actuator",
    subtitle: "Pneumatic Linear Double Acting Cylinder",
    description:
      "Double-acting pneumatic linear cylinders engineered for precise motion control in automation systems and valve actuation. Low-friction seals, universal ISO mounting, and multiple corrosion protection grades for demanding industrial environments.",
    specs: [
      "Double Acting",
      "3 – 7 bar",
      "-20°C to +80°C",
      "IP66",
      "ISO 3322 / 4393 / 5597",
      "Multiple Corrosion Grades",
    ],
    applications:
      "Valve Actuation, Automation Systems, Oil & Gas, Chemical, Offshore",
    href: "/pneumatic/actuators/plds",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp",
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "MPLDS",
    title: "MPLDS Micro Linear Pneumatic Actuator",
    subtitle: "Micro Pneumatic Double Acting Linear Actuator",
    description:
      "Compact double-acting pneumatic linear actuators engineered for fine automation and precise linear motion in tight spaces. Modular design, IP66 protection, and wide pressure range with support for positioners, solenoids and limit switches.",
    specs: [
      "Double Acting",
      "2.1 – 6.2 bar (30–90 PSIG)",
      "-10°C to +60°C",
      "IP66",
      "Compact Modular Design",
      "Positioner / Solenoid Ready",
    ],
    applications:
      "Fine Automation, Small-Scale Valve Actuation, Instrumentation, Process Control",
    href: "/pneumatic/actuators/mplds",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/mplds.webp",
    logoUrl: SUSIN_LOGO,
  },
  {
    code: "ITS",
    title: "ITS Series Position Monitoring Switch",
    subtitle: "Precision Position Monitoring Switch Box",
    description:
      "The ITS series from Susin are precision-engineered position monitoring switches for rotary actuators. Robust weatherproof and explosion-proof aluminium or stainless steel housings with a visual dome indicator covering 0°–90° travel. Available in mechanical 2-SPDT and proximity sensor configurations with NAMUR standard shaft mounting and corrosion-resistant epoxy-polyester coating.",
    specs: [
      "IP67 / IP68",
      "ATEX Ex d IIC T6",
      "IECEx & CE Certified",
      "2-SPDT or Proximity",
      "0°–90° Visual Dome Indicator",
      "-20°C to +80°C",
    ],
    applications:
      "Chemical Plants, Oil & Gas, Water Treatment, Power Generation, Process Automation",
    href: "/actuators/limit-switches/its",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp",
    logoUrl: SUSIN_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "ATEX · SIL3", label: "Hazardous Area" },
  { value: "Up to 120,867 Nm", label: "Max Torque" },
  { value: "Electric · Pneumatic", label: "Actuation Types" },
];

export default function SusinBrandPage() {
  return (
    <>
      <ProductHero
        title="Susin Actuators"
        subtitle="Electric & Pneumatic Valve Actuators — 9 Series"
        description="The complete Susin actuator range — ITQ rotary, IQL and ITL linear and ITM multi-turn electric actuators, PDS and HD scotch yoke plus PLDS and MPLDS linear pneumatic actuators, and ITS precision position monitoring switches. ISO 5211 mounting, IP67/IP68 protection, ATEX and SIL3 certified with torque up to 120,867 Nm for demanding valve automation across oil & gas, power, water and process industries."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp"
        imageAlt="Susin Electric & Pneumatic Valve Actuators"
        breadcrumb="Products / Actuators / Susin"
      />
      <ProcessValvesGrid families={SUSIN_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
