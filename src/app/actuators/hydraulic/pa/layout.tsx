import type { Metadata } from "next";
import { PA_IMAGE } from "./paData";

const TITLE = "PA Electro-Hydraulic Actuators, High Pressure, 250–10,000 Nm | Valvenok";
const DESCRIPTION =
  "Susin I-Tork PA compact electro-hydraulic part-turn actuators: up to 180 bar on board, only power needed. Double acting 250–4,000 Nm, spring return to 2,100 Nm, up to 10,000 Nm on request. Zone 1 & 2.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [PA_IMAGE] },
};

export default function PaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
