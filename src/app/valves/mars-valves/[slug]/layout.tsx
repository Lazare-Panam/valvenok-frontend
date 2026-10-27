import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import { MARS_BALL_VALVES_DATA } from "../components/data";

type Props = {
  params: Promise<{ slug: string }>;
};

// Without this, every series page inherits /valves/mars-valves' title and
// canonical, so Google treats them all as copies of the listing page.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = MARS_BALL_VALVES_DATA.find((s) => s.slug === slug);

  if (!series) {
    return { title: "Series Not Found", robots: { index: false, follow: true } };
  }

  const description =
    series.description.length > 160
      ? `${series.description.slice(0, series.description.lastIndexOf(" ", 155))}…`
      : series.description;

  return pageMetadata({
    title: `Mars ${series.name}`,
    description,
    path: `/valves/mars-valves/${series.slug}`,
  });
}

export default function MarsSeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
