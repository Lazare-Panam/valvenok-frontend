import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SIRCA S301E Lugged Butterfly Valve, Gearbox",
  description:
    "SIRCA S301E resilient seated lugged butterfly valve with gearbox, 1½\" to 8\", PN6/PN10/PN16/ANSI 150, 316 stainless steel disc.",
  path: "/valves/industrial-valves/butterfly-valves/s301e-lugged-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesS301eLuggedButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
