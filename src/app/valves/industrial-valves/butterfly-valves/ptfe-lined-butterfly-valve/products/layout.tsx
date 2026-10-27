import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-75 PTFE Lined Valve Models",
  description:
    "Compare VF-75 PTFE/PFA lined butterfly valve models: DN50–DN600, up to 16 bar, -35°C to +200°C, wafer, lugged and flanged. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesPtfeLinedButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
