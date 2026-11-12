import type { Metadata } from "next";
import { ITG_IMAGE } from "./itgData";

const TITLE = "ITG Declutchable Worm Gear Overrides, 60–28,000 Nm | Valvenok";
const DESCRIPTION =
  "Susin ITG declutchable worm gears: a manual override that fits between a pneumatic actuator and a quarter-turn valve. 60 to 28,000 Nm, single and double stage reduction, ISO 5211, up to IP67M.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/itg" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [ITG_IMAGE] },
};

export default function ITGLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
