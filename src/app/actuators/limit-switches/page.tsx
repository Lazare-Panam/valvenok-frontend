import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ElectricActuatorsGrid from "../electric/components/ElectricActuatorsGrid";

export const metadata: Metadata = {
  title: "Limit Switch Boxes | Valve Position Indicators",
  description:
    "Valvenok supplies KLS and ITS series limit switch boxes for valve position indication. Weatherproof IP67 and explosion-proof IECEx / KCs certified units with mechanical and proximity switch options for process safety systems.",
};

const LIMIT_SWITCH_FAMILIES: Category[] = [
  {
    code: "KLS",
    title: "Valve Position Indicator",
    subtitle: "Weatherproof & Explosion-Proof Limit Switch Box",
    description:
      "The KLS series from Kosaplus are valve position indicators that detect fully open/closed valve status and transmit it to the control system. Rugged aluminium die-cast housing with IP67/IP68 protection, IECEx and KCs explosion-proof certification, and a quick-set dual cam mechanism. Available in mechanical SPDT and proximity switch variants (PNP, NPN, 2-wire, P&F, SOLDO).",
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
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png",
  },
  {
    code: "ITS",
    title: "ITS Series Components",
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
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
  },
];

const TRUST_POINTS = [
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "IECEx / KCs", label: "Explosion Proof" },
  { value: "ATEX T6", label: "Hazardous Area" },
  { value: "Mech & Prox", label: "Switch Options" },
  { value: "Fast Dispatch", label: "Availability" },
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
