import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Danfoss PVE Series Electrohydraulic Actuators',
  description: 'Danfoss PVE series electrohydraulic actuators for proportional directional control valves. PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series available.',
  openGraph: {
    title: 'Danfoss PVE Series Electrohydraulic Actuators | Valvenok',
    description: 'Danfoss PVE series electrohydraulic actuators for proportional directional control valves, active and passive fault monitoring, 12V/24V.',
    type: 'website',
  },
}

export default function DanfossPVELayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}