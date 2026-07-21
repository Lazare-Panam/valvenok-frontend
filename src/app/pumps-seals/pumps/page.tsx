import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import PumpsGrid from "./PumpsGrid";

export const metadata: Metadata = {
  title: "WALRUS Pumps | Water Supply & Industrial Pumping | Valvenok",
  description:
    "Valvenok supplies a full range of WALRUS pumps for water supply, drainage and industrial applications — electronic control, automatic booster, multistage centrifugal, direct water, submersible, and hot water series.",
};

const WALRUS_LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp";
const PUMP_FAMILIES: Category[] = [
  {
    code: "LMP",
    title: "Electronic Control Pump",
    subtitle: "LMP / Atomizer / PSI / PW / PK Series",
    description:
      "WALRUS specialised pumps including high-head screw pumps, atomizer pumps and general utility pumps for agriculture, construction and manufacturing applications.",
    specs: [
      "0.1 – 7.5 kW",
      "Up to 800M Head",
      "Up to 1,000 L/min",
      "Up to 30 kg/cm²",
    ],
    applications: "Manufacturing, Agriculture, Construction, Water Supply & Pollution Control, Entertainment & Leisure",
    href: "/pumps-seals/pumps/specialised-pumps",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/LMP2050.png",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TP8",
    title: "Automatic Booster Pump",
    subtitle: "TP8 / GQ / GQCN / TP3 / TPGK Series",
    description:
      "WALRUS regenerative pumps for domestic, light industrial and manufacturing applications. Five series across 50Hz and 60Hz operation.",
    specs: [
      "0.18 – 0.98 kW",
      "50Hz / 60Hz",
      "Up to 62M Head",
      "Up to 85 L/min",
    ],
    applications: "Construction, Agriculture, Entertainment & Leisure, Accommodation & Food Service, Wholesale & Retail, Manufacturing",
    href: "/pumps-seals/pumps/regenerative-pump",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPGK.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "HQIC",
    title: "Multistage Centrifugal Pump",
    subtitle: "HQIC / TPH_IC / TPM_IC Series",
    description:
      "WALRUS inverter-driven constant pressure control systems for consistent flow across industrial and commercial water supply. Five series including single and x2 configurations.",
    specs: ["0.37 – 7.5 kW", "Up to 8.0 kg/cm²", "Up to 1,600 L/min"],
    applications: "Construction, Agriculture, Entertainment & Leisure, Accommodation & Food Service, Wholesale & Retail, Service",
    href: "/pumps-seals/pumps/inverter-constant-pressure-systems",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/HQIC.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TP8B",
    title: "Direct Water Pump",
    subtitle: "TP8 / GQB / GQCN_B Series",
    description:
      "WALRUS peripheral booster pumps for domestic, light industrial and manufacturing applications. Six series across 50Hz and 60Hz operation.",
    specs: [
      "0.18 – 0.98 kW",
      "50Hz / 60Hz",
      "Up to 62M Head",
      "Up to 85 L/min",
    ],
    applications: "Construction, Agriculture, Entertainment & Leisure, Accommodation & Food Service, Wholesale & Retail, Manufacturing",
    href: "/pumps-seals/pumps/peripheral-booster-pumps",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TP8.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TPAK",
    title: "Submersible Pump",
    subtitle: "TPAK-J / TPHK / TPMK Series",
    description:
      "WALRUS immersible centrifugal pumps engineered for manufacturing industry applications, across seven series and 50Hz/60Hz operation.",
    specs: [
      "0.18 – 18.5 kW",
      "50Hz / 60Hz",
      "Up to 267M Head",
      "Up to 650 L/min",
    ],
    applications: "Manufacturing Industry",
    href: "/pumps-seals/pumps/immersible-centrifugal-pumps",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPAK-J.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "WQB",
    title: "Hot Water Pump",
    subtitle: "WQ_B / HQ_B / TQ_B Series",
    description:
      "WALRUS horizontal centrifugal pumps for residential, commercial and light industrial water supply. Stainless steel impellers, dual outlet configurations and electronic control options across six series.",
    specs: [
      "0.18 – 3.7 kW",
      "50Hz / 60Hz",
      "Up to 56M Head",
      "Up to 270 L/min",
    ],
    applications: "Construction, Agriculture, Entertainment & Leisure, Accommodation & Food Service, Wholesale & Retail, Service",
    href: "/pumps-seals/pumps/horizontal-centrifugal-pumps",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp",
    logoUrl: WALRUS_LOGO,
  },
  
];

const TRUST_POINTS = [
  { value: "9 Series", label: "Pump Families" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
  { value: "Up to 800M", label: "Max Head" },
  { value: "Up to 1,600 L/min", label: "Max Flow" },
  { value: "WALRUS", label: "OEM Brand" },
];

export default function WalrusPumpsIndexPage() {
  return (
    <>
      <ProductHero
        title="WALRUS Pumps"
        subtitle="Water Supply, Drainage & Industrial Pumping Systems"
        description="A full range of WALRUS pumps engineered for reliable water supply and industrial pumping — electronic control, automatic booster, multistage centrifugal, direct water, submersible and hot water series, all built for demanding commercial and industrial use."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp"
        imageAlt="WALRUS Pumps"
        breadcrumb="Products / Pumps"
      />
      <PumpsGrid families={PUMP_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}