import type { Metadata } from "next";

const TITLE = "2-Valve Manifolds | Valvenok";
const DESCRIPTION =
  "2-valve manifolds across multiple materials, connection types and pressure ratings.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/manifolds/2VM" },
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

export default function TwoVMManifoldsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
