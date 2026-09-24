import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import YoungdoGrid from "./components/YoungdoGrid";

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic" },
};


const HYDROGEN_CRYOGENIC_SERIES: Category[] = [
  {
    code: "FIT",
    title: "High Pressure Fittings",
    subtitle: "Fittings, Accessories, Manifold Blocks & Tube Caps",
    description:
      "Hiflux high pressure fittings and accessories rated up to 150,000 psi — reducing fittings, standard fittings, anti-vibration accessories, manifold blocks, tube caps and thread lubricant. KC and KGS certified for industrial, hydrogen and wellhead applications.",
    specs: [
      "150,000 psi Max Pressure",
      "KC · KGS Certified",
      "27 Products",
      "H₂ Compatible",
      "Industrial & Wellhead",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/fittings",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png",
  },
  {
    code: "HFX",
    title: "High Pressure Valves",
    subtitle: "Check, Needle, Ball, AOV, Safety & Special Valves",
    description:
      "Hiflux high pressure valves rated up to 150,000 psi across 56 models — check, needle, ball, air operated, safety and special valves. KC and KGS certified for industrial, hydrogen and wellhead applications worldwide.",
    specs: [
      "150,000 psi Max Pressure",
      "KC · KGS Certified",
      "56 Models",
      "H₂ Compatible",
      "Industrial & Wellhead",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png",
  },
  {
    code: "TUB",
    title: "High Pressure Tubing & Tooling",
    subtitle: "Tubes, Nipples, Tooling Sets & Tube Supports",
    description:
      "Hiflux high pressure tubes and nipples rated up to 100,000 psi, with a full tooling set range — coning, threading, reseating tools, HSS dies, spare cutters and collets — plus 1, 2 and 3 line tube supports for secure installation.",
    specs: [
      "100,000 psi Max Pressure",
      "KC · KGS Certified",
      "18 Products",
      "H₂ Compatible",
      "Industrial & Wellhead",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png",
  },
  {
    code: "YGD",
    title: "Gas & Cylinder Valves",
    subtitle: "Hydrogen · LPG · Industrial Gas — Youngdo",
    description:
      "The complete Youngdo range in one filterable grid — hydrogen cylinder valves to 70 MPa, LPG cylinder / OPD / piping valves, and industrial gas cylinder valves across tapered, unified, non-return, acetylene, chlorine/ammonia, tube trailer and piping categories. Filter by gas type, category, series and certification.",
    specs: [
      "70 MPa Max Working Pressure",
      "KGS · EC79 · R134 · CGA",
      "BS 341 · ISO 10297",
      "81 Models",
      "H₂ · LPG · Industrial Gas",
    ],
    applications:
      "Hydrogen Storage & Refuelling, LPG Distribution, Industrial Gas Cylinders",
    href: "/high-pressure/valves/gas-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png",
  },
];

const TRUST_POINTS = [
  { value: "Youngdo", label: "Manufacturer" },
  { value: "70 MPa", label: "Max H₂ Pressure" },
  { value: "KGS · EC79", label: "H₂ Certifications" },
  { value: "CGA · UL", label: "LPG Certifications" },
  { value: "H₂ & LPG", label: "Service Range" },
];

export default function HydrogenCryogenicIndexPage() {
  return (
    <>
      <ProductHero
        title="Hydrogen & Cryogenic"
        subtitle="Youngdo Cylinder Valves — H₂ & LPG"
        description="Valvenok supplies the full Youngdo range of hydrogen and LPG cylinder valves engineered for high-pressure gas storage and distribution. From hydrogen cylinder valves rated to 70 MPa with KGS, EC79 and IECEx certification, to LPG cylinder valves, OPD overfilling prevention devices and piping connection valves — every product certified for safe, reliable gas service worldwide."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png"
        imageAlt="Youngdo Hydrogen & LPG Cylinder Valves"
        breadcrumb="Products / Hydrogen & Cryogenic"
      />
      <YoungdoGrid families={HYDROGEN_CRYOGENIC_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
