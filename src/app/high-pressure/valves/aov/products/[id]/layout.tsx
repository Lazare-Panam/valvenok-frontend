import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/valves/aov/products", id, "Air Operated Valves");
}

export default function HighPressureValvesAovProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
