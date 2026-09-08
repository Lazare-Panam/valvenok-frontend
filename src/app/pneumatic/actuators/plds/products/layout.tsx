import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PLDS Actuators",
  description:
    "Browse PLDS actuator models — filter by model and stem size to find the exact configuration you need.",
  openGraph: {
    title: "PLDS Actuators | Valvenok",
    description: "Browse PLDS actuator models — filter by model and stem size.",
    type: "website",
  },
};

export default function PLDSActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
