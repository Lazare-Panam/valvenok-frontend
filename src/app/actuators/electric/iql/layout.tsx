import type { Metadata } from "next";
import { IQL_IMAGE } from "./iqlData";

const TITLE = "IQL Electric Linear Actuators, 4–25 kN | Valvenok";
const DESCRIPTION =
  "Susin I-Tork IQL electric linear actuators for globe and control valves: 4 to 25 kN, 40 to 100 mm stroke, 24 VDC, 1 or 3 phase, IP67, on/off or modulating.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/iql" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IQL_IMAGE] },
};

export default function IQLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
