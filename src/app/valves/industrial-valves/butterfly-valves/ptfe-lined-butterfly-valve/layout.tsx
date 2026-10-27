import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-75 PTFE / PFA Lined Butterfly Valve",
  description:
    "Value Valves VF-75 centric butterfly valves with a fully PTFE or PFA lined disc and seat, DN50–DN600, up to 16 bar, -35°C to +200°C.",
  path: "/valves/industrial-valves/butterfly-valves/ptfe-lined-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesPtfeLinedButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
