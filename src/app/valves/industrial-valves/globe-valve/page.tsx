import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";

export const metadata: Metadata = {
  title: "Industrial Globe Valves | Valvenok",
  description:
    "Valvenok supplies a full range of industrial globe valves — lined, welded bonnet and flanged designs from leading global manufacturers including Fisher and Bonney Forge.",
};

const GLOBE_VALVE_SERIES: Category[] = [
  {
    code: "FSH-RSS",
    title: "Lined Globe Valve",
    subtitle: "Lined Globe Valve — NPS 1–4",
    description:
      "Fisher RSS lined globe valve for precise flow regulation in corrosive and aggressive media service. Available in CL 150 and CL 300 pressure classes across NPS 1 to 4 for process plant and chemical applications.",
    specs: [
      "NPS 1, 1-1/2, 2, 3, 4",
      "CL 150 & CL 300",
      "Lined Construction",
      "Corrosive Media Service",
      "Precise Flow Regulation",
      "Fisher Engineered",
    ],
    applications: "Chemical Processing, Petrochemical, Process Plants, Corrosive Media Service",
    href: "/valves/industrial-valves/globe-valve/fisher-rss-lined",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/fisher-rss.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg",
  },
  {
    code: "BF-WBG",
    title: "Globe Valves — Welded Bonnet",
    subtitle: "High-Pressure Welded Bonnet — Up to 11,250 psig",
    description:
      "Bonney Forge welded bonnet globe valves for extreme high-pressure service up to 11,250 psig (776 bar). Class 4500 LTD rated across NPS 1/4\"–2\" for critical isolation and flow control in demanding process environments.",
    specs: [
      'NPS 1/4"–2" | DN 6–50',
      "Class 4500 LTD",
      "Up to 11,250 psig (776 bar)",
      "Welded Bonnet Design",
      "High-Pressure Service",
      "Bonney Forge",
    ],
    applications: "Oil & Gas, High-Pressure Process, Petrochemical, Refining, Critical Isolation Service",
    href: "/valves/industrial-valves/globe-valve/bonney-forge-welded-bonnet",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/globe-valve.png",
    logoUrl: "https://pblol2.blob.core.windows.net/valvenok-images/brands/bf-logo.jpg",
  },

];

const TRUST_POINTS = [
  { value: "CL 150–4500", label: "Pressure Classes" },
  { value: "Up to 11,250 psig", label: "Max Pressure Rating" },
  { value: 'NPS 1/4"–4"', label: "Size Range" },
  { value: "Lined & Welded Bonnet", label: "Design Options" },
  { value: "Multi-Brand", label: "Product Range" },
];

export default function GlobeValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Globe Valves"
        subtitle="Industrial Globe Valve Range — Multi-Brand"
        description="Valvenok supplies a comprehensive range of industrial globe valves engineered for precise flow regulation, throttling and critical isolation across demanding process conditions. From Fisher RSS lined globe valves for corrosive media service to Bonney Forge welded bonnet designs rated to Class 4500 and 11,250 psig — every valve sourced from trusted global manufacturers and built for reliable, leak-tight performance in oil & gas, petrochemical, chemical processing and refining."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Automated_flanged_globe_valve.jpg"
        imageAlt="Industrial Globe Valves"
        breadcrumb="Products / Valves / Globe Valves"
      />
      <ProcessValvesGrid families={GLOBE_VALVE_SERIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}