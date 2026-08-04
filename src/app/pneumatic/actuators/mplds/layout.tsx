import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MPLDS Series Micro Linear Actuators | Valvenok",
  description:
    "Compact double-acting pneumatic linear actuators for fine automation and precise linear motion in tight spaces. IP66, modular design, positioner and solenoid ready.",
  openGraph: {
    title: "MPLDS Series Micro Linear Actuators | Valvenok",
    description:
      "Compact double-acting pneumatic linear actuators for fine automation in tight spaces. IP66, modular design, positioner and solenoid ready.",
    type: "website",
  },
};

export default function MPLDSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
