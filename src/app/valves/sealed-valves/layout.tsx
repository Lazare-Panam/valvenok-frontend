import type { Metadata } from "next";

const TITLE = "Bellows Sealed Globe, Gate & Check Valves | Valvenok";
const DESCRIPTION =
  "Bellows sealed globe, gate and check valves to DIN, ANSI and JIS standards, designed to prevent stem leakage. Browse the range and request a quote.";
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