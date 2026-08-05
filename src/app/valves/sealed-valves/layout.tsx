import type { Metadata } from "next";

const TITLE = "Sealed Valves | Valvenok";
const DESCRIPTION =
  "Bellows sealed globe, gate and check valves in DIN, ANSI and JIS standards with zero stem leakage.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg";

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

export default function SealedValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}