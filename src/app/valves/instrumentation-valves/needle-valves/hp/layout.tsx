import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "HP Series High Pressure Needle Valves",
  description:
    "HP series needle valves rated to 10,000 and 20,000 psi in straight, angle, 3-way and manifold patterns with NPT, ISO and metric threads.",
  path: "/valves/instrumentation-valves/needle-valves/hp",
});

export default function ValvesInstrumentationValvesNeedleValvesHpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
