import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import PneumaticValvesGrid from "./PneumaticValvesGrid";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic/valves' },
  title: "Pneumatic Valves | Solenoid & Foot Pedal Valves",
  description:
    "Valvenok supplies a full range of pneumatic solenoid and foot pedal valves for industrial automation. FG series 5/2 and 5/3 way solenoid valves, TG series multi-configuration solenoid valves, and foot pedal valves for hands-free machine control.",
};

const VALVE_FAMILIES: Category[] = [
  {
    code: "FG",
    title: "FG Series",
    subtitle: "5/2 & 5/3 Way Pneumatic Solenoid Valves",
    description:
      "Pneumatic solenoid valves in 5/2 and 5/3 way configurations for industrial automation and process control. Single and double solenoid variants across BSP 1/8\" to 1\" port sizes — center closed options available for 5/3 way applications.",
    specs: [
      "5/2 · 5/3 Way",
      "BSP 1/8\" – 1\"",
      "Single & Double Solenoid",
      "Center Closed Variants",
      "ISO 5211 Compatible",
    ],
    applications: "Industrial Automation, Process Control, Machine Building, Pneumatic Circuits",
    href: "/pneumatic/valves/fg",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves2.png",
  },
  {
    code: "TG",
    title: "TG Series",
    subtitle: "2/2, 3/2, 5/2 & 5/3 Way Solenoid Valves",
    description:
      "Comprehensive range of pneumatic solenoid valves covering 2/2, 3/2, 5/2 and 5/3 way configurations. Single solenoid, double solenoid, center closed and high pressure variants across BSP 1/8\" to 1/2\" port sizes for demanding industrial environments.",
    specs: [
      "2/2 · 3/2 · 5/2 · 5/3 Way",
      "BSP 1/8\" – 1/2\"",
      "Single & Double Solenoid",
      "High Pressure Options",
      "Center Closed Variants",
    ],
    applications: "Industrial Automation, Machine Building, Process Control, High Pressure Applications",
    href: "/pneumatic/valves/tg",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves.png",
  },
  {
    code: "TG-FP",
    title: "Foot Pedal Valves",
    subtitle: "Hands-Free Pneumatic Foot Pedal Control",
    description:
      "Heavy-duty pneumatic foot pedal valves for hands-free machine control and operator safety. Available in 3/2, 4/2 and 5/2 way configurations with BSP 1/4\" connections — locking and guard variants for safety-critical applications.",
    specs: [
      "3/2 · 4/2 · 5/2 Way",
      "BSP 1/4\"",
      "Hands-Free Operation",
      "Lock & Guard Variants",
      "Industrial Heavy-Duty",
    ],
    applications: "Press Machines, Assembly Lines, Machine Tools, Safety-Critical Applications",
    href: "/pneumatic/valves/foot-pedal",
    image: "https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/foot-pedal.jpg",
  },
];

const TRUST_POINTS = [
  { value: "5/2 · 5/3 Way", label: "Valve Configurations" },
  { value: "BSP 1/8\" – 1\"", label: "Port Size Range" },
  { value: "Single & Double", label: "Solenoid Options" },
  { value: "High Pressure", label: "Specialist Variants" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function ValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatic Valves"
        subtitle="Solenoid & Foot Pedal Valves for Industrial Automation"
        description="A complete range of pneumatic solenoid and foot pedal valves for industrial automation, machine building and process control. FG and TG series solenoid valves in 2/2, 3/2, 5/2 and 5/3 way configurations — plus heavy-duty foot pedal valves for hands-free operation."
        imageSrc="https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves2.png"
        imageAlt="Valvenok Pneumatic Solenoid Valves"
        breadcrumb="Products / Valves"
      />
      <PneumaticValvesGrid families={VALVE_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}