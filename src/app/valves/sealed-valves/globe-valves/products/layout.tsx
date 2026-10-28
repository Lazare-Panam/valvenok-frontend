import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves/globe-valves/products" },
  title: { absolute: "Bellows Sealed Globe Valves — DIN & ANSI Models | Valvenok" },
  description:
    "Browse bellows sealed globe valves by standard and type. Welded metal bellows prevent stem leakage. Compare models and request a quote from Valvenok.",
  openGraph: {
    title: "Bellows Sealed Globe Valves — DIN & ANSI Models | Valvenok",
    description: "Browse bellows sealed globe valves by standard and type. Welded metal bellows prevent stem leakage. Compare models and request a quote from Valvenok.",
    type: "website",
  },
};

export default function BellowsValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/valves/sealed-valves/globe-valves/products" /></>;
}
