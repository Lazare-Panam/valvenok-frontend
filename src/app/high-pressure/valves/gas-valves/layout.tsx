import type { Metadata } from "next";

const TITLE = "Youngdo Gas & Cylinder Valves — Hydrogen, LPG & Gas | Valvenok";
const DESCRIPTION =
  "Youngdo hydrogen, LPG and industrial gas cylinder valves in one filterable table. Compare models and request a quote. Certification varies by model.";

export const metadata: Metadata = {
  // Same table as /hydrogen-cryogenic/gas-valves; point search engines at
  // that copy so the two aren't treated as duplicates.
  alternates: { canonical: "/hydrogen-cryogenic/gas-valves" },
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
