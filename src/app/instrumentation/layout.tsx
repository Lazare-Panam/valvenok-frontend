import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Instrumentation Fittings, Valves & Manifolds | Valvenok" },
  description: "High pressure fittings, tube and pipe fittings, DBB and manifold valves, quick couplings and SS tubing for oil & gas, petrochemical and process plants.",
}

export default function InstrumentationIndexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}