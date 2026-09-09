import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve" },
};

export default function ValvesIndustrialValvesButterflyValvesCentricButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
