import type { Metadata } from "next";

const TITLE = "Bellows Sealed Globe Valves | Valvenok";
const DESCRIPTION =
  "DIN/ANSI/JIS bellows sealed globe valves, zero stem leakage, double seal design.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg";

export const metadata: Metadata = {
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

export default function BellowsSealedGlobeValveInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}