import type { Metadata } from "next";

const TITLE = "LPG Cylinder Valves | Valvenok";
const DESCRIPTION =
  "20 Youngdo LPG cylinder valves, OPD devices and piping valves. Certification (KGS, KS, CGA V-1, UL) varies by model.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YLC-2821.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/lpg" },
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

export default function LPGValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
