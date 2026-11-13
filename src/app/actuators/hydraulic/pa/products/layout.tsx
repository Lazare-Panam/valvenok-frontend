import type { Metadata } from "next";
import { PA_IMAGE } from "../paData";

const TITLE = "PA Electro-Hydraulic Actuator Models, 250–4,000 Nm | Valvenok";
const DESCRIPTION =
  "All 9 Susin I-Tork PA high pressure electro-hydraulic actuators: 5 double acting (D10–D60, 250–4,000 Nm) and 4 spring return (E30–E60), with torques, flanges and dimensions. Up to 10,000 Nm on request.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PA_IMAGE] },
};

export default function PaProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
