import type { Metadata } from 'next'

const TITLE = "MHD Micro Scotch Yoke Pneumatic Actuators | Valvenok"
const DESCRIPTION = 'Susin I-Tork MHD (Micro) scotch yoke pneumatic actuators for double offset butterfly valves: IS and IC yokes, double acting or spring return, 63–1,474 Nm, 3.7–10 bar, IP66.'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/mhd" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website' },
}

export default function MHDLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
