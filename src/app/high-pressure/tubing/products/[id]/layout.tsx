import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/tubing/products", id, "High Pressure Tubing");
}

export default function HighPressureTubingProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
