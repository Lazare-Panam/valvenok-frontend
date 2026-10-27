import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-265A Ship-Building Butterfly Valve",
  description:
    "Value Valves VF-265A flanged JIS 10K marine butterfly valves, 2\" to 24\", in 10 bar and 16 bar, with ABS, LR, BV, DNV, CR and CCS certification.",
  path: "/valves/industrial-valves/butterfly-valves/ship-building-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesShipBuildingButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
