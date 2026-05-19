import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import FittingsGrid from "./FittingsGrid";

export const metadata: Metadata = {
  title: "Pneumatic Fittings | Push-In & Compression Fittings | Valvenok",
  description:
    "Valvenok supplies a complete range of pneumatic fittings for industrial automation and instrumentation. A-Series precision compression fittings and E-Series push-in fittings across tube sizes 4mm to 16mm with BSP and M5 thread options.",
};

const FITTING_FAMILIES: Category[] = [
  {
    code: "A",
    title: "A Series",
    subtitle: "Precision Compression Fittings",
    description:
      "Precision-engineered compression fittings for high-integrity airline and instrumentation connections. Leak-free performance across pneumatic and process applications.",
    specs: ["Compression", "High-Integrity", "Airline & Instrumentation", "Leak-Free Seal"],
    applications: "Instrumentation, Airline, Process Control, OEM Machinery",
    href: "/fittings-tubing/pneumatic-fittings/a-series",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/fitting/a-series.png",
  },
  {
    code: "E",
    title: "E Series",
    subtitle: "Push-In Pneumatic Fittings",
    description:
      "Quick-connect push-in fittings for pneumatic and instrumentation systems. Connectors, elbows, tees, Y-fittings, banjos, flow control and hand valves across tube sizes 4mm to 16mm with BSP and M5 thread options.",
    specs: ["Push-In", "Ø4 – Ø16 mm Tube", "BSP / M5 Threads", "280+ Configurations"],
    applications: "Pneumatic Automation, Instrumentation, OEM Machinery",
    href: "/fittings-tubing/pneumatic-fittings/e-series",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/fitting/e-series.jpg",
  },
];

const TRUST_POINTS = [
  { value: "Push-In & Compression", label: "Connection Types" },
  { value: "Ø4 – Ø16 mm", label: "Tube Size Range" },
  { value: "M5, 1/8\", 1/4\", 3/8\", 1/2\"", label: "BSP Threads" },
  { value: "280+ Configurations", label: "E Series Range" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function FittingsIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatic Fittings"
        subtitle="Push-In & Compression Fittings for Pneumatic Systems"
        description="A complete range of pneumatic fittings engineered for leak-free, high-integrity connections in industrial automation and instrumentation. Push-in quick-connect and precision compression options across the full tube and thread range."
        imageSrc="https://pblol2.blob.core.windows.net/spac-images/products/fitting/p-fittings-hero.jpg"
        imageAlt="Valvenok Pneumatic Fittings"
        breadcrumb="Products / Fittings"
      />
      <FittingsGrid families={FITTING_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}