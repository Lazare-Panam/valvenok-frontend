import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import FittingsGrid from "./FittingsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings' },
  title: "Fittings | SS316 Instrumentation & Process Fittings",
  description:
    "Valvenok supplies a complete range of SS316 fittings for instrumentation and process systems. Tube fittings, pipe fittings, JIC flare fittings and weld fittings across NPT, BSPT, BSPP and SAE/MS standards.",
  openGraph: {
    title: "Fittings | SS316 Instrumentation & Process Fittings | Valvenok",
    description: "Valvenok supplies a complete range of SS316 fittings for instrumentation and process systems. Tube fittings, pipe fittings, JIC flare fittings and weld fittings across NPT, BSPT, BSPP and SAE/MS standards.",
    url: "/fittings-tubing/instrumentation-fittings",
    siteName: "Valvenok",
    type: "website",
  },
};

const FITTING_FAMILIES: Category[] = [
  {
    code: "TF",
    title: "Tube Fittings",
    subtitle: "Twin Ferrule Instrumentation Fittings",
    description:
      "SS316 twin ferrule tube fittings for leak-free instrumentation and process connections. Connectors, adapters, unions, reducers and more across NPT, BSPT and BSPP standards.",
    specs: ["SS316", "Twin Ferrule", "NPT / BSPT / BSPP", "Full Size Range"],
    applications: "Oil & Gas, Petrochemical, Power Generation",
    href: "/fittings-tubing/instrumentation-fittings/tube-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/Bulkhead-Connector.jpg",
  },
  {
    code: "PF",
    title: "Pipe Fittings",
    subtitle: "SS316 Instrumentation Pipe Fittings",
    description:
      "Over 650 SS316 pipe fitting configurations — nipples, elbows, tees, unions and adapters across NPT, BSPT, BSPP, Metric and SAE thread standards.",
    specs: [
      "SS316",
      "NPT / BSPT / BSPP",
      "Metric / SAE",
      "650+ Configurations",
    ],
    applications: "Process Piping, Offshore, Marine, Refineries",
    href: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
    image:
      "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/hex%20nipples%20-%20bspp%20x%20bspp%20-%20png.png",
  },
  {
    code: "JIC",
    title: "JIC Fittings",
    subtitle: "37° Flare Hydraulic Fittings",
    description:
      "SS316 37° JIC flare fittings for high-pressure hydraulic and instrumentation systems. Connectors, unions, elbows, tees and adapters across NPT, BSPT, BSPP and SAE/MS.",
    specs: ["SS316", "37° JIC Flare", "NPT / BSPT / BSPP", "SAE/MS"],
    applications: "Hydraulics, Oil & Gas, Heavy Equipment, Marine",
    href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg",
  },
  {
    code: "WF",
    title: "Weld Fittings",
    subtitle: "SS316 Butt Weld Instrumentation Fittings",
    description:
      "SS316 butt weld fittings for permanent, high-integrity process connections. Elbows and connectors engineered for the most demanding oil & gas and petrochemical applications.",
    specs: ["SS316", "Butt Weld", "NPT / BSPT / BSPP", "2mm – 25mm OD"],
    applications: "Oil & Gas, Petrochemical, Power Generation, Offshore",
    href: "/fittings-tubing/instrumentation-fittings/weld-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/elbow-weld.jpg",
  },
  {
  code: "SGA",
  title: "Swivel Gauge Adaptors",
  subtitle: "360° Adjustable Gauge Positioning",
  description:
    "Panam SS316 Swivel Gauge Adaptors with 360° adjustable positioning and silver-plated anti-gall threads. Available in Type M (Metal-to-Metal) and Type S (Soft Sealing PTFE/Grafoil) across NPT, BSPP, BSPT and M20×1.5 thread standards.",
  specs: ["SS316", "Type M & Type S", "NPT / BSPP / BSPT / M20×1.5", "360° Swivel"],
  applications: "Pressure Gauges, Instrumentation, Oil & Gas, Process",
  href: "/fittings-tubing/instrumentation-fittings/swivel-gauge-adaptors",
  image: "https://pblol2.blob.core.windows.net/panam-images/products/swivel-gauge/PSGA-8N-SS - JPG.jpg",
},
];

const TRUST_POINTS = [
  { value: "SS316", label: "Material Standard" },
  { value: "NPT / BSPT / BSPP", label: "Thread Standards" },
  { value: "SAE/MS & Metric", label: "Also Available" },
  { value: "650+ Configurations", label: "Range" },
  { value: "UK Based", label: "Technical Support" },
];

export default function FittingsIndexPage() {
  return (
    <>
      <ProductHero
        title="Fittings"
        subtitle="SS316 Fittings for Instrumentation & Process Systems"
        description="UK-based supplier of instrumentation fittings and stainless steel fittings for high-pressure systems, with UK and international delivery for engineers and buyers."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/fittings-hero.jpg"
        imageAlt="Valvenok SS316 Instrumentation Fittings"
        breadcrumb="Products / Fittings"
      />
      <FittingsGrid families={FITTING_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
