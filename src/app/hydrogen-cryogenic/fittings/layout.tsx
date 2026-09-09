import type { Metadata } from "next";

const TITLE = "High Pressure Fittings | Valvenok";
const DESCRIPTION =
  "Hiflux high pressure fittings, accessories and manifold blocks rated up to 150,000 psi, KC and KGS certified.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/fittings" },
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

export default function HifluxFittingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
