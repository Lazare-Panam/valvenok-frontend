import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "RVL & RVH Instrumentation Relief Valves",
  description:
    "RVL low pressure and RVH high pressure relief valves in SS316, SS316L and brass, NPT, BSPT and BSPP threads, with spring ranges up to 15,000 psi.",
  path: "/valves/instrumentation-valves/relief-valves",
});

export default function ValvesInstrumentationValvesReliefValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
