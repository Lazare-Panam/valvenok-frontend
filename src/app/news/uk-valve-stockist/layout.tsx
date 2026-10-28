import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/uk-valve-stockist" },
  title: { absolute: "Why Buy Valves From a UK Stockist — Buyer's Guide | Valvenok" },
  description:
    "Buying valves from a UK stockist: no minimum order on standard catalogue items and a company you can verify. Valvenok is based in Bicester, Oxfordshire.",
  keywords: [
    "UK valve stockist",
    "valve stockist UK",
    "valve stockist Oxfordshire",
    "valve stockist Bicester",
    "buy valves UK",
    "no minimum order valves",
    "JOSCAR registered supplier",
    "industrial valves UK stock",
    "Valvenok",
  ],
  openGraph: {
    title: "Why Buy Valves From a UK Stockist — Buyer's Guide | Valvenok",
    description:
      "Buying valves from a UK stockist: no minimum order on standard catalogue items and a company you can verify. Valvenok is based in Bicester, Oxfordshire.",
    url: "https://www.valvenok.com/news/uk-valve-stockist",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Valvenok UK valve supplier",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-09-11T00:00:00.000Z",
  },
};

export default function UkValveStockistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
