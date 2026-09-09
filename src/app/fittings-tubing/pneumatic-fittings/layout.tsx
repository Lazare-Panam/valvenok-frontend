import type { Metadata } from "next";

const TITLE = "Pneumatic Fittings | Valvenok";
const DESCRIPTION =
  "Push-in and compression pneumatic fittings, \u00d84-\u00d816mm, BSP/M5 threads.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/spac-images/products/fitting/p-fittings-hero.jpg";

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
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function FittingsIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
