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
    code: "H2",
    title: "Hydrogen Cylinder Valves",
    subtitle: "High-Pressure Hydrogen Service — Up to 70 MPa",
    description:
      "Youngdo high-pressure hydrogen cylinder valves across 13 models — HC, HE, HK, HS, HSL, EP, DRV, YHT and YEX series. Working pressures from 35–70 MPa with KGS, EC79, R134 and IECEx certification for hydrogen storage, refuelling stations and cylinder distribution.",
    specs: [
      "70 MPa Max Working Pressure",
      "KGS · EC79 · R134",
      "IECEx Explosion-Proof",
      "13 Models",
      "H₂ Service",
    ],
    applications:
      "Hydrogen Storage, Refuelling Stations, Cylinder Distribution, Hazardous Areas",
    href: "/hydrogen-cryogenic/hydrogen",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/HE-700.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png",
  },
  {
    code: "LPG",
    title: "LPG Cylinder Valves",
    subtitle: "LPG Cylinder, OPD & Piping Connection Valves",
    description:
      "Youngdo LPG cylinder valves, overfilling prevention devices and piping connection valves across 20 models — YLC, MT, YBC, OPD, YLG and YPC series. KGS, KS, CGA V-1 and UL certified for global LPG cylinder and distribution applications.",
    specs: [
      "2.43 MPa Max Pressure",
      "KGS · KS · CGA V-1",
      "UL 2227",
      "20 Models",
      "LPG Service",
    ],
    applications:
      "LPG Cylinder Filling, Storage Tanks, Piping Distribution, OPD Safety",
    href: "/hydrogen-cryogenic/lpg",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png",
  },
  {
    code: "IGV",
    title: "Industrial Gas Valves",
    subtitle: "Tapered, Unified, Acetylene, Chlorine & More",
    description:
      "Youngdo industrial gas cylinder valves across 7 categories — tapered and unified inlet thread valves, non return valves, acetylene, chlorine/ammonia, tube trailer and piping connection valves. KGS, KS, CGA V-1, BS 341 and ISO certified for global industrial gas applications.",
    specs: [
      "25 MPa Max Pressure",
      "KGS · KS · CGA V-1",
      "BS 341 · ISO 10297",
      "7 Categories",
      "Industrial Gas Service",
    ],
    applications:
      "Industrial Gas Cylinders, Acetylene, Chlorine, Ammonia, Tube Trailers, Piping Distribution",
    href: "/hydrogen-cryogenic/industrial-gas",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png",
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
