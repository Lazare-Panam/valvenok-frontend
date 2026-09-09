import type { Metadata } from "next";

const TITLE = "Flanged Sight Glasses | Valvenok";
const DESCRIPTION =
  "BAG-FL flanged sight glasses, PN16/PN40, DN15-DN150, cast iron GG25 body.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sight-glass/sight-glass-no-bg.png";

export const metadata: Metadata = {
  alternates: { canonical: "/filters-sight-glass/sight-glass" },
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
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function FlangedSightGlassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}