import type { Metadata } from "next";
import ProductHero from "../../Common/Products_Page/ProductHero";
import TrustStrip from "../../Common/Products_Page/TrustStrip";
import { Category } from "../../Common/Products_Page/ProductCard";
import ActuatorsGrid from "./ActuatorsGrid";

export const metadata: Metadata = {
  title: "Pneumatic Actuators | Spring Return & Scotch Yoke | Valvenok",
  description:
    "Valvenok supplies a full range of pneumatic rotary actuators for quarter-turn valve automation. SRA spring return rack-and-pinion and AD scotch yoke heavy-duty series — ISO 5211 mounting, double acting and fail-safe configurations.",
};

const ACTUATOR_FAMILIES: Category[] = [
  {
    code: "SRA",
    title: "SRA Series",
    subtitle: "Spring Return Rack & Pinion Actuator",
    description:
      "Pneumatic rack-and-pinion rotary actuators with fail-safe spring return operation. ISO 5211 mounting for direct fit on quarter-turn ball, butterfly and plug valves across general process control.",
    specs: ["Spring Return", "Rack & Pinion", "ISO 5211 Mount", "90° Rotation"],
    applications: "Process Control, Water Treatment, Chemical, Food & Bev",
    href: "/pneumatic/actuators/sra",
    image:
      "https://pblol2.blob.core.windows.net/spac-images/products/actuators/SRA-25-02.jpg",
  },
  {
    code: "AD",
    title: "AD Series",
    subtitle: "Scotch Yoke Heavy-Duty Actuator",
    description:
      "Scotch yoke pneumatic actuators engineered for high-torque quarter-turn valve automation. Symmetric and canted yoke designs deliver superior breakaway torque for heavy-duty oil & gas, pipeline and offshore applications.",
    specs: ["Scotch Yoke", "High Torque", "Double Acting & Spring Return", "90° Rotation"],
    applications: "Oil & Gas, Pipeline, Offshore, Heavy Industry",
    href: "/pneumatic/actuators/scotch-yoke",
    image:
      "https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg",
  },
];

const TRUST_POINTS = [
  { value: "ISO 5211", label: "Mounting Standard" },
  { value: "90° Rotation", label: "Quarter-Turn" },
  { value: "Fail-Safe", label: "Spring Return Variants" },
  { value: "High Torque", label: "Scotch Yoke Variants" },
  { value: "Fast Dispatch", label: "Availability" },
];

export default function ActuatorsIndexPage() {
  return (
    <>
      <ProductHero
        title="Pneumatic Actuators"
        subtitle="Rotary Actuators for Quarter-Turn Valve Automation"
        description="A full range of pneumatic rotary actuators engineered for reliable quarter-turn valve control. Rack-and-pinion spring return for fail-safe process control, scotch yoke for high-torque heavy-duty automation — all with ISO 5211 direct-mount."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/actuator-hero.jpg"
        imageAlt="Valvenok Pneumatic Rotary Actuators"
        breadcrumb="Products / Actuators"
      />
      <ActuatorsGrid families={ACTUATOR_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}