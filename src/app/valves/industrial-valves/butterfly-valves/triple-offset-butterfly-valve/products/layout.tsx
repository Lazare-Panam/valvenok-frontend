import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-8A Triple Offset Valve Models",
  description:
    "Compare VF-8A triple offset butterfly valve models by pressure class, size and end type, and request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesTripleOffsetButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
