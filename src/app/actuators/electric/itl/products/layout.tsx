import type { Metadata } from "next";
import { ITL_IMAGE } from "../itlData";

const TITLE = "ITL Electric Linear Actuator Models, 1–6 kN | Valvenok";
const DESCRIPTION =
  "All four Susin I-Tork ITL electric linear actuators, ITL01 to ITL06: thrust, stroke, stroke time, current and weight. Request a quote from Valvenok.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itl/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [ITL_IMAGE] },
};

export default function ITLProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
