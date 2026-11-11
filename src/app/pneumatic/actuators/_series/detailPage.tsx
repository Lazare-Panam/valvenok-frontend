// Server helpers for the per-model product pages (/pneumatic/actuators/<series>/products/<slug>).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ModelDetail, { type SeriesMeta } from "./ModelDetail";
import type { Item } from "./modelTypes";

export type Props = { params: Promise<{ slug: string }> };

// The headline figure for the photo badge: the first green pill in the row
const badgeOf = (i: Item) => {
  const c = i.cells.find((x) => typeof x !== "string" && x.pill === "green");
  return c && typeof c !== "string" ? c.text : i.sub;
};

export function detailPage(items: Item[], series: SeriesMeta) {
  return {
    generateStaticParams: () => items.map((i) => ({ slug: i.slug! })),
    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const { slug } = await params;
      const i = items.find((x) => x.slug === slug);
      if (!i) return {};
      const title = `${i.model} ${series.kind}, ${badgeOf(i)} | Valvenok`;
      const description = `${i.rfq.description} Full specifications, Susin catalogue data and a quote from Valvenok.`;
      return {
        alternates: { canonical: i.href },
        title: { absolute: title },
        description,
        openGraph: { title, description, type: "website", images: [i.image] },
      };
    },
    Page: async ({ params }: Props) => {
      const { slug } = await params;
      const i = items.find((x) => x.slug === slug);
      if (!i) notFound();
      return <ModelDetail item={i} items={items} series={series} badge={badgeOf(i)} />;
    },
  };
}
