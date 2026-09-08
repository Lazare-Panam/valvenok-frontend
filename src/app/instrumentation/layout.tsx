import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instrumentation | High Pressure, Fittings & Valves',
  description: 'Valvenok supplies a complete range of instrumentation products — high pressure fittings, tube and pipe fittings, DBB and manifold valves, quick couplings and SS tubing for oil & gas, petrochemical and process industries.',
}

export default function InstrumentationIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}