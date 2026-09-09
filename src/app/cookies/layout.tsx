// app/cookies/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: 'Cookie Policy | Valvenok Limited' },
  description: 'Learn how Valvenok Limited uses cookies on our website. Manage your cookie preferences for analytics, functional, and marketing cookies.',
  openGraph: {
    title: 'Cookie Policy | Valvenok Limited',
    description: 'How Valvenok Limited uses cookies and how to manage your preferences.',
    url: 'https://www.valvenok.com/cookies',
    siteName: 'Valvenok',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/cookies',
  },
 
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}