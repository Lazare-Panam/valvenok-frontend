import type { Metadata } from "next";
import PneumaticActuatorsView from "./PneumaticActuatorsView";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic/actuators' },
  title: "Pneumatic Actuators | Spring Return & Scotch Yoke",
  description:
    "Rack & pinion, scotch yoke and linear pneumatic actuators from Susin, KOSAPLUS and SPAC, 10 to 120,867 Nm, double acting or spring return, ISO 5211.",
  openGraph: {
    title: "Pneumatic Actuators | Spring Return & Scotch Yoke | Valvenok",
    description: "Rack & pinion, scotch yoke and linear pneumatic actuators from Susin, KOSAPLUS and SPAC, 10 to 120,867 Nm, double acting or spring return, ISO 5211.",
    url: "/pneumatic/actuators",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function PneumaticActuatorsPage() {
  return <PneumaticActuatorsView />;
}
