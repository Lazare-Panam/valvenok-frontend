import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/gas-pressure-regulator/products" },
  title: "Products Variants for Gas Pressure Regualators",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution networks. Fail Open per EN 334, Hydrogen Ready versions available.",
  openGraph: {
    title: "Products Variants for Gas Pressure Regualators | Valvenok",
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
