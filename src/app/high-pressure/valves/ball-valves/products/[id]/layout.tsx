import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/valves/ball-valves/products", id, "High Pressure Ball Valves");
}

export default function HighPressureValvesBallValvesProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
