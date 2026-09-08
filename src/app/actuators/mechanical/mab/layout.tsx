import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAB Series Mechanical Bevel Gear Actuators",
  description:
    "Heavy-duty bevel gear actuators for multi-turn valve operation. 250–18,000 Nm torque, 75–2,500 kN thrust, IP68, ISO 5210 mount, marine coating options.",
  openGraph: {
    title: "MAB Series Mechanical Bevel Gear Actuators | Valvenok",
    description:
      "Heavy-duty bevel gear actuators for multi-turn valve operation, up to 18,000 Nm torque and 2,500 kN thrust, IP68 protection.",
    type: "website",
  },
};

export default function MABLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
