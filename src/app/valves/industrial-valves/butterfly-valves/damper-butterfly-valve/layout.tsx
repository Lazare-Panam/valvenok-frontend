import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-3 Butterfly Damper Valve, 2\"–96\"",
  description:
    "Value Valves VF-3 butterfly damper valves in centric, double eccentric and triple eccentric designs with metal, rubber or PTFE seats, 2\" to 96\".",
  path: "/valves/industrial-valves/butterfly-valves/damper-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesDamperButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
