import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";

import PumpsGrid from "../../pumps-seals/pumps/PumpsGrid";

const WALRUS_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/walrus-pumps" },
  title: { absolute: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok" },
  description:
    "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
  openGraph: {
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    description: "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
    url: "/brands/walrus-pumps",
    siteName: "Valvenok",
    type: "website",
  },
};

const WALRUS_PUMP_FAMILIES: Category[] = [
  {
    code: "WQB",
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "WQ_B / HQ_B / TQ_B Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "TP8 / GQB / GQCN_B Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "HS / TS Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "TP3_PTB Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "PW_A / PW_E Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "TQCN / HQCN Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "HQC / TQC Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
    title: "WALRUS Pumps — Booster, Centrifugal & Submersible | Valvenok",
    subtitle: "TPRK_E / TPHK / TPK Series",
    description:
      "WALRUS booster, multistage centrifugal, submersible, hot water and electronic control pumps for water supply, drainage and industrial pumping.",
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
