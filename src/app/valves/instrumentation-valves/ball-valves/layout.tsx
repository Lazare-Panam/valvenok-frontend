import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Instrumentation Ball Valves — 2-Way, 3-Way, SS316 | Valvenok",
  description:
    "316 stainless steel instrumentation ball valves in 2-way, 3-way and high-bore designs with NPT, ISO, metric and tube ends. Filter and request a quote.",
  path: "/valves/instrumentation-valves/ball-valves",
});

export default function ValvesInstrumentationValvesBallValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
