// app/industrial-valves/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: 'Industrial Valves | Valvenok Limited',
  description: 'Browse Valvenok\'s full range of industrial valves — API 6D ball valves, DBB, trunnion, needle, check, and gas valves from Batu Valve and Atam. High-pressure rated up to 1000 bar.',
  openGraph: {
    title: 'Industrial Valves | Valvenok Limited',
    description: 'API 6D ball valves, DBB, trunnion, needle, check and gas valves. High-pressure rated up to 1000 bar. Request a quote today.',
    url: 'https://www.valvenok.com/valves/industrial-valves',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Valves | Valvenok Limited',
    description: 'API 6D ball valves, DBB, trunnion, needle and check valves. Up to 1000 bar.',
  },
  alternates: {
    canonical: 'https://www.valvenok.com/valves/industrial-valves',
  }
};

export default function IndustrialValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}