import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youngdo Industrial Gas Valves | Valvenok",
  description:
    "Youngdo industrial gas cylinder valves across 7 categories — tapered and unified inlet threads, non return valves, acetylene, chlorine/ammonia, tube trailers and piping connection valves. KGS, CGA V-1, BS 341, ISO 10297 certified.",
  openGraph: {
    title: "Youngdo Industrial Gas Valves | Valvenok",
    description:
      "Youngdo industrial gas cylinder valves rated up to 25 MPa, KGS, CGA V-1, BS 341, ISO 10297 certified.",
    type: "website",
  },
};

export default function IndustrialGasValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
