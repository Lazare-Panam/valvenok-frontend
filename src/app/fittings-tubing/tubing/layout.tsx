import type { Metadata } from "next";

const TITLE = "Instrumentation Tubing & Tube Supports — SS316 | Valvenok";
const DESCRIPTION =
  "Instrumentation tubing in a range of materials, outside diameters and wall thicknesses, plus tube supports. Browse the range and request a quote.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/tubing" },
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

export default function TubingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
