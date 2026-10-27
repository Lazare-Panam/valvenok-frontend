import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Double Block & Bleed Valves",
  description:
    "Panam SS316 high pressure DBB valves to 20,000 psi: ball-needle-ball at 15,000 psi and needle-needle at 20,000 psi, NPT or MP cone & thread female.",
  path: "/high-pressure/dbb",
});

export default function HighPressureDbbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
