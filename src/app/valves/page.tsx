import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import ProcessValvesGrid from "./ProcessValvesGrid";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";

export const metadata: Metadata = {
  alternates: { canonical: '/valves' },
  title: { absolute: "Industrial Valves Supplier UK | Ball, Gate, Globe & Check | Valvenok" },
  description:
    "Industrial, marine and instrumentation valves for process plants, offshore and shipbuilding: ball, gate, globe, check and butterfly valves. Get a quote.",
  openGraph: {
    type: "website",
    url: "/valves",
    title: "Industrial Valves Supplier UK | Valvenok",
    description:
      "Ball, gate, globe, check, butterfly, control, instrumentation and bellows sealed valves from leading manufacturers, supplied from the UK.",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industiral-hero.jpg",
        alt: "Industrial and marine valves supplied by Valvenok",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Valves Supplier UK | Valvenok",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industiral-hero.jpg"],
  },
};

const VALVE_FAMILIES: Category[] = [
  {
    code: "IBV",
    title: "Ball Valves",
    subtitle:
      "Industrial Ball Valve Range — 1-Piece, 2-Piece, 3-Piece & Fire-Safe",
    description:
      "11 stainless steel ball valve series from 1/8\" to 12\": 1-piece, 2-piece, 3-piece and API 607 fire-safe designs, with ANSI, PN and JIS flanged ends.",
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
      "Lined, welded, bolted and union bonnet globe valves from Fisher, Bonney Forge and UTAM, rated CL 150 to Class 4500 for flow regulation and throttling.",
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
      "UTAM Syncercon bolted and union bonnet gate valves in bronze and duplex stainless, ASME Class 150/300, for marine and seawater service.",
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
      "Atlas severe service control valves, 2\" to 4\" NPS, Cv up to 300 and 0–5,000 psi differential pressure, with a 700:1 control range.",
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
      "API 594 swing and bolted bonnet non-return valves in cast and alloy steel, NPS 2–48 (DN 50–1200), ASME Class 150–2500.",
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
      "Wafer, lug and flanged butterfly valves, NPS 2–48 (DN 50–1200) and ASME 150–1500, for on/off and throttling duty.",
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
      "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/butterfly-valve.webp",
  },

  {
    code: "INV",
    title: "Instrumentation Valves",
    subtitle: "Precision SS316 Instrumentation",
    description:
      "SS316 ball, needle, check and relief valves with NPT, BSPT and BSPP ends for leak-tight isolation on instrument and sampling lines.",
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
      "Bellows sealed globe valves to DIN, ANSI and JIS, with a double bellows-and-packing seal for zero stem leakage. 11 variants.",
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
        title="Industrial, Marine and Instrumentation Valves Supplier"
        subtitle="Flow Control for Every Industrial Environment"
        description="A complete range of industrial, marine and instrumentation valves from leading manufacturers for demanding service conditions. From high-pressure process isolation to precision instrumentation lines and class society approved marine valves — supplied and supported by Valvenok in the UK."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/industiral-hero.webp"
        imageAlt="Valvenok Industrial & Marine Valves"
        breadcrumb="Products / Valves"
      />
      <ProcessValvesGrid families={VALVE_FAMILIES} />
      <RelatedLinks links={[{ label: "Marine Valves", href: "/valves/marine-valves" }, { label: "All Product Categories", href: "/categories" }, { label: "Why Buy Valves From a UK Stockist", href: "/news/uk-valve-stockist" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
