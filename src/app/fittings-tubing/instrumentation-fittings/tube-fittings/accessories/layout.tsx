import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tube Fittings — Accessories | Valvenok',
  description: 'Stainless steel tube fitting accessories including tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts. Available in Imperial and Metric tube OD.',
  openGraph: {
    title: 'Tube Fittings — Accessories | Valvenok',
    description: 'Stainless steel tube fitting accessories including tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts.',
    type: 'website',
  },
}

export default function AccessoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}