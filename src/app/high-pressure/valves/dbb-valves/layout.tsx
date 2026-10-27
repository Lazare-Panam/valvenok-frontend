import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure DBB Valves to 20,000 psi",
  description:
    "Panam SS316 double block & bleed valves with integral bleed: ball-needle-ball at 15,000 psi and needle-needle at 20,000 psi. NPT or MP cone & thread.",
  path: "/high-pressure/valves/dbb-valves",
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
