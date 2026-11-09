import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const HIFLUX_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/hiflux" },
  title: { absolute: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok" },
  description:
    "Hiflux high pressure valves rated to 150,000 psi, cone and thread fittings, tubing, nipples and tooling, supplied in the UK by Valvenok.",
  openGraph: {
    title: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok",
    description: "Hiflux high pressure valves rated to 150,000 psi, cone and thread fittings, tubing, nipples and tooling, supplied in the UK by Valvenok.",
    url: "/brands/hiflux",
    siteName: "Valvenok",
    type: "website",
  },
};

const HIFLUX_SERIES: Category[] = [
  {
    code: "HFX",
    title: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok",
    subtitle: "Check, Needle, Ball, AOV, Safety & Special Valves",
    description:
      "Hiflux high pressure valves rated to 150,000 psi, cone and thread fittings, tubing, nipples and tooling, supplied in the UK by Valvenok.",
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
      "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp",
    logoUrl: HIFLUX_LOGO,
  },
  {
    code: "FIT",
    title: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok",
    subtitle: "Fittings, Accessories, Manifold Blocks & Tube Caps",
    description:
      "Hiflux high pressure valves rated to 150,000 psi, cone and thread fittings, tubing, nipples and tooling, supplied in the UK by Valvenok.",
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
      "https://pblol2.blob.core.windows.net/hiflux/updated%20images/images/rf.jpeg",
    logoUrl: HIFLUX_LOGO,
  },
  {
    code: "TUB",
    title: "Hiflux High Pressure Valves, Fittings & Tubing | Valvenok",
    subtitle: "Tubes, Nipples, Tooling Sets & Tube Supports",
    description:
      "Hiflux high pressure valves rated to 150,000 psi, cone and thread fittings, tubing, nipples and tooling, supplied in the UK by Valvenok.",
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
      "https://pblol2.blob.core.windows.net/hiflux/updated%20images/lok/hiflux_tube.png",
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
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp"
        imageAlt="Hiflux High Pressure Valves, Fittings & Tubing"
        breadcrumb="Products / Hydrogen & High Pressure / Hiflux"
      />
      <ProcessValvesGrid families={HIFLUX_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
