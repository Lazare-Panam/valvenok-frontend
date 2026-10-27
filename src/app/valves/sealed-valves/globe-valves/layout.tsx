import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bellows Sealed Globe Valves — DIN, ANSI, JIS",
  description:
    "Bellows sealed globe valves to DIN, ANSI and JIS standards. A bellows plus packing backup double seal stops stem leakage in process and chemical service.",
  path: "/valves/sealed-valves/globe-valves",
});

export default function ValvesSealedValvesGlobeValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
