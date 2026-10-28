// app/delivery/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: "Delivery Information — UK & Worldwide Shipping | Valvenok" },
  description: "Delivery options for industrial valves and fittings ordered from Valvenok: standard, express and next-day UK delivery, plus worldwide shipping.",
  openGraph: {
    title: "Delivery Information — UK & Worldwide Shipping | Valvenok",
    description: "Delivery options for industrial valves and fittings ordered from Valvenok: standard, express and next-day UK delivery, plus worldwide shipping.",
    url: 'https://www.valvenok.com/delivery',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Delivery Information — UK & Worldwide Shipping | Valvenok",
    description: "Delivery options for industrial valves and fittings ordered from Valvenok: standard, express and next-day UK delivery, plus worldwide shipping.",
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