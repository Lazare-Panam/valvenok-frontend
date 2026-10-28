import type { Metadata } from "next";

const TITLE = "High Pressure Valves & Fittings, 10,000–60,000 psi | Valvenok";
const DESCRIPTION =
  "SS316 high pressure needle valves, ball valves, cone and thread fittings, tubing and manifolds rated from 10,000 to 60,000 psi. Request a quote.";
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