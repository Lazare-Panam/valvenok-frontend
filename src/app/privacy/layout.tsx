// app/privacy/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Privacy Policy | Valvenok Limited',
  description: 'Read Valvenok Limited\'s Privacy Policy. We are committed to handling your personal data responsibly in compliance with UK GDPR and the Data Protection Act 2018.',
  openGraph: {
    title: 'Privacy Policy | Valvenok Limited',
    description: 'How Valvenok Limited collects, uses, and protects your personal data. UK GDPR compliant.',
    url: 'https://www.valvenok.com/privacy',
    siteName: 'Valvenok',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/privacy',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}