import type { Metadata } from "next";
import { ITL_IMAGE } from "./itlData";

const TITLE = "ITL Electric Linear Actuators, 1–6 kN | Valvenok";
const DESCRIPTION =
  "Susin ITL compact electric linear actuators for globe and control valves: 1 to 6 kN, 15 to 50 mm stroke, continuous duty, AC 100–240 V or 24 V, IP66 & IP67.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itl" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [ITL_IMAGE] },
};

export default function ITLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
