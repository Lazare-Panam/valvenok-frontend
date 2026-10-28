import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/mplds" },
  title: { absolute: "MPLDS Micro Linear Pneumatic Actuators — Compact | Valvenok" },
  description:
    "Compact double-acting pneumatic linear actuators for precise linear motion in tight spaces. IP66, modular design, positioner and solenoid ready.",
  openGraph: {
    title: "MPLDS Micro Linear Pneumatic Actuators — Compact | Valvenok",
    description:
      "Compact double-acting pneumatic linear actuators for precise linear motion in tight spaces. IP66, modular design, positioner and solenoid ready.",
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
