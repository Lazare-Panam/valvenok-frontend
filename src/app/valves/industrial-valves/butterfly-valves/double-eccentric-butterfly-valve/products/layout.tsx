import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-9A Double Eccentric Valve Models",
  description:
    "Compare VF-9A high performance double eccentric butterfly valve models by size, class and end type, and request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesDoubleEccentricButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
