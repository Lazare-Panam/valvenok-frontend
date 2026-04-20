// app/valves/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Industrial Valve Categories | Panam Valves',
  description: 'Explore our full range of precision industrial valves — ball, needle, manifold, gate, globe, check and more. Engineered for critical process environments.',
  openGraph: {
    title: 'Industrial Valve Categories | Panam Valves',
    description: 'Precision valves for critical process environments. Ball, needle, manifold and more.',
    url: 'https://www.valvenok.com/valves',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Valve Categories | Panam Valves',
    description: 'Precision valves for critical process environments.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/valves',
  }
};

export default function ValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}