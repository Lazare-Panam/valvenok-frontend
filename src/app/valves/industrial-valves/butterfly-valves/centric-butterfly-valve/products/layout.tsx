import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "VF-7 Centric Butterfly Valve Models & Sizes | Valvenok",
  description:
    "Compare VF-7 centric butterfly valve models by size, end type, flange, body, disc and stem material, and add them to a quote.",
  path: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesCentricButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products" /></>;
}
