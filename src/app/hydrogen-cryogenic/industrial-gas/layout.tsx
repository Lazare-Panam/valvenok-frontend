import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/industrial-gas" },
  title: { absolute: "Youngdo Industrial Gas Cylinder Valves — 7 Categories | Valvenok" },
  description:
    "Youngdo industrial gas cylinder valves: tapered and unified inlet threads, non-return, acetylene, chlorine/ammonia, tube trailer and piping valves.",
  openGraph: {
    title: "Youngdo Industrial Gas Cylinder Valves — 7 Categories | Valvenok",
    description:
      "Youngdo industrial gas cylinder valves: tapered and unified inlet threads, non-return, acetylene, chlorine/ammonia, tube trailer and piping valves.",
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
