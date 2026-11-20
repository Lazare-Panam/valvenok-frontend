import type { Metadata } from "next";
import BallValveVsGateValvePage from "./blog";

const COVER =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/ball-valve-vs-gate-valve.jpg";
const ARTICLE_URL = "https://www.valvenok.com/news/ball-valve-vs-gate-valve";
const TITLE = "Ball Valve vs Gate Valve: Key Differences | Valvenok";
const DESCRIPTION =
  "Ball valve or gate valve? How each works and seals, where each is used by industry, and how to choose the right one for your line.";

export const metadata: Metadata = {
  alternates: { canonical: "/news/ball-valve-vs-gate-valve" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: "Ball Valve vs Gate Valve: Key Differences | Valvenok",
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-04-08T00:00:00.000Z",
    modifiedTime: "2026-10-27T00:00:00.000Z",
    images: [
      { url: COVER, width: 1200, height: 630, alt: "Ball valve vs gate valve" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [COVER],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Ball Valve vs Gate Valve: Key Differences",
  description: DESCRIPTION,
  image: COVER,
  author: { "@type": "Organization", name: "Valvenok" },
  publisher: {
    "@type": "Organization",
    name: "Valvenok",
    logo: {
      "@type": "ImageObject",
      url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg",
    },
  },
  datePublished: "2026-04-08",
  dateModified: "2026-10-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
};

export default function Page() {
  return <BallValveVsGateValvePage schema={blogSchema} />;
}
