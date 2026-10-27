import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Danfoss PVG Valve Components",
  description:
    "Original Danfoss components for PVG proportional and directional control valves, for mobile hydraulics, agricultural, construction and industrial equipment.",
  path: "/valves/valve-components",
});

export default function ValvesValveComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
