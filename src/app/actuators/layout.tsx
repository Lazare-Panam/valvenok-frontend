import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators" },
  title: { absolute: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok" },
  description:
    "UK supplier of pneumatic, electric, hydraulic and mechanical valve actuators, with ISO 5211 mounting and ATEX and SIL certified options by model.",
  openGraph: {
    title: "Valve Actuators — Pneumatic, Electric & Hydraulic | Valvenok",
    description:
      "UK supplier of pneumatic, electric, hydraulic and mechanical valve actuators, with ISO 5211 mounting and ATEX and SIL certified options by model.",
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
