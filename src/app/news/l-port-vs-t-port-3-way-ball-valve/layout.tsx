import { Metadata } from "next";

const TITLE = "L-Port vs T-Port 3-Way Ball Valves: Flow Paths Explained";
const DESCRIPTION =
  "L-port or T-port? Flow path diagrams for every position, when to use each for diverting, mixing and bypass, and a spec checklist. Request a quote from Valvenok.";
const COVER = "https://pblol2.blob.core.windows.net/valvenok-images/blogs/l-port-vs-t-port-3-way-ball-valve.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/l-port-vs-t-port-3-way-ball-valve" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["3 way ball valve", "l port vs t port", "l port ball valve", "t port ball valve", "3 way valve flow path", "diverting valve", "bypass valve"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.valvenok.com/news/l-port-vs-t-port-3-way-ball-valve",
    siteName: "Valvenok",
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-11-04T00:00:00.000Z",
    images: [{ url: COVER, width: 1200, height: 630, alt: "L-port vs T-port 3-way ball valve selection guide" }],
  },
};

export default function LPortTPortLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
