import type { Metadata } from "next";
import { ITG_IMAGE } from "../itgData";

const TITLE = "ITG Declutchable Gear Models, 60–28,000 Nm | Valvenok";
const DESCRIPTION =
  "All 29 Susin I-Tork ITG declutchable worm gears, standard, 1S and 2S: torque, gear ratio, turns, rim pull, valve and actuator ISO 5211 flanges, weight and dimensions. Request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/itg/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [ITG_IMAGE] },
};

export default function ITGProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
