import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'
import { Category } from '@/src/app/Common/Products_Page/ProductCard'
import RelatedLinks from '@/src/app/Common/Products_Page/RelatedLinks'

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings/jic-fittings' },
  title: { absolute: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok" },
  description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
  openGraph: {
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    url: "/fittings-tubing/instrumentation-fittings/jic-fittings",
    siteName: "Valvenok",
    type: "website",
  },
}

const CATEGORIES: Category[] = [
  {
    code: 'MC/FC',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Male & Female Connectors',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    specs: ['SS316', '37° JIC Flare', 'NPT / BSPT / BSPP', 'SAE/MS / Swivel'],
    applications: 'Hydraulics, Oil & Gas, Heavy Equipment',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg',
  },
  {
    code: 'U/SU',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Unions, Large Hex, Swivel & Bulkhead',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    specs: ['SS316', '37° JIC Flare', 'Union / Bulkhead / Swivel', '1/8" – 2"'],
    applications: 'Hydraulic Systems, Process Piping, Marine',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/Union.jpg',
  },
  {
    code: 'RA/S',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Reducing Adapters & Sleeves',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    specs: ['SS316', '37° JIC Flare', 'Reducing / Sleeves', '1/4" – 2"'],
    applications: 'Size Transitions, Instrumentation, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/reducing-adaptors.jpg',
  },
  {
    code: 'ME/FE',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Male, 45°, Female, Union & Swivel Elbows',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    specs: ['SS316', '37° JIC Flare', 'NPT / BSPT / SAE/MS', 'Swivel / Union'],
    applications: 'Hydraulic Lines, Heavy Machinery, Petrochemical',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-elbow.jpg',
  },
  {
    code: 'MBT/FBT',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Male, Female, Union, Swivel & Run Tees',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
    specs: ['SS316', '37° JIC Flare', 'Branch / Run / Union', 'Swivel / Cross'],
    applications: 'Flow Distribution, Offshore, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/jic-fittings/tees',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-branch-tees.jpg',
  },
  {
    code: 'N/TC/TP',
    title: "JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok",
    subtitle: 'Nuts, Tube Caps, Cap Assembly & Plugs',
    description: "SS316 37° JIC flare fittings for hydraulic and instrumentation lines: connectors, unions, elbows, tees and adapters in NPT, BSPT, BSPP and SAE/MS threads.",
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
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/ben-kupke-ew-p24cvlr0-unsplash.webp"
        imageAlt="Valvenok SS316 JIC Flare Fittings"
        breadcrumb="Products / JIC Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <RelatedLinks links={[{ label: "View All JIC Fittings", href: "/fittings-tubing/instrumentation-fittings/jic-fittings/all" }]} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}