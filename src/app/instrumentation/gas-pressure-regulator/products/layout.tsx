import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Pressure Regulators | Valvenok",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution networks. Fail Open per EN 334, Hydrogen Ready versions available.",
  openGraph: {
    title: "Gas Pressure Regulators | Valvenok",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution networks. Fail Open per EN 334.",
    type: "website",
  },
};

export default function GasRegulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
