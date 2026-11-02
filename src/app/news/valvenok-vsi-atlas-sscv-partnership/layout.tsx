import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/valvenok-vsi-atlas-sscv-partnership" },
  title: { absolute: "VSI Atlas Control Valve Partnership | Valvenok" },
  description: "Valvenok partners with Valve Systems International to represent the Atlas Severe Service Control Valve, designed to tackle cavitation at the source.",
  keywords: [
    "Atlas SSCV",
    "Severe Service Control Valve",
    "VSI Partnership",
    "Cavitation Control Valve",
    "High Pressure Control Valve",
    "Valve Systems International",
    "Valvenok News",
    "Severe Service Valves UK",
  ],
  openGraph: {
    title: "VSI Atlas Control Valve Partnership | Valvenok",
    description: "Valvenok partners with Valve Systems International to represent the Atlas Severe Service Control Valve, designed to tackle cavitation at the source.",
    url: "https://www.valvenok.com/news/valvenok-vsi-atlas-sscv-partnership",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/vsi.jpeg",
        width: 1200,
        height: 630,
        alt: "Valvenok and VSI Partnership — Atlas SSCV",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-06-01T00:00:00.000Z",
  },
};

export default function VSIPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}