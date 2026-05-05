import { notFound } from 'next/navigation';
import { PRODUCTS } from '../product';
import ProductPageClient from './ProductPageClient';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ sku: p.sku }));
}

export async function generateMetadata({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) return {};
return {
    title: `PANAM ${product.name} | Valvenok`,
    description: `${product.meta}. SS316 stainless steel. In stock. Fast UK dispatch.`,
    alternates: {
      canonical: `https://www.valvenok.com/quick-order/${sku}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) notFound();
  return <ProductPageClient product={product} />;
}