import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import ProcessValvesGrid from "./ProcessValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/valves' },
  title: { absolute: "Industrial Valve Supplier and Valve Manufacturer Valvenok" },
  description:
    "Valvenok supplies a full range of industrial, marine and instrumentation valves for process plants, offshore platforms and shipbuilding. Ball, gate, globe, check, butterfly and instrumentation valves in SS316, duplex and carbon steel.",
};

const VALVE_FAMILIES: Category[] = [
  {
    code: "IBV",
    title: "Ball Valves",
    subtitle:
      "Industrial Ball Valve Range — 1-Piece, 2-Piece, 3-Piece & Fire-Safe",
    description:
      "Industrial ball valve range across 11 distinct series — 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact and fire-safe flanged designs. Stainless steel 316 (CF8M) construction with PTFE / RTFE seat options, API 607 fire-safe certification on select ranges, and NACE MR-0175 sour-gas service available.",
    specs: [
      "11 Ball Valve Series",
      "Stainless Steel 316 (CF8M)",
      '1/8" – 12" Size Range',
      "Up to 2000 PSI",
      "API 607 Fire Safe",
      "ANSI · PN · JIS Flanged",
    ],
    applications:
      "Oil & Gas, Petrochemical, Process Plants, Refining, OEM Manufacturing, Utility Service",
    href: "/valves/industrial-valves/ball-valves",
    image:
      "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg",
  },
  {
    code: "IGV",
    title: "Globe Valves",
    subtitle: "Industrial Globe Valve Range — Multi-Brand",
    description:
      "Industrial globe valve range for precise flow regulation and throttling across demanding process applications. Lined, welded bonnet, bolted bonnet and union bonnet designs from Fisher, Bonney Forge and UTAM Syncercon, suited for high-pressure, corrosive and marine service.",
    specs: [
      "Lined, Welded, Bolted & Union Bonnet",
      "CL 150 – Class 4500",
      "Fisher · Bonney Forge · UTAM",
      "Carbon, Bronze & Alloy Steel",
      "Screwed & Flanged End",
      "Flow Regulation & Throttling",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Plants, Marine, Shipbuilding, Refining",
    href: "/valves/industrial-valves/globe-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/globe-bonnet-valve.png",
     },
  {
    code: "IGT",
    title: "Gate Valves",
    subtitle: "Industrial Gate Valve Range — UTAM Syncercon",
    description:
      "Bolted bonnet and union bonnet gate valves engineered for reliable shut-off performance, leak-proof operation and long service life in marine, shipbuilding and offshore environments.",
    specs: [
      "Bolted & Union Bonnet",
      "ASME Class 150 / 300",
      "UTAM Syncercon",
      "Bronze, Duplex Stainless",
      "Screwed & Flanged End",
      "Lloyd's Register Approved",
    ],
    applications: "Marine, Shipbuilding, Offshore, Seawater Service",
    href: "/valves/industrial-valves/gate-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png",
      },
  {
    code: "CVL",
    title: "Control Valves",
    subtitle: "Severe Service Control Valves — Atlas Series",
    description:
      "VSI Atlas Series severe service control valves engineered for the most demanding high-pressure, high-noise and erosive process conditions. Precise flow control, extended maintenance cycles and 700:1 control range at ±3% accuracy.",
    specs: [
      '2" – 4" NPS',
      "Cv Up to 300",
      "0–5,000 psi DP",
      "< 60 dB Choked Flow",
      "2+ Year Maintenance Cycle",
      "700:1 Control Range",
    ],
    applications:
      "Oil & Gas, Petrochemical, Pump Testing, Storage Blowdown, High-Flow Process Control",
    href: "/valves/industrial-valves/control-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png",
  },
  {
    code: "CKV",
    title: "Check Valves",
    subtitle: "Non-Return Valves — Swing & Bolted Bonnet",
    description:
      "Cast steel swing check valves rated to ASME Class 1500 across NPS 2–48, and high-integrity bolted bonnet designs rated to CL2500 for high-temperature and high-pressure service. Sourced from Velan and Anderson Greenwood.",
    specs: [
      "NPS 2–48 | DN 50–1200",
      "ASME Class 150–2500",
      "API 594",
      "Cast & Alloy Steel",
      "Full Bore Flow Path",
      "High-Temperature Service",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Plants, Refining",
    href: "/valves/industrial-valves/check-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png",
  },
  {
    code: "BFV",
    title: "Butterfly Valves",
    subtitle: "Industrial Butterfly Valve Range",
    description:
      "Industrial butterfly valves for on/off and throttling service across process plant, water treatment and marine applications. Wafer, lug and double flanged configurations in a range of materials.",
    specs: [
      "NPS 2–48 | DN 50–1200",
      "ASME 150–1500",
      "Wafer · Lug · Flanged",
      "High-Pressure Rated",
      "On/Off & Throttling",
    ],
    applications:
      "Oil & Gas, Water Treatment, Marine, Process Plants, Power Generation",
    href: "/valves/industrial-valves/butterfly-valves",
    image:
      "https://pblol2.blob.core.windows.net/mars-valves/butterfly-valve.jpg",
  },

  {
    code: "INV",
    title: "Instrumentation Valves",
    subtitle: "Precision SS316 Instrumentation",
    description:
      "SS316 instrumentation valves for precise flow control and leak-tight isolation on high-pressure gauge, sampling and process measurement lines. Ball, needle, check and relief variants across NPT, BSPT and BSPP standards for oil & gas, petrochemical and power generation.",
    specs: [
      "Ball · Needle · Check · Relief",
      "SS316",
      "NPT · BSPT · BSPP",
      "High Pressure Rated",
      "Leak-Tight Isolation",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Measurement, Sampling Lines",
    href: "/valves/instrumentation-valves",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png",
  },
  {
    code: "SLV",
    title: "Sealed Valves",
    subtitle: "Bellows Sealed Globe Valves — DIN · ANSI · JIS",
    description:
      "A complete range of bellows sealed globe valves across DIN, ANSI and JIS standards. Double seal design with bellows plus packing backup ensures zero stem leakage across demanding process, chemical and industrial applications.",
    specs: [
      "DIN · ANSI · JIS",
      "Zero Stem Leakage",
      "Double Seal — Bellows + Packing",
      "11 Variants",
      "Certification Varies by Model",
    ],
    applications:
      "Process Plants, Chemical, Pharmaceutical, Power Generation, Industrial",
    href: "/valves/sealed-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg",
  },
  {
    code: "DVC",
    title: "Danfoss Valve Components",
    subtitle: " Valve Components",
    description:
      "Danfoss valve components for proportional and directional control valve systems. Full OEM and aftermarket supply across the Danfoss PVG valve range — supporting mobile hydraulics, agricultural machinery, construction equipment and industrial hydraulic applications.",
    specs: [
      "Danfoss OEM Quality",
      "PVG Series Compatible",
      "Mobile Hydraulics",
      "Certification Varies by Model",
      "Fast Availability",
    ],
    applications:
      "Mobile Hydraulics, Agricultural Machinery, Construction Equipment, Marine, Industrial",
    href: "/valves/valve-components",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-vc.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/new-logo.svg",
  },
];

const TRUST_POINTS = [
  { value: "API 6D / 600", label: "Industry Standards" },
  { value: "Marine Class Approvals", label: "Selected Models" },
  { value: "SS316 · Duplex", label: "Material Options" },
  { value: "DN15 – DN600", label: "Size Range" },
  { value: "UK Based", label: "Technical Support" },
];

export default function ProcessValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Valve Manufacturer for Industrial, Marine and Instrumentation"
        subtitle="Flow Control for Every Industrial Environment"
        description="A complete range of industrial, marine and instrumentation valves engineered for demanding service conditions. From high-pressure process isolation to precision instrumentation lines and class society approved marine valves — Valvenok delivers the flow control you can trust."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industiral-hero.jpg"
        imageAlt="Valvenok Industrial & Marine Valves"
        breadcrumb="Products / Valves"
      />
      <ProcessValvesGrid families={VALVE_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
