import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'
import { Category } from '@/src/app/Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  title: 'Weld Fittings | SS316 Instrumentation Weld Fittings | Valvenok',
  description: 'Valvenok supplies SS316 instrumentation weld fittings for permanent, high-integrity process connections. Butt weld elbows and connectors across NPT, BSPT and BSPP thread standards.',
}

const CATEGORIES: Category[] = [
  {
    code: 'WE',
    title: 'Elbows',
    subtitle: 'WE · 90° · 45°',
    description: 'Butt weld elbows in 90° and 45° configurations for permanent directional changes in instrumentation tubing. Built for high-integrity, leak-free process systems.',
    specs: ['SS316', 'Butt Weld', '2mm – 25mm OD'],
    applications: 'Oil & Gas, Petrochemical, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/weld-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/elbow-weld.jpg',
  },
  {
    code: 'WC',
    title: 'Connectors',
    subtitle: 'WC · Male · Female',
    description: 'Weld connectors for joining instrumentation tubing to threaded or instrument connections. Male and female configurations across NPT, BSPT and BSPP standards.',
    specs: ['SS316', 'NPT / BSPT / BSPP', '2mm – 25mm OD'],
    applications: 'Process Vessels, Pipework, Refineries',
    href: '/fittings-tubing/instrumentation-fittings/weld-fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg',
  },
  {
  code: 'WT',
  title: 'Tees',
  subtitle: 'WT · Male Run · Male Branch',
  description: 'Male run and branch tees in tube socket weld configuration for permanent three-way connections in instrumentation and process piping. Available across NPT thread standards from 1/8" to 2".',
  specs: ['SS316', 'Tube Socket Weld', '1/8" – 2" OD'],
  applications: 'Oil & Gas, Petrochemical, Power Generation',
  href: '/fittings-tubing/instrumentation-fittings/weld-fittings/tees',
  image: 'https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/male-run-tee-weld.jpg',
},
]

const INTRO = `Valvenok supplies SS316 instrumentation weld fittings for permanent, high-integrity connections 
in process and industrial systems. Where leak-free performance is non-negotiable — oil & gas, petrochemical, 
power generation and offshore — weld fittings are the engineered solution. Available across butt weld 
configurations and major thread standards.`

const TRUST_POINTS = [
  { value: 'SS316', label: 'Material Standard' },
  { value: 'Butt Weld', label: 'Connection Type' },
  { value: 'NPT / BSPT / BSPP', label: 'Thread Standards' },
  { value: '2mm – 25mm OD', label: 'Size Range' },
  { value: 'Fast Dispatch', label: 'Availability' },
]

export default function WeldFittingsPage() {
  return (
    <>
      <ProductHero
        title="Weld Fittings"
        subtitle="SS316 Butt Weld Fittings for Permanent Process Connections"
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