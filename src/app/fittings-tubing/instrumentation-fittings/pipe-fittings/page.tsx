import type { Metadata } from 'next'
import ProductHero from '@/src/app/Common/Products_Page/ProductHero'
import ProductGrid from '@/src/app/Common/Products_Page/ProductGrid'
import TrustStrip from '@/src/app/Common/Products_Page/TrustStrip'

import { Category } from '@/src/app/Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  alternates: { canonical: '/fittings-tubing/instrumentation-fittings/pipe-fittings' },
  title: { absolute: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok" },
  description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
  openGraph: {
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    url: "/fittings-tubing/instrumentation-fittings/pipe-fittings",
    siteName: "Valvenok",
    type: "website",
  },
}

const CATEGORIES: Category[] = [
  {
    code: 'N&C',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'HN · HLN · HRN · CN · LPN · HC · RHC',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    applications: 'Oil & Gas, Process Piping, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/nipples-couplings',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/pipe-fittings/hex-nipples-bspp-x-bspp-png.png',
  },
  {
    code: 'A&P',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'A · RA · RB · HP · HHP · PC',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '1/16" – 2"'],
    applications: 'Instrumentation, Chemical, Power Generation',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/pipe-fittings/adaptors.jpg',
  },
  {
    code: 'ELB',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'FE · ME · SE · UE',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'NPT / BSPT / BSPP', '1/16" – 1½"'],
    applications: 'Process Systems, Marine, Petrochemical',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-elbow-bspp.png',
  },
  {
    code: 'U&C',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'U · BHU · SU · SC · UE',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'BSPP / ISO Parallel', '1/8" – 1½"'],
    applications: 'Panel Mounting, Subsea, Refineries',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/unions-connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-bspt-final.png',
  },
  {
    code: 'T&C',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'FT · MT · FBT · FRT · ST · BT · RT · UT · C',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'NPT / BSPP', '1/16" – 1½"'],
    applications: 'Flow Distribution, Process Plants, Offshore',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/female-tee-bspp.png',
  },
  {
    code: 'ALL',
    title: "SS316 Pipe Fittings: NPT, BSPT & BSPP Threads | Valvenok",
    subtitle: 'Browse the complete range',
    description: "SS316 pipe fittings for instrumentation and process systems: nipples, elbows, tees, unions and adapters in NPT, BSPT, BSPP and metric threads.",
    specs: ['SS316', 'NPT / BSPT / BSPP', 'Metric / SAE', '650+ configurations'],
    applications: 'All Industries & Applications',
    href: '/fittings-tubing/instrumentation-fittings/pipe-fittings/all',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/pipe-fittings/adaptors.jpg',
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
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/patrick-0rqryvbahli-unsplash.webp"
        imageAlt="Valvenok SS316 Pipe Fittings"
        breadcrumb="Products / Pipe Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}