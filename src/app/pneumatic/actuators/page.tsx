import type { Metadata } from "next";
import PneumaticActuatorsView from "./PneumaticActuatorsView";

export const metadata: Metadata = {
  alternates: { canonical: '/pneumatic/actuators' },
  title: "Pneumatic Actuators | Spring Return & Scotch Yoke",
  description:
    "Susin I-Tork scotch yoke and linear pneumatic actuators, 10 to 120,867 Nm, double acting or spring return, ISO 5211. Request a quote.",
  openGraph: {
    title: "Pneumatic Actuators | Spring Return & Scotch Yoke | Valvenok",
    description: "Susin I-Tork scotch yoke and linear pneumatic actuators, 10 to 120,867 Nm, double acting or spring return, ISO 5211. Request a quote.",
    url: "/pneumatic/actuators",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function PneumaticActuatorsPage() {
  return <PneumaticActuatorsView />;
}
