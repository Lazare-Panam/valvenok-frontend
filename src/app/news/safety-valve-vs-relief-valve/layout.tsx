import { Metadata } from "next";

const TITLE = "Safety Valve vs Relief Valve: How They Work & How to Choose";
const DESCRIPTION =
  "Safety valve vs relief valve explained: how each works, key terms like set pressure and blowdown, sizing basics, UK rules under PSSR, and how to choose.";
const COVER = "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png";

export const metadata: Metadata = {
  alternates: { canonical: "/news/safety-valve-vs-relief-valve" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "safety valve vs relief valve",
    "what is a safety valve",
    "pressure relief valve",
    "safety relief valve",
    "how does a safety valve work",
    "safety valve set pressure",
  ],
  openGraph: {
    title: TITLE,
    description: "How safety and relief valves work, the key datasheet terms, sizing basics and UK rules under PSSR.",
    url: "https://www.valvenok.com/news/safety-valve-vs-relief-valve",
    siteName: "Valvenok",
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-11-27T00:00:00.000Z",
    images: [{ url: COVER, alt: "Instrumentation relief valve" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function SafetyValveGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
