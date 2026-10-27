import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'
import { Category } from '@/src/app/Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings/weld-fittings' },
  title: 'Weld Fittings | SS316 Instrumentation Weld Fittings',
  description: 'Valvenok supplies SS316 instrumentation weld fittings for permanent, high-integrity process connections. Tube socket weld connectors, elbows and tees with NPT threaded ends.',
  openGraph: {
    title: "Weld Fittings | SS316 Instrumentation Weld Fittings | Valvenok",
    description: "Valvenok supplies SS316 instrumentation weld fittings for permanent, high-integrity process connections. Tube socket weld connectors, elbows and tees with NPT threaded ends.",
    url: "/fittings-tubing/instrumentation-fittings/weld-fittings",
    siteName: "Valvenok",
    type: "website",
  },
}

const CATEGORIES: Category[] = [
  {
    code: 'WE',
    title: 'Elbows',
    subtitle: 'WE · Male · Female',
    description: 'Male and female elbows with a tube socket weld end and an NPT threaded end, for permanent directional changes in instrumentation tubing.',
    specs: ['SS316', 'Tube Socket Weld', '1/8" – 2" / 6mm – 38mm OD'],
    applications: 'Oil & Gas, Petrochemical, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/weld-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/elbow-weld.jpg',
  },
  {
    code: 'WC',
    title: 'Connectors',
    subtitle: 'WC · Male · Female',
    description: 'Weld connectors for joining instrumentation tubing to threaded connections. Male and female configurations with a tube socket weld end and an NPT threaded end.',
    specs: ['SS316', 'Tube Socket Weld · NPT', '1/8" – 2" / 6mm – 38mm OD'],
    applications: 'Process Vessels, Pipework, Refineries',
    href: '/fittings-tubing/instrumentation-fittings/weld-fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg',
  },
  {
  code: 'WT',
  title: 'Tees',
  subtitle: 'WT · Male Run · Male Branch',
  description: 'Male run and branch tees in tube socket weld configuration for permanent three-way connections in instrumentation and process piping. NPT threaded ends, tube OD from 1/8" to 2" (6mm – 38mm metric).',
  specs: ['SS316', 'Tube Socket Weld · NPT', '1/8" – 2" / 6mm – 38mm OD'],
  applications: 'Oil & Gas, Petrochemical, Power Generation',
  href: '/fittings-tubing/instrumentation-fittings/weld-fittings/tees',
  image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/male-run-tee-weld.jpg',
},
]

const INTRO = `Valvenok supplies SS316 instrumentation weld fittings for permanent, high-integrity connections 
in process and industrial systems. Where leak-free performance is non-negotiable — oil & gas, petrochemical, 
power generation and offshore — weld fittings are the engineered solution. The range is tube socket weld (TSW) 
fittings with NPT threaded ends.`

const TRUST_POINTS = [
  { value: 'SS316', label: 'Material Standard' },
  { value: 'Tube Socket Weld', label: 'Connection Type' },
  { value: 'NPT', label: 'Thread Standard' },
  { value: '1/8" – 2" / 6mm – 38mm OD', label: 'Size Range' },
  { value: 'UK Based', label: 'Technical Support' },
]

export default function WeldFittingsPage() {
  return (
    <>
      <ProductHero
        title="Weld Fittings"
        subtitle="SS316 Tube Socket Weld Fittings for Permanent Process Connections"
        description="Instrumentation weld fittings engineered for high-integrity, leak-free performance. Built for the most demanding oil & gas, petrochemical and power generation applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/sergei-wing-fFRtvdWqyLk-unsplash.jpg"
        imageAlt="Valvenok SS316 Weld Fittings"
        breadcrumb="Products / Weld Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}