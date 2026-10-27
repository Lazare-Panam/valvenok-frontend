import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-264 AWWA Butterfly Valve Models",
  description:
    "Compare VF-264 AWWA C504/C516 double flanged butterfly valve models across classes 25B, 75B and 150B, DN350–DN2600. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesAwwaC504DoubleFlangedButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
