import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "IB Series Integrated Bonnet Needle Valves",
  description:
    "IB series integrated bonnet needle valves in straight and angle patterns with OD, FF, MF, MM and MOD ends in NPT, ISO and metric threads.",
  path: "/valves/instrumentation-valves/needle-valves/ib",
});

export default function ValvesInstrumentationValvesNeedleValvesIbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
