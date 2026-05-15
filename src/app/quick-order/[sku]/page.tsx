import { notFound } from 'next/navigation';
import { PRODUCTS } from '../product';
import { getProductContent } from '../product-content';
import ProductPageClient from './ProductPageClient';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ sku: p.sku }));
}

export async function generateMetadata({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) return {};

  const content = getProductContent(sku);

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.valvenok.com/quick-order/${sku}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.valvenok.com/quick-order/${sku}`,
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ sku: string }> }) {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) notFound();

  const content = getProductContent(sku);

  return <ProductPageClient product={product} content={content} />;
}