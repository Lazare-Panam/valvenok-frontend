import type { Metadata } from "next";
import { MAW_IMAGE } from "../mawData";

const TITLE = "MAW Worm Gear Actuator Models, 125–32,000 Nm | Valvenok";
const DESCRIPTION =
  "All 30 Susin MAW quarter-turn worm gear actuators, standard, 1S and 2S: torque, gear ratio, turns, rim pull, ISO 5211 flange, weight and dimensions. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/maw/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [MAW_IMAGE] },
};

export default function MAWProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
