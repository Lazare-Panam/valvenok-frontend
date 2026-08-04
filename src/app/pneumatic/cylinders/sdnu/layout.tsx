import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SDNU Series Cylinders | Valvenok',
  description: 'Double-acting ISO-6432 stainless steel round body pneumatic cylinders. Compact magnetic-piston design across bore sizes 12mm to 25mm, built for hygienic, washdown and food-grade automation.',
  openGraph: {
    title: 'SDNU Series Cylinders | Valvenok',
    description: 'Double-acting ISO-6432 stainless steel round body pneumatic cylinders, bore sizes 12mm to 25mm, for hygienic and washdown environments.',
    type: 'website',
  },
}

export default function SDNUCylinderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}