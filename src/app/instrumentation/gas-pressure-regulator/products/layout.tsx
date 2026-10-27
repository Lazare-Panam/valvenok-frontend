import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/gas-pressure-regulator/products" },
  title: "Gas Pressure Regulator Models",
  description:
    "Pietro Fiorentini direct-operated gas pressure regulators for gas transmission and distribution. Compare 4 models; Dival 160 AP, Staflux 187 and ATF 15 are Hydrogen Ready.",
  openGraph: {
    title: "Gas Pressure Regulator Models | Valvenok",
    description:
      "Pietro Fiorentini direct-operated gas pressure regulators for high-pressure transmission and medium pressure natural gas distribution networks. Compare 4 models by size, pressure and hydrogen readiness.",
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
