import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itl/products" },
  title: "Electric Actuators",
  description:
    "Browse electric valve actuators — filter by series and model to find the exact configuration you need.",
  openGraph: {
    title: "Electric Actuators | Valvenok",
    description:
      "Browse electric valve actuators — filter by series and model.",
    type: "website",
  },
};

export default function ElectricActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
