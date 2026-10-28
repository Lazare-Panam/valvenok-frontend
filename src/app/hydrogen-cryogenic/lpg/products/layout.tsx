import type { Metadata } from "next";

const TITLE = "Youngdo LPG Cylinder Valve Models — Compare Range | Valvenok";
const DESCRIPTION =
  "Compare 20 Youngdo LPG cylinder valves, OPD devices and piping valves, then request a quote. Certification (KGS, KS, CGA V-1, UL) varies by model.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/lpg/products" },
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

export default function LPGProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
