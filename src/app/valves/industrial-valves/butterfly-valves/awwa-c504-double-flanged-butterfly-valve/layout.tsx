import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-264 AWWA C504 Double Flanged Butterfly Valve",
  description:
    "Value Valves VF-264 AWWA C504 and C516 double flanged butterfly valves from 14\" to 104\" (DN350–DN2600).",
  path: "/valves/industrial-valves/butterfly-valves/awwa-c504-double-flanged-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesAwwaC504DoubleFlangedButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
