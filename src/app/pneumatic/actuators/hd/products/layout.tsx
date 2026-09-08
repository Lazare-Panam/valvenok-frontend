import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HD Series Variants",
  description:
    "Browse HD series actuator models — filter by model and ISO 5211 mounting to find the exact configuration you need.",
  openGraph: {
    title: "HD Series Actuators | Valvenok",
    description:
      "Browse HD series actuator models — filter by model and ISO 5211 mounting.",
    type: "website",
  },
};

export default function HDActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
