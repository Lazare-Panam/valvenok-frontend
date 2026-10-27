import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/valves/needle-valves/products", id, "High Pressure Needle Valves");
}

export default function HighPressureValvesNeedleValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
