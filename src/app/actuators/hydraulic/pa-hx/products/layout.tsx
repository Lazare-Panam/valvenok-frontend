import type { Metadata } from "next";
import { PAHX_IMAGE } from "../paHxData";

const TITLE = "PA-HX Hydraulic Rack & Pinion Actuator Models | Valvenok";
const DESCRIPTION =
  "All 26 PA-HX hydraulic rack & pinion actuators: double acting 90–10,000 Nm at 100 bar, spring to close and spring to open, with flanges, dimensions, weight and oil volume.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa-hx/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PAHX_IMAGE] },
};

export default function PaHxProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
