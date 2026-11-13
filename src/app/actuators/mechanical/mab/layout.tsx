import type { Metadata } from "next";
import { MAB_IMAGE } from "./mabData";

const TITLE = "MAB Bevel Gear Actuators, 250–18,000 Nm | Valvenok";
const DESCRIPTION =
  "Susin I-Tork MAB manual bevel gear actuators for gate, globe and multi-turn valves: 250 to 18,000 Nm, 75 to 2,500 kN thrust, single and double stage reduction, IP68, ISO 5210.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/mab" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [MAB_IMAGE] },
};

export default function MABLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
