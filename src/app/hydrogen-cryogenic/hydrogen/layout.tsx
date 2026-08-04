import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hydrogen Cylinder Valves | Valvenok',
  description: 'Youngdo high-pressure hydrogen cylinder valves — HE, HK, HS, EP series up to 70 MPa, YHT series up to 45 MPa, DRV-350 quick-connect and YEX-1100 explosion-proof. KGS, EC79, R134, IECEx certified.',
  openGraph: {
    title: 'Hydrogen Cylinder Valves | Valvenok',
    description: 'Youngdo high-pressure hydrogen cylinder valves rated up to 70 MPa, KGS, EC79, R134, IECEx certified.',
    type: 'website',
  },
}

export default function HydrogenValvesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}