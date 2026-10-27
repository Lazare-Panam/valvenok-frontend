import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/valves/check-valves/products", id, "High Pressure Check Valves");
}

export default function HighPressureValvesCheckValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
