import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TP8_PTB Series Automatic Booster Pumps | Valvenok',
  description: 'WALRUS automatic booster pumps manufactured with non-corrosive, rust proof materials. Corrosion resistant pressure tank, silent check valve, built-in thermal overload protection.',
  openGraph: {
    title: 'TP8_PTB Series Automatic Booster Pumps | Valvenok',
    description: 'WALRUS automatic booster pumps with non-corrosive construction, silent check valve, and thermal overload protection.',
    type: 'website',
  },
}

export default function AutomaticBoosterPumpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}