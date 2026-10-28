import type { Metadata } from "next";

const TITLE = "Mars Valve Stock Lands in the UK in November";
const DESCRIPTION =
  "Mars Valve stock lands in the UK this November. Send your RFQ now for priority on the V77, V88, V22 and MARS ball valves.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/mars-banner.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mars-valve-stock-uk-november" },
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Mars valves UK",
    "Mars valve stock",
    "Mars Series 77",
    "V77 ball valve",
    "Mars ball valves UK stock",
    "Valvenok",
  ],
  openGraph: {
    title: `${TITLE} | Valvenok`,
    description: DESCRIPTION,
    url: "/news/mars-valve-stock-uk-november",
    siteName: "Valvenok",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Mars Valves" }],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-10-20T00:00:00.000Z",
  },
};

export default function MarsStockNovemberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
