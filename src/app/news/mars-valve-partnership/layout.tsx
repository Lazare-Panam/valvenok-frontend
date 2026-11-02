import type { Metadata } from "next";

const TITLE = "Valvenok and Mars Valves Partner on UK Supply | Valvenok";
const DESCRIPTION =
  "Valvenok has partnered with Mars Valves to bring Mars ball valves and industrial valve solutions to customers across the UK. Read the announcement.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/mars-banner.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mars-valve-partnership" },
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

export default function ValvenokMarsPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
