import type { Metadata } from "next";

const TITLE = "Mars Valve Stock Lands in the UK This November | Valvenok";
const DESCRIPTION =
  "Mars Valve stock lands in the UK this November. Send your RFQ now for priority on the V77, V88, V22 and MARS ball valves.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/mars-valves/mars-stock-coming.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mars-valve-stock-uk-november" },
  title: { absolute: TITLE },
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
    title: "Mars Valve Stock Lands in the UK This November | Valvenok",
    description: DESCRIPTION,
    url: "/news/mars-valve-stock-uk-november",
    siteName: "Valvenok",
    images: [{ url: IMAGE, width: 1536, height: 1024, alt: "MARS valve stock arriving in the UK" }],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-10-20T00:00:00.000Z",
  },
};

export default function MarsStockNovemberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
