// app/terms/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Terms & Conditions | Valvenok Limited',
  description: 'Read the Terms and Conditions governing purchases and use of the Valvenok Limited website. Effective 1 January 2025.',
  openGraph: {
    title: 'Terms & Conditions | Valvenok Limited',
    description: 'Terms and Conditions governing purchases and use of the Valvenok Limited website.',
    url: 'https://www.valvenok.com/terms',
    siteName: 'Valvenok',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/terms',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}