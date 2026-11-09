import type { Metadata } from "next";
import HydraulicActuatorsView from "./HydraulicActuatorsView";

const TITLE = "Hydraulic & Electro-Hydraulic Valve Actuators | Valvenok";
const DESCRIPTION =
  "KTC electro-hydraulic PANDA and PA actuators and HRSDA / HRSSA hydraulic scotch yoke actuators, 46 to 112,595 Nm, up to 200 bar, ATEX Zone 1 & 2. Request a quote.";

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
