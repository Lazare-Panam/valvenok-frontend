// app/blog/manufacturer-spotlight/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: 'Valve Manufacturers We Can Source | Valvenok' },
  description: '16 valve manufacturers Valvenok can source from, including Fisher, Cameron, Crosby and Baker Hughes. Send one RFQ and we will quote across brands.',
  openGraph: {
    title: 'Valve Manufacturers We Can Source | Valvenok',
    description: '16 valve manufacturers, one RFQ. Valvenok quotes across brands.',
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
    title: 'Valve Manufacturers We Can Source | Valvenok',
    description: '16 valve manufacturers, one RFQ. Valvenok quotes across brands.',
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