import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";
import { pageMetadata } from "@/src/app/Common/seo";
import RelatedLinks from "@/src/app/Common/Products_Page/RelatedLinks";

export const metadata: Metadata = pageMetadata({
  title: "Industrial Butterfly Valves — Centric & Triple Offset | Valvenok",
  description:
    "Industrial butterfly valves from Mars Valves, Pietro Fiorentini and Value Valves: centric, double and triple offset, lined, cryogenic and marine designs.",
  path: "/valves/industrial-valves/butterfly-valves",
});

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
    applications:
      "Oil & Gas, Chemical Processing, Power Generation, Industrial Process",
    href: "/valves/industrial-valves/butterfly-valves/mars-butterfly",
    image:
      "https://pblol2.blob.core.windows.net/mars-valves/butterfly-valve.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
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
      "Pietro Fiorentini",
    ],
    applications:
      "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Power Generation",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf31",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-31.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
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
      "Pietro Fiorentini",
    ],
    applications:
      "Natural Gas Distribution, Medium & Low Pressure Networks, Oil & Gas, Compressed Air",
    href: "/valves/industrial-valves/butterfly-valves/pf-bf32",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/bf-32.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  },
  {
    code: "VF-8A",
    title: "VF-8A Triple Offset Butterfly Valve",
    subtitle: "High Performance Triple Offset — ANSI 150 / 300 / 600LB",
    description:
      "Value Valves VF-8A Series high performance triple offset butterfly valves. ANSI 150LB, 300LB and 600LB pressure classes, DN100–DN1200, API 607 fire safe, SIL 3 capable and rated from -100°C to +760°C for the most demanding process applications.",
    specs: [
      "ANSI 150 / 300 / 600LB",
      'DN100–DN1200 (4"–48")',
      "API 607 Fire Safe",
      "SIL 3 Capable",
      "-100°C to +760°C",
      "Class V Bubble Tight",
    ],
    applications:
      "Petrochemical, Power Generation, Refinery, Steel Mill, Cryogenic, Pulp & Paper, Nuclear Power",
    href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-7",
    title: "VF-7 Series Concentric Butterfly Valve",
    subtitle: 'Centric Butterfly Valves — DN40–DN1800 (1½"–72")',
    description:
      "Value Valves VF-7 Series concentric butterfly valves. Wafer, lug and flanged end connections across DN40–DN1800. Bi-directional bubble tight shutoff, soft seat design, NSF61 & NSF 372 certified, ATEX approved and ABS certified for shipbuilding. Designed per API 609, ASME B16.34 and ISO 5208.",
    specs: [
      'DN40–DN1800 (1½"–72")',
      "10 bar (STD) / 16 bar (OPT)",
      "Wafer · Lug · Flanged",
      "NSF61 & NSF 372",
      "ATEX Certified",
      "ABS Ship Certified",
    ],
    applications:
      "HVAC, Shipbuilding, Petrochemical, Fire Control, Seawater, Flue Gas, Desulphurization",
    href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-264",
    title: "VF-264 AWWA Double Flanged Butterfly Valve",
    subtitle: 'AWWA C504 & C516 Double Flanged — 14"–104"',
    description:
      'Value Valves VF-264 Series AWWA double flanged type butterfly valves. DN350–DN2600 (14"–104"), AWWA C504 and C516, pressure classes 25B, 75B and 150B. Double eccentric disc design, bi-directional tight shutoff, hard rubber lining available for seawater service.',
    specs: [
      'DN350–DN2600 (14"–104")',
      "AWWA C504 & C516",
      "Classes 25B · 75B · 150B",
      "Double Eccentric Design",
      "Hard Rubber Lining Option",
      "Bi-Directional Tight Shutoff",
    ],
    applications:
      "Water Works, Water Treatment, Seawater, Exhaust, Power Plant Condensate",
    href: "/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/awwaa.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-9A",
    title: "VF-9A Series High Performance Double Eccentric Butterfly Valve",
    subtitle: 'Double Eccentric — ANSI 150LB & 300LB — 2"–48"',
    description:
      'Value Valves VF-9A Series high performance double eccentric butterfly valves. Six series across ANSI 150LB and 300LB — soft seat, metal seat + PTFE and metal seat configurations. DN50–DN1200 (2"–48"), SIL 2 certified, API 607 fire safe, ATEX approved and leakage Class IV/V.',
    specs: [
      "ANSI 150LB & 300LB",
      'DN50–DN1200 (2"–48")',
      "Soft · Metal+PTFE · Metal Seat",
      "API 607 Fire Safe",
      "SIL 2 / IEC 61508",
      "ATEX 2014/34/EU",
    ],
    applications:
      "Petrochemical, Oil Refining, Power Generation, Food Industry, Chemical Processing",
    href: "/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Double-Offset__25C11bHDDc.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-265A",
    title: "VF-265A Ship-Building Butterfly Valve",
    subtitle: 'Marine Flanged Butterfly Valve — DN50–DN600 (2"–24")',
    description:
      'Value Valves VF-265A Series ship-building butterfly valves. Flanged type, 10 bar and 16 bar pressure ratings, DN50–DN600 (2"–24"), soft seat, JIS 10K face to face. ABS, LR, BV, DNV, CR and CCS class society certified. Used on over 1,000 ships worldwide since 1980.',
    specs: [
      'DN50–DN600 (2"–24")',
      "10 bar & 16 bar",
      "Flanged — JIS 10K",
      "ABS · LR · BV · DNV · CR · CCS",
      "Soft Seat",
      "ISO 5211 Mounting",
    ],
    applications: "Shipbuilding, Marine, Naval Vessels",
    href: "/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/vf-265-ship-building.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-9A-AC",
    title: "VF-9A Anti-Condensation Double Eccentric Butterfly Valve",
    subtitle:
      'Double Eccentric With Jacket Option — ANSI 150LB & 300LB — 2"–48"',
    description:
      'Value Valves VF-9A Series high-performance double eccentric butterfly valves with anti-condensation jacket option. ANSI 150LB and 300LB, DN50–DN1200 (2"–48"), soft seat, fire safe metal seat and full metal seat. SIL2 certified, TUV PED(H) and ATEX approved for oil, gas, petrochemical and industrial process applications.',
    specs: [
      "ANSI 150LB & 300LB",
      'DN50–DN1200 (2"–48")',
      "Anti-Condensation Jacket",
      "SIL2 / IEC 61508-1",
      "TUV PED(H) · ATEX",
      "API 607 Fire Safe",
    ],
    applications:
      "Petrochemical, Oil Refining, Power Generation, Chemical Processing, High-Temperature & Cryogenic Service",
    href: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-CRYO",
    title: "Cryogenic Butt Welded Butterfly Valve",
    subtitle:
      'Cryogenic Double Eccentric & Triple Offset — ANSI 150LB — 2"–36"',
    description:
      "Value Valves cryogenic butterfly valves — double eccentric and triple offset designs for LNG, LPG, petrochemical and nuclear power service. ANSI 150LB, -196°C to +760°C, butt welding, lugged and short flanged end connections. API 609 Monogram, API 607 fire safe, SIL2/SIL3, TUV PED(H) and ATEX certified.",
    specs: [
      "ANSI 150LB",
      'DN50–DN900 (2"–36")',
      "-196°C to +760°C",
      "Butt Weld · Lugged · Short Flanged",
      "API 609 Monogram · API 607",
      "SIL2 / SIL3",
    ],
    applications:
      "LNG, LPG, Cryogenic, Petrochemical, Nuclear Power, Fossil & Cogeneration Power",
    href: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butterfly-weld.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-75",
    title: "VF-75 PTFE / PFA Lined Centric Butterfly Valve",
    subtitle: 'PTFE & PFA Lined — DN50–DN600 (2"–24") — Up To 16 Bar',
    description:
      "Value Valves VF-75 Series centric butterfly valves with full PTFE or PFA lined disc and body seat. DN50–DN600, up to 16 bar, -35°C to +200°C. Wafer, lugged and flanged end connections. EN 593, API 609 and BS 5155 design standard for chemical, petrochemical, water treatment and food processing applications.",
    specs: [
      'DN50–DN600 (2"–24")',
      "Up To 16 Bar",
      "PTFE / PFA Lining",
      "-35°C to +200°C",
      "Wafer · Lugged · Flanged",
      "EN 593 · API 609",
    ],
    applications:
      "Chemical, Petrochemical, Water & Wastewater, Food Processing, Mining, HVAC, Shipbuilding",
    href: "/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },
  {
    code: "VF-3",
    title: "VF-3 Series Butterfly Damper Valve",
    subtitle: 'Damper Valves — Centric, Double & Triple Eccentric — 2"–96"',
    description:
      'Value Valves VF-3 Series butterfly damper valves — centric, double eccentric and triple eccentric designs. Metal, rubber and PTFE seat options. 2"–96", up to 1093°C. Wafer, short body flange and long body flange. For HVAC, water treatment, flue gas and industrial gas damper applications.',
    specs: [
      '2"–96" Size Range',
      "-46°C to +1093°C",
      "Metal · Rubber · PTFE Seat",
      "3 Valve Types",
      "Class IV Shutoff",
      "ISO 5211",
    ],
    applications:
      "HVAC, Water Treatment, Flue Gas, Combustion Air, Industrial Gas, Chimney Damper",
    href: "/valves/industrial-valves/butterfly-valves/damper-butterfly-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/damper-valve.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
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
      <RelatedLinks links={[{ label: "Triple Offset Butterfly Valves", href: "/triple-offset-butterfly-valves" }, { label: "401N Wafer Double Offset Butterfly Valve", href: "/valves/industrial-valves/butterfly-valves/401n-wafer-double-offset-butterfly-valve" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
