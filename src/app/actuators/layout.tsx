import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators" },
  title: { absolute: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok" },
  description:
    "Valve actuators from a UK supplier: pneumatic actuators, electric actuators, hydraulic and manual gear actuators, with ISO 5211 mounting and ATEX options.",
  openGraph: {
    title: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok",
    description:
      "Valve actuators from a UK supplier: pneumatic actuators, electric actuators, hydraulic and manual gear actuators, with ISO 5211 mounting and ATEX options.",
    type: "website",
  },
};

export default function ActuatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
