import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import YoungdoGrid from "./components/YoungdoGrid";

import type { Metadata } from "next";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";
export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic" },
};


const HYDROGEN_CRYOGENIC_SERIES: Category[] = [
  {
    code: "FIT",
    title: "High Pressure Fittings",
    subtitle: "Fittings, Accessories, Manifold Blocks & Tube Caps",
    description:
      "Hiflux high pressure fittings and accessories rated up to 150,000 psi — reducing fittings, standard fittings, anti-vibration accessories, manifold blocks, tube caps and thread lubricant for industrial, hydrogen and wellhead applications. Certification varies by product.",
    specs: [
      "150,000 psi Max Pressure",
      "KC · KGS by Product",
      "27 Products",
      "Hydrogen Service Options",
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
      "Hiflux high pressure valves rated up to 150,000 psi across 54 models — check, needle, ball, air operated, safety and special valves for industrial, hydrogen and wellhead applications. Certification varies by model.",
    specs: [
      "150,000 psi Max Pressure",
      "KC · KGS on Selected Models",
      "54 Models",
      "H₂ Refuelling Needle Valve",
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
      "100,000 psi Max Pressure (Tubes)",
      "18 Products",
      "Tubes, Nipples & Tooling",
      "Industrial & Wellhead",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/tube",
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
      "Youngdo gas and cylinder valves in one filterable grid — hydrogen cylinder valves to 70 MPa, LPG cylinder / OPD / piping valves, and industrial gas cylinder valves across tapered, unified, non-return, acetylene, chlorine/ammonia, tube trailer and piping categories. Filter by gas type, category, series and certification. Certification varies by model.",
    specs: [
      "70 MPa Max Working Pressure (H₂)",
      "KGS · KS · EC79 · R134 · CGA V-1 by Model",
      "108 Models",
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
  { value: "Hiflux · Youngdo", label: "Manufacturers" },
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
        subtitle="Hiflux High Pressure Products & Youngdo Gas Valves"
        description="Valvenok supplies Hiflux high pressure fittings, valves and tubing rated up to 150,000 psi, alongside Youngdo hydrogen, LPG and industrial gas cylinder valves — hydrogen cylinder valves to 70 MPa, LPG cylinder valves, OPD overfilling prevention devices, piping connection valves and industrial gas cylinder valves. Certification varies by model — see each product table for details."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png"
        imageAlt="Hiflux high pressure products and Youngdo gas cylinder valves"
        breadcrumb="Products / Hydrogen & Cryogenic"
      />
      <YoungdoGrid families={HYDROGEN_CRYOGENIC_SERIES} />
      <RelatedLinks links={[{ label: "Cryogenic Valves", href: "/cryogenic-valves" }, { label: "Youngdo Hydrogen, LPG & Gas Cylinder Valves", href: "/hydrogen-cryogenic/gas-valves" }]} />
      <RelatedLinks title="Group companies" links={[{ label: "Hydrogen and high-pressure fittings at Hiflux UK", href: "https://www.hiflux.uk.com/", external: true }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
