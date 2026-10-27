import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-3 Damper Valve Models",
  description:
    "Compare VF-3 butterfly damper valve models: 2\"–96\", -46°C to +1093°C, wafer, short and long body flange. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/damper-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesDamperButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
