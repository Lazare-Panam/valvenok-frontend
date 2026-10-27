import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Check Valves to 100,000 psi",
  description:
    "Hiflux high pressure check valves with ball-seal and O-ring-seal designs in 316 stainless steel, 10,000 to 100,000 psi, with cone & thread connections.",
  path: "/high-pressure/valves/check-valves",
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
