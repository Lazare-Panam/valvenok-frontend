import type { Metadata } from "next";

const TITLE = "3-Valve Manifolds | Valvenok";
const DESCRIPTION =
  "3-valve manifolds across multiple connection types, mountings and pressure ratings.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/manifolds/3VM" },
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

export default function Manifolds3VMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
