import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "Youngdo Industrial Gas Cylinder Valve Models | Valvenok";
const DESCRIPTION =
  "Compare Youngdo industrial gas cylinder valve models across 7 categories and request a quote from Valvenok. Certification and standards vary by model.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/industrial-gas/products" },
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

export default function IndustrialGasProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/hydrogen-cryogenic/industrial-gas/products" /></>;
}