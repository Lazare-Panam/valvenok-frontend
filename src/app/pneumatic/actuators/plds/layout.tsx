import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/plds" },
  title: { absolute: "PLDS Linear Piston Pneumatic Actuators, up to 444 kN | Valvenok" },
  description: 'Susin PLDS linear piston actuators for knife edge, gate and globe control valves. 23 sizes, 100–975 mm bore, 1.8–444 kN double acting, travel up to 1,067 mm, manual overrides.',
  openGraph: {
    title: "PLDS Linear Piston Pneumatic Actuators, up to 444 kN | Valvenok",
    description: 'Susin PLDS linear piston actuators: 23 sizes, 100–975 mm bore, 1.8–444 kN double acting, travel up to 1,067 mm.',
    type: 'website',
  },
}

export default function PLDSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}