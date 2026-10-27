import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Instrumentation Needle Valves — SS316",
  description:
    "Stainless steel instrumentation needle valves in HB, SB, IB and HP series across straight, angle, 3-way and block & bleed patterns and many end connections.",
  path: "/valves/instrumentation-valves/needle-valves",
});

export default function ValvesInstrumentationValvesNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
