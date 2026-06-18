import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";

export const metadata: Metadata = {
  title: "Industrial Butterfly Valves | Valvenok",
  description:
    "Valvenok supplies a full range of industrial butterfly valves — high-performance designs from Mars Valves and Pietro Fiorentini for gas distribution, oil & gas, and process applications.",
};

const BUTTERFLY_VALVE_SERIES: Category[] = [
  {
    code: "MARS-BFV",
    title: "Butterfly Valves",
    subtitle: "Industrial Butterfly Valves — NPS 2–48",
    description:
      "Butterfly valves by Mars Valves engineered for industrial flow control applications. Available across ASME Class 150–1500 and NPS 2–48 for demanding process environments requiring precision flow control.",
    specs: [
      "NPS 2–48 | DN 50–1200",
      "ASME Class 150–1500",
      "High-Pressure Service",
      "Industrial Flow Control",
      "Precision Engineered",
      "Mars Valves",
    ],
    applications: "Oil & Gas, Chemical Processing, Power Generation, Industrial Process",
    href: "/valves/industrial-valves/butterfly-valves/mars-butterfly",
    image: "https://pblol2.blob.core.windows.net/mars-valves/butterfly-valve.jpg",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
  },
  {
    code: "PF-BF31",
    title: "BF 31 Butterfly Valve",
    subtitle: "Large Bore Butterfly Valve — DN 300–600",
    description:
      "Pietro Fiorentini BF 31 butterfly valve for medium and low pressure gas distribution networks. Hermetic internal seal, 360° butterfly rotation for self-cleaning, chromium-plated spherical seat for low control torques and long service life. Rated to 16 bar UNI PN16 / 19 bar ANSI 150 RF.",
    specs: [
      "DN 300–600 | 12\"–24\"",
      "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)",
      "Hermetic Internal Seal",
      "360° Self-Cleaning Rotation",
      "NBR / FKM Sealing Options",
      "Pietro Fiorentini",
    ],
    applications: "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Power Generation",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf31",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-31.jpg",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  },
  {
    code: "PF-BF32",
    title: "BF 32 Butterfly Valve",
    subtitle: "Medium Bore Butterfly Valve — DN 50–250",
    description:
      "Pietro Fiorentini BF 32 butterfly valve for medium and low pressure gas distribution. Features dual sealing rings with leak-check port, chromium-plated spherical seat, and 360° self-cleaning rotation. Rated to 16 bar UNI PN16 / 19 bar ANSI 150 RF across DN 50–250.",
    specs: [
      "DN 50–250 | 2\"–10\"",
      "16 bar (UNI PN16) / 19 bar (ANSI 150 RF)",
      "Dual Sealing Rings",
      "In-Line Seal Check Port",
      "VITON Standard / NBR on Request",
      "Pietro Fiorentini",
    ],
    applications: "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Compressed Air",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf32",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-32.jpg",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  },
];

const TRUST_POINTS = [
  { value: "DN 50–1200", label: "Size Range" },
  { value: "Up to Class 1500", label: "Max Pressure Class" },
  { value: "16–19 bar", label: "Gas Distribution Rating" },
  { value: "VITON / NBR / FKM", label: "Seal Options" },
  { value: "Multi-Brand", label: "Product Range" },
];

export default function ButterflyValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Butterfly Valves"
        subtitle="Industrial Butterfly Valve Range — Multi-Brand"
        description="Valvenok supplies a comprehensive range of industrial butterfly valves engineered for reliable flow interception and low pressure loss across gas distribution, oil & gas, and process applications. From Mars Valves high-pressure butterfly valves rated to ASME Class 1500 across NPS 2–48, to Pietro Fiorentini BF 31 and BF 32 series for medium and low pressure natural gas networks — every valve sourced from trusted global manufacturers and built for hermetic, leak-tight performance."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-31.jpg"
        imageAlt="Industrial Butterfly Valves"
        breadcrumb="Products / Valves / Butterfly Valves"
      />
      <ProcessValvesGrid families={BUTTERFLY_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}