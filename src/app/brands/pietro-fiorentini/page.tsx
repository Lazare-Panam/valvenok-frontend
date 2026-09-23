import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

const PF_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/pietro-fiorentini" },
  title: "Pietro Fiorentini Gas Valves & Regulators",
  description:
    "Valvenok supplies the Pietro Fiorentini range — Deltaflux trunnion control ball valves, BF 31 and BF 32 gas distribution butterfly valves, and direct-operated gas pressure regulators rated to 250 bar. Hydrogen ready, EN 334 fail-open, for natural gas transmission and distribution.",
};

const PIETRO_FIORENTINI_SERIES: Category[] = [
  {
    code: "PF-DFX",
    title: "Deltaflux Control Ball Valve",
    subtitle: "Trunnion Mounted — ANSI Class 150–2500",
    description:
      "Pietro Fiorentini Deltaflux trunnion mounted control ball valve for flow rate and pressure modulation across Oil & Gas, LNG, hydrogen, and water management applications. Quarter-turn trim delivers high Kv with minimum pressure drop in fully open position. Available in standard, welded body, and top-entry configurations.",
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
    title: "BF 31 Butterfly Valve",
    subtitle: "Large Bore Butterfly Valve — DN 300–600",
    description:
      "Pietro Fiorentini BF 31 butterfly valve for medium and low pressure gas distribution networks. Hermetic internal seal, 360° butterfly rotation for self-cleaning, chromium-plated spherical seat for low control torques and long service life. Rated to 16 bar UNI PN16 / 19 bar ANSI 150 RF.",
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
    title: "BF 32 Butterfly Valve",
    subtitle: "Medium Bore Butterfly Valve — DN 50–250",
    description:
      "Pietro Fiorentini BF 32 butterfly valve for medium and low pressure gas distribution. Features dual sealing rings with leak-check port, chromium-plated spherical seat, and 360° self-cleaning rotation. Rated to 16 bar UNI PN16 / 19 bar ANSI 150 RF across DN 50–250.",
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
    title: "Gas Pressure Regulators",
    subtitle: "Direct Operated — Dival 160 AP · Staflux 185 / 187 / Mini",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission systems and medium pressure natural gas distribution networks. Diaphragm-controlled and classified Fail Open per EN 334, with Hydrogen Ready and 100% H₂ versions available across the range.",
    specs: [
      "Up to 250 bar Design Pressure",
      "EN 334 — Fail Open",
      "H₂ Ready / 100% H₂ Option",
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
  { value: "EN 334 · API 6D", label: "Design Standards" },
  { value: "H₂ Ready", label: "Hydrogen Compatible" },
  { value: "Ball · Butterfly · Regulator", label: "Product Range" },
];

export default function PietroFiorentiniBrandPage() {
  return (
    <>
      <ProductHero
        title="Pietro Fiorentini"
        subtitle="Gas Distribution Valves & Pressure Regulators"
        description="The Pietro Fiorentini range for natural gas transmission and distribution — Deltaflux trunnion mounted control ball valves rated to ANSI Class 2500, BF 31 and BF 32 gas distribution butterfly valves with hermetic sealing, and direct-operated gas pressure regulators up to 250 bar. Hydrogen ready and EN 334 fail-open, engineered by Pietro Fiorentini and operating in over 100 countries since 1940."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/deltaflux.jpg"
        imageAlt="Pietro Fiorentini Gas Valves & Regulators"
        breadcrumb="Products / Gas Distribution / Pietro Fiorentini"
      />
      <ProcessValvesGrid families={PIETRO_FIORENTINI_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
