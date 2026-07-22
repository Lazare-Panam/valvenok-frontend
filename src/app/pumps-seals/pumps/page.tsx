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

const WALRUS_LOGO =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/walrus_pumps.webp";
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
    specs: [
      "0.18 – 0.98 kW",
      "50Hz / 60Hz",
      "Up to 62M Head",
      "Up to 85 L/min",
    ],
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
    specs: [
      "0.18 – 3.7 kW",
      "50Hz / 60Hz",
      "Up to 50M Head",
      "Up to 270 L/min",
    ],
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
    specs: [
      "0.18 – 0.37 kW",
      "50Hz / 60Hz",
      "Up to 40M Head",
      "Up to 42 L/min",
    ],
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
      "WALRUS submersible pumps for clean water in a corrosion-resistant, compact design. IP68 rated with thermal overload protection, suitable for garden ponds, fish breeding, drainage and confined-space pumping.",
    specs: ["100 – 800 W", "50Hz / 60Hz", "Up to 14M Head", "Up to 440 L/min"],
    applications:
      "Construction, Electricity & New Energy, Wholesale & Retail, Agriculture & Fishing, Entertainment & Leisure, Water Supply & Pollution Control, Manufacturing, Accommodation & Food Service, Service",
    href: "/pumps-seals/pumps/submersible-pump",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PW.webp",
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
