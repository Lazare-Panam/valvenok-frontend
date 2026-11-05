import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hydrogen & High Pressure Needle Valves | Panam & Hiflux",
  description:
    "Panam HP–HP6 series SS316 needle valves (10,000–60,000 psi) and Hiflux vee and regulating stem valves, including H70 hydrogen station valves.",
  path: "/high-pressure/valves/needle-valves",
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
