import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ElectricActuatorsGrid from "../electric/components/ElectricActuatorsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/actuators/limit-switches' },
  title: { absolute: "Limit Switch Boxes & Valve Position Indicators | Valvenok" },
  description:
    "KLS and ITS limit switch boxes for valve position indication: IP67 weatherproof and IECEx explosion-proof units with mechanical or proximity switches.",
  openGraph: {
    title: "Limit Switch Boxes & Valve Position Indicators | Valvenok",
    description: "KLS and ITS limit switch boxes for valve position indication: IP67 weatherproof and IECEx explosion-proof units with mechanical or proximity switches.",
    url: "/actuators/limit-switches",
    siteName: "Valvenok",
    type: "website",
  },
};

const LIMIT_SWITCH_FAMILIES: Category[] = [
  {
    code: "KLS",
    title: "Limit Switch Boxes & Valve Position Indicators | Valvenok",
    subtitle: "Weatherproof & Explosion-Proof Limit Switch Box",
    description:
      "KLS and ITS limit switch boxes for valve position indication: IP67 weatherproof and IECEx explosion-proof units with mechanical or proximity switches.",
    specs: [
      "IP67 / IP68",
      "IECEx Certified",
      "KCs Explosion Proof",
      "2 × SPDT Mechanical or Proximity",
      "3-Way Visual Indicator",
      "ALDC12 / SUS304 / SUS316L Body",
    ],
    applications:
      "Oil & Gas, Petrochemical, Process Safety Systems, Marine & Offshore",
    href: "/actuators/limit-switches/kls",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg",
  },
  {
    code: "ITS",
    title: "Limit Switch Boxes & Valve Position Indicators | Valvenok",
    subtitle: "Precision Position Monitoring Switch Box",
    description:
      "KLS and ITS limit switch boxes for valve position indication: IP67 weatherproof and IECEx explosion-proof units with mechanical or proximity switches.",
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
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
];

const TRUST_POINTS = [
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "IECEx / KCs", label: "Explosion Proof" },
  { value: "ATEX T6", label: "Hazardous Area" },
  { value: "Mech & Prox", label: "Switch Options" },
  { value: "UK Based", label: "Technical Support" },
];

export default function LimitSwitchesPage() {
  return (
    <>
      <ProductHero
        title="Limit Switch Boxes"
        subtitle="Valve Position Indicators — Weatherproof & Explosion-Proof"
        description="KLS and ITS series valve position indicators for detecting and transmitting fully open/closed valve status to your control system. IP67/IP68 weatherproof and IECEx/ATEX explosion-proof certified — critical for process safety loops in Oil & Gas, Petrochemical, and Marine applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg"
        imageAlt="Limit Switch Box Valve Position Indicator"
        breadcrumb="Products / Actuators / Limit Switch Boxes"
      />
      <ElectricActuatorsGrid families={LIMIT_SWITCH_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
