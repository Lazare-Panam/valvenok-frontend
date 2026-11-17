import type { Metadata } from "next";
import { LP_IMAGE } from "./lpData";

const TITLE = "LP-HD / LP-HS Low-Pressure Electro-Hydraulic Scotch Yoke Actuators | Valvenok";
const DESCRIPTION =
  "Self-contained electro-hydraulic scotch yoke actuators with their own 8 bar motor and pump, no compressed air needed: double acting 38–4,635 Nm, spring return fail close or fail open. Zone 1 and 2.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/lp-scotch-yoke" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/actuators/hydraulic/lp-scotch-yoke", type: "website", images: [LP_IMAGE] },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
