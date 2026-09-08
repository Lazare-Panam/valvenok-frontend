import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/brands/mars-valves' },
  title: "Mars Ball Valves",
  description:
    "Valvenok supplies the full Mars ball valve range — 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact and fire-safe flanged designs in stainless steel 316 with API 607 fire-safe certification.",
};

const MARS_VALVE_SERIES: Category[] = [
  {
    code: "MV-3PE",
    title: "Eco Three-Piece Ball Valve",
    subtitle: "Three-Piece Economy Series",
    description:
      "Economy three-piece ball valve for standard industrial service. Three-piece body design allows in-line maintenance without removing the valve from the pipeline.",
    specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded Ends"],
    applications: "General Industrial, Process Plants, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/eco-three-piece.png",
  },
  {
    code: "MV-FS",
    title: "Fire-Safe Ball Valve",
    subtitle: "API 607 Fire-Safe Certified",
    description:
      "Fire-safe ball valve certified to API 607. Designed to maintain shut-off integrity under fire conditions, suitable for critical isolation service in hazardous areas.",
    specs: ["API 607 Fire-Safe", "Critical Isolation", "Hazardous Area Rated"],
    applications: "Oil & Gas, Petrochemical, Refining, Hazardous Areas",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/fire-safe.jpg",
  },
  {
    code: "MV-FL",
    title: "Flanged Ball Valve",
    subtitle: "Flanged End Connections",
    description:
      "Flanged ball valve for direct pipeline integration. Available in standard flange face options for process plant and industrial service.",
    specs: ["Flanged Ends", "ANSI · PN Standards", "Full Bore Available"],
    applications: "Process Plants, Oil & Gas, Power Generation, Industrial Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/flanged.jpg",
  },
  {
    code: "MV-GV",
    title: "Gate Valve",
    subtitle: "Full Bore On/Off Isolation",
    description:
      "Gate valve for full-bore, low-restriction on/off isolation service. Suitable for applications where minimal pressure drop and straight-through flow are required.",
    specs: ["Full Bore", "On/Off Isolation", "Rising Stem"],
    applications: "Oil & Gas, Process Plants, Water Treatment, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/gate-valve.jpg",
  },
  {
    code: "MV-1P",
    title: "One-Piece Ball Valve",
    subtitle: "Compact Single-Body Design",
    description:
      "One-piece ball valve in a compact, lightweight body for general service applications. Cost-effective solution for standard flow isolation.",
    specs: ["One-Piece Body", "Compact Design", "Threaded Ends"],
    applications: "General Industrial, OEM, Utility Service, Process Lines",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/one-piece.png",
  },
  {
    code: "MV-PFA",
    title: "PFA-Lined Ball Valve",
    subtitle: "Corrosion-Resistant PFA Lining",
    description:
      "PFA-lined ball valve for aggressive chemical and corrosive media service. Full PFA lining protects the valve body from chemical attack while maintaining tight shut-off.",
    specs: ["PFA Lining", "Corrosion Resistant", "Chemical Service"],
    applications: "Chemical Processing, Pharmaceuticals, Aggressive Media, Acid Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/pfa-lining.jpg",
  },
  {
    code: "MV-SC",
    title: "Segment Control Valve",
    subtitle: "Throttling & Flow Control",
    description:
      "Segment control valve for precise throttling and flow control in demanding process applications. Segmented disc design provides accurate flow characterisation.",
    specs: ["Segmented Disc", "Flow Throttling", "Control Service"],
    applications: "Process Control, Chemical, Food & Beverage, Wastewater",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/segment-control.jpg",
  },
  {
    code: "MV-HP",
    title: "High-Pressure Ball Valve",
    subtitle: "High-Pressure Series",
    description:
      "High-pressure ball valve engineered for demanding service conditions requiring elevated pressure ratings. Heavy-duty construction for reliable isolation in high-pressure systems.",
    specs: ["High-Pressure Rated", "Heavy-Duty Body", "Tight Shut-Off"],
    applications: "Oil & Gas, Hydraulic Systems, High-Pressure Process Lines",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/series-hp.jpg",
  },
  {
    code: "MV-3P",
    title: "Three-Piece Ball Valve",
    subtitle: "Standard Three-Piece Series",
    description:
      "Three-piece ball valve for industrial service. Removable end caps allow full in-line inspection and maintenance without disturbing the pipeline.",
    specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded & Flanged Ends"],
    applications: "Oil & Gas, Process Plants, General Industrial, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-piece.jpg",
  },
  {
    code: "MV-3W",
    title: "Three-Way Ball Valve",
    subtitle: "Multi-Port Flow Diversion",
    description:
      "Three-way ball valve for flow diversion, mixing or splitting service. L-port and T-port configurations available for flexible pipeline routing.",
    specs: ["Three-Way Port", "L-Port & T-Port", "Flow Diversion & Mixing"],
    applications: "Process Plants, Chemical, OEM, Flow Diversion Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-way.jpg",
  },
  {
    code: "MV-2P",
    title: "Two-Piece Ball Valve",
    subtitle: "Standard Two-Piece Series",
    description:
      "Two-piece ball valve for general industrial and process service. Versatile two-piece body available in a wide range of sizes and pressure ratings.",
    specs: ["Two-Piece Body", "Wide Size Range", "Threaded & Flanged Ends"],
    applications: "General Industrial, Process Plants, Oil & Gas, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/two-piece.jpg",
  },
  {
    code: "MV-UF",
    title: "Uni-Flanged Ball Valve",
    subtitle: "Universal Flanged Series",
    description:
      "Uni-flanged ball valve with universal flange pattern for flexible installation across multiple pipeline standards. Compact flanged design for space-constrained applications.",
    specs: ["Universal Flange", "Compact Design", "Multi-Standard Compatible"],
    applications: "Process Plants, Industrial Service, Multi-Standard Pipelines",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/uni-flanged.png",
  },
  {
    code: "MV-VP",
    title: "V-Port Ball Valve",
    subtitle: "Characterised V-Port Control",
    description:
      "V-port ball valve for characterised flow control and throttling service. V-shaped ball provides equal percentage flow characteristics for precise process control.",
    specs: ["V-Port Ball", "Equal % Flow Characteristic", "Control & Throttling"],
    applications: "Process Control, Chemical, Power Generation, Flow Regulation",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/v-port.png",
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
        title="Mars Ball Valves"
        subtitle="Industrial Ball Valve Range — 11 Series"
        description="The complete Mars ball valve range — 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact and fire-safe flanged designs. Stainless steel 316 (CF8M) construction, API 607 fire-safe certified, NACE MR-0175 sour-gas service available."
        imageSrc="https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg"
        imageAlt="Mars Ball Valves"
        breadcrumb="Products / Valves / Mars Ball Valves"
      />
      <ProcessValvesGrid families={MARS_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}