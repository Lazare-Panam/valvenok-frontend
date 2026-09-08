import type { Metadata } from 'next'
import { Category } from '../../Common/Products_Page/ProductCard'
import TrustStrip from '../../Common/Products_Page/TrustStrip'
import ProductHero from '../../Common/Products_Page/ProductHero'
import PipeFittingsGrid from './PipeFittingsGrid'

export const metadata: Metadata = {
  title: 'High Pressure Pipe Fittings | SS 316',
  description:
    'Valvenok supplies SS 316 high pressure pipe fittings from 10,000 to 15,000 psi. Hex couplings, hex nipples, adapters, elbows, tees, crosses, plugs and caps in NPT, ISO Parallel and 37° JIC.',
}

const PIPE_FITTING_FAMILIES: Category[] = [
  {
    code: 'CPL',
    title: 'Hex Couplings',
    subtitle: 'Hex Coupling & Reducing Hex Coupling — NPT & ISO Parallel',
    description:
      'SS 316 Hex Couplings and Reducing Hex Couplings. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel', '1/8" – 1"'],
    applications: 'Oil & Gas, High Pressure Process, Test Systems',
    href: '/high-pressure/pipe-fittings/hex-coupling',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-coupling.png',
  },
  {
    code: 'NIP',
    title: 'Hex Nipples',
    subtitle: 'Hex Nipple, Reducing & Swivel Variants — NPT, ISO Parallel & 37° JIC',
    description:
      'SS 316 Hex Nipples, Reducing Hex Nipples and Swivel variants. NPT, ISO Parallel and 37° JIC thread combinations. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel · 37° JIC', '1/8" – 2"'],
    applications: 'Oil & Gas, Hydraulics, High Pressure Instrumentation',
    href: '/high-pressure/pipe-fittings/hex-nipples',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg',
  },
  {
    code: 'ADP',
    title: 'Adapters',
    subtitle: 'HP Pipe Adapters — NPT & ISO Parallel',
    description:
      'SS 316 High Pressure Adapters in NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel', '1/8" – 1"'],
    applications: 'Oil & Gas, Process, High Pressure Test',
    href: '/high-pressure/pipe-fittings/adapters',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/adapters.jpg',
  },
  {
    code: 'ELB',
    title: 'Elbows',
    subtitle: 'Male, Female, Street & Swivel Elbows — NPT & ISO Parallel',
    description:
      'SS 316 High Pressure Elbows — Male, Female, Street, Swivel Male and Swivel Union. NPT and ISO Parallel. 10,000 to 15,000 psi. Sizes from 1/8" to 1 1/2".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel', '1/8" – 1 1/2"'],
    applications: 'Oil & Gas, Process Piping, High Pressure Systems',
    href: '/high-pressure/pipe-fittings/elbows',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/male-elbow-hp.png',
  },
  {
    code: 'END',
    title: 'Plugs & Caps',
    subtitle: 'Hex Plugs, Tube Plugs & Pipe Caps — NPT, ISO Parallel & 37° JIC',
    description:
      'SS 316 Hex Plugs, Tube Plugs and Pipe Caps. NPT, ISO Parallel and 37° JIC thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel · 37° JIC', '1/8" – 2"'],
    applications: 'Line Termination, Test Rigs, High Pressure Systems',
    href: '/high-pressure/pipe-fittings/end-connections',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/pipe-cap-hp.jpg',
  },
  {
    code: 'TEE',
    title: 'Tees & Crosses',
    subtitle: 'Female Tee, Male Tee, Swivel Union Tee & Female Cross',
    description:
      'SS 316 Female Tees, Male Tees, Swivel Union Tees and Female Crosses. NPT and ISO Parallel. 10,000 to 15,000 psi. Sizes from 1/8" to 1 1/4".',
    specs: ['SS 316', '10,000 – 15,000 psi', 'NPT · ISO Parallel', '1/8" – 1 1/4"'],
    applications: 'High Pressure Manifolds, Test Systems, Oil & Gas',
    href: '/high-pressure/pipe-fittings/tees-cross',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/female-tee.png',
  },
]

const TRUST_POINTS = [
  { value: 'SS 316', label: 'Material Standard' },
  { value: '10,000 – 15,000 psi', label: 'Pressure Range' },
  { value: 'NPT · ISO Parallel · 37° JIC', label: 'Thread Standards' },
  { value: '1/8" – 2"', label: 'Size Range' },
  { value: 'Fast Dispatch', label: 'Availability' },
]

export default function PipeFittingsIndexPage() {
  return (
    <>
      <ProductHero
        title="High Pressure Pipe Fittings"
        subtitle="SS 316 Pipe Fittings from 10,000 to 15,000 psi"
        description="Valvenok supplies a complete range of SS 316 high pressure pipe fittings for oil & gas and process applications — hex couplings, hex nipples, adapters, elbows, tees, crosses, plugs and caps."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&fit=crop"
        imageAlt="High pressure pipe fittings"
        breadcrumb="Products / High Pressure / Pipe Fittings"
      />
      <PipeFittingsGrid families={PIPE_FITTING_FAMILIES} />
      <TrustStrip points={TRUST_POINTS} />
    </>
  )
}