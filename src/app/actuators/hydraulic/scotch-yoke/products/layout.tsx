import type { Metadata } from "next";
import { HRS_IMAGE } from "../hrsData";

const TITLE = "HRSDA / HRSSA Hydraulic Scotch Yoke Actuator Models | Valvenok";
const DESCRIPTION =
  "All 72 HRS hydraulic scotch yoke actuators: 20 HRSDA double acting up to 112,595 Nm and 52 HRSSA spring return models, with torque at 100, 130 and 160 bar.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/scotch-yoke/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [HRS_IMAGE] },
};

export default function HrsProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
