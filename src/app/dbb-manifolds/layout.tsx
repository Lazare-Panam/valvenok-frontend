import type { Metadata } from "next";

const TITLE = "Isolation & Manifold Valves | Valvenok";
const DESCRIPTION =
  "DBB valves and valve manifolds, ANSI 150-2500, NACE MR-0175 sour gas certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds" },
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

export default function InstrumentationIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
