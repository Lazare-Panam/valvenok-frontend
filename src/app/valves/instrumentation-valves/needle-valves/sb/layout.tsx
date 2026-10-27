import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SB Series Square Body Needle Valves",
  description:
    "SB series square body needle and block & bleed valves with OD, FF, MF and MM end connections, hard or soft seat, 6,000 psi working pressure.",
  path: "/valves/instrumentation-valves/needle-valves/sb",
});

export default function ValvesInstrumentationValvesNeedleValvesSbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
