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
    return { title: "Valvenok — PANAM Fittings" };
  }

  const content = getProductContent(sku);

  // Safety net: guarantee the SKU appears somewhere in the title so products
  // that happen to share the same descriptive text don't get identical
  // <title> tags (this happens for a few of your Union Tee/Elbow entries today).
  const title = content.metaTitle.includes(sku)
    ? content.metaTitle
    : `${content.metaTitle} (${sku})`;

  const fullTitle = `${title} | Valvenok`;

  return {
    title: fullTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://www.valvenok.com/quick-order/${sku}`,
    },
    openGraph: {
      title: fullTitle,
      description: content.metaDescription,
      url: `https://www.valvenok.com/quick-order/${sku}`,
      type: "website",
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
