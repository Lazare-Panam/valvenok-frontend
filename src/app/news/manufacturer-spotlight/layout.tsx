// app/blog/manufacturer-spotlight/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'The World\'s Best Valve Manufacturers | Valvenok Partner Network',
  description: 'Valvenok partners with 16 of the world\'s leading valve manufacturers — Fisher, Cameron, Crosby, Baker Hughes and more. One RFQ, all brands covered.',
  openGraph: {
    title: 'The World\'s Best Valve Manufacturers | Valvenok',
    description: '16 leading manufacturers. 6 continents. One procurement relationship.',
    url: 'https://www.valvenok.com/news/manufacturer-spotlight',
    siteName: 'Valvenok',
    images: [
      {
        url: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/batu-logo.png',
        width: 1200,
        height: 630,
        alt: 'Valvenok Manufacturer Network',
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The World\'s Best Valve Manufacturers | Valvenok',
    description: '16 leading manufacturers. 6 continents. One procurement relationship.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/news/manufacturer-spotlight',
  }
};

export default function ManufacturerSpotlightLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}