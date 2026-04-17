// app/pumps/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Industrial Pump Solutions | Valvenok Limited',
  description: 'Browse Valvenok\'s range of industrial pumps — peripheral, centrifugal, and more. Engineered for clean water, pressure boosting, and industrial liquid transfer applications.',
  openGraph: {
    title: 'Industrial Pump Solutions | Valvenok Limited',
    description: 'Peripheral, centrifugal and industrial pumps for critical process applications. Request a quote today.',
    url: 'https://www.valvenok.com/pumps',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Pump Solutions | Valvenok Limited',
    description: 'Industrial pumps for pressure boosting and liquid transfer. Request a quote.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/pumps',
  }
};

export default function PumpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}