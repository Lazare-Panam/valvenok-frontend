import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tube Fittings — Adapters | Valvenok',
  description: 'Stainless steel male and female adapter fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, RG and SAE/MS thread types.',
  openGraph: {
    title: 'Tube Fittings — Adapters | Valvenok',
    description: 'Stainless steel male and female adapter fittings, available in Imperial and Metric tube OD with a range of thread types.',
    type: 'website',
  },
}

export default function AdapterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}