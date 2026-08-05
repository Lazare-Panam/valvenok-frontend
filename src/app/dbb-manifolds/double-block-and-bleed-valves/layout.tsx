import type { Metadata } from "next";

const TITLE = "Double Block & Bleed Valves | Valvenok";
const DESCRIPTION =
  "SS316 DBB valves, ANSI 150-2500, NACE MR-0175 sour gas certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg";

export const metadata: Metadata = {
  title: TITLE,
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

export default function DBBIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
