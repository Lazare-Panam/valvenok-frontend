import type { Metadata } from "next";

const TITLE = "Tubing | Valvenok";
const DESCRIPTION =
  "Instrumentation tubing across multiple materials, outer diameters and wall thicknesses.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

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
