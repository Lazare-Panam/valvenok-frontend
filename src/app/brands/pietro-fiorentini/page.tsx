import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const PF_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/pietro-fiorentini" },
  title: { absolute: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok" },
  description:
    "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
  openGraph: {
    title: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok",
    description: "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
    url: "/brands/pietro-fiorentini",
    siteName: "Valvenok",
    type: "website",
  },
};

const PIETRO_FIORENTINI_SERIES: Category[] = [
  {
    code: "PF-DFX",
    title: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok",
    subtitle: "Trunnion Mounted — ANSI Class 150–2500",
    description:
      "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
    specs: [
      '2"–48" | NPS 50–1200',
      "ANSI Class 150–2500",
      "-196°C to +425°C",
      "API 6D / API 6A / API 6DSS",
      "SIL 2 / PED 2014/68/EU",
      "API 607 Fire Safe",
    ],
    applications:
      "Oil & Gas, LNG, Hydrogen, Carbon Capture, Water Management, High-Pressure Process",
    href: "/valves/industrial-valves/ball-valves/pf-deltaflux",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/deltaflux.jpg",
    logoUrl: PF_LOGO,
  },
  {
    code: "PF-BF31",
    title: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok",
    subtitle: "Large Bore Butterfly Valve — DN 300–600",
    description:
      "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
    specs: [
      'DN 300–600 | 12"–24"',
      "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)",
      "Hermetic Internal Seal",
      "360° Self-Cleaning Rotation",
      "NBR / FKM Sealing Options",
    ],
    applications:
      "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Power Generation",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf31",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-31.jpg",
    logoUrl: PF_LOGO,
  },
  {
    code: "PF-BF32",
    title: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok",
    subtitle: "Medium Bore Butterfly Valve — DN 50–250",
    description:
      "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
    specs: [
      'DN 50–250 | 2"–10"',
      "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)",
      "Dual Sealing Rings",
      "In-Line Seal Check Port",
      "VITON Standard / NBR on Request",
    ],
    applications:
      "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Compressed Air",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf32",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-32.jpg",
    logoUrl: PF_LOGO,
  },
  {
    code: "PF-REG",
    title: "Pietro Fiorentini Gas Valves & Pressure Regulators | Valvenok",
    subtitle: "Direct Operated — Dival 160 AP · Staflux 185 / 187 · ATF 15",
    description:
      "Pietro Fiorentini trunnion ball valves, BF 31 and BF 32 butterfly valves and gas pressure regulators to 250 bar, with hydrogen-ready models available.",
    specs: [
      "Up to 250 bar Design Pressure",
      "Fail Open",
      "H₂ Ready — Selected Models",
      "ASME B16.5 CL 300 / 600 / 1500",
      "Biomethane Compatible",
      "4 Models",
    ],
    applications:
      "Natural Gas Transmission, Medium Pressure Distribution, Hydrogen Blending, Biomethane",
    href: "/instrumentation/gas-pressure-regulator",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/staflux-187.jpg",
    logoUrl: PF_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "Up to 250 bar", label: "Max Design Pressure" },
  { value: "ANSI CL 150–2500", label: "Pressure Classes" },
  { value: "API 6D / 6A", label: "Deltaflux Standards" },
  { value: "H₂ Ready", label: "Selected Models" },
  { value: "Ball · Butterfly · Regulator", label: "Product Range" },
];

export default function PietroFiorentiniBrandPage() {
  return (
    <>
      <ProductHero
        title="Pietro Fiorentini"
        subtitle="Gas Distribution Valves & Pressure Regulators"
        description="The Pietro Fiorentini range for natural gas transmission and distribution — Deltaflux trunnion mounted control ball valves rated to ANSI Class 2500, BF 31 and BF 32 gas distribution butterfly valves with hermetic sealing, and direct-operated gas pressure regulators up to 250 bar. Hydrogen-ready versions available on selected models, engineered by Pietro Fiorentini and operating in over 100 countries since 1940."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/deltaflux.jpg"
        imageAlt="Pietro Fiorentini Gas Valves & Regulators"
        breadcrumb="Products / Gas Distribution / Pietro Fiorentini"
      />
      <ProcessValvesGrid families={PIETRO_FIORENTINI_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
