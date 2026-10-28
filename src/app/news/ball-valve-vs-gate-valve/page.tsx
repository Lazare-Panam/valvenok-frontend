import type { Metadata } from 'next';
import BallValveVsGateValvePage from './blog';

const ARTICLE_URL = 'https://www.valvenok.com/news/ball-valve-vs-gate-valve';
const TITLE = "Ball Valve vs Gate Valve: Key Differences Explained | Valvenok";
const DESCRIPTION =
  'Ball valve or gate valve? How each works and seals, where each is used by industry, and how to choose the right one for your line.';

export const metadata: Metadata = {
  alternates: { canonical: '/news/ball-valve-vs-gate-valve' },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: "Ball Valve vs Gate Valve: Key Differences Explained | Valvenok",
    description: DESCRIPTION,
    url: ARTICLE_URL,
    type: 'article',
    authors: ['Valvenok Team'],
    publishedTime: '2026-04-08T00:00:00.000Z',
    modifiedTime: '2026-10-27T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "Ball Valve vs Gate Valve: Key Differences",
  description: DESCRIPTION,
  author: { '@type': 'Organization', name: 'Valvenok' },
  publisher: {
    '@type': 'Organization',
    name: 'Valvenok',
    logo: {
      '@type': 'ImageObject',
      url: 'https://pblol2.blob.core.windows.net/valvenok-images/logo.png',
    },
  },
  datePublished: '2026-04-08',
  dateModified: '2026-10-27',
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BallValveVsGateValvePage />
    </>
  );
}
