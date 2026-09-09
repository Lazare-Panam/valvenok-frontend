import type { Metadata } from "next";

const TITLE = "5-Valve Manifolds | Valvenok";
const DESCRIPTION =
  "5-valve manifolds across multiple connection types, mountings and pressure ratings.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/manifolds/5VM" },
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

export default function Manifolds5VMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
