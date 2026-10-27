import type { Metadata } from "next";

const TITLE = "Valve Manifolds | Valvenok";
const DESCRIPTION =
  "2, 3 and 5-valve manifolds, ANSI 150-2500, NACE MR-0175 sour gas option.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/manifolds" },
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

export default function ManifoldsIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
