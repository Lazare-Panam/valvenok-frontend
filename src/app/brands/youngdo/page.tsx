import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import YoungdoGrid from "../../hydrogen-cryogenic/components/YoungdoGrid";

const YOUNGDO_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/youngdo" },
  title: "Youngdo Cylinder Valves — Hydrogen, LPG & Industrial Gas",
  description:
    "Valvenok supplies Youngdo cylinder valves — hydrogen cylinder valves to 70 MPa, LPG cylinder valves and OPD safety devices, and industrial gas valves. Certification varies by model.",
  openGraph: {
    title: "Youngdo Cylinder Valves — Hydrogen, LPG & Industrial Gas | Valvenok",
    description: "Valvenok supplies Youngdo cylinder valves — hydrogen cylinder valves to 70 MPa, LPG cylinder valves and OPD safety devices, and industrial gas valves. Certification varies by model.",
    url: "/brands/youngdo",
    siteName: "Valvenok",
    type: "website",
  },
};

const YOUNGDO_SERIES: Category[] = [
  {
    code: "H2",
    title: "Hydrogen Cylinder Valves",
    subtitle: "High-Pressure Hydrogen Service — 3–70 MPa",
    description:
      "Youngdo high-pressure hydrogen cylinder valves across 13 models — HC, HE, HK, HS, HSL, EP, DRV, YHT and YEX series. Working pressures from 3–70 MPa for hydrogen storage, refuelling stations and cylinder distribution. Certification (KGS, EC79, R134, IECEx and others) varies by model.",
    specs: [
      "70 MPa Max Working Pressure",
      "KGS · EC79 · R134 by Model",
      "IECEx Explosion-Proof (YEX-1100)",
      "13 Models",
      "H₂ Service",
    ],
    applications:
      "Hydrogen Storage, Refuelling Stations, Cylinder Distribution, Hazardous Areas",
    href: "/hydrogen-cryogenic/hydrogen",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
    logoUrl: YOUNGDO_LOGO,
  },
  {
    code: "LPG",
    title: "LPG Cylinder Valves",
    subtitle: "LPG Cylinder, OPD & Piping Connection Valves",
    description:
      "Youngdo LPG cylinder valves, overfilling prevention devices and piping connection valves across 20 models — YLC, LP, MT, YBC, OPD, YLG and YPC series for LPG cylinder and distribution applications. Certification (KGS, KS, CGA V-1, UL) varies by model.",
    specs: [
      "Up to 2.35 MPa Working Pressure",
      "2.43 MPa Max Spring Working Pressure",
      "KGS · KS · CGA V-1 · UL by Model",
      "20 Models",
      "LPG Service",
    ],
    applications:
      "LPG Cylinder Filling, Storage Tanks, Piping Distribution, OPD Safety",
    href: "/hydrogen-cryogenic/lpg",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png",
    logoUrl: YOUNGDO_LOGO,
  },
  {
    code: "IGV",
    title: "Industrial Gas Valves",
    subtitle: "Tapered, Unified, Acetylene, Chlorine & More",
    description:
      "Youngdo industrial gas cylinder valves across 7 categories — tapered and unified inlet thread valves, non return valves, acetylene, chlorine/ammonia, tube trailer and piping connection valves. Certification (KGS, KS) and design standards (CGA, BS 341, ISO 10297) vary by model.",
    specs: [
      "25 MPa Max Pressure (Tube Trailers)",
      "KGS · KS by Model",
      "Standards Vary by Model",
      "7 Categories",
      "Industrial Gas Service",
    ],
    applications:
      "Industrial Gas Cylinders, Acetylene, Chlorine, Ammonia, Tube Trailers, Piping Distribution",
    href: "/hydrogen-cryogenic/industrial-gas",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png",
    logoUrl: YOUNGDO_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "70 MPa", label: "Max H₂ Pressure" },
  { value: "KGS · EC79", label: "H₂ Certifications (by model)" },
  { value: "CGA V-1 · UL", label: "LPG Certifications (by model)" },
  { value: "IECEx", label: "Explosion Proof (YEX-1100)" },
  { value: "H₂ · LPG · Industrial Gas", label: "Service Range" },
];

export default function YoungdoBrandPage() {
  return (
    <>
      <ProductHero
        title="Youngdo Cylinder Valves"
        subtitle="Hydrogen, LPG & Industrial Gas Cylinder Valves"
        description="Youngdo cylinder valves engineered for high-pressure gas storage and distribution — from hydrogen cylinder valves rated to 70 MPa, to LPG cylinder valves, OPD overfilling prevention devices and industrial gas valves for acetylene, chlorine and ammonia service. Certification varies by model — see each product table for details."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png"
        imageAlt="Youngdo Hydrogen, LPG & Industrial Gas Cylinder Valves"
        breadcrumb="Products / Hydrogen & Cryogenic / Youngdo"
      />
      <YoungdoGrid families={YOUNGDO_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
