import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "VF-7 Centric Butterfly Valve, DN40–DN1800",
  description:
    "Value Valves VF-7 centric butterfly valves in wafer, lug and flanged types, DN40–DN1800, with bi-directional bubble-tight shutoff. NSF61 and ATEX approved.",
  path: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve",
});

export default function ValvesIndustrialValvesButterflyValvesCentricButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
