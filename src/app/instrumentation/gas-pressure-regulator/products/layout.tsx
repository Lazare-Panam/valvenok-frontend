import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/gas-pressure-regulator/products" },
  title: { absolute: "Pietro Fiorentini Gas Regulator Models | Valvenok" },
  description:
    "Compare 4 Pietro Fiorentini gas pressure regulators. Dival 160 AP, Staflux 187 and ATF 15 are hydrogen ready. Request a quote from Valvenok.",
  openGraph: {
    title: "Pietro Fiorentini Gas Regulator Models | Valvenok",
    description:
      "Compare 4 Pietro Fiorentini gas pressure regulators. Dival 160 AP, Staflux 187 and ATF 15 are hydrogen ready. Request a quote from Valvenok.",
    type: "website",
  },
};

export default function GasRegulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/instrumentation/gas-pressure-regulator/products" /></>;
}
