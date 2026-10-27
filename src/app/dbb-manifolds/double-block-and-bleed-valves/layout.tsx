import type { Metadata } from "next";

const TITLE = "Double Block & Bleed Valves | Valvenok";
const DESCRIPTION =
  "SS316 DBB valves, ANSI 150-2500, NACE MR-0175 sour gas option.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/double-block-and-bleed-valves" },
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

export default function DBBIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
