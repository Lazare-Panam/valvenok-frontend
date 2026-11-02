import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailRouteMetadata } from "@/src/app/Common/seo";

const API_HOST = "https://valvenok-api-container.mangobeach-29eb5614.ukwest.azurecontainerapps.io";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return detailRouteMetadata("/products", id, "Products");
}

// Old Shopify URLs (/products/<handle>) and mistyped ids used to render a
// "could not be found" page with a 200 status, which Google treats as a soft
// 404. Ask the API first: an empty answer (204) means the product doesn't
// exist, so return a real 404. If the API can't be reached, render as normal.
async function productMissing(id: string) {
  try {
    const res = await fetch(`${API_HOST}/api/product/${encodeURIComponent(id)}`, {
      next: { revalidate: 3600 },
    });
    if (res.status === 204 || res.status === 404) return true;
    if (!res.ok) return false;
    const text = await res.text();
    return text.trim() === "" || text.trim() === "null";
  } catch {
    return false;
  }
}

export default async function ProductsIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (await productMissing(id)) notFound();
  return <>{children}</>;
}
