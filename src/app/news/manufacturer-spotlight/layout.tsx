// app/blog/manufacturer-spotlight/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'The World\'s Best Valve Manufacturers | Valvenok Partner Network',
  description: 'Valvenok partners with 16 of the world\'s leading valve manufacturers — Fisher, Cameron, Crosby, Baker Hughes and more. One RFQ, all brands covered.',
  openGraph: {
    title: 'The World\'s Best Valve Manufacturers | Valvenok',
    description: '16 leading manufacturers. 6 continents. One procurement relationship.',
    url: 'https://www.valvenok.com/blog/manufacturer-spotlight',
    siteName: 'Valvenok',
    images: [
      {
        url: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776071072/f6b8803c-7833-40b1-9311-228c31e14a92.png',
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
    canonical: 'https://www.valvenok.com/blog/manufacturer-spotlight',
  }
};

export default function ManufacturerSpotlightLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}