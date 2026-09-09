import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/pietro-fiorentini-partnership" },
  title: "Valvenok Announces Partnership with Pietro Fiorentini | Flow Control Solutions",
  description: "Valvenok is now an Authorized Representative of Pietro Fiorentini — bringing world-class Italian engineering in flow control, pressure management, and valve technologies to customers across the UK and beyond.",
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
    title: "Italian Innovation. Delivered Through Valvenok. | Pietro Fiorentini Partnership",
    description: "Valvenok is proud to be an Authorized Representative of Pietro Fiorentini — bringing world-class Italian engineering closer to our customers.",
    url: "https://www.valvenok.com/news/pietro-fiorentini-partnership",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pietro_fiorentini.jpeg",
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