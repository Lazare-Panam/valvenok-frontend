import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/iql" },
  title: 'IQL Series Linear Electric Actuators',
  description: 'Robust linear electric actuators for precise modulating control. 4–25 kN thrust, IP67, battery backup fail-safe, 4–20mA / 0–10V control.',
  openGraph: {
    title: 'IQL Series Linear Electric Actuators | Valvenok',
    description: 'Linear electric actuators for precise modulating control, 4–25 kN thrust, IP67, battery backup fail-safe.',
    type: 'website',
  },
}

export default function IQLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}