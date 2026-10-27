import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import PumpsGrid from "../../pumps-seals/pumps/PumpsGrid";

const WALRUS_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/walrus-pumps" },
  title: "WALRUS Pumps",
  description:
    "Valvenok supplies WALRUS pumps — electronic control, automatic booster, multistage centrifugal, direct water, submersible, hot water, automatic flow-controlled and immersible series for water supply, drainage and industrial pumping.",
  openGraph: {
    title: "WALRUS Pumps | Valvenok",
    description: "Valvenok supplies WALRUS pumps — electronic control, automatic booster, multistage centrifugal, direct water, submersible, hot water, automatic flow-controlled and immersible series for water supply, drainage and industrial pumping.",
    url: "/brands/walrus-pumps",
    siteName: "Valvenok",
    type: "website",
  },
};

const WALRUS_PUMP_FAMILIES: Category[] = [
  {
    code: "WQB",
    title: "Electronic Control Pump",
    subtitle: "WQ_B / HQ_B / TQ_B Series",
    description:
      "WALRUS all-in-one electronic control pumps — pump, motor, pressure tank and electronic controller in a single compact unit. Constant pressure control starts the pump automatically on demand, with dry-run and anti-cycling protection.",
    specs: [
      "0.18 – 3.7 kW",
      "Up to 52M Head",
      "Up to 270 L/min",
      "Max. 8.3 bar (8.5 kg/cm²) system pressure",
    ],
    applications:
      "Manufacturing, Agriculture, Construction, Water Supply & Pollution Control, Entertainment & Leisure",
    href: "/pumps-seals/pumps/electronic-control-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TP8B",
    title: "Automatic Booster Pump",
    subtitle: "TP8 / GQB / GQCN_B Series",
    description:
      "WALRUS peripheral booster pumps for domestic, light industrial and manufacturing applications. Six series across 50Hz and 60Hz operation.",
    specs: ["0.18 – 0.98 kW", "50Hz / 60Hz", "Up to 62M Head", "Up to 85 L/min"],
    applications:
      "Construction, Agriculture, Entertainment & Leisure, Accommodation & Food Service, Wholesale & Retail, Manufacturing",
    href: "/pumps-seals/pumps/automatic-booster-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TP8.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "HSTS",
    title: "Multistage Centrifugal Pump",
    subtitle: "HS / TS Series",
    description:
      "WALRUS multistage centrifugal pumps for pressure boosting from city mains or private water systems. Close-coupled, corrosion resistant construction with steady, quiet, vibration-free operation.",
    specs: ["0.18 – 3.7 kW", "50Hz / 60Hz", "Up to 50M Head", "Up to 270 L/min"],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Manufacturing, Accommodation & Food Service, Service, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control",
    href: "/pumps-seals/pumps/multistage-centrifugal-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HS.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TP3B",
    title: "Direct Water Pump",
    subtitle: "TP3_PTB Series",
    description:
      "WALRUS direct water pumps with a brass-made impeller for high temperature and friction resistance, and a plastic pump body for safe, hygienic water quality. Compact, low-noise construction for domestic and light industrial use.",
    specs: ["0.18 – 0.37 kW", "50Hz / 60Hz", "Up to 40M Head", "Up to 42 L/min"],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Manufacturing, Accommodation & Food Service, Service, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control",
    href: "/pumps-seals/pumps/direct-water-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP3.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "PWA",
    title: "Submersible Pump",
    subtitle: "PW_A / PW_E Series",
    description:
      "WALRUS submersible pumps for clean water in a corrosion-resistant, compact design. IP68 rated with thermal overload protection, suitable for drainage, fish breeding and confined-space pumping.",
    specs: ["100 – 800 W", "50Hz / 60Hz", "Up to 14M Head", "Up to 440 L/min"],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control, Manufacturing, Accommodation & Food Service, Service",
    href: "/pumps-seals/pumps/submersible-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PW.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TQCN",
    title: "Hot Water Pump",
    subtitle: "TQCN / HQCN Series",
    description:
      "WALRUS all-in-one electronic control pumps rated for hot water up to +90°C. Pump, motor, pressure tank and controller in a single unit, with automatic relief valve and anti-cycling protection.",
    specs: ["0.18 – 3.7 kW", "50Hz / 60Hz", "Up to 50M Head", "Up to 270 L/min"],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Manufacturing, Accommodation & Food Service, Service, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control",
    href: "/pumps-seals/pumps/hot-water-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TQCN200B.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "HQC",
    title: "Automatic Flow-Controlled Pump",
    subtitle: "HQC / TQC Series",
    description:
      "WALRUS automatic flow-controlled pumps designed to install below a water tower for downward pressurization. The pump automatically starts and increases pressure when water is used, and shuts off automatically when demand stops.",
    specs: [
      "0.18 – 0.75 kW",
      "50Hz / 60Hz",
      "Up to 4.3 bar (4.4 kg/cm²)",
      "Up to 120 L/min",
    ],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Manufacturing, Accommodation & Food Service, Service, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control",
    href: "/pumps-seals/pumps/automatic-flow-controlled-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HQC_200B.webp",
    logoUrl: WALRUS_LOGO,
  },
  {
    code: "TPRKE",
    title: "Immersible Pump",
    subtitle: "TPRK_E / TPHK / TPK Series",
    description:
      "WALRUS vertical multistage centrifugal immersible pumps for industrial use, especially machine tools. Self-priming, stainless steel construction across three series for water, coolant, light oil and other clean, non-aggressive fluids.",
    specs: [
      "0.22 – 18.5 kW",
      "50Hz / 60Hz",
      "Up to 267M Head",
      "Up to 650 L/min",
    ],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Manufacturing, Accommodation & Food Service, Service, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control",
    href: "/pumps-seals/pumps/immersible-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK.webp",
    logoUrl: WALRUS_LOGO,
  },
];

const TRUST_POINTS = [
  { value: "8 Series", label: "Pump Families" },
  { value: "50Hz / 60Hz", label: "Frequency Support" },
  { value: "Up to 267M", label: "Max Head" },
  { value: "Up to 650 L/min", label: "Max Flow" },
  { value: "WALRUS", label: "Brand" },
];

export default function WalrusPumpsBrandPage() {
  return (
    <>
      <ProductHero
        title="WALRUS Pumps"
        subtitle="Water Supply, Drainage & Industrial Pumping — 8 Series"
        description="WALRUS pumps — electronic control, automatic booster, multistage centrifugal, direct water, submersible, hot water, automatic flow-controlled and immersible series. Engineered for reliable water supply and industrial pumping across demanding commercial and industrial use, with 50Hz/60Hz support and heads up to 267M."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp"
        imageAlt="WALRUS Pumps"
        breadcrumb="Products / Pumps / WALRUS Pumps"
      />
      <PumpsGrid families={WALRUS_PUMP_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
