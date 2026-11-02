import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Danfoss PVG Proportional Valve Components | Valvenok",
  description:
    "Original Danfoss components for PVG proportional and directional control valves, used in mobile hydraulics, agricultural and construction equipment.",
  path: "/valves/valve-components",
});

export default function ValvesValveComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
