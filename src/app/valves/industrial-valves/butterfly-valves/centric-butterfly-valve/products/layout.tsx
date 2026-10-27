import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-7 Centric Butterfly Valve Models",
  description:
    "Compare VF-7 centric butterfly valve models by size, end type, flange, body, disc and stem material, and add them to a quote.",
  path: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesCentricButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
