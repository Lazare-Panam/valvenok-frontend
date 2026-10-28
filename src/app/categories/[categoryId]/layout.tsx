import { Metadata } from "next";
import { categoryMetadata, categoryDescription, categoryName } from "./categoryMeta";

type Props = {
  params: Promise<{ categoryId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryId = (await params).categoryId;

  const custom = categoryMetadata[categoryId];

  const title = custom?.title ?? `${categoryName(categoryId)} — Browse the Range | Valvenok`;
  const description = categoryDescription(categoryId);

  return {
    title: { absolute: title },
    description,
    // Without this the route inherits /categories' canonical
    alternates: { canonical: `/categories/${categoryId}` },
    openGraph: {
      title,
      description,
      url: `https://www.valvenok.com/categories/${categoryId}`,
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}