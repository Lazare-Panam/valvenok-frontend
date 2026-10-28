import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/kls" },
  title: { absolute: "KLS Series Limit Switch Boxes — Explosion-Proof | Valvenok" },
  description: "Kosaplus KLS valve position indicators with IECEx and KCs explosion-proof certification, IP67/IP68, and mechanical SPDT or proximity switch options.",
  openGraph: {
    title: "KLS Series Limit Switch Boxes — Explosion-Proof | Valvenok",
    description: "Kosaplus KLS valve position indicators with IECEx and KCs explosion-proof certification, IP67/IP68, and mechanical SPDT or proximity switch options.",
    type: 'website',
  },
}

export default function KLSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}