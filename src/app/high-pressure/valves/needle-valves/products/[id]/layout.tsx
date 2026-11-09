import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";
import { HP_NEEDLE_VALVE_DATA } from "../../hooks/hpNeedleValveData";

type Props = {
  params: Promise<{ id: string }>;
};

// Build every model page ahead of time, so they're served static instead of rendered per request
export function generateStaticParams() {
  return HP_NEEDLE_VALVE_DATA.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // Canonical copy; the old /high-pressure/needle-valves/products/[id] points here.
  return detailRouteMetadata("/high-pressure/valves/needle-valves/products", id, "High Pressure Needle Valves");
}

export default function HighPressureValvesNeedleValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
