import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import ProcessValvesGrid from "./ProcessValvesGrid";

export const metadata: Metadata = {
  title: "Industrial & Marine Valves | Valvenok",
  description:
    "Valvenok supplies a full range of industrial, marine and instrumentation valves for process plants, offshore platforms and shipbuilding. Ball, gate, globe, check, butterfly and instrumentation valves in SS316, duplex and carbon steel.",
};

const VALVE_FAMILIES: Category[] = [
  {
    code: "IBV",
    title: "Ball Valves",
    subtitle: "Industrial Ball Valve Range — 1-Piece, 2-Piece, 3-Piece & Fire-Safe",
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
    applications: "Oil & Gas, Petrochemical, Process Plants, Refining, OEM Manufacturing, Utility Service",
    href: "/valves/industrial-valves/ball-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg",
  },
  {
    code: "IGV",
    title: "Globe & Gate Valves",
    subtitle: "Industrial Globe Valve Range — Flanged & Automated",
    description:
      "Industrial globe valve range for precise flow regulation and throttling across demanding process applications. Robust flanged construction with automated actuator options available, suited for high-pressure and high-temperature service in critical pipeline systems.",
    specs: [
      "Flanged End Connections",
      "Automated Actuator Options",
      "High-Pressure Service",
      "Carbon & Stainless Steel",
      "ANSI · PN Flanged",
      "Flow Regulation & Throttling",
    ],
    applications: "Oil & Gas, Petrochemical, Power Generation, Process Plants, Water Treatment, Refining",
    href: "/valves/industrial-valves/globe-valve",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/fisher-rss.png",
  },
  {
    code: "CVL",
    title: "Control Valves",
    subtitle: "Severe Service Control Valves — Atlas Series",
    description:
      "VSI Atlas Series severe service control valves engineered for the most demanding high-pressure, high-noise and erosive process conditions. Precise flow control, extended maintenance cycles and 700:1 control range at ±3% accuracy.",
    specs: [
      "2\" – 4\" NPS",
      "Cv Up to 300",
      "0–5,000 psi DP",
      "< 60 dB Choked Flow",
      "2+ Year Maintenance Cycle",
      "700:1 Control Range",
    ],
    applications: "Oil & Gas, Petrochemical, Pump Testing, Storage Blowdown, High-Flow Process Control",
    href: "/valves/industrial-valves/control-valves",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png",
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
    applications: "Oil & Gas, Petrochemical, Power Generation, Process Plants, Refining",
    href: "/valves/industrial-valves/check-valves",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png",
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
    applications: "Oil & Gas, Water Treatment, Marine, Process Plants, Power Generation",
    href: "/valves/industrial-valves/butterfly-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/butterfly-valve.jpg",
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
    applications: "Oil & Gas, Petrochemical, Power Generation, Process Measurement, Sampling Lines",
    href: "/valves/instrumentation-valves",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png",
  },
];

const TRUST_POINTS = [
  { value: "API 6D / 600", label: "Industry Standards" },
  { value: "Marine Certified", label: "LR · DNV · BV · ABS" },
  { value: "SS316 · Duplex", label: "Material Options" },
  { value: "DN15 – DN600", label: "Size Range" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function ProcessValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Industrial & Marine Valves"
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
