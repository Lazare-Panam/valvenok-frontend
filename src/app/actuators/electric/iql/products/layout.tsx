import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQL Actuators",
  description:
    "Browse IQL actuator models — filter by model and stroke size to find the exact configuration you need.",
  openGraph: {
    title: "IQL Actuators | Valvenok",
    description:
      "Browse IQL actuator models — filter by model and stroke size.",
    type: "website",
  },
};

export default function IQLActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
