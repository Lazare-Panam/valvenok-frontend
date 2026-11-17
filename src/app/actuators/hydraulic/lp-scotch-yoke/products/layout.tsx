import type { Metadata } from "next";
import { LP_IMAGE } from "../lpData";

const TITLE = "LP-HD / LP-HS Low-Pressure Electro-Hydraulic Actuator Models | Valvenok";
const DESCRIPTION =
  "All 30 LP-HD and LP-HS low-pressure electro-hydraulic scotch yoke actuators: double acting 38–4,635 Nm, spring return normally closed and normally open, 8 bar on board, ISO 5211.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/lp-scotch-yoke/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [LP_IMAGE] },
};

export default function LpProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
