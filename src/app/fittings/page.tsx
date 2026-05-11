import type { Metadata } from 'next'
import ProductHero from '../Common/Products_Page/ProductHero'
import ProductGrid from '../Common/Products_Page/ProductGrid'
import TrustStrip from '../Common/Products_Page/TrustStrip'
import { Category } from '../Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  title: 'Tube Fittings | SS316 Instrumentation Fittings ',
  description: 'Valvenok supplies SS316 tube fittings for instrumentation and process systems. Connectors, adapters, unions, reducers and more. NPT, BSPT and BSPP thread standards.',
}

const CATEGORIES: Category[] = [
  {
    code: 'MC/FC',
    title: 'Connectors',
    subtitle: 'Male & Female Connectors',
    description: 'Male and female connectors for instrumentation tube systems. Built for leak-free performance in high-pressure oil & gas and process applications.',
    specs: ['SS316', 'Twin Ferrule', 'NPT / BSPT / BSPP', 'Full Size Range'],
    applications: 'Oil & Gas, Petrochemical, Power Generation',
    href: '/fittings/connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/Bulkhead-Connector.jpg',
  },
  {
    code: 'ADP',
    title: 'Adapters',
    subtitle: 'Tube to Thread Adapters',
    description: 'Connect tube fittings to threaded ports across NPT, BSPT, and BSPP standards. Available in male and female configurations across a full size range.',
    specs: ['SS316', 'Twin Ferrule', 'NPT / BSPT / BSPP', '1/8" – 1"'],
    applications: 'Instrumentation, Process Systems, Marine',
    href: '/fittings/adapters',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male_adaptor.jpg',
  },
  {
    code: 'PC',
    title: 'Port Connectors',
    subtitle: 'Port & Panel Connectors',
    description: 'Direct port connections for instrumentation manifolds and panels. Male and female configurations for clean, space-saving installations.',
    specs: ['SS316', 'Twin Ferrule', 'Port Connection', 'BSPP / NPT'],
    applications: 'Manifold Systems, Panel Mounting, Subsea',
    href: '/fittings/port-connectors',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg',
  },
  {
    code: 'RED',
    title: 'Reducers',
    subtitle: 'Reducing Unions & Couplings',
    description: 'Transition between tube OD sizes without additional fittings. Full range of reducing unions and couplings in fractional and metric sizes.',
    specs: ['SS316', 'Twin Ferrule', 'Reducing / Union', '1/8" – 1"'],
    applications: 'Process Piping, Instrumentation, Offshore',
    href: '/fittings/reducer',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/reducer.jpg',
  },
  {
    code: 'UN',
    title: 'Unions',
    subtitle: 'Straight & Bulkhead Unions',
    description: 'Inline and bulkhead unions for tube fitting systems. Used for panel penetrations, straight connections, and union crosses in process instrumentation.',
    specs: ['SS316', 'Twin Ferrule', 'Union / Bulkhead', 'Full Size Range'],
    applications: 'Panel Penetrations, Inline Connections, Power',
    href: '/fittings/unions',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-cross.png',
  },
  {
    code: 'WG',
    title: 'Weld Gauge',
    subtitle: 'Weld-In Gauge Adaptors',
    description: 'Weld-in sockets and gauge adaptors for direct connection to process pipework and vessels. Ideal for permanent instrumentation installations.',
    specs: ['SS316', 'Weld-In', 'Gauge / Socket', 'BSPP / NPT'],
    applications: 'Process Vessels, Pipework, Refineries',
    href: '/fittings/weld-gauge',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg',
  },
  {
    code: 'ACC',
    title: 'Accessories',
    subtitle: 'Tube Fitting Accessories',
    description: 'Ferrules, plugs, and supporting components for tube fitting systems. Everything needed to complete and maintain your instrumentation assemblies.',
    specs: ['SS316', 'Twin Ferrule', 'BSPP / NPT', 'Full Size Range'],
    applications: 'All Instrumentation Systems',
    href: '/fittings/accessories',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/tube_plug.jpg',
  },
  {
    code: 'DE/G',
    title: 'Die-Electrics & Gaskets',
    subtitle: 'Isolation & Sealing Components',
    description: 'Dielectric unions and gaskets that electrically isolate dissimilar metals, preventing galvanic corrosion in mixed-material instrumentation systems.',
    specs: ['SS316', 'Dielectric', 'Isolation', 'BSPP / NPT'],
    applications: 'Cathodic Protection, Offshore, Chemical Plants',
    href: '/fittings/die-electric',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg',
  },
]

const INTRO = `Valvenok supplies a complete range of SS316 tube fittings for instrumentation and process systems. 
Engineered for leak-free performance in the harshest environments — oil & gas, petrochemical, power generation, 
and marine. Available across NPT, BSPT, and BSPP thread standards with fast dispatch from stock.`

export default function TubeFittingsPage() {
  return (
    <>
      <ProductHero
        title="Tube Fittings"
        subtitle="SS316 Instrumentation Fittings for Process & Industrial Systems"
        description="A complete range of tube fittings engineered for reliable, leak-free performance. Available across NPT, BSPT, and BSPP thread standards — built for oil & gas, petrochemical, and marine applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-wicks-Ej2FQy1W7z4-unsplash.jpg"
        imageAlt="Valvenok SS316 Tube Fittings"
        breadcrumb="Products / Tube Fittings"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <TrustStrip />
    </>
  )
}