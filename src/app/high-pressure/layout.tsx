import type { Metadata } from "next";

const TITLE = "High Pressure Valves & Fittings | Valvenok";
const DESCRIPTION =
  "SS316 high pressure valves, fittings and manifolds, 10,000-60,000 psi.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/yunshuo-qu-bqxIzrYzGaI-unsplash.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure" },
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

export default function HighPressureIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}