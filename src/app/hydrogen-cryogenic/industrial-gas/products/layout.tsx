import type { Metadata } from "next";

const TITLE = "Industrial Gas Valves Variants | Valvenok";
const DESCRIPTION =
  "Youngdo industrial valves across 7 categories, KGS, CGA V-1, BS 341, ISO certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/industrial-gas/products" },
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

export default function IndustrialGasProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}