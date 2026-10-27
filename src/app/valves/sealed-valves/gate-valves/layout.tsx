import type { Metadata } from "next";

const TITLE = "Bellows Sealed Gate Valves | Valvenok";
const DESCRIPTION =
  "DIN/ANSI bellows sealed gate valves, auto-welded, zero stem leakage, double seal design.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-bellows-sealed-gate-valve.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves/gate-valves" },
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

export default function BellowsSealedGateValveInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}