import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/pietro-fiorentini-partnership" },
  title: { absolute: "Pietro Fiorentini Partnership: Flow Control | Valvenok" },
  description: "Valvenok is now an Authorised Representative of Pietro Fiorentini, bringing Italian flow control and pressure management products to UK customers.",
  keywords: [
    "Pietro Fiorentini",
    "Pressure Regulators UK",
    "Flow Control Solutions",
    "Industrial Valves",
    "Dival 160 AP",
    "Starflux 185",
    "Butterfly Valve BF31",
    "Valvenok Partnership",
    "Italian Valve Manufacturer",
    "Energy Sector Valves"
  ],
  openGraph: {
    title: "Pietro Fiorentini Partnership: Flow Control | Valvenok",
    description: "Valvenok is now an Authorised Representative of Pietro Fiorentini, bringing Italian flow control and pressure management products to UK customers.",
    url: "https://www.valvenok.com/news/pietro-fiorentini-partnership",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pf.jpeg",
        width: 1200,
        height: 630,
        alt: "Valvenok and Pietro Fiorentini Partnership Announcement",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-06-19T00:00:00.000Z",
  },
};

export default function PietroFiorentiniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}