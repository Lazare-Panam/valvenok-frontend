import type { Metadata } from "next";

const TITLE = "Hydrogen Cylinder Valve Models | Valvenok";
const DESCRIPTION =
  "13 Youngdo hydrogen cylinder valve models, 3-70 MPa, KGS, EC79, R134 and IECEx certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/hydrogen/products" },
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

export default function HydrogenProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
