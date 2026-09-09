import type { Metadata } from "next";

const PRODUCT_TITLE = "Sealed Lift Check Valve | Valvenok";
const PRODUCT_DESCRIPTION =
  "Sealed lift check valve with zero stem leakag for chemical and industrial applications.";
const PRODUCT_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-lift-check-valve-300x300.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves/check-valves" },
  title: { absolute: PRODUCT_TITLE },
  description: PRODUCT_DESCRIPTION,
  openGraph: {
    title: PRODUCT_TITLE,
    description: PRODUCT_DESCRIPTION,
    type: "website",
    images: [PRODUCT_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PRODUCT_TITLE,
    description: PRODUCT_DESCRIPTION,
    images: [PRODUCT_IMAGE],
  },
};

export default function DinStandardLiftCheckValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}