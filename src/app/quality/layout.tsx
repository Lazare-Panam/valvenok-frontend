// app/quality/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: 'Quality & Standards | Valvenok Limited' },
  description: 'Valvenok is a JOSCAR-registered valve supplier meeting ISO 9001, PED, ATEX, and NACE standards. Full material traceability across SS316, Duplex, Hastelloy and more.',
  openGraph: {
    title: 'Quality & Standards | Valvenok Limited',
    description: 'JOSCAR-registered. ISO 9001. Full traceability. Every component selected for critical industrial applications.',
    url: 'https://www.valvenok.com/quality',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality & Standards | Valvenok Limited',
    description: 'JOSCAR-registered valve supplier. ISO 9001, PED, ATEX, NACE compliant.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/quality',
  }
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}