import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/accessories" },
  title: { absolute: "Tube Fitting Accessories — Ferrules, Nuts & Plugs | Valvenok" },
  description: "Stainless steel tube plugs, tube caps, nuts, front and back ferrules and pipe inserts for instrumentation tube fittings, in imperial and metric tube OD.",
  openGraph: {
    title: "Tube Fitting Accessories — Ferrules, Nuts & Plugs | Valvenok",
    description: "Stainless steel tube plugs, tube caps, nuts, front and back ferrules and pipe inserts for instrumentation tube fittings, in imperial and metric tube OD.",
    type: 'website',
  },
}

export default function AccessoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}