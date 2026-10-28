import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

// Primary copy of the Youngdo gas valve table; /high-pressure/valves/gas-valves
// shows the same table and canonicalises here.
export const metadata: Metadata = pageMetadata({
  title: "Youngdo Hydrogen, LPG & Industrial Gas Cylinder Valves | Valvenok",
  description:
    "Youngdo hydrogen cylinder valves to 70 MPa, LPG cylinder and piping valves, and industrial gas valves. Filter by gas type, category and certification.",
  path: "/hydrogen-cryogenic/gas-valves",
});

export default function HydrogenCryogenicGasValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/hydrogen-cryogenic/gas-valves" /></>;
}
