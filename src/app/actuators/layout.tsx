import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators" },
  title: { absolute: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok" },
  description:
    "Pneumatic, electric, hydraulic and manual valve actuators plus limit switch boxes from a UK supplier. ISO 5211 mounting, actuator finder and sizing help.",
  openGraph: {
    title: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok",
    description:
      "Pneumatic, electric, hydraulic and manual valve actuators plus limit switch boxes from a UK supplier. ISO 5211 mounting, actuator finder and sizing help.",
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
