import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ActuatorsGrid from "./ActuatorsGrid";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic/actuators' },
  title: "Pneumatic Actuators | Spring Return & Scotch Yoke",
  description:
    "Pneumatic rotary actuators for quarter-turn valve automation: spring return rack-and-pinion and scotch yoke series, double acting or fail-safe, ISO 5211.",
  openGraph: {
    title: "Pneumatic Actuators | Spring Return & Scotch Yoke | Valvenok",
    description: "Pneumatic rotary actuators for quarter-turn valve automation: spring return rack-and-pinion and scotch yoke series, double acting or fail-safe, ISO 5211.",
    url: "/pneumatic/actuators",
    siteName: "Valvenok",
    type: "website",
  },
};

const ACTUATOR_FAMILIES: Category[] = [

  {
    code: "AD",
    title: "Scotch Yoke",
    subtitle: "Scotch Yoke Heavy-Duty Actuator",
    description:
      "Pneumatic rotary actuators for quarter-turn valve automation: spring return rack-and-pinion and scotch yoke series, double acting or fail-safe, ISO 5211.",
    specs: ["Scotch Yoke", "High Torque", "Double Acting & Spring Return", "90° Rotation"],
    applications: "Oil & Gas, Pipeline, Offshore, Heavy Industry",
    href: "/pneumatic/actuators/scotch-yoke",
    image:"https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
        logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/kosaplus-logo.png"
  },
  {
  "code": "PDS",
  "title": "PDS Actuator (Rotary)",
  "subtitle": "Scotch Yoke Pneumatic Actuator — Double & Single Acting",
  "description": "Scotch-Yoke pneumatic actuators engineered for superior break-out torque in demanding flow control environments. Available in double acting (PD) and single acting spring return (PS) configurations with hard anodized aluminum construction for corrosion resistance.",
  "specs": [
    "Scotch Yoke",
    "3.5–8 Bar",
    "-20°C to +80°C",
    "ISO 5211 / NAMUR / VDI-VDE 3845",
    "±5° Adjustable Travel Stops"
  ],
  "applications": "Oil & Gas, Pipeline, Offshore, Heavy Industry, Challenging Environments",
  "href": "/pneumatic/actuators/pds",
  "image": "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp",
  logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
},
{
  "code": "HD",
  "title": "HD Actuator (Rotary)",
  "subtitle": "Heavy-Duty Scotch Yoke Pneumatic Actuator — IS & IC Series",
  "description": "Heavy-duty scotch yoke pneumatic actuators in Symmetric (IS) and Canted (IC) configurations, engineered for demanding industrial valve automation. Wide torque range for ball, butterfly and plug valves — on-off and modulating service. ATEX, SIL3 and PED certified.",
  "specs": [
    "Scotch Yoke IS & IC",
    "132 – 120,867 Nm",
    "3.5 – 10 bar",
    "-20°C to +85°C",
    "IP66 / IP67",
    "ISO 5211 / ATEX / SIL3"
  ],
  "applications": "Oil & Gas, Pipeline, Offshore, Petrochemical, Heavy Industry",
  "href": "/pneumatic/actuators/hd",
  "image": "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp",
  logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
},
{
  "code": "PLDS",
  "title": "PLDS Actuator (Linear)",
  "subtitle": "Pneumatic Linear Double Acting Cylinder",
  "description": "Double-acting pneumatic linear cylinders engineered for precise motion control in automation systems and valve actuation. Low-friction seals, universal ISO mounting, and multiple corrosion protection grades for demanding industrial environments.",
  "specs": [
    "Double Acting",
    "3 – 7 bar",
    "-20°C to +80°C",
    "IP66",
    "ISO 3322 / 4393 / 5597",
    "Multiple Corrosion Grades"
  ],
  "applications": "Valve Actuation, Automation Systems, Oil & Gas, Chemical, Offshore",
  "href": "/pneumatic/actuators/plds",
  "image": "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp",
  logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
},
{
  "code": "MPLDS",
  "title": "MPLDS Actuator (Linear)",
  "subtitle": "Micro Pneumatic Double Acting Linear Actuator",
  "description": "Compact double-acting pneumatic linear actuators engineered for fine automation and precise linear motion in tight spaces. Modular design, IP66 protection, and wide pressure range with support for positioners, solenoids and limit switches.",
  "specs": [
    "Double Acting",
    "2.1 – 6.2 bar (30–90 PSIG)",
    "-10°C to +60°C",
    "IP66",
    "Compact Modular Design",
    "Positioner / Solenoid Ready"
  ],
  "applications": "Fine Automation, Small-Scale Valve Actuation, Instrumentation, Process Control",
  "href": "/pneumatic/actuators/mplds",
  "image": "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/mplds.webp",
  logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/logo/susin-logo.webp",
}
];

const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "90° Rotation", label: "Quarter-Turn" },
  { value: "Fail-Safe", label: "Spring Return Variants" },
  { value: "High Torque", label: "Scotch Yoke Variants" },
  { value: "UK Based", label: "Technical Support" },
];

export default function ActuatorsIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatic Actuators"
        subtitle="Rotary Actuators for Quarter-Turn Valve Automation"
        description="A full range of pneumatic rotary actuators engineered for reliable quarter-turn valve control. Rack-and-pinion spring return for fail-safe process control, scotch yoke for high-torque heavy-duty automation — all with ISO 5211 direct-mount."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/actuator-hero.jpg"
        imageAlt="Valvenok Pneumatic Rotary Actuators"
        breadcrumb="Products / Actuators"
      />
      <ActuatorsGrid families={ACTUATOR_FAMILIES} />
      <RelatedLinks links={[{ label: "SRA Double Acting Actuators & 3/2 Valves", href: "/pneumatic/actuators/sra" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}