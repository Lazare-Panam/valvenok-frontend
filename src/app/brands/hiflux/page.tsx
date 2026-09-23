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
    "Valvenok supplies the full Hiflux high pressure range — valves rated to 150,000 psi, high pressure fittings and accessories, plus tubing, nipples and tooling. KC and KGS certified, H₂ compatible for industrial, hydrogen refuelling and wellhead applications.",
};

const HIFLUX_SERIES: Category[] = [
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
    logoUrl: HIFLUX_LOGO,
  },
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
    logoUrl: HIFLUX_LOGO,
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
    href: "/hydrogen-cryogenic/tube",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/tube.png",
    logoUrl: HIFLUX_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "150,000 psi", label: "Max Pressure" },
  { value: "KC · KGS", label: "Certifications" },
  { value: "H₂ Compatible", label: "Hydrogen Service" },
  { value: "Valves · Fittings · Tube", label: "Product Range" },
  { value: "Hiflux", label: "Manufacturer" },
];

export default function HifluxBrandPage() {
  return (
    <>
      <ProductHero
        title="Hiflux High Pressure"
        subtitle="High Pressure Valves, Fittings & Tubing"
        description="The complete Hiflux high pressure range — valves rated up to 150,000 psi across 56 models, high pressure fittings, accessories and manifold blocks, plus tubing, nipples and a full tooling set. KC and KGS certified and H₂ compatible for industrial high pressure, hydrogen refuelling, wellhead and research & test applications worldwide."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png"
        imageAlt="Hiflux High Pressure Valves, Fittings & Tubing"
        breadcrumb="Products / Hydrogen & Cryogenic / Hiflux"
      />
      <ProcessValvesGrid families={HIFLUX_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
