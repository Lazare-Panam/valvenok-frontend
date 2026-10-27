import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/brands/mars-valves' },
  title: "Mars Ball Valves",
  description:
    "Valvenok supplies Mars ball valves — 1-piece, 2-piece, 3-piece, multi-way, wafer compact and flanged designs in stainless steel, with API 607 fire-safe certified series available.",
  openGraph: {
    title: "Mars Ball Valves | Valvenok",
    description: "Valvenok supplies Mars ball valves — 1-piece, 2-piece, 3-piece, multi-way, wafer compact and flanged designs in stainless steel, with API 607 fire-safe certified series available.",
    url: "/brands/mars-valves",
    siteName: "Valvenok",
    type: "website",
  },
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
    subtitle: "API 607 Fire-Safe Certified Series",
    description:
      "Fire-safe ball valves certified to API 607 7th Edition (Series 83, 88, 90D and 91D), in 3-piece and flanged designs with CF8M or WCB bodies.",
    specs: ["API 607 7th Edition", "3-Piece & Flanged", "CF8M / WCB Bodies"],
    applications: "Oil & Gas, Petrochemical, Refining",
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
    code: "MV-HP",
    title: "High-Pressure Ball Valve",
    subtitle: "High-Pressure Series",
    description:
      "High-pressure ball valves for elevated-pressure service, with ratings up to 6000 PSI depending on series.",
    specs: ["Up to 6000 PSI (Series Dependent)", "CF8M / WCB Bodies", "Delrin / PEEK Seats"],
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
    title: "Uni-Body Flanged Ball Valve",
    subtitle: "Uni-Body Flanged Series",
    description:
      "Uni-body flanged ball valve with a reduced port, rated ANSI Class 150/300 in sizes 1/2\" to 6\". The Series 91D version is API 607 fire-safe certified.",
    specs: ["Uni-Body Flanged", "Reduced Port", "ANSI Class 150 / 300"],
    applications: "Process Plants, Industrial Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/uni-flanged.png",
  },
  {
    code: "MV-VP",
    title: "V-Port Ball Valve",
    subtitle: "Characterised V-Port Control",
    description:
      "V-port ball valve for flow control and throttling service, with 30°, 60° or 90° V-port balls across 3-piece, flanged and wafer series.",
    specs: ["V-Port Ball", "30° / 60° / 90° V-Port", "Control & Throttling"],
    applications: "Process Control, Chemical, Power Generation, Flow Regulation",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/v-port.png",
  },
];

const TRUST_POINTS = [
  { value: "API 607", label: "Fire Safe Certified" },
  { value: "SS316 (CF8M)", label: "Material Standard" },
  { value: '1/8" – 12"', label: "Size Range" },
  { value: "Up to 6000 PSI", label: "Pressure Rating (Series Dependent)" },
  { value: "ISO 9001", label: "Manufacturer Quality System" },
];

export default function MarsValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Mars Ball Valves"
        subtitle="Industrial Ball Valve Range"
        description="Mars ball valves — 1-piece, 2-piece, 3-piece, multi-way, wafer compact and fire-safe flanged designs. Stainless steel (CF8M) construction, with API 607 fire-safe certified series available."
        imageSrc="https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg"
        imageAlt="Mars Ball Valves"
        breadcrumb="Products / Valves / Mars Ball Valves"
      />
      <ProcessValvesGrid families={MARS_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}