import type { Metadata } from "next";
import { IQL_IMAGE } from "../iqlData";

const TITLE = "IQL Electric Linear Actuator Models, 4–25 kN | Valvenok";
const DESCRIPTION =
  "All seven Susin I-Tork IQL electric linear actuators, IQL 04 to IQL 25: thrust, stroke, speed, weight and rated currents. Request a quote from Valvenok.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/iql/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IQL_IMAGE] },
};

export default function IQLProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
