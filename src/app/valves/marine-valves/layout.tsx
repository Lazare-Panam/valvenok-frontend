// app/marine-valves/layout.tsx

import { Suspense } from 'react';
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata = {
  title: { absolute: "Marine Gate, Globe, Butterfly & Check Valves | Valvenok" },
  description: "Marine valves in NAB, gunmetal and stainless steel: gate, globe, butterfly, swing check, dual plate and fire hydrant valves. Request a quote today.",
  openGraph: {
    title: "Marine Gate, Globe, Butterfly & Check Valves | Valvenok",
    description: "Marine valves in NAB, gunmetal and stainless steel: gate, globe, butterfly, swing check, dual plate and fire hydrant valves. Request a quote today.",
    url: 'https://www.valvenok.com/valves/marine-valves',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marine Gate, Globe, Butterfly & Check Valves | Valvenok",
    description: "Marine valves in NAB, gunmetal and stainless steel: gate, globe, butterfly, swing check, dual plate and fire hydrant valves. Request a quote today.",
  },
  alternates: {
    canonical: 'https://www.valvenok.com/valves/marine-valves',
  }
};

export default function MarineValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
      <RangeCopy path="/valves/marine-valves" />
    </Suspense>
  );
}