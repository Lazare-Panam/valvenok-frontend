import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-265A Marine Butterfly Valve Models",
  description:
    "Compare VF-265A ship-building butterfly valve models: flanged JIS 10K, 10 and 16 bar, class society certified. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesShipBuildingButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
