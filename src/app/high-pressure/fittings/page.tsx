import type { Metadata } from "next";
import { Category } from "../../Common/Products_Page/ProductCard";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import ProductHero from "../../Common/Products_Page/ProductHero";
import HPFittingsGrid from "./HPFittingsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/high-pressure/fittings' },
  title: "High Pressure Fittings | SS316 Cone & Thread",
  description:
    "Valvenok supplies SS316 high pressure cone and thread fittings from 10,000 to 60,000 psi. Adapters, connectors, unions, elbows, tees, crosses, hex nipples, caps and plugs for oil & gas and subsea applications.",
};

const HP_FITTING_FAMILIES: Category[] = [
  {
    code: "ADP",
    title: "Adapters & Reducers",
    subtitle: "MP & HP Cone Thread to NPT",
    description:
      "SS316 high pressure adapters and reducers from 10,000 to 60,000 psi. Female adapters, male adapters and reducers across Medium and High Pressure tube and cone thread connections to NPT.",
    specs: [
      "SS316",
      "10,000 – 60,000 psi",
      "MP Tube · HP Tube · NPT",
      '1/4" – 1"',
    ],
    applications: "Oil & Gas, Subsea, Test Equipment, High Pressure Systems",
    href: "/high-pressure/fittings/adapters",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg",
  },
  {
    code: "CON",
    title: "Cone & Thread Connectors",
    subtitle: "Male & Female HP Connectors to NPT & Cone",
    description:
      'SS316 Male and Female Connectors with MP or HP Cone & Thread female P1 to NPT, MP Cone Male or HP Cone Male P2. Pressures from 10,000 to 60,000 psi across tube ODs from 1/4" to 1".',
    specs: [
      "SS316",
      "10,000 – 60,000 psi",
      "Male · Female Connector",
      "MP & HP Cone",
    ],
    applications: "Oil & Gas, Offshore, High Pressure Instrumentation",
    href: "/high-pressure/fittings/connectors",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/PMC-4MF-4N-SS.jpg",
  },
  {
    code: "END",
    title: "Caps & Plugs",
    subtitle: "HP End Connections — Caps & Plugs",
    description:
      'SS316 High Pressure Caps and Plugs at 20,000 and 60,000 psi. Medium and High Pressure Female Caps and Medium and High Pressure Male Plugs. Sizes from 1/4" to 1".',
    specs: ["SS316", "20,000 & 60,000 psi", "Cap · Plug", "MP & HP"],
    applications: "Line Termination, Test Rigs, High Pressure Systems",
    href: "/high-pressure/fittings/end-connections",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-cap.png",
  },
  {
    code: "JCT",
    title: "Elbows, Tees, Crosses & Hex Nipples",
    subtitle: "HP Junction Fittings",
    description:
      "SS316 High Pressure Elbows, Tees, Crosses and Hex Nipples. Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Hex Nipples in MP and HP Male combinations from 10,000 to 60,000 psi.",
    specs: [
      "SS316",
      "10,000 – 60,000 psi",
      "Elbow · Tee · Cross · Hex Nipple",
      '1/4" – 1"',
    ],
    applications: "High Pressure Manifolds, Test Systems, Oil & Gas",
    href: "/high-pressure/fittings/junction-fittings",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-tees.jpg",
  },
  {
    code: "UNI",
    title: "Unions",
    subtitle: "HP Unions, Reducing Unions & Bulkhead Unions",
    description:
      'SS316 High Pressure Unions, Reducing Unions and Bulkhead Unions at 20,000 and 60,000 psi. Medium and High Pressure Female connections. Sizes from 1/4" to 1".',
    specs: [
      "SS316",
      "20,000 & 60,000 psi",
      "Union · Reducing · Bulkhead",
      '1/4" – 1"',
    ],
    applications: "High Pressure Lines, Test Equipment, Offshore",
    href: "/high-pressure/fittings/union",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-union.png",
  },
];

const TRUST_POINTS = [
  { value: "SS316", label: "Material Standard" },
  { value: "10,000 – 60,000 psi", label: "Pressure Range" },
  { value: "MP & HP Cone", label: "Thread Standards" },
  { value: '1/4" – 1"', label: "Size Range" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function HPFittingsIndexPage() {
  return (
    <>
      <ProductHero
        title="High Pressure Fittings"
        subtitle="SS316 Cone & Thread Fittings from 10,000 to 60,000 psi"
        description="Valvenok supplies a complete range of SS316 high pressure cone and thread fittings for oil & gas, subsea and test applications — adapters, connectors, unions, elbows, tees, crosses, hex nipples, caps and plugs."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&fit=crop"
        imageAlt="High pressure industrial pipe fittings"
        breadcrumb="Products / High Pressure / Fittings"
      />
      <HPFittingsGrid families={HP_FITTING_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
