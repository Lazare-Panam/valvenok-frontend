import type { Metadata } from "next";

const TITLE = "Sight Glasses & Filtration | Valvenok";
const DESCRIPTION =
  "Sight glasses, strainers and hydraulic filtration for industrial pipelines.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sight-glass/sight-glass-hero.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/filters-sight-glass" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE],
  },
};

export default function SightGlassFiltrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
