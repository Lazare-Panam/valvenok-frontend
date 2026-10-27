// app/quality/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: 'Quality & Standards | Valvenok Limited' },
  description: 'Valvenok is a JOSCAR-registered valve supplier. Products are available to standards including PED, ATEX and NACE MR0175 — certification varies by model. Material traceability available for applicable lines.',
  openGraph: {
    title: 'Quality & Standards | Valvenok Limited',
    description: 'JOSCAR-registered valve supplier. Certification and traceability documentation vary by model — ask us for what your project needs.',
    url: 'https://www.valvenok.com/quality',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality & Standards | Valvenok Limited',
    description: 'JOSCAR-registered valve supplier. Certification varies by model.',
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