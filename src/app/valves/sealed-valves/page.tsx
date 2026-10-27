import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../ProcessValvesGrid";

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves" },
};


const SEALED_VALVE_FAMILIES: Category[] = [
  {
    code: "BGV",
    title: "Globe Valves",
    subtitle: "Bellows Sealed Globe Valves — DIN · ANSI · JIS",
    description:
      "A complete range of bellows sealed globe valves across DIN, ANSI and JIS standards. Double seal design with bellows plus packing backup ensures zero stem leakage across demanding process, chemical and industrial applications. 11 variants including Y-Type, Angle, High Pressure and Gland Packing configurations.",
    specs: [
      "DIN · ANSI · JIS",
      "Zero Stem Leakage",
      "Double Seal — Bellows + Packing",
      "11 Variants",
      "Y-Type · Angle · High Pressure",
      "Certification Varies by Model",
    ],
    applications:
      "Process Plants, Chemical, Pharmaceutical, Power Generation, Industrial",
    href: "/valves/sealed-valves/globe-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg",
  },
  {
    code: "BGT",
    title: "Gate Valves",
    subtitle: "Bellows Sealed Gate Valves — DIN · ANSI",
    description:
      "Bellows sealed gate valves with automatic welded metal bellows forming a complete barrier between fluid and atmosphere. Zero stem leakage with double seal design — bellows plus packing backup for dual safety across DIN and ANSI standards.",
    specs: [
      "DIN · ANSI",
      "Zero Stem Leakage",
      "Double Seal — Bellows + Packing",
      "Auto-Welded Bellows",
      "Certification Varies by Model",
    ],
    applications:
      "Process Plants, Chemical, Pharmaceutical, Power Generation, Industrial",
    href: "/valves/sealed-valves/gate-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-bellows-sealed-gate-valve.jpg",
  },
  {
    code: "BCV",
    title: "Check Valves",
    subtitle: "Bellows Sealed Lift Check Valves — DIN",
    description:
      "DIN standard bellows sealed lift check valves with zero stem leakage construction for demanding process, chemical and industrial applications.",
    specs: [
      "DIN Standard",
      "Zero Stem Leakage",
      "Bellows Sealed",
      "Lift Check",
      "Certification Varies by Model",
    ],
    applications:
      "Process Plants, Chemical, Pharmaceutical, Power Generation, Industrial",
    href: "/valves/sealed-valves/check-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-lift-check-valve-300x300.jpg",
  },
];

const TRUST_POINTS = [
  { value: "Zero Leakage", label: "Stem Seal" },
  { value: "DIN·ANSI·JIS", label: "Standards" },
  { value: "Double Seal", label: "Bellows + Packing" },
  { value: "11 Models", label: "Full Range" },
  { value: "Certification", label: "Varies by Model" },
];

export default function SealedValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Sealed Valves"
        subtitle="Zero-Leakage Valve Solutions"
        description="A complete range of bellows sealed globe valves engineered for zero stem leakage in demanding process, chemical and industrial applications. DIN, ANSI and JIS standards with double seal design — bellows plus packing backup."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg"
        imageAlt="Bellows Sealed Globe Valves"
        breadcrumb="Products / Valves / Sealed Valves"
      />
      <ProcessValvesGrid families={SEALED_VALVE_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
