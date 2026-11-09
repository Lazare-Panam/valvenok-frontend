import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import InstrumentationGrid from "./InstrumentationGrid";

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation" },
};


const INSTRUMENTATION_FAMILIES: Category[] = [
  {
    code: "HP",
    title: "High Pressure / Hydrogen",
    subtitle: "Fittings, Valves & Connectors — ratings vary by product",
    description:
      "A comprehensive range of high pressure fittings, pipe fittings, ball valves, needle valves, DBB valves, manifolds and seals engineered for hydrogen, oil & gas and high pressure process applications. Ratings vary by product, up to 60,000 psi on selected needle valves.",
    specs: [
      "Up to 60,000 psi",
      "SS 316",
      "Cone & Thread",
      "NPT · MP · HP",
      "Ball · Needle · DBB",
    ],
    applications: "Hydrogen, Oil & Gas, Petrochemical, Test Systems, High Pressure Process",
    href: "/high-pressure",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/hp-nv.webp",
  },
  {
    code: "IF",
    title: "Instrumentation Fittings",
    subtitle: "Tube, Pipe, Flare & Weld Fittings",
    description:
      "Precision instrumentation fittings for tube and pipe connections in process control and measurement systems. Tube fittings, pipe fittings, JIC flare fittings and weld fittings in SS 316 for leak-tight performance.",
    specs: [
      "Tube Fittings",
      "Pipe Fittings",
      "Flare Fittings",
      "Weld Fittings",
      "SS 316",
    ],
    applications: "Process Control, Instrumentation, Oil & Gas, Chemical, Power Generation",
    href: "/fittings-tubing",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg",
  },
  {
    code: "DBB",
    title: "DBB & Manifolds",
    subtitle: "Double Block & Bleed Valves and Valve Manifolds",
    description:
      "Double block and bleed valves in flange-to-flange, flange-to-pipe and pipe-to-pipe configurations. 2, 3 and 5-valve manifolds for instrument isolation, calibration and measurement applications.",
    specs: [
      "2, 3 & 5-Valve Manifolds",
      "Flange to Flange",
      "Flange to Pipe",
      "Pipe to Pipe",
      "SS 316",
    ],
    applications: "Instrument Isolation, Pressure Measurement, Calibration, Process Control",
    href: "/dbb-manifolds",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxf.jpg",
  },
  {
    code: "QC",
    title: "Quick Coupling & Tubing",
    subtitle: "Quick Release Couplings and Stainless Steel Tubing",
    description:
      "Quick release couplings for fast and reliable pneumatic and hydraulic connections, plus stainless steel instrumentation tubing for high purity and corrosion-resistant process applications.",
    specs: [
      "Quick Coupling",
      "SS Tubing",
      "Multiple Sizes",
      "High Purity",
      "Corrosion Resistant",
    ],
    applications: "Pneumatic Systems, Hydraulic Systems, Process Instrumentation, Marine, Chemical",
    href: "/quick-coupling-and-hoses",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-2.png",
  },
  {
  code: "GPR",
  title: "Gas Pressure Regulators",
  subtitle: "Direct Operated — Pietro Fiorentini",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission systems and medium pressure natural gas distribution networks. Four diaphragm-controlled models with Fail Open behaviour. Hydrogen-ready versions available on selected models — contact us to confirm.",
  specs: ["Fail Open", "Up to 250 bar", "4 Models", "H2 Ready — Selected Models"],
  applications: "Natural Gas Transmission, Medium Pressure Distribution, Hydrogen Blending, Industrial Gas",
  href: "/instrumentation/gas-pressure-regulator",
  image: "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg",
},
];

const TRUST_POINTS = [
  { value: "60,000 psi", label: "Max Rating — High Pressure Range" },
  { value: "Cone & Thread", label: "HP Connection Type" },
  { value: "2, 3 & 5-Valve", label: "Manifold Options" },
  { value: "5", label: "Product Families" },
];

export default function InstrumentationIndexPage() {
  return (
    <>
      <ProductHero
        title="Instrumentation"
        subtitle="High Pressure Fittings, Valves & Instrumentation Products"
        description="A complete range of instrumentation products engineered for oil & gas, petrochemical and process industries. High pressure fittings and valves (ratings vary by product, up to 60,000 psi on selected models), instrumentation tube and pipe fittings, DBB and manifold valves, quick couplings and SS tubing."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/hp-nv.webp"
        imageAlt="Valvenok Instrumentation Products"
        breadcrumb="Products / Instrumentation"
      />
      <InstrumentationGrid families={INSTRUMENTATION_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}