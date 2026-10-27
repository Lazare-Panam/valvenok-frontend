import type { Metadata } from "next";
import { detailRouteMetadata } from "@/src/app/Common/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/products", id, "Products");
}

export default function ProductsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
