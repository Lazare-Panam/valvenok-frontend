import type { Metadata } from "next";

const TITLE = "Youngdo Gas & Cylinder Valves — Hydrogen, LPG & Gas | Valvenok";
const DESCRIPTION =
  "Youngdo hydrogen, LPG and industrial gas cylinder valves in one filterable table. Compare models and request a quote. Certification varies by model.";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/valves/gas-valves" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

export default function HighPressureGasValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
