import type { Metadata } from "next";
import HydraulicActuatorsView from "./HydraulicActuatorsView";

const TITLE = "Hydraulic & Electro-Hydraulic Valve Actuators | Valvenok";
const DESCRIPTION =
  "Susin I-Tork hydraulic and electro-hydraulic actuators: PANDA and PA compact units, PA-HX rack & pinion, HRSDA / HRSSA scotch yoke (up to 112,595 Nm) and HLDA linear piston (up to 402 kN). Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/actuators/hydraulic",
    siteName: "Valvenok",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hrsda.jpg"],
  },
};

export default function HydraulicActuatorsPage() {
  return <HydraulicActuatorsView />;
}
