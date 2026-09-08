import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AD / AS Series Scotch Yoke Actuators',
  description: 'Kosaplus scotch yoke pneumatic actuators for high-torque quarter-turn valve automation. Double acting and spring return configurations across 11 sizes from 50–300mm.',
  openGraph: {
    title: 'AD / AS Series Scotch Yoke Actuators | Valvenok',
    description: 'Kosaplus scotch yoke pneumatic actuators for high-torque quarter-turn valve automation, 50–300mm, double acting and spring return.',
    type: 'website',
  },
}

export default function ADSeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}