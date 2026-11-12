import type { Metadata } from "next";
import { MAW_IMAGE } from "./mawData";

const TITLE = "MAW Worm Gear Actuators, 125–32,000 Nm | Valvenok";
const DESCRIPTION =
  "Susin MAW quarter-turn manual worm gear actuators for ball, butterfly and plug valves: 125 to 32,000 Nm, ±5° stroke adjustment, single and double stage reduction, ISO 5211, up to IP67M.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/maw" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [MAW_IMAGE] },
};

export default function MAWLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
