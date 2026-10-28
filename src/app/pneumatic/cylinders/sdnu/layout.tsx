import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/cylinders/sdnu" },
  title: { absolute: "SDNU Series Stainless ISO 6432 Round Cylinders | Valvenok" },
  description: "Double-acting ISO 6432 stainless steel round body pneumatic cylinders with magnetic pistons, 12mm to 25mm bore, for washdown and food-grade automation.",
  openGraph: {
    title: "SDNU Series Stainless ISO 6432 Round Cylinders | Valvenok",
    description: "Double-acting ISO 6432 stainless steel round body pneumatic cylinders with magnetic pistons, 12mm to 25mm bore, for washdown and food-grade automation.",
    type: 'website',
  },
}

export default function SDNUCylinderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}