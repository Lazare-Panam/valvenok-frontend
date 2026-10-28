import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves/gate-valves/products" },
  title: { absolute: "Bellows Sealed Gate Valves — DIN & ANSI Models | Valvenok" },
  description:
    "DIN and ANSI bellows sealed gate valves with welded metal bellows to prevent stem leakage. Compare models by size and standard, then request a quote.",
  openGraph: {
    title: "Bellows Sealed Gate Valves — DIN & ANSI Models | Valvenok",
    description:
      "DIN and ANSI bellows sealed gate valves with welded metal bellows to prevent stem leakage. Compare models by size and standard, then request a quote.",
    type: "website",
  },
};

export default function GateValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/valves/sealed-valves/gate-valves/products" /></>;
}
