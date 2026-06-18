import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import InstrumentationGrid from "./InstrumentationGrid";

export const metadata: Metadata = {
  title: "Instrumentation | High Pressure, Fittings & Valves | Valvenok",
  description:
    "Valvenok supplies a complete range of instrumentation products — high pressure fittings, tube and pipe fittings, DBB and manifold valves, quick couplings and SS tubing for oil & gas, petrochemical and process industries.",
};

const INSTRUMENTATION_FAMILIES: Category[] = [
  {
    code: "HP",
    title: "High Pressure / Hydrogen",
    subtitle: "Fittings, Valves & Connectors up to 60,000 psi",
    description:
      "A comprehensive range of high pressure fittings, pipe fittings, ball valves, needle valves, DBB valves, manifolds and seals engineered for hydrogen, oil & gas and high pressure process applications up to 60,000 psi.",
    specs: [
      "Up to 60,000 psi",
      "SS 316",
      "Cone & Thread",
      "NPT · MP · HP",
      "Ball · Needle · DBB",
    ],
    applications: "Hydrogen, Oil & Gas, Petrochemical, Test Systems, High Pressure Process",
    href: "/high-pressure",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg",
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
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission systems and medium pressure natural gas distribution networks. Diaphragm-controlled, Fail Open per EN 334. Hydrogen Ready versions available across the range.",
  specs: ["EN 334 — Fail Open", "Up to 250 bar", "DN 1\"–3\"", "H2 Ready"],
  applications: "Natural Gas Transmission, Medium Pressure Distribution, Hydrogen Blending, Industrial Gas",
  href: "/instrumentation/gas-pressure-regulator",
  image: "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg",
},
];

const TRUST_POINTS = [
  { value: "60,000 psi", label: "Max Pressure Rating" },
  { value: "SS 316", label: "Material Standard" },
  { value: "Cone & Thread", label: "HP Connection Type" },
  { value: "2, 3 & 5-Valve", label: "Manifold Options" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function InstrumentationIndexPage() {
  return (
    <>
      <ProductHero
        title="Instrumentation"
        subtitle="High Pressure Fittings, Valves & Instrumentation Products"
        description="A complete range of instrumentation products engineered for oil & gas, petrochemical and process industries. High pressure fittings and valves up to 60,000 psi, instrumentation tube and pipe fittings, DBB and manifold valves, quick couplings and SS tubing."
        imageSrc="https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg"
        imageAlt="Valvenok Instrumentation Products"
        breadcrumb="Products / Instrumentation"
      />
      <InstrumentationGrid families={INSTRUMENTATION_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}