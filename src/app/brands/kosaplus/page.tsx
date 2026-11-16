import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";
import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const KOSAPLUS_LOGO =
  "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/kosaplus" },
  title: { absolute: "Kosaplus Actuators & Limit Switch Boxes | Valvenok" },
  description:
    "Kosaplus KE electric actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof position indicators. ISO 5211 mounting, IECEx certified.",
  openGraph: {
    title: "Kosaplus Actuators & Limit Switch Boxes | Valvenok",
    description: "Kosaplus KE electric actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof position indicators. ISO 5211 mounting, IECEx certified.",
    url: "/brands/kosaplus",
    siteName: "Valvenok",
    type: "website",
  },
};

const KOSAPLUS_SERIES: Category[] = [
  {
    code: "KE",
    title: "Kosaplus Actuators & Limit Switch Boxes | Valvenok",
    subtitle: "Compact Electric Quarter-Turn Actuator",
    description:
      "Kosaplus KE electric actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof position indicators. ISO 5211 mounting, IECEx certified.",
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
    logoUrl: KOSAPLUS_LOGO,
  },
  {
    code: "AD",
    title: "Kosaplus Actuators & Limit Switch Boxes | Valvenok",
    subtitle: "Scotch Yoke Heavy-Duty Actuator",
    description:
      "Kosaplus KE electric actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof position indicators. ISO 5211 mounting, IECEx certified.",
    specs: [
      "Scotch Yoke",
      "High Torque",
      "Double Acting & Spring Return",
      "90° Rotation",
    ],
    applications: "Oil & Gas, Pipeline, Offshore, Heavy Industry",
    href: "/pneumatic/actuators/scotch-yoke",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
    logoUrl: KOSAPLUS_LOGO,
  },
  {
    code: "KLS",
    title: "Kosaplus Actuators & Limit Switch Boxes | Valvenok",
    subtitle: "Weatherproof & Explosion-Proof Limit Switch Box",
    description:
      "Kosaplus KE electric actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof position indicators. ISO 5211 mounting, IECEx certified.",
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
    logoUrl: KOSAPLUS_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "IP67 / IP68", label: "Ingress Protection" },
  { value: "IECEx / KCs", label: "Hazardous Area" },
  { value: "Electric · Pneumatic · Switch", label: "Product Range" },
  { value: "Kosaplus", label: "Manufacturer" },
];

export default function KosaplusBrandPage() {
  return (
    <>
      <ProductHero
        title="Kosaplus Actuators"
        subtitle="Valve Actuators & Position Indicators"
        description="The Kosaplus range of valve automation products — KE series electric quarter-turn actuators for on-off and modulating service, AD scotch yoke pneumatic actuators for high-torque heavy-duty automation, and KLS explosion-proof valve position indicators. ISO 5211 mounting, IP67/IP68 protection and IECEx/KCs certification for process, oil & gas and marine applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg"
        imageAlt="Kosaplus Actuators & Limit Switches"
        breadcrumb="Products / Actuators / Kosaplus"
      />
      <ProcessValvesGrid families={KOSAPLUS_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
      <RelatedLinks
        title="Guides"
        links={[
          { label: "Valvenok and Kosa Plus partnership", href: "/news/valvenok-kosa-plus-partnership" },
          { label: "How to choose a valve actuator", href: "/news/how-to-choose-a-valve-actuator" },
          { label: "Valve actuator sizing explained", href: "/news/valve-actuator-sizing-torque-guide" },
        ]}
      />
      <RelatedLinks
        title="Full range at KOSAPLUS UK"
        links={[
          { label: "KOSAPLUS pneumatic actuators", href: "https://www.kosaplus.co.uk/products/pneumatic-actuator", external: true },
          { label: "KOSAPLUS electric actuators", href: "https://www.kosaplus.co.uk/products/electric-actuator", external: true },
          { label: "KOSAPLUS valve position indicators", href: "https://www.kosaplus.co.uk/products/valve-position-indicator", external: true },
        ]}
      />
    </>
  );
}
