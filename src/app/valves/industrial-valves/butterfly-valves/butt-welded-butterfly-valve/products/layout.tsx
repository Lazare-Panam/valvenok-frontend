import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cryogenic Butterfly Valve Models",
  description:
    "Compare cryogenic butterfly valve models: ANSI 150LB, -196°C to +760°C, butt welding, lugged and short flanged ends. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/butt-welded-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesButtWeldedButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
