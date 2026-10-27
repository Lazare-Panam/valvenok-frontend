import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SIRCA S301E Wafer Butterfly Valve, Lever",
  description:
    "SIRCA S301E resilient seated wafer butterfly valve with lever, 1½\" to 8\", PN6/PN10/PN16/ANSI 150, 316 stainless steel disc.",
  path: "/valves/industrial-valves/butterfly-valves/s301e-wafer-lever-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesS301eWaferLeverButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
