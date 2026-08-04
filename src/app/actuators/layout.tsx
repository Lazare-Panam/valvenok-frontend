import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actuators | Valvenok",
  description:
    "Leading UK supplier of valve actuators across all technologies — pneumatic, electric, hydraulic and mechanical — for demanding industrial environments globally.",
  openGraph: {
    title: "Actuators | Valvenok",
    description:
      "Pneumatic, electric, hydraulic and mechanical actuators for demanding industrial environments — ISO 5211 mounting, ATEX and SIL certified.",
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
