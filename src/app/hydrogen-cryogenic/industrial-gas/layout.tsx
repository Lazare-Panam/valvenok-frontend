import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/industrial-gas" },
  title: "Youngdo Industrial Gas Valves",
  description:
    "Youngdo industrial gas cylinder valves across 7 categories — tapered and unified inlet threads, non return valves, acetylene, chlorine/ammonia, tube trailers and piping connection valves. Certification and standards vary by model.",
  openGraph: {
    title: "Youngdo Industrial Gas Valves | Valvenok",
    description:
      "Youngdo industrial gas cylinder valves rated up to 25 MPa. Certification and standards vary by model.",
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
