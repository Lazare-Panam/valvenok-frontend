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
    title: "Industrial Ball Valves",
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
    href: "/valves/mars-valves",
    image:
      "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg",
  },
  {
    code: "IV",
    title: "Industrial Valves",
    subtitle: "Process & Plant Flow Control",
    description:
      "Full range of industrial flow control valves for process plants, oil & gas facilities and power generation. Ball, gate, globe, check and butterfly valves in sizes DN15 to DN600, pressure classes 150 to 2500 — carbon steel, SS316 and duplex. API, ANSI and BS standards.",
    specs: [
      "Ball · Gate · Globe · Check · Butterfly",
      "DN15 – DN600",
      "Class 150 – 2500",
      "SS316 · Duplex · Carbon Steel",
      "API · ANSI · BS Standards",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Plants, Water Treatment",
    href: "/valves/industrial-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp",
  },
  {
    code: "MV",
    title: "Marine Valves",
    subtitle: "Shipbuilding & Offshore Class Approved",
    description:
      "Class society approved valves for commercial vessels, naval craft and offshore platforms. Certified by LR, DNV, BV, ABS and CCS. Bronze, nickel-aluminum bronze and SS316 for seawater service, ballast systems, fuel lines and fire-fighting installations.",
    specs: [
      "LR · DNV · BV · ABS · CCS",
      "Bronze · NAB · SS316",
      "Seawater Service",
      "Ballast & Fuel Systems",
      "Fire-Fighting Rated",
    ],
    applications:
      "Commercial Vessels, Naval Craft, Offshore Platforms, FPSOs, Shipbuilding",
    href: "/valves/marine-valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industrial-valves.jpg",
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
    code: "IGV",
    title: "Industrial Globe Valves",
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
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Plants, Water Treatment, Refining",
    href: "/valves",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Automated_flanged_globe_valve.jpg",
  },
  {
    code: "IGaV",
    title: "Industrial Gate Valves",
    subtitle: "Industrial Gate Valve Range — Flanged & Threaded",
    description:
      "Industrial gate valve range designed for full-bore, low-restriction flow in on/off isolation service. Available in flanged and threaded end connections with rising and non-rising stem options, suited for high-pressure and high-temperature applications across process and utility systems.",
    specs: [
      "Flanged & Threaded Ends",
      "Rising & Non-Rising Stem",
      "Full Bore Design",
      "Carbon & Stainless Steel",
      "ANSI · PN Flanged",
      "On/Off Isolation Service",
    ],
    applications:
      "Oil & Gas, Petrochemical, Power Generation, Process Plants, Water Treatment, Refining",
    href: "/valves/",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Inconel_gate_valve--The-Alloy-Valve-Stockist.jpg",
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
