import type { Metadata } from "next";
import { PRODUCTS } from "../product";
import { getProductContent } from "../product-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sku: string }>;
}): Promise<Metadata> {
  const { sku } = await params;
  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) {
    return { title: { absolute: "Valvenok — PANAM Fittings" } };
  }

  const content = getProductContent(sku);

  // Safety net: guarantee the SKU appears somewhere in the title so products
  // that happen to share the same descriptive text don't get identical
  // <title> tags (this happens for a few of your Union Tee/Elbow entries today).
  const title = content.metaTitle.includes(sku)
    ? content.metaTitle
    : `${content.metaTitle} (${sku})`;

  const fullTitle = `${title} | Valvenok`;
  const canonicalUrl = `https://www.valvenok.com/quick-order/${sku}`;
  const image = product.cloudinaryId
    ? [product.cloudinaryId]
    : "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

  return {
    title: { absolute: fullTitle },
    description: content.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: content.metaDescription,
      url: canonicalUrl,
      type: "website",
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: content.metaDescription,
      images: image,
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
