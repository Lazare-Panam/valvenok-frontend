import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import HydraulicActuatorsGrid from "./HydraulicActuatorsGrid";

export const metadata: Metadata = {
  title: "Hydraulic Actuators | Electro-Hydraulic Rotary",
  description:
    "Valvenok supplies electro-hydraulic rotary actuators for extreme torque and fail-safe operation. PANDA low-pressure and PA high-pressure series — ATEX Zone 1 & 2, SIL 2/3, IP67/68, ISO 5211 mounting.",
};

const HYDRAULIC_FAMILIES: Category[] = [
  {
    code: "ADF",
    title: "Electro-Hydraulic Rotary Actuator",
    subtitle: "Electro-Hydraulic Rotary Actuator — PANDA & PA Series",
    description:
      "Electro-hydraulic rotary actuators delivering 46–10,000 Nm with extremely high torque density in compact dimensions. PANDA low-pressure and PA high-pressure variants with spring return fail-safe, ATEX Zone 1 & 2 certification and IP67/68 protection for severe-duty and hazardous area applications.",
    specs: [
      "46 – 10,000 Nm",
      "Low (8 bar) & High (180 bar) Pressure",
      "ATEX Zone 1 & 2",
      "SIL 2 / SIL 3",
      "IP67 / IP68",
      "ISO 5211 / NAMUR",
    ],
    applications: "Oil & Gas, Power Plants, Water Treatment, Chemical, ESD Valves, Offshore, Marine",
    href: "/actuators/hydraulic/adf",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  
  },
];

const TRUST_POINTS = [
  { value: "10,000 Nm", label: "Max Torque" },
  { value: "ATEX Z1 & Z2", label: "Hazardous Area" },
  { value: "SIL 2/3", label: "Safety Integrity" },
  { value: "IP67/68", label: "Ingress Protection" },
  { value: "ISO 5211", label: "Mounting Standard" },
];

export default function HydraulicActuatorsIndexPage() {
  return (
    <>
      <ProductHero
        title="Hydraulic Actuators"
        subtitle="Electro-Hydraulic Rotary & Linear Valve Actuators"
        description="High-torque electro-hydraulic actuators engineered for extreme-duty valve automation. ATEX Zone 1 & 2 certified, SIL 2/3 capable, with spring return and hydraulic accumulator fail-safe — built for oil & gas, offshore, ESD and heavy industrial applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp"
        imageAlt="Valvenok Hydraulic Actuators"
        breadcrumb="Products / Hydraulic Actuators"
      />
      <HydraulicActuatorsGrid families={HYDRAULIC_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}