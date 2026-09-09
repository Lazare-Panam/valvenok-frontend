import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "/quick-order" },
  title: 'Quick Order',
  description: 'Fast procurement for Panam SS316 fittings and instrumentation components. Search by part number, add to basket, and checkout in minutes. No minimum order.',
  keywords: [
    'SS316 fittings quick order',
    'Panam fittings UK',
    'instrumentation fittings stock',
    'industrial fittings online',
    'valve fittings fast dispatch',
    'BSPP NPT fittings UK',
  ],
  openGraph: {
    title: 'Quick Order — SS316 Panam Fittings | Valvenok',
    description: 'Search 130+ Panam SS316 fittings by part number. In stock. 2–3 day UK dispatch. No minimum order.',
    url: 'https://www.valvenok.com/quick-order',
    siteName: 'Valvenok',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuickOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}