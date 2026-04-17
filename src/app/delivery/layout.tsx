// app/delivery/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Delivery Information | Valvenok Limited',
  description: 'Fast UK delivery on industrial valves and fittings. Standard, express, and next-day options available. Free delivery on orders over £150. Worldwide shipping available.',
  openGraph: {
    title: 'Delivery Information | Valvenok Limited',
    description: 'UK stock. 2–3 day dispatch. Free delivery over £150. Worldwide shipping for industrial valves and fittings.',
    url: 'https://www.valvenok.com/delivery',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delivery Information | Valvenok Limited',
    description: 'UK stock. 2–3 day dispatch. Free delivery over £150. Worldwide shipping.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/delivery',
  }
};

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}