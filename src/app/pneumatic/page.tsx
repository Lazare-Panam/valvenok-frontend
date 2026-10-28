import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import PneumaticsGrid from "./PneumaticsGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic' },
  title: "Pneumatics & Vacuum | Cylinders, Valves & Actuators",
  description:
    "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
  openGraph: {
    title: "Pneumatics & Vacuum | Cylinders, Valves & Actuators | Valvenok",
    description: "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
    url: "/pneumatic",
    siteName: "Valvenok",
    type: "website",
  },
};

const PNEUMATIC_FAMILIES: Category[] = [
  {
    code: "CYL",
    title: "Cylinders",
    subtitle: "ISO & Round Body Pneumatic Cylinders",
    description:
      "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
    specs: [
      "ISO 15552 & VDMA",
      "32 – 250mm Bore",
      "Up to 1000mm Stroke",
      "Double Acting",
      "Magnetic Piston Option",
    ],
    applications: "Assembly Lines, Material Handling, Automotive, Food & Beverage, Packaging",
    href: "/pneumatic/cylinders",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/cylinder/DSNC_7050.png",
  },
  {
    code: "PV",
    title: "Pneumatic Valves",
    subtitle: "Solenoid & Foot Pedal Control Valves",
    description:
      "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
    specs: [
      "2/2 · 3/2 · 5/2 · 5/3 Way",
      "BSP 1/8\" – 1\"",
      "Single & Double Solenoid",
      "Center Closed Variants",
      "Foot Pedal Options",
    ],
    applications: "Industrial Automation, Machine Building, Process Control, Hands-Free Operation",
    href: "/pneumatic/valves",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves2.png",
  },
  {
    code: "ACT",
    title: "Pneumatic Actuators",
    subtitle: "Quarter-Turn Rotary Actuators",
    description:
      "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
    specs: [
      "Rack & Pinion · Scotch Yoke",
      "Double Acting · Spring Return",
      "ISO 5211 Mount",
      "90° Rotation",
      "Fail-Safe Options",
    ],
    applications: "Oil & Gas, Process Control, Water Treatment, Chemical, Offshore",
    href: "/pneumatic/actuators",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
  },
  {
    code: "AG",
    title: "Air Blow Guns",
    subtitle: "Industrial Pneumatic Air Guns",
    description:
      "Pneumatic components for industrial automation: ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns. Request a quote.",
    specs: [
      "Metal Body",
      "Multiple Nozzle Types",
      "Short · Long · Angled",
      "Industrial Heavy-Duty",
      "BSP Connection",
    ],
    applications: "Machine Cleaning, Part Drying, Assembly Lines, Workshop, Maintenance",
    href: "/pneumatic/air-gun",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/air-gun/air-gun.png",
  },
];

const TRUST_POINTS = [
  { value: "ISO 15552", label: "Cylinder Standard" },
  { value: "5/2 · 5/3 Way", label: "Valve Configurations" },
  { value: "ISO 5211", label: "Actuator Mounting" },
  { value: "BSP 1/8\" – 1\"", label: "Port Size Range" },
  { value: "UK Based", label: "Technical Support" },
];

export default function PneumaticsIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatics & Vacuum"
        subtitle="Cylinders, Valves & Actuators for Industrial Automation"
        description="A complete range of pneumatic components engineered for reliable industrial automation. ISO cylinders for linear motion, solenoid and foot pedal valves for directional control, pneumatic actuators for valve automation, and air blow guns for cleaning and maintenance applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg"
        imageAlt="Valvenok Pneumatic Components"
        breadcrumb="Products / Pneumatics & Vacuum"
      />
      <PneumaticsGrid families={PNEUMATIC_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}