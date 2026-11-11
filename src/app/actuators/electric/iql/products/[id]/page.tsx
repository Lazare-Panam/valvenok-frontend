'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { IQL_ACTUATOR_DATA, type IQLActuatorDTO } from '../hooks/iqlActuatorData'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BASE = '/actuators/electric/iql/products'

function specsOf(m: IQLActuatorDTO): DetailSpec[] {
  return [
    { label: 'Model', value: m.model },
    { label: 'Thrust Force', value: `${m.thrustForceKn} kN` },
    { label: 'Stroke', value: `${m.strokeMm} mm` },
    { label: 'Positioning Speed', value: `${m.positioningSpeedMms} mm/s` },
    { label: 'Manual Override', value: m.manualOverride },
    { label: 'Cable Entry', value: m.cableEntry },
    { label: 'Ambient Temp', value: m.ambientTemp },
    { label: 'Position Indication', value: m.positionIndication },
    { label: 'Mounting Direction', value: m.mountingDirection },
    { label: 'Housing', value: m.housing },
    { label: 'Enclosure', value: m.enclosure },
    { label: 'Power Supply', value: m.powerSupply },
    { label: 'Operating Mode', value: m.operatingMode },
    { label: 'Weight', value: `${m.weightKg} kg` },
  ]
}

function toRFQ(m: IQLActuatorDTO): ProductForRFQ {
  return {
    id: m.id,
    name: `IQL Electric Actuator — ${m.model}`,
    brand: 'Panam',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'IQL Series',
    thumbnail: m.imageUrl,
    description: m.description,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Thrust (kN)', value: m.thrustForceKn },
      { label: 'Stroke (mm)', value: m.strokeMm },
      { label: 'Speed (mm/s)', value: m.positioningSpeedMms },
      { label: 'Enclosure', value: m.enclosure },
      { label: 'Weight (kg)', value: m.weightKg },
    ],
    variantInfo: { count: 1, sizeRange: `${m.strokeMm} mm` },
  }
}

export default function IQLDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const slug = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = IQL_ACTUATOR_DATA.find((m) => m.id === slug)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: '#2d8a1e' }}>
          Browse IQL Series
        </Button>
      </Box>
    )
  }

  const product = toRFQ(row)
  const similar = IQL_ACTUATOR_DATA.filter((m) => m.id !== row.id).slice(0, 3).map((m) => ({
    id: m.id,
    title: m.model,
    subtitle: `${m.thrustForceKn} kN · ${m.strokeMm} mm stroke`,
    thumbnail: m.imageUrl,
    href: `${BASE}/${encodeURIComponent(m.id)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow="IQL Series · Electric Linear Actuator"
      thumbnail={row.imageUrl}
      description={row.description}
      specs={specsOf(row)}
      benefits={[
        'Electric linear drive for rising-stem / linear valves',
        'Integrated position indication and manual override',
        `${row.enclosure} enclosure`,
        'Available on request — lead time confirmed on quotation',
      ]}
      primaryLabel="Request for Quote / Lead Time"
      onPrimary={() => setModalOpen(true)}
      secondaryLabel="Browse IQL Series"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to IQL Series"
      similar={similar}
      similarHeading="Other IQL Models"
    >
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </ProductDetailLayout>
  )
}
