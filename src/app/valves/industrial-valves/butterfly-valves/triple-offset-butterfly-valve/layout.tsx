import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-8A Triple Offset Butterfly Valve",
  description:
    "Value Valves VF-8A high performance triple offset butterfly valves for demanding process service, ANSI 150LB, 300LB and 600LB.",
  path: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesTripleOffsetButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
