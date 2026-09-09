import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/ke-series" },
  title: 'KE Series Quarter-Turn Electric Actuators',
  description: 'KOSAPLUS quarter-turn electric actuators covering 8–1200 Nm torque, dome type position indicator, terminal box wiring, 110V/220V/380V/440V AC and 24V DC across 13 model sizes.',
  openGraph: {
    title: 'KE Series Quarter-Turn Electric Actuators | Valvenok',
    description: 'KOSAPLUS quarter-turn electric actuators, 8–1200 Nm torque, IP68 optional, AC and DC power options across 13 model sizes.',
    type: 'website',
  },
}

export default function KESeriesActuatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}