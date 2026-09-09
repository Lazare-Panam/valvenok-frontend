import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/pds/products" },
  title: "PD Actuators",
  description:
    "Browse PD actuator models — filter by series, model, and angle to find the exact configuration you need.",
  openGraph: {
    title: "PD Actuators | Valvenok",
    description:
      "Browse PD actuator models — filter by series, model, and angle.",
    type: "website",
  },
};

export default function PDActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
