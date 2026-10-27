import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const KOSAPLUS_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/kosaplus" },
  title: "Kosaplus Actuators & Limit Switches",
  description:
    "Valvenok supplies the Kosaplus range — KE series electric quarter-turn actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof valve position indicators. ISO 5211 mounting, IECEx and KCs certified for process, oil & gas and marine automation.",
  openGraph: {
    title: "Kosaplus Actuators & Limit Switches | Valvenok",
    description: "Valvenok supplies the Kosaplus range — KE series electric quarter-turn actuators, AD scotch yoke pneumatic actuators and KLS explosion-proof valve position indicators. ISO 5211 mounting, IECEx and KCs certified for process, oil & gas and marine automation.",
    url: "/brands/kosaplus",
    siteName: "Valvenok",
    type: "website",
  },
};

const KOSAPLUS_SERIES: Category[] = [
  {
    code: "KE",
    title: "KE Series Electric Actuator",
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
    applications:
      "Process Plants, Water Treatment, Chemical, Industrial Automation",
    href: "/actuators/electric/ke-series",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/ke-ac.jpeg",
    logoUrl: KOSAPLUS_LOGO,
  },
  {
    code: "AD",
    title: "AD Scotch Yoke Pneumatic Actuator",
    subtitle: "Scotch Yoke Heavy-Duty Actuator",
    description:
      "Scotch yoke pneumatic actuators engineered for high-torque quarter-turn valve automation. Symmetric and canted yoke designs deliver superior breakaway torque for heavy-duty oil & gas, pipeline and offshore applications.",
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
    title: "KLS Valve Position Indicator",
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
        title="Kosaplus"
        subtitle="Valve Actuators & Position Indicators"
        description="The Kosaplus range of valve automation products — KE series electric quarter-turn actuators for on-off and modulating service, AD scotch yoke pneumatic actuators for high-torque heavy-duty automation, and KLS explosion-proof valve position indicators. ISO 5211 mounting, IP67/IP68 protection and IECEx/KCs certification for process, oil & gas and marine applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg"
        imageAlt="Kosaplus Actuators & Limit Switches"
        breadcrumb="Products / Actuators / Kosaplus"
      />
      <ProcessValvesGrid families={KOSAPLUS_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
