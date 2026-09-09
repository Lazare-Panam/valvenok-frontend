import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/connectors" },
  title: 'Tube Fittings — Connectors & Elbows',
  description: 'Stainless steel tube fittings including male connectors, female connectors, elbows, tees and bulkhead fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, Metric, SAE/MS and Flare 37° thread types.',
  openGraph: {
    title: 'Tube Fittings — Connectors & Elbows | Valvenok',
    description: 'Stainless steel male and female connectors, elbows, tees and bulkhead fittings, available in Imperial and Metric tube OD.',
    type: 'website',
  },
}

export default function ConnectorElbowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}