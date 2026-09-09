import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/kls" },
  title: 'KLS Series Limit Switch Boxes',
  description: 'Kosaplus KLS series valve position indicators with IECEx & KCs explosion-proof certification. IP67/IP68, mechanical SPDT and proximity switch options, aluminium die-cast housing.',
  openGraph: {
    title: 'KLS Series Limit Switch Boxes | Valvenok',
    description: 'Kosaplus KLS series valve position indicators, IECEx & KCs explosion-proof certified, IP67/IP68, mechanical or proximity switch options.',
    type: 'website',
  },
}

export default function KLSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}