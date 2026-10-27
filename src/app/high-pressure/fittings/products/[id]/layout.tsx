import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

// Each fitting detail page gets its own title and canonical rather than
// inheriting the listing's.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/high-pressure/fittings/products", id, "High Pressure Fittings");
}

export default function HighPressureFittingDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
