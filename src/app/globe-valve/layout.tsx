import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/globe-valve" },
  title: "Globe Valve Sourcing & Instrumentation Support",
  description:
    "Globe valve engineering, sourcing and documentation from Valvenok in Bicester, supporting critical process and instrumentation projects worldwide. 24-hour engineering response with UK stock and global dispatch.",
  keywords: [
    "globe valve",
    "globe valve supplier UK",
    "globe valve sourcing",
    "control globe valve",
    "throttling valve",
    "instrumentation globe valve",
    "globe valve Bicester",
    "stainless steel globe valve",
    "globe valve specification support",
    "Valvenok",
  ],
  openGraph: {
    title: "Globe Valve Sourcing & Instrumentation Support | Valvenok",
    description:
      "Globe valve engineering, sourcing and documentation from Valvenok in Bicester, supporting critical process and instrumentation projects worldwide.",
    url: "https://www.valvenok.com/globe-valve",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Globe valve sourcing and instrumentation support",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function GlobeValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
