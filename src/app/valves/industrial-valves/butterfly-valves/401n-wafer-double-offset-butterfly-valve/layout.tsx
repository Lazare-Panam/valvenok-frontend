import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SIRCA 401N Double Offset Butterfly Valve",
  description:
    "SIRCA 401N series double eccentric butterfly valves, 3\" to 56\", with a bubble-tight seal for heavy-duty shipbuilding and petrochemical service.",
  path: "/valves/industrial-valves/butterfly-valves/401n-wafer-double-offset-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValves401nWaferDoubleOffsetButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
