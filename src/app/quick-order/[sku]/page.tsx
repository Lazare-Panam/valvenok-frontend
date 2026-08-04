import { notFound } from "next/navigation";
import { PRODUCTS } from "../product";
import { getProductContent } from "../product-content";
import ProductPageClient from "./ProductPageClient";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ sku: p.sku }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) notFound();

  const content = getProductContent(sku);

  return <ProductPageClient product={product} content={content} />;
}
