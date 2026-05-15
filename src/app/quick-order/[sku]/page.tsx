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

  // Safety net: ensure SKU is always in the title for guaranteed uniqueness
  const safeTitle = content.metaTitle.includes(sku)
    ? content.metaTitle
    : content.metaTitle.replace(' | Valvenok', ` (${sku}) | Valvenok`);

  return {
    title: safeTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.valvenok.com/quick-order/${sku}`,
    },
    openGraph: {
      title: safeTitle,
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