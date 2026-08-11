import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";

export const metadata: Metadata = {
  title: "Mars Ball Valves | Valvenok",
  description:
    "Valvenok supplies the full Mars ball valve range — 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact and fire-safe flanged designs in stainless steel 316 with API 607 fire-safe certification.",
};

const MARS_VALVE_SERIES: Category[] = [
  {
    code: "MV-2P",
    title: "Ball Valves",
    subtitle: "Standard Two-Piece Series",
    description:
      "Two-piece ball valve for general industrial and process service. Versatile two-piece body available in a wide range of sizes and pressure ratings.",
    specs: ["Two-Piece Body", "Wide Size Range", "Threaded & Flanged Ends"],
    applications:
      "General Industrial, Process Plants, Oil & Gas, Utility Service",
    href: "/brands/mars-valves",
    image:
      "https://pblol2.blob.core.windows.net/mars-valves/categories/three-piece.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
  },
  {
    code: "CAM-370D",
    title: "Flanged Ball Valve",
    subtitle: "Cameron WKM — ASME 150–2500 Flanged",
    description:
      "Cameron WKM 370D series ball valve for high-integrity isolation across a wide pressure and size range. Flanged end connections rated to ASME Class 2500 for demanding oil & gas and process plant service.",
    specs: [
      '2"–16" | 50–400 mm',
      "ASME CL 150–2500",
      "Flanged End Connections",
      "High-Integrity Isolation",
      "Cameron Engineered",
      "Oil & Gas Rated",
    ],
    applications:
      "Oil & Gas, Petrochemical, Process Plants, Refining, High-Pressure Service",
    href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/wkm-370d.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png",
  },
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
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg",
  },
  

  // MARS_VALVE_SERIES blob
  {
    code: "VV-2P",
    title: "2-Piece Ball Valve",
    subtitle: '2-Piece Floating Ball Valve — ANSI 150/300LB — 1/2"–12"',
    description:
      'Value Valves 2-piece floating ball valve. 1/2"–12", ANSI 150/300LB, PN10/16/25/40, -20°C to +200°C. Fire safe, bi-directional, blow-out proof stem, anti-static, ISO 5211 mounting. ISO 9001, ISO 10497, API 607 certified. 100% hydraulic leakage tested before release.',
    specs: [
      '1/2"–12" (DN15–DN300)',
      "ANSI 150/300LB · PN10/16/25/40",
      "-20°C to +200°C",
      "API 607 Fire Safe",
      "ISO 9001 · ISO 10497",
      "100% Hydraulic Tested",
    ],
    applications:
      "Petroleum & Refining, Chemical, Power & Energy, Steel Mill, Mining Industry",
    href: "/valves/industrial-valves/ball-valves/two-piece-ball-valve",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/2-piece-bv.jpg",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg",
  },

  

  //     {
  //     code: "MV-3P",
  //     title: "Three-Piece Ball Valve",
  //     subtitle: "Standard Three-Piece Series",
  //     description:
  //       "Three-piece ball valve for industrial service. Removable end caps allow full in-line inspection and maintenance without disturbing the pipeline.",
  //     specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded & Flanged Ends"],
  //     applications: "Oil & Gas, Process Plants, General Industrial, Utility Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-piece.jpg",
  //   },
  //   {
  //     code: "MV-3W",
  //     title: "Three-Way Ball Valve",
  //     subtitle: "Multi-Port Flow Diversion",
  //     description:
  //       "Three-way ball valve for flow diversion, mixing or splitting service. L-port and T-port configurations available for flexible pipeline routing.",
  //     specs: ["Three-Way Port", "L-Port & T-Port", "Flow Diversion & Mixing"],
  //     applications: "Process Plants, Chemical, OEM, Flow Diversion Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-way.jpg",
  //   },

  //   {
  //     code: "MV-UF",
  //     title: "Uni-Flanged Ball Valve",
  //     subtitle: "Universal Flanged Series",
  //     description:
  //       "Uni-flanged ball valve with universal flange pattern for flexible installation across multiple pipeline standards. Compact flanged design for space-constrained applications.",
  //     specs: ["Universal Flange", "Compact Design", "Multi-Standard Compatible"],
  //     applications: "Process Plants, Industrial Service, Multi-Standard Pipelines",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/uni-flanged.png",
  //   },
  //   {
  //     code: "MV-3PE",
  //     title: "Eco Three-Piece Ball Valve",
  //     subtitle: "Three-Piece Economy Series",
  //     description:
  //       "Economy three-piece ball valve for standard industrial service. Three-piece body design allows in-line maintenance without removing the valve from the pipeline.",
  //     specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded Ends"],
  //     applications: "General Industrial, Process Plants, Utility Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/eco-three-piece.png",
  //   },
  //   {
  //     code: "MV-FS",
  //     title: "Fire-Safe Ball Valve",
  //     subtitle: "API 607 Fire-Safe Certified",
  //     description:
  //       "Fire-safe ball valve certified to API 607. Designed to maintain shut-off integrity under fire conditions, suitable for critical isolation service in hazardous areas.",
  //     specs: ["API 607 Fire-Safe", "Critical Isolation", "Hazardous Area Rated"],
  //     applications: "Oil & Gas, Petrochemical, Refining, Hazardous Areas",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/fire-safe.jpg",
  //   },
  //   {
  //     code: "MV-FL",
  //     title: "Flanged Ball Valve",
  //     subtitle: "Flanged End Connections",
  //     description:
  //       "Flanged ball valve for direct pipeline integration. Available in standard flange face options for process plant and industrial service.",
  //     specs: ["Flanged Ends", "ANSI · PN Standards", "Full Bore Available"],
  //     applications: "Process Plants, Oil & Gas, Power Generation, Industrial Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/flanged.jpg",
  //   },
  //   {
  //     code: "MV-GV",
  //     title: "Gate Valve",
  //     subtitle: "Full Bore On/Off Isolation",
  //     description:
  //       "Gate valve for full-bore, low-restriction on/off isolation service. Suitable for applications where minimal pressure drop and straight-through flow are required.",
  //     specs: ["Full Bore", "On/Off Isolation", "Rising Stem"],
  //     applications: "Oil & Gas, Process Plants, Water Treatment, Utility Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/gate-valve.jpg",
  //   },
  //   {
  //     code: "MV-1P",
  //     title: "One-Piece Ball Valve",
  //     subtitle: "Compact Single-Body Design",
  //     description:
  //       "One-piece ball valve in a compact, lightweight body for general service applications. Cost-effective solution for standard flow isolation.",
  //     specs: ["One-Piece Body", "Compact Design", "Threaded Ends"],
  //     applications: "General Industrial, OEM, Utility Service, Process Lines",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/one-piece.png",
  //   },
  //   {
  //     code: "MV-PFA",
  //     title: "PFA-Lined Ball Valve",
  //     subtitle: "Corrosion-Resistant PFA Lining",
  //     description:
  //       "PFA-lined ball valve for aggressive chemical and corrosive media service. Full PFA lining protects the valve body from chemical attack while maintaining tight shut-off.",
  //     specs: ["PFA Lining", "Corrosion Resistant", "Chemical Service"],
  //     applications: "Chemical Processing, Pharmaceuticals, Aggressive Media, Acid Service",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/pfa-lining.jpg",
  //   },
  //   {
  //     code: "MV-SC",
  //     title: "Segment Control Valve",
  //     subtitle: "Throttling & Flow Control",
  //     description:
  //       "Segment control valve for precise throttling and flow control in demanding process applications. Segmented disc design provides accurate flow characterisation.",
  //     specs: ["Segmented Disc", "Flow Throttling", "Control Service"],
  //     applications: "Process Control, Chemical, Food & Beverage, Wastewater",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/segment-control.jpg",
  //   },
  //   {
  //     code: "MV-HP",
  //     title: "High-Pressure Ball Valve",
  //     subtitle: "High-Pressure Series",
  //     description:
  //       "High-pressure ball valve engineered for demanding service conditions requiring elevated pressure ratings. Heavy-duty construction for reliable isolation in high-pressure systems.",
  //     specs: ["High-Pressure Rated", "Heavy-Duty Body", "Tight Shut-Off"],
  //     applications: "Oil & Gas, Hydraulic Systems, High-Pressure Process Lines",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/series-hp.jpg",
  //   },

  //   {
  //     code: "MV-VP",
  //     title: "V-Port Ball Valve",
  //     subtitle: "Characterised V-Port Control",
  //     description:
  //       "V-port ball valve for characterised flow control and throttling service. V-shaped ball provides equal percentage flow characteristics for precise process control.",
  //     specs: ["V-Port Ball", "Equal % Flow Characteristic", "Control & Throttling"],
  //     applications: "Process Control, Chemical, Power Generation, Flow Regulation",
  //     href: "/valves/mars-valves",
  //     image: "https://pblol2.blob.core.windows.net/mars-valves/categories/v-port.png",
  //   },
  {
    code: "BET-RPX",
    title: "Actuated Ball Valves",
    subtitle: "Actuated Stainless Steel — ANSI 150 Flanged",
    description:
      "Bettis RPX actuated stainless steel ball valves with ANSI 150 flanged end connections. Designed for automated flow control across a wide size range with reliable actuator-mounted operation for process plant and industrial service.",
    specs: [
      "NPS 1/2–8 | DN 15–200",
      "ANSI 150",
      "Flanged End Connections",
      "Stainless Steel Body",
      "Actuated Operation",
      "Automated Flow Control",
    ],
    applications:
      "Process Plants, Oil & Gas, Petrochemical, Automated Pipeline Systems",
    href: "/valves/industrial-valves/ball-valves/bettis-rpx",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/rps-actuated-ss.webp",
    logoUrl:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png",
  },
];

const TRUST_POINTS = [
  { value: "API 607", label: "Fire Safe Certified" },
  { value: "SS316 (CF8M)", label: "Material Standard" },
  { value: '1/8" – 12"', label: "Size Range" },
  { value: "Up to 2000 PSI", label: "Pressure Rating" },
  { value: "11 Series", label: "Ball Valve Range" },
];

export default function MarsValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Ball Valves"
        subtitle="Industrial Ball Valve Range — Multi-Brand"
        description="Valvenok supplies a comprehensive range of industrial ball valves across multiple leading manufacturers. From compact one-piece and versatile two-piece designs to three-piece in-line serviceable valves, fire-safe API 607 certified ranges, high-pressure series, V-port control valves and PFA-lined chemical service valves — every product engineered for reliable, leak-tight isolation and flow control across oil & gas, petrochemical, process plants and industrial service worldwide."
        imageSrc="https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg"
        imageAlt="Industrial Ball Valves"
        breadcrumb="Products / Valves / Ball Valves"
      />
      <ProcessValvesGrid families={MARS_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
