import type { Metadata } from 'next'
import ProductHero from '../Common/Products_Page/ProductHero'
import ProductGrid from '../Common/Products_Page/ProductGrid'
import TrustStrip from '../Common/Products_Page/TrustStrip'
import { Category } from '../Common/Products_Page/ProductCard'

export const metadata: Metadata = {
  title: 'Valve Actuators | Pneumatic & Electric Actuation Solutions',
  description: 'Valvenok supplies high-performance pneumatic and electric actuators for industrial valve automation. Rack and pinion, scotch yoke, and linear actuators in SS316.',
}

const CATEGORIES: Category[] = [
  {
    code: 'PA-RP',
    title: 'Pneumatic Actuators',
    subtitle: 'Rack & Pinion Series',
    description: 'Double-acting and spring-return pneumatic actuators for quarter-turn valves. Compact design with high torque output for reliable process automation.',
    specs: ['SS316 / Aluminum', '90° Rotation', 'Double Acting', 'Spring Return'],
    applications: 'Ball Valves, Butterfly Valves, Chemical Processing',
    href: '/pneumatic/actuators',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg',
  },
]

const INTRO = `Valvenok provides a comprehensive range of valve actuators engineered for the most demanding industrial environments. 
From high-cycle pneumatic rack and pinion units to precision electric actuators, our solutions ensure seamless automation 
for oil & gas, marine, and power generation sectors. All units are ATEX compliant and built for long-term reliability.`

export default function ActuatorsPage() {
  return (
    <>
      <ProductHero
        title="Valve Actuators"
        subtitle="Pneumatic & Electric Automation for Industrial Process Valves"
        description="High-performance actuation solutions designed for reliability in harsh environments. Available in Rack & Pinion, Scotch Yoke, and Electric configurations with full accessory support."
        imageSrc="https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg"
        imageAlt="Valvenok Industrial Valve Actuators"
        breadcrumb="Products / Actuators"
      />
      <ProductGrid categories={CATEGORIES} intro={INTRO} />
      <TrustStrip 
        points={[
          { value: 'ATEX / IECEx', label: 'Safety Standards' },
          { value: 'Pneumatic & Electric', label: 'Power Options' },
          { value: 'High Torque', label: 'Performance' },
          { value: 'Fast Dispatch', label: 'Availability' },
          { value: 'ISO Certified', label: 'Quality' },
        ]}
      />
    </>
  )
}