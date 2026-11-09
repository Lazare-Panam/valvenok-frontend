import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";
import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import FittingsGrid from "./FittingsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings' },
  title: { absolute: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok" },
  description:
    "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
  openGraph: {
    title: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok",
    description: "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
    url: "/fittings-tubing/instrumentation-fittings",
    siteName: "Valvenok",
    type: "website",
  },
};

const FITTING_FAMILIES: Category[] = [
  {
    code: "TF",
    title: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok",
    subtitle: "Twin Ferrule Instrumentation Fittings",
    description:
      "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
    specs: ["SS316", "Twin Ferrule", "NPT / BSPT / BSPP", "Full Size Range"],
    applications: "Oil & Gas, Petrochemical, Power Generation",
    href: "/fittings-tubing/instrumentation-fittings/tube-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/Bulkhead-Connector.jpg",
  },
  {
    code: "PF",
    title: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok",
    subtitle: "SS316 Instrumentation Pipe Fittings",
    description:
      "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
    specs: [
      "SS316",
      "NPT / BSPT / BSPP",
      "Metric / SAE",
      "650+ Configurations",
    ],
    applications: "Process Piping, Offshore, Marine, Refineries",
    href: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/pipe-fittings/hex-nipples-bspp-x-bspp-png.png",
  },
  {
    code: "JIC",
    title: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok",
    subtitle: "37° Flare Hydraulic Fittings",
    description:
      "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
    specs: ["SS316", "37° JIC Flare", "NPT / BSPT / BSPP", "SAE/MS"],
    applications: "Hydraulics, Oil & Gas, Heavy Equipment, Marine",
    href: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg",
  },
  {
    code: "WF",
    title: "SS316 Instrumentation Fittings: Tube, Pipe & JIC | Valvenok",
    subtitle: "SS316 Butt Weld Instrumentation Fittings",
    description:
      "SS316 tube, pipe, JIC flare and weld fittings for instrumentation and process systems, in NPT, BSPT, BSPP and SAE/MS thread standards.",
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
        title="Instrumentation Fittings"
        subtitle="SS316 Fittings for Instrumentation & Process Systems"
        description="UK-based supplier of instrumentation fittings and stainless steel fittings for high-pressure systems, with UK and international delivery for engineers and buyers."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/fittings-hero.webp"
        imageAlt="Valvenok SS316 Instrumentation Fittings"
        breadcrumb="Products / Fittings"
      />
      <FittingsGrid families={FITTING_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
      <RelatedLinks title="Group companies" links={[{ label: "Instrumentation fittings at Panam Valves", href: "https://www.panamvalve.com/", external: true }]} />
    </>
  );
}
