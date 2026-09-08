import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'High Pressure Adapters',
  description: 'Browse high pressure adapter fittings — filter by fitting type, pressure rating, thread type, and size to find the exact configuration you need.',
  openGraph: {
    title: 'High Pressure Adapters | Valvenok',
    description: 'Browse high pressure adapter fittings — filter by fitting type, pressure rating, thread type, and size.',
    type: 'website',
  },
}

export default function HPAdapterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}