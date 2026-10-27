import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/gas-pressure-regulator" },
  title: "Gas Pressure Regulators",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution. Fail Open design; hydrogen-ready versions available on selected models.",
  openGraph: {
    title: "Gas Pressure Regulators | Valvenok",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators. Fail Open design; hydrogen-ready versions available on selected models.",
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
