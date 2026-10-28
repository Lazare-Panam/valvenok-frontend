import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/plds" },
  title: { absolute: "PLDS Series Linear Pneumatic Cylinders & Actuators | Valvenok" },
  description: 'Double-acting pneumatic linear cylinders for precise motion control, valve actuation and automation. IP66, ISO mounting, multiple corrosion grades.',
  openGraph: {
    title: "PLDS Series Linear Pneumatic Cylinders & Actuators | Valvenok",
    description: 'Double-acting pneumatic linear cylinders for precise motion control and valve actuation. IP66, ISO mounting, multiple corrosion grades.',
    type: 'website',
  },
}

export default function PLDSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}