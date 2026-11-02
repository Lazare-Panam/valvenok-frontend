import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/gas-pressure-regulator" },
  title: { absolute: "Pietro Fiorentini Gas Pressure Regulators | Valvenok" },
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for transmission and distribution networks, with hydrogen-ready versions on selected models.",
  openGraph: {
    title: "Pietro Fiorentini Gas Pressure Regulators | Valvenok",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators for transmission and distribution networks, with hydrogen-ready versions on selected models.",
    type: "website",
  },
};

export default function GasPressureRegulatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
