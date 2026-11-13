import type { Metadata } from "next";
import { PANDA_IMAGE } from "../pandaData";

const TITLE = "PANDA Electro-Hydraulic Actuator Models, 46–9,274 Nm | Valvenok";
const DESCRIPTION =
  "All 27 Susin PANDA low pressure electro-hydraulic actuators: 14 double acting (D10–D130, 46–7,207 Nm) and 13 spring return (E10–E120), with torques, flanges and dimensions.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/panda/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PANDA_IMAGE] },
};

export default function PandaProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
