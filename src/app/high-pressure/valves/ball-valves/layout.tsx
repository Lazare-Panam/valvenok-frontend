import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Ball Valves, 10,000–60,000 psi",
  description:
    "Panam SS316 high pressure ball valves (10,000–20,000 psi) and Hiflux trunnion-style ball valves to 60,000 psi, in 2-way and 3-way patterns.",
  path: "/high-pressure/valves/ball-valves",
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
