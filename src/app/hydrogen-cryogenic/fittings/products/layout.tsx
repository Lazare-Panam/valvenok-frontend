import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "Hiflux High Pressure Fittings & Manifold Blocks | Valvenok";
const DESCRIPTION =
  "27 Hiflux high pressure fittings, accessories, manifold blocks and tube caps rated 15,000 to 150,000 psi. Certification varies by product.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/fittings/products" },
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

export default function HifluxFittingsCatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/hydrogen-cryogenic/fittings/products" /></>;
}
