import type { Metadata } from "next";
import ProductHero from "../Common/Products_Page/ProductHero";
import TrustStrip from "../Common/Products_Page/TrustStrip";
import { Category } from "../Common/Products_Page/ProductCard";
import PneumaticsGrid from "./PneumaticsGrid";

export const metadata: Metadata = {
  title: "Pneumatics & Vacuum | Cylinders, Valves & Actuators",
  description:
    "Valvenok supplies a full range of pneumatic components for industrial automation. ISO cylinders, solenoid valves, foot pedal valves, pneumatic actuators and air blow guns — engineered for reliable factory floor performance.",
};

const PNEUMATIC_FAMILIES: Category[] = [
  {
    code: "CYL",
    title: "Cylinders",
    subtitle: "ISO & Round Body Pneumatic Cylinders",
    description:
      "Standard and extended bore range pneumatic cylinders in ISO tie rod, round body and compact short stroke configurations. Bore sizes 32–250mm, strokes up to 1000mm, magnetic and non-magnetic piston options for position sensing.",
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
      "FG and TG series solenoid valves in 2/2, 3/2, 5/2 and 5/3 way configurations, plus heavy-duty foot pedal valves for hands-free machine control. Single solenoid, double solenoid, center closed and high pressure variants across BSP 1/8\" to 1\" port sizes.",
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
      "Double-acting and spring-return pneumatic actuators for quarter-turn valve automation. Rack-and-pinion and scotch yoke designs for ball, butterfly and plug valves — ISO 5211 mounting, fail-safe spring return configurations for process control.",
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
      "Industrial pneumatic air blow guns for cleaning and drying applications. Metal body construction with multiple nozzle configurations — short, small, long angled and long bead nozzles for different industrial cleaning and blowing requirements.",
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
  { value: "Fast Dispatch", label: "Availability" },
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