// app/marine-valves/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Marine Valves | Valvenok Limited',
  description: 'Explore Valvenok\'s range of marine-grade valves — gate, globe, butterfly, swing check, dual plate and fire hydrant valves in NAB, Gun Metal, and Stainless Steel. Request a quote today.',
  openGraph: {
    title: 'Marine Valves | Valvenok Limited',
    description: 'NAB, Gun Metal, and SS marine valves compliant with NES 375, BS 5155, API 594, and BS 1868. Gate, butterfly, check, and fire hydrant series.',
    url: 'https://www.valvenok.com/valves/marine-valves',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marine Valves | Valvenok Limited',
    description: 'Marine-grade gate, butterfly, check and fire hydrant valves. NES 375, BS 5155 compliant.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/valves/marine-valves',
  }
};

export default function MarineValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}