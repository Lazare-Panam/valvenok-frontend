import { Metadata } from "next";

const TITLE = "Butterfly vs Ball vs Gate Valve: Which to Use and When";
const DESCRIPTION =
  "Butterfly valve vs ball valve vs gate valve: compare weight, length, cost and shut-off, learn when to use a butterfly valve, and the 5 questions to ask first.";
const COVER = "https://pblol2.blob.core.windows.net/valvenok-images/blogs/butterfly-valve-vs-ball-valve-vs-gate-valve.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/butterfly-valve-vs-ball-valve-vs-gate-valve" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "butterfly valve vs ball valve vs gate valve",
    "when to use a butterfly valve",
    "butterfly valve selection",
    "centric vs triple offset butterfly valve",
    "butterfly valve advantages",
    "butterfly valve UK",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.valvenok.com/news/butterfly-valve-vs-ball-valve-vs-gate-valve",
    siteName: "Valvenok",
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-11-24T00:00:00.000Z",
    images: [{ url: COVER, width: 1200, height: 630, alt: "Butterfly valve vs ball valve vs gate valve selection guide" }],
  },
};

export default function ButterflyVsBallVsGateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
