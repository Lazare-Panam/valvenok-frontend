import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const HIFLUX_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/hiflux" },
  title: "Hiflux High Pressure Valves, Fittings & Tubing",
  description:
    "Valvenok supplies Hiflux high pressure valves rated to 150,000 psi, high pressure fittings and accessories, plus tubing, nipples and tooling. Certification varies by product.",
  openGraph: {
    title: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok",
    description: "Valvenok supplies Hiflux high pressure valves rated to 150,000 psi, high pressure fittings and accessories, plus tubing, nipples and tooling. Certification varies by product.",
    url: "/brands/hiflux",
    siteName: "Valvenok",
    type: "website",
  },
};

const HIFLUX_SERIES: Category[] = [
  {
    code: "HFX",
    title: "High Pressure Valves",
    subtitle: "Check, Needle, Ball, AOV, Safety & Special Valves",
    description:
      "Hiflux high pressure valves rated up to 150,000 psi — needle, check, ball, air operated, safety/relief and control valves for industrial, hydrogen and extreme service. Hiflux manual valves for hydrogen refuelling stations hold KS certification from the Korea Gas Safety Corporation (KS B ISO 19880-3); certification varies by product.",
    specs: [
      "150,000 psi Max Pressure",
      "6 Series",
      "KS (KGS) on H₂ Station Manual Valves",
      "Certification Varies by Product",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png",
    logoUrl: HIFLUX_LOGO,
  },
  {
    code: "FIT",
    title: "High Pressure Fittings",
    subtitle: "Fittings, Accessories, Manifold Blocks & Tube Caps",
    description:
      "Hiflux high pressure fittings and accessories rated from 10,000 to 150,000 psi — fittings, fitting accessories including anti-vibration sets, manifold blocks, tube caps and thread lubricant. Certification varies by product.",
    specs: [
      "150,000 psi Max Pressure",
      "316 Stainless Steel",
      "5 Series",
      "Certification Varies by Product",
    ],
    applications:
      "Industrial High Pressure, Hydrogen Refuelling, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/fittings",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png",
    logoUrl: HIFLUX_LOGO,
  },
  {
    code: "TUB",
    title: "High Pressure Tubing & Tooling",
    subtitle: "Tubes, Nipples, Tooling Sets & Tube Supports",
    description:
      "Hiflux high pressure tubes and nipples for cone and thread systems rated up to 100,000 psi, with tooling sets — coning, threading, reseating tools, HSS dies, spare cutters and collets — plus 1, 2 and 3 line tube supports. Certification varies by product; certificates on request.",
    specs: [
      "100,000 psi Max Pressure",
      "316 Stainless Steel",
      "Tube · Nipple · Tooling · Support",
      "Certificates on Request",
    ],
    applications:
      "Industrial High Pressure, Wellhead, Research & Test",
    href: "/hydrogen-cryogenic/tube",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube.png",
    logoUrl: HIFLUX_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "150,000 psi", label: "Max Pressure" },
  { value: "ISO 9001 · 14001 · 45001", label: "Manufacturer Certifications" },
  { value: "KS (KGS)", label: "H₂ Station Manual Valves" },
  { value: "Valves · Fittings · Tube", label: "Product Range" },
  { value: "Hiflux", label: "Manufacturer" },
];

export default function HifluxBrandPage() {
  return (
    <>
      <ProductHero
        title="Hiflux High Pressure"
        subtitle="High Pressure Valves, Fittings & Tubing"
        description="Hiflux high pressure valves rated up to 150,000 psi, high pressure fittings, accessories and manifold blocks, plus tubing, nipples and tooling sets for industrial high pressure, hydrogen refuelling, wellhead and research & test applications. Certification varies by product."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png"
        imageAlt="Hiflux High Pressure Valves, Fittings & Tubing"
        breadcrumb="Products / Hydrogen & Cryogenic / Hiflux"
      />
      <ProcessValvesGrid families={HIFLUX_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
