import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tube Fittings — Reducers',
  description: 'Stainless steel reducer fittings including standard reducers, bulkhead reducers and reducer elbows. Available in Imperial, Metric and mixed Metric × Imperial configurations.',
  openGraph: {
    title: 'Tube Fittings — Reducers | Valvenok',
    description: 'Stainless steel reducer fittings including standard reducers, bulkhead reducers and reducer elbows.',
    type: 'website',
  },
}

export default function ReducerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}