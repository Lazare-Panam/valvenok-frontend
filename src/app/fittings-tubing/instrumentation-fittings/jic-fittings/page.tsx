import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'
import { Category } from '@/src/app/Common/Products_Page/ProductCard'
import RelatedLinks from '@/src/app/Common/Products_Page/RelatedLinks'

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings/jic-fittings' },
  title: 'JIC Fittings | 37° Flare SS316 Fittings',
  description: 'Valvenok supplies SS316 37° JIC flare fittings for hydraulic and instrumentation systems. Connectors, unions, elbows, tees and adapters across NPT, BSPT, BSPP and SAE/MS thread standards.',
  openGraph: {
    title: "JIC Fittings | 37° Flare SS316 Fittings | Valvenok",
    description: "Valvenok supplies SS316 37° JIC flare fittings for hydraulic and instrumentation systems. Connectors, unions, elbows, tees and adapters across NPT, BSPT, BSPP and SAE/MS thread standards.",
    url: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    siteName: "Valvenok",
    type: "website",
  },
}

const CATEGORIES: Category[] = [
  {
    code: 'MC/FC',
    title: 'Connectors',
    subtitle: 'Male & Female Connectors',
    description: 'Male and female connectors in 37° JIC flare for reliable tube-to-thread connections. Available in JIC x NPT, BSPT, BSPP, SAE/MS and swivel configurations.',
    specs: ['SS316', '37° JIC Flare', 'NPT / BSPT / BSPP', 'SAE/MS / Swivel'],
    applications: 'Hydraulics, Oil & Gas, Heavy Equipment',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg',
  },
  {
    code: 'U/SU',
    title: 'Unions & Swivel',
    subtitle: 'Unions, Large Hex, Swivel & Bulkhead',
    description: 'Standard, large hex, swivel and bulkhead unions in 37° JIC flare. Designed for maintainable connections in hydraulic and process lines.',
    specs: ['SS316', '37° JIC Flare', 'Union / Bulkhead / Swivel', '1/8" – 2"'],
    applications: 'Hydraulic Systems, Process Piping, Marine',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/Union.jpg',
  },
  {
    code: 'RA/S',
    title: 'Adapters & Reducers',
    subtitle: 'Reducing Adapters & Sleeves',
    description: 'Reducing adapters and sleeves for transitioning between tube OD sizes in 37° JIC flare. Full range of size combinations in fractional and metric.',
    specs: ['SS316', '37° JIC Flare', 'Reducing / Sleeves', '1/4" – 2"'],
    applications: 'Size Transitions, Instrumentation, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/reducing-adaptors.jpg',
  },
  {
    code: 'ME/FE',
    title: 'Elbows',
    subtitle: 'Male, 45°, Female, Union & Swivel Elbows',
    description: 'Male, female, 45°, union and swivel elbows in 37° JIC flare for directional routing in tight spaces. Available across NPT, BSPT, BSPP and SAE/MS.',
    specs: ['SS316', '37° JIC Flare', 'NPT / BSPT / SAE/MS', 'Swivel / Union'],
    applications: 'Hydraulic Lines, Heavy Machinery, Petrochemical',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-elbow.jpg',
  },
  {
    code: 'MBT/FBT',
    title: 'Tees',
    subtitle: 'Male, Female, Union, Swivel & Run Tees',
    description: 'Branch, run and union tees plus swivel variants and crosses in 37° JIC flare for multi-directional flow distribution in hydraulic and process systems.',
    specs: ['SS316', '37° JIC Flare', 'Branch / Run / Union', 'Swivel / Cross'],
    applications: 'Flow Distribution, Offshore, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/tees',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-branch-tees.jpg',
  },
  {
    code: 'N/TC/TP',
    title: 'Plugs, Caps & Nuts',
    subtitle: 'Nuts, Tube Caps, Cap Assembly & Plugs',
    description: 'Nuts, tube caps and plugs in 37° JIC flare for terminating and capping tube end connections. Essential components for system maintenance and pressure testing.',
    specs: ['SS316', '37° JIC Flare', 'Nuts / Caps / Plugs', '1/8" – 2"'],
    applications: 'Line Termination, Pressure Testing, Maintenance',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/plugs',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/tube-plug.jpg',
  },
]

const INTRO = `Valvenok supplies a complete range of SS316 37° JIC flare fittings for hydraulic and instrumentation systems. 
Engineered for high-pressure performance in oil & gas, heavy equipment, marine and petrochemical applications. 
Available across NPT, BSPT, BSPP, SAE/MS and metric thread standards — contact us to confirm availability.`

const TRUST_POINTS = [
  { value: 'SS316', label: 'Material Standard' },
  { value: '37° JIC Flare', label: 'Fitting Standard' },
  { value: 'NPT / BSPT / BSPP', label: 'Thread Standards' },
  { value: 'SAE/MS', label: 'Also Available' },
  { value: 'UK Based', label: 'Technical Support' },
]

export default function JICFittingsPage() {
  return (
    <>
      <ProductHero
        title="JIC Fittings"
        subtitle="37° Flare Fittings for Hydraulic & Instrumentation Systems"
        description="A complete range of SS316 37° JIC flare fittings built for high-pressure hydraulic and process applications. NPT, BSPT, BSPP and SAE/MS thread standards across connectors, unions, elbows, tees and more."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg"
        imageAlt="Valvenok SS316 JIC Flare Fittings"
        breadcrumb="Products / JIC Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <RelatedLinks links={[{ label: "View All JIC Fittings", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/all" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}