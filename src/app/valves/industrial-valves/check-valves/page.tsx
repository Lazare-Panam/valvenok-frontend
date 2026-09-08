import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/valves/industrial-valves/check-valves' },
  title: "Check Valves",
  description:
    "Valvenok supplies a full range of industrial check valves — cast steel swing check, bolted bonnet and more from leading global manufacturers including Velan and Anderson Greenwood.",
};

const CHECK_VALVE_SERIES: Category[] = [
  {
    code: "VEL-SWC",
    title: "Cast Steel Swing Check Valves",
    subtitle: "API 594 Swing Check — NPS 2–48",
    description:
      "Velan cast steel swing check valves engineered for reliable non-return service across a wide size and pressure range. Built to API 594 standards with full bore flow path and high-pressure capability up to Class 1500.",
    specs: [
      "NPS 2–48 | DN 50–1200",
      "ASME Class 150–1500",
      "High-Pressure Rated",
      "Cast Steel Body",
      "API 594",
      "Full Bore Flow Path",
    ],
    applications: "Oil & Gas, Petrochemical, Power Generation, Process Plants, Refining",
    href: "/valves/industrial-valves/check-valves/velan-swing-check",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/velan-logo.png",
  },
  {
    code: "AG-FBB",
    title: "Bolted Bonnet Check Valves",
    subtitle: "Bolted Bonnet Check — NPS 2–6+",
    description:
      "Anderson Greenwood Fasani bolted bonnet check valves for high-integrity non-return service in demanding process conditions. Rated to ASME CL2500 with high-temperature capability for critical pipeline applications.",
    specs: [
      "NPS 2–6+ | DN 50–150+",
      "ASME CL150–CL2500",
      "Up to 400°F+ (204°C+)",
      "Bolted Bonnet Design",
      "High-Integrity Service",
      "Carbon & Alloy Steel",
    ],
    applications: "Oil & Gas, Petrochemical, High-Temperature Process, Refining, Power Generation",
    href: "/valves/industrial-valves/check-valves/ag-fasani-check",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/bolted-bonnet-check-valves.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg",
  },
  {
  code: "VV-CV125",
  title: "Dual Plate Check Valve",
  subtitle: 'CV-125 — ANSI 150LB — 1.5"–48"',
  description:
    'Value Valves CV-125 dual plate check valve for reliable reverse-flow protection. 1.5"–48" (DN40–DN1200), ANSI 150LB, -20°C to +120°C. Lightweight dual plates with independent springs, resilient long-life seat, low cracking pressure and minimal head loss for compact, energy-efficient installation.',
  specs: [
    '1.5"–48" (DN40–DN1200)',
    "ANSI 150LB",
    "-20°C to +120°C",
    "Non-Slam Shutoff",
    "Low Cracking Pressure",
    "Compact Face-To-Face",
  ],
  applications: "Water Treatment, Energy, Petrochemical, Marine, HVAC",
  href: "/valves/industrial-valves/check-valves/dual-plate-check-valve",
  image: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/check-value.png",
  logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
},
  
];

const TRUST_POINTS = [
  { value: "CL 150–2500", label: "Pressure Classes" },
  { value: "API 594", label: "Industry Standard" },
  { value: 'NPS 2–48"', label: "Size Range" },
  { value: "Cast & Alloy Steel", label: "Materials" },
  { value: "Multi-Brand", label: "Product Range" },
];

export default function CheckValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Check Valves"
        subtitle="Non-Return Valves — Swing, Bolted Bonnet & More"
        description="Valvenok supplies a comprehensive range of check valves engineered for reliable non-return service across the full spectrum of industrial process conditions. From cast steel swing check valves rated to ASME Class 1500 across NPS 2–48, to high-integrity bolted bonnet designs rated to CL2500 for high-temperature and high-pressure service — every valve sourced from trusted global manufacturers and built for leak-tight, maintenance-free performance in oil & gas, petrochemical, power generation and refining."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png"
        imageAlt="Industrial Check Valves"
        breadcrumb="Products / Valves / Check Valves"
      />
      <ProcessValvesGrid families={CHECK_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}