import type { Metadata } from "next";
import MechanicalActuatorsView from "./MechanicalActuatorsView";

const TITLE = "Mechanical Gear Actuators: Worm, Bevel & Declutchable | Valvenok";
const DESCRIPTION =
  "Susin manual gear operators: MAW worm gears to 32,000 Nm, ITG declutchable overrides to 28,000 Nm and MAB multi-turn bevel gears to 18,000 Nm, IP68. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/actuators/mechanical",
    siteName: "Valvenok",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/itg.webp"],
  },
};

export default function MechanicalActuatorsPage() {
  return <MechanicalActuatorsView />;
}
