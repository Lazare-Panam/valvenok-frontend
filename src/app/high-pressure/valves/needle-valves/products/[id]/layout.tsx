import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // Same products as /high-pressure/needle-valves/products/[id]; point search
  // engines at that URL so the two aren't reported as duplicate titles.
  return detailRouteMetadata("/high-pressure/needle-valves/products", id, "High Pressure Needle Valves");
}

export default function HighPressureValvesNeedleValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
