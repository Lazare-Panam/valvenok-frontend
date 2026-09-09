import type { Metadata } from "next";

const TITLE = "Valvenok Partners with Mars Valves";
const DESCRIPTION =
  "Valvenok partners with Mars Valves to expand industrial valve solutions across the UK.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/mars-banner.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mars-valve-partnership" },
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

export default function ValvenokMarsPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
