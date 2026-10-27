import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

// Duplicate of /high-pressure/valves/gas-valves — canonicalise to that URL.
export const metadata: Metadata = pageMetadata({
  title: "Youngdo Hydrogen, LPG & Gas Cylinder Valves",
  description:
    "Youngdo hydrogen cylinder valves to 70 MPa, LPG cylinder and piping valves, and industrial gas cylinder valves. Filter by gas type, category and certification.",
  path: "/hydrogen-cryogenic/gas-valves",
});

export default function HydrogenCryogenicGasValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
