import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/triple-offset-butterfly-valves" },
  title: "Triple Offset Butterfly Valves UK Supply",
  description:
    "Triple offset butterfly valves from Valvenok, a UK engineering supplier offering technical selection support, actuation packages and global project supply.",
  keywords: [
    "triple offset butterfly valves",
    "triple offset butterfly valve",
    "butterfly valve supplier UK",
    "high-performance butterfly valves",
    "metal-seated butterfly valves",
    "double offset butterfly valve",
    "fire-safe butterfly valves",
    "butterfly valve actuation",
    "butterfly valves Bicester",
    "Valvenok",
  ],
  openGraph: {
    title: "Triple Offset Butterfly Valves UK Supply | Valvenok",
    description:
      "Triple offset butterfly valves from Valvenok, a UK engineering supplier offering technical selection support, actuation packages and global project supply.",
    url: "https://www.valvenok.com/triple-offset-butterfly-valves",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Triple offset butterfly valves for severe-service industrial applications",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function TripleOffsetButterflyValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
