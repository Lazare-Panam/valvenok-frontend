import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Air Operated Valves",
  description:
    "Hiflux pneumatically actuated high pressure valves, normally open or normally closed, in 316 stainless steel from 10,000 to 60,000 psi with cone & thread ends.",
  path: "/high-pressure/valves/aov",
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
