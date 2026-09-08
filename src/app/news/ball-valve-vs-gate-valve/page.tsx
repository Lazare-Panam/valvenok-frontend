import type { Metadata } from 'next';
import BallValveVsGateValvePage from './blog';

export const metadata: Metadata = {
  alternates: { canonical: '/news/ball-valve-vs-gate-valve' },
  title: 'Ball Valve vs Gate Valve: Technical Guide to Differences & Applications',
  description: 'Ball valve or gate valve? This technical guide covers how each works, sealing standards, pressure ratings, real-world applications by industry, and exactly when to use each one.',
  openGraph: {
    title: 'Ball Valve vs Gate Valve: Technical Guide | Valvenok',
    description: 'Ball valve or gate valve? Technical guide covering sealing standards, pressure ratings, real-world applications by industry, and exactly when to use each one.',
    url: 'https://www.valvenok.com/news/ball-valve-vs-gate-valve',
    type: 'article',

  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Page() {
  return <BallValveVsGateValvePage />;
}