import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bellows Sealed Gate Valves",
  description:
    "DIN and ANSI standard bellows sealed gate valves with auto-welded metal bellows and zero stem leakage.",
  openGraph: {
    title: "Bellows Sealed Gate Valves | Valvenok",
    description:
      "DIN and ANSI standard bellows sealed gate valves with auto-welded metal bellows and zero stem leakage.",
    type: "website",
  },
};

export default function GateValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
