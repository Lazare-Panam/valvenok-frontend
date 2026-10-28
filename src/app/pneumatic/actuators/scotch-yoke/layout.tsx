import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/scotch-yoke" },
  title: { absolute: "AD / AS Series Scotch Yoke Pneumatic Actuators | Valvenok" },
  description: "Kosaplus scotch yoke pneumatic actuators for high-torque quarter-turn valves. Double acting and spring return configurations in 11 sizes from 50–300mm.",
  openGraph: {
    title: "AD / AS Series Scotch Yoke Pneumatic Actuators | Valvenok",
    description: "Kosaplus scotch yoke pneumatic actuators for high-torque quarter-turn valves. Double acting and spring return configurations in 11 sizes from 50–300mm.",
    type: 'website',
  },
}

export default function ADSeriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}