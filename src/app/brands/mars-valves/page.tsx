import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import ProcessValvesGrid from "../../valves/ProcessValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/brands/mars-valves' },
  title: { absolute: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok" },
  description:
    "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
  openGraph: {
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    description: "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    url: "/brands/mars-valves",
    siteName: "Valvenok",
    type: "website",
  },
};

const MARS_VALVE_SERIES: Category[] = [
  {
    code: "MV-3PE",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Three-Piece Economy Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded Ends"],
    applications: "General Industrial, Process Plants, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/eco-three-piece.png",
  },
  {
    code: "MV-FS",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "API 607 Fire-Safe Certified Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["API 607 7th Edition", "3-Piece & Flanged", "CF8M / WCB Bodies"],
    applications: "Oil & Gas, Petrochemical, Refining",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/fire-safe.jpg",
  },
  {
    code: "MV-FL",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Flanged End Connections",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Flanged Ends", "ANSI · PN Standards", "Full Bore Available"],
    applications: "Process Plants, Oil & Gas, Power Generation, Industrial Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/flanged.jpg",
  },
  {
    code: "MV-1P",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Compact Single-Body Design",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["One-Piece Body", "Compact Design", "Threaded Ends"],
    applications: "General Industrial, OEM, Utility Service, Process Lines",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/one-piece.png",
  },
  {
    code: "MV-HP",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "High-Pressure Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Up to 6000 PSI (Series Dependent)", "CF8M / WCB Bodies", "Delrin / PEEK Seats"],
    applications: "Oil & Gas, Hydraulic Systems, High-Pressure Process Lines",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/series-hp.jpg",
  },
  {
    code: "MV-3P",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Standard Three-Piece Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Three-Piece Body", "In-Line Serviceable", "Threaded & Flanged Ends"],
    applications: "Oil & Gas, Process Plants, General Industrial, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-piece.jpg",
  },
  {
    code: "MV-3W",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Multi-Port Flow Diversion",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Three-Way Port", "L-Port & T-Port", "Flow Diversion & Mixing"],
    applications: "Process Plants, Chemical, OEM, Flow Diversion Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/three-way.jpg",
  },
  {
    code: "MV-2P",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Standard Two-Piece Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Two-Piece Body", "Wide Size Range", "Threaded & Flanged Ends"],
    applications: "General Industrial, Process Plants, Oil & Gas, Utility Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/two-piece.jpg",
  },
  {
    code: "MV-UF",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Uni-Body Flanged Series",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
    specs: ["Uni-Body Flanged", "Reduced Port", "ANSI Class 150 / 300"],
    applications: "Process Plants, Industrial Service",
    href: "/valves/mars-valves",
    image: "https://pblol2.blob.core.windows.net/mars-valves/categories/uni-flanged.png",
  },
  {
    code: "MV-VP",
    title: "Mars Ball Valves — 1, 2 & 3-Piece and Flanged | Valvenok",
    subtitle: "Characterised V-Port Control",
    description:
      "Mars stainless steel ball valves in 1-piece, 2-piece, 3-piece, multi-way, wafer and flanged designs, with API 607 fire-safe series available.",
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