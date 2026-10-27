import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-9A Anti-Condensation Valve Models",
  description:
    "Compare VF-9A anti-condensation double eccentric butterfly valve models: ANSI 150/300LB, DN50–DN1200, wafer, lugged and flanged. Request a quote.",
  path: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve/products",
});

export default function ValvesIndustrialValvesButterflyValvesAntiCondensationButterflyValveProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
