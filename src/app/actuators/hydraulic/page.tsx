import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import HydraulicActuatorsGrid from "./HydraulicActuatorsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/actuators/hydraulic' },
  title: { absolute: "Hydraulic Actuators — Electro-Hydraulic Rotary Series | Valvenok" },
  description:
    "Electro-hydraulic rotary actuators for high-torque and fail-safe valve operation. PANDA and PA series, ATEX Zone 1 & 2, SIL 2/3, ISO 5211 mounting.",
  openGraph: {
    title: "Hydraulic Actuators — Electro-Hydraulic Rotary Series | Valvenok",
    description: "Electro-hydraulic rotary actuators for high-torque and fail-safe valve operation. PANDA and PA series, ATEX Zone 1 & 2, SIL 2/3, ISO 5211 mounting.",
    url: "/actuators/hydraulic",
    siteName: "Valvenok",
    type: "website",
  },
};

const HYDRAULIC_FAMILIES: Category[] = [
  {
    code: "ADF",
    title: "Hydraulic Actuators — Electro-Hydraulic Rotary Series | Valvenok",
    subtitle: "Electro-Hydraulic Rotary Actuator — PANDA & PA Series",
    description:
      "Electro-hydraulic rotary actuators for high-torque and fail-safe valve operation. PANDA and PA series, ATEX Zone 1 & 2, SIL 2/3, ISO 5211 mounting.",
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