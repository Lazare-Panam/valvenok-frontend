import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'

import { Category } from '@/src/app/Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings/pipe-fittings' },
  title: 'Pipe Fittings | SS316 Instrumentation Fittings ',
  description: 'Valvenok supplies SS316 pipe fittings for instrumentation and process systems. Nipples, elbows, tees, unions and adapters across NPT, BSPT, BSPP and metric thread standards. 650+ configurations.',
  openGraph: {
    title: "Pipe Fittings | SS316 Instrumentation Fittings  | Valvenok",
    description: "Valvenok supplies SS316 pipe fittings for instrumentation and process systems. Nipples, elbows, tees, unions and adapters across NPT, BSPT, BSPP and metric thread standards. 650+ configurations.",
    url: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
    siteName: "Valvenok",
    type: "website",
  },
}

const CATEGORIES: Category[] = [
  {
    code: 'N&C',
    title: 'Nipples & Couplings',
    subtitle: 'HN · HLN · HRN · CN · LPN · HC · RHC',
    description: 'Hex nipples, long nipples, reducing nipples and couplings for direct pipe-to-pipe connections. Built for high-pressure instrumentation and process lines.',
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    applications: 'Oil & Gas, Process Piping, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/nipples-couplings',
    image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/hex%20nipples%20-%20bspp%20x%20bspp%20-%20png.png',
  },
  {
    code: 'A&P',
    title: 'Adapters & Plugs',
    subtitle: 'A · RA · RB · HP · HHP · PC',
    description: 'Adapters, reducing bushings, hex plugs and pipe caps for thread conversion and line termination across all major thread standards.',
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    applications: 'Instrumentation, Chemical, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs',
    image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/adaptors.jpg',
  },
  {
    code: 'ELB',
    title: 'Elbows',
    subtitle: 'FE · ME · SE · UE',
    description: 'Female, male, street and union elbows for directional changes in instrumentation pipework. Available in straight and reducing configurations.',
    specs: ['SS316', 'NPT / BSPT / BSPP', '1/16" – 1½"'],
    applications: 'Process Systems, Marine, Petrochemical',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-elbow-bspp.png',
  },
  {
    code: 'U&C',
    title: 'Unions & Connectors',
    subtitle: 'U · BHU · SU · SC · UE',
    description: 'Standard, bulkhead and swivel unions for maintainable connections in process instrumentation. ISO Parallel thread throughout.',
    specs: ['SS316', 'BSPP / ISO Parallel', '1/8" – 1½"'],
    applications: 'Panel Mounting, Subsea, Refineries',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/unions-connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-bspt-final.png',
  },
  {
    code: 'T&C',
    title: 'Tees & Cross',
    subtitle: 'FT · MT · FBT · FRT · ST · BT · RT · UT · C',
    description: 'Female, male, branch and run tees plus crosses for multi-directional flow distribution in instrumentation and process systems.',
    specs: ['SS316', 'NPT / BSPP', '1/16" – 1½"'],
    applications: 'Flow Distribution, Process Plants, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-tee-bspp.png',
  },
  {
    code: 'ALL',
    title: 'All Fittings',
    subtitle: 'Browse the complete range',
    description: 'Over 650 pipe fitting configurations in one place. Filter by type, size, thread standard and material to find exactly what your system needs.',
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '650+ configurations'],
    applications: 'All Industries & Applications',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/all',
    image: 'https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/pipe-fittings/adaptors.jpg',
  },
]

const INTRO = `Valvenok supplies over 650 SS316 pipe fitting configurations for instrumentation and process systems. 
From simple nipples and plugs to swivel unions and reducing crosses — our range covers NPT, BSPT, BSPP, 
Metric and SAE thread standards, built for oil & gas, petrochemical, marine and power generation applications.`

const TRUST_POINTS = [
  { value: 'SS316', label: 'Material Standard' },
  { value: 'NPT / BSPT / BSPP', label: 'Thread Standards' },
  { value: '650+ Configurations', label: 'Range' },
  { value: 'Metric / SAE', label: 'Also Available' },
  { value: 'UK Based', label: 'Technical Support' },
]

export default function PipeFittingsPage() {
  return (
    <>
      <ProductHero
        title="Pipe Fittings"
        subtitle="SS316 Fittings for Instrumentation & Process Systems"
        description="Over 650 configurations covering nipples, elbows, tees, unions and adapters. NPT, BSPT, BSPP, Metric and SAE thread standards — built for the harshest industrial environments."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/patrick-0RQRyVBAhlI-unsplash.jpg"
        imageAlt="Valvenok SS316 Pipe Fittings"
        breadcrumb="Products / Pipe Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}