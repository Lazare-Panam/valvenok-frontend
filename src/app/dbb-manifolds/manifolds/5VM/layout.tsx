import type { Metadata } from "next";

const TITLE = "5-Valve Manifolds | Valvenok";
const DESCRIPTION =
  "5-valve manifolds across multiple connection types, mountings and pressure ratings.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/Valvenok_logo.jpeg";

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

export default function Manifolds5VMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
