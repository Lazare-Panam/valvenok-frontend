import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/valves/dbb-valves/products", id, "High Pressure DBB Valves");
}

export default function HighPressureValvesDbbValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
