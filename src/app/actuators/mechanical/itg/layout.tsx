import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ITG Series Industrial Gear Actuators | Valvenok',
  description: 'Precision-engineered ITG Series gear actuators for quarter-turn valve automation. 60–28,000 Nm torque, IP67M, ISO 5211/5210 mount, declutchable manual override.',
  openGraph: {
    title: 'ITG Series Industrial Gear Actuators | Valvenok',
    description: 'ITG Series gear actuators for quarter-turn valve automation, 60–28,000 Nm torque, IP67M protection, ISO 5211/5210 mounting.',
    type: 'website',
  },
}

export default function ITGLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}