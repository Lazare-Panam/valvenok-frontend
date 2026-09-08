import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Pressure Regulators",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution. Fail Open per EN 334, Hydrogen Ready versions available.",
  openGraph: {
    title: "Gas Pressure Regulators | Valvenok",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators, Fail Open per EN 334, Hydrogen Ready versions available.",
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
