import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: "/quick-order" },
  title: { absolute: "Quick Order — Buy PANAM SS316 Fittings Online | Valvenok" },
  description: 'Fast procurement for Panam SS316 fittings and instrumentation components. Search by part number, add to basket, and checkout in minutes. No minimum order.',
  keywords: [
    'SS316 fittings quick order',
    'Panam fittings UK',
    'instrumentation fittings stock',
    'industrial fittings online',
    'valve fittings UK supplier',
    'BSPP NPT fittings UK',
  ],
  openGraph: {
    title: "Quick Order — Buy PANAM SS316 Fittings Online | Valvenok",
    description: 'Search Panam SS316 fittings by part number. Add to basket and check out online. No minimum order.',
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