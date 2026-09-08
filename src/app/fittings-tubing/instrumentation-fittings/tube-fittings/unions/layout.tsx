import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tube Fittings — Unions',
  description: 'Stainless steel tube-to-tube union fittings including standard unions, reducing unions, bulkhead unions, union elbows, union tees, reducing union tees and union crosses. Available in Imperial and Metric tube OD.',
  openGraph: {
    title: 'Tube Fittings — Unions | Valvenok',
    description: 'Stainless steel tube-to-tube union fittings, including reducing, bulkhead, elbow, tee and cross configurations.',
    type: 'website',
  },
}

export default function UnionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}