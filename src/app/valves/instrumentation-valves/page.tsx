import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ValvesGrid from "./ValvesGrid";

export const metadata: Metadata = {
  title: "Valves | SS316 Instrumentation & Process Valves | Valvenok",
  description:
    "Valvenok supplies a complete range of SS316 valves for instrumentation and process systems. Ball valves, needle valves, check valves and relief valves engineered for high-pressure, leak-tight performance.",
};

const VALVE_FAMILIES: Category[] = [
  {
    code: "BV",
    title: "Ball Valves",
    subtitle: "SS316 Instrumentation Ball Valves",
    description:
      "High-performance instrumentation ball valves designed for precise flow control and shut-off in critical applications. Quarter-turn operation across NPT, BSPT and BSPP standards.",
    specs: ["SS316", "Quarter-Turn", "NPT / BSPT / BSPP", "High Pressure"],
    applications: "Oil & Gas, Petrochemical, Power Generation, Marine",
    href: "/valves/instrumentation-valves/ball-valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png",
  },
  {
    code: "NV",
    title: "Needle Valves",
    subtitle: "SS316 Precision Needle Valves",
    description:
      "Precision flow control valves featuring fine-threaded stems for accurate metering in instrumentation systems. Micro-adjustment with hard seat design.",
    specs: ["SS316", "Flow Metering", "Hard Seat", "Micro-Adjustment"],
    applications: "Instrumentation, Gauge Lines, Hydraulics, Sampling",
    href: "/valves/instrumentation-valves/needle-valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hp-no-bg.png",
  },
  {
    code: "CV",
    title: "Check Valves",
    subtitle: "SS316 Non-Return Check Valves",
    description:
      "High-integrity non-return valves designed to prevent backflow and protect sensitive instrumentation from process reversals. Defined cracking pressure for reliable operation.",
    specs: ["SS316", "Non-Return", "Backflow Prevention", "Cracking Pressure"],
    applications: "Process Lines, Hydraulics, Pump Discharge, Sampling",
    href: "/valves/instrumentation-valves/check-valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png",
  },
  {
    code: "RV",
    title: "Relief Valves",
    subtitle: "SS316 Pressure Relief Valves",
    description:
      "Safety-critical pressure relief devices designed to protect instrumentation circuits and process vessels from overpressure conditions. Adjustable set pressure across the range.",
    specs: ["SS316", "Overpressure Protection", "Set Pressure", "Safety Critical"],
    applications: "Process Safety, Instrumentation Circuits, Vessel Protection",
    href: "/valves/instrumentation-valves/relief-valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png",
  },
];

const TRUST_POINTS = [
  { value: "SS316", label: "Material Standard" },
  { value: "NPT / BSPT / BSPP", label: "Thread Standards" },
  { value: "Safety Critical", label: "Design Grade" },
  { value: "4 Valve Families", label: "Range" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function ValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Valves"
        subtitle="SS316 Valves for Instrumentation & Process Systems"
        description="UK-based supplier of precision instrumentation and process valves engineered for high-pressure, leak-tight performance — with fast global delivery for engineers and buyers."
        imageSrc="https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/ball-valves-hero.jpg"
        imageAlt="Valvenok SS316 Instrumentation Valves"
        breadcrumb="Products / Valves"
      />
      <ValvesGrid families={VALVE_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}