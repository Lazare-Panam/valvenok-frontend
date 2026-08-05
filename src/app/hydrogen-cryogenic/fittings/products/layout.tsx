import type { Metadata } from "next";

const TITLE = "Hiflux Fittings Catalog | Valvenok";
const DESCRIPTION =
  "27 Hiflux fittings, accessories, manifold blocks and tube caps, 15,000-150,000 psi, KC/KGS certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png";

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

export default function HifluxFittingsCatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
