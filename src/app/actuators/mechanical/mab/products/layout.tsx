import type { Metadata } from "next";
import { MAB_IMAGE } from "../mabData";

const TITLE = "MAB Bevel Gear Actuator Models, 250–18,000 Nm | Valvenok";
const DESCRIPTION =
  "All 28 Susin MAB bevel gear actuators, standard, 1S and 2S: torque, thrust, gear ratio, mechanical advantage, ISO 5210 flange, weight and dimensions. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/mab/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [MAB_IMAGE] },
};

export default function MABProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
