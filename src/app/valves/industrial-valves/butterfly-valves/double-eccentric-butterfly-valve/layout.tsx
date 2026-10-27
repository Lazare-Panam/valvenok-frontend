import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-9A Double Eccentric Butterfly Valve",
  description:
    "Value Valves VF-9A high performance double eccentric butterfly valves across ANSI 150LB and 300LB, 2\" to 48\", in wafer, lugged and flanged types.",
  path: "/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesDoubleEccentricButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
