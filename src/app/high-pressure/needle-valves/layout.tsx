import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure & Hydrogen Needle Valves",
  description:
    "Panam and Hiflux needle valves from 10,000 to 60,000 psi: straight, angle, 3-way and manifold patterns, plus Hiflux H70 hydrogen fuel-station valves.",
  path: "/high-pressure/valves/needle-valves", // old copy: canonical to the new page until the clean-up redirects it
});

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
