import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "HB Series Hex Body Needle Valves",
  description:
    "HB series hex body needle and block & bleed valves with FF, MF and MM end connections, hard or soft seat, 6,000 psi working pressure.",
  path: "/valves/instrumentation-valves/needle-valves/hb",
});

export default function ValvesInstrumentationValvesNeedleValvesHbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
