import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-9A Anti-Condensation Butterfly Valve",
  description:
    "Value Valves VF-9A double eccentric butterfly valves with an anti-condensation jacket option, 2\" to 48\", ANSI 150LB and 300LB.",
  path: "/valves/industrial-valves/butterfly-valves/anti-condensation-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesAntiCondensationButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
