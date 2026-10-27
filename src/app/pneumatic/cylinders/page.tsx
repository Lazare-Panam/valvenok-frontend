import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import CylindersGrid from "./CylindersGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic/cylinders' },
  title: "Pneumatic Cylinders | ISO-15552 Profile Cylinders",
  description:
    "Valvenok supplies a full range of ISO-15552 profile pneumatic cylinders. SDNC, ESNC and ESC series across bore sizes 32mm to 320mm, magnetic and non-magnetic variants, strokes up to 1000mm.",
  openGraph: {
    title: "Pneumatic Cylinders | ISO-15552 Profile Cylinders | Valvenok",
    description: "Valvenok supplies a full range of ISO-15552 profile pneumatic cylinders. SDNC, ESNC and ESC series across bore sizes 32mm to 320mm, magnetic and non-magnetic variants, strokes up to 1000mm.",
    url: "/pneumatic/cylinders",
    siteName: "Valvenok",
    type: "website",
  },
};

const CYLINDER_FAMILIES: Category[] = [
  {
    code: "SDNC",
    title: "SDNC Series",
    subtitle: "Standard ISO-15552 Profile Cylinder",
    description:
      "Double-acting ISO-15552 profile pneumatic cylinders. The reliable workhorse for general automation, packaging and process machinery — available in magnetic and non-magnetic variants.",
    specs: ["ISO 15552", "Ø32 – Ø125 mm", "Stroke 25 – 1000 mm", "Magnetic / Non-Magnetic"],
    applications: "Industrial Automation, Packaging, Process Machinery",
    href: "/pneumatic/cylinders/sdnc",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/SDNC/SDNC_no_bg.png",
  },
  {
    code: "ESNC",
    title: "ESNC Series",
    subtitle: "Extended Bore ISO-15552 Tie Rod Cylinder",
    description:
      "Double-acting ISO-15552 tie rod profile pneumatic cylinders with extended bore range up to Ø200mm. Built for heavy-duty industrial applications requiring high force output.",
    specs: ["ISO 15552 Tie Rod", "Ø32 – Ø200 mm", "Stroke 25 – 1000 mm", "Non-Magnetic"],
    applications: "Heavy-Duty Automation, Material Handling, Press & Clamping",
    href: "/pneumatic/cylinders/esnc",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/DSNC_7050.png",
  },
  {
    code: "ESC",
    title: "ESC Series",
    subtitle: "Standard Tie Rod Profile Cylinder",
    description:
      "SPAC standard tie rod double-acting pneumatic cylinders. Standard and through-rod configurations across bore sizes 32mm to 250mm, magnetic and non-magnetic variants.",
    specs: ["Tie Rod Profile", "Ø32 – Ø250 mm", "Standard & Through Rod", "Magnetic / Non-Magnetic"],
    applications: "Industrial Automation, OEM Machinery, Process Equipment",
    href: "/pneumatic/cylinders/esc",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/DSNC_7050.png",
  },
  {
  code: "SDNU",
  title: "SDNU Series",
  subtitle: "ISO-6432 Stainless Steel Round Body Cylinder",
  description:
    "Double-acting ISO-6432 round body pneumatic cylinders in stainless steel. Compact magnetic-piston design across bore sizes 12mm to 25mm, with optional adjustable cushioning for end-of-stroke control in food, pharma and washdown applications.",
  specs: ["ISO 6432", "SS Round Body", "Ø12 – Ø25 mm", "Magnetic / Cushion Option"],
  applications: "Food & Beverage, Pharma, Washdown, Hygienic Automation",
  href: "/pneumatic/cylinders/sdnu",
  image:
    "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/DSC_7890_SDNU_rb.png",
},
];

const TRUST_POINTS = [
  { value: "ISO 15552", label: "Compliance Standard" },
  { value: "Ø32 – Ø320 mm", label: "Full Bore Range" },
  { value: "Up to 1000 mm", label: "Stroke Length" },
  { value: "Magnetic Variants", label: "Sensor-Ready" },
  { value: "UK Based", label: "Technical Support" },
];

export default function CylindersIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatic Cylinders"
        subtitle="ISO-15552 Profile Cylinders for Industrial Automation"
        description="A complete range of double-acting pneumatic cylinders engineered to ISO-15552 standards. Standard profile, tie rod and extended bore series — magnetic and non-magnetic variants across the full bore and stroke spectrum."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/pneumatic-cylinder/cylinder-hero.jpg"
        imageAlt="Valvenok ISO-15552 Pneumatic Cylinders"
        breadcrumb="Products / Cylinders"
      />
      <CylindersGrid families={CYLINDER_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}