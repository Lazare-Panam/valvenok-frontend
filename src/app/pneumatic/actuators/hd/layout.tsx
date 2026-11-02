import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/hd" },
  title: { absolute: "HD Heavy-Duty Scotch Yoke Pneumatic Actuators | Valvenok" },
  description: 'IS (Symmetric) and IC (Canted) scotch yoke pneumatic actuators, 132–120,867 Nm, ATEX, SIL3, PED certified, IP66/67, for demanding valve automation.',
  openGraph: {
    title: "HD Heavy-Duty Scotch Yoke Pneumatic Actuators | Valvenok",
    description: 'IS and IC scotch yoke pneumatic actuators, 132–120,867 Nm, ATEX, SIL3, PED certified, IP66/67.',
    type: 'website',
  },
}

export default function HDLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}