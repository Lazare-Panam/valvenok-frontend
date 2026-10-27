import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "PCV Instrumentation Check Valves — SS316",
  description:
    "PCV series stainless steel inline check valves with OD tube, female NPT and male NPT connections in straight and mixed port configurations.",
  path: "/valves/instrumentation-valves/check-valves",
});

export default function ValvesInstrumentationValvesCheckValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
