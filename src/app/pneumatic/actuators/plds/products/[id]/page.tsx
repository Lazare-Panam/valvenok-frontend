'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { PLDS_ACTUATOR_DATA, type PLDSActuatorDTO } from '../hooks/pldsActuatorData'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BASE = '/pneumatic/actuators/plds/products'

function specsOf(p: PLDSActuatorDTO): DetailSpec[] {
  return [
    { label: 'Model', value: p.model },
    { label: 'Series', value: 'PLDS — Linear' },
    { label: 'Piston Area', value: `${p.pistonAreaMm2} mm²` },
    { label: 'Stem Size', value: `${p.stemSizeMm} mm` },
    { label: 'Max Travel (PLD)', value: `${p.maxTravelPldMm} mm` },
    { label: 'Max Travel (PLS)', value: `${p.maxTravelPlsMm} mm` },
  ]
}

function toRFQ(p: PLDSActuatorDTO): ProductForRFQ {
  return {
    id: p.id,
    name: `PLDS Linear Actuator — ${p.model}`,
    brand: 'Panam',
    category: 'Pneumatic Actuators',
    categoryId: 'pneumatic-actuators',
    subCategory: 'PLDS Series',
    thumbnail: p.imageUrl,
    description: p.description,
    keySpecs: specsOf(p),
    variantInfo: { count: 1, sizeRange: `${p.stemSizeMm} mm` },
  }
}

export default function PLDSDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const id = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = PLDS_ACTUATOR_DATA.find((d) => d.id === id)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: '#2d8a1e' }}>
          Browse PLDS Series
        </Button>
      </Box>
    )
  }

  const product = toRFQ(row)
  const similar = PLDS_ACTUATOR_DATA.filter((d) => d.id !== row.id).slice(0, 3).map((d) => ({
    id: d.id,
    title: d.model,
    subtitle: `${d.stemSizeMm} mm stem · ${d.maxTravelPldMm} mm travel`,
    thumbnail: d.imageUrl,
    href: `${BASE}/${encodeURIComponent(d.id)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow="PLDS · Linear Pneumatic Actuator"
      thumbnail={row.imageUrl}
      description={row.description}
      specs={specsOf(row)}
      benefits={[
        'Linear pneumatic drive for rising-stem / gate-type valves',
        'Wide piston-area range for high thrust output',
        'Double-acting (PLD) and spring-return (PLS) travel options',
        'Available on request — lead time confirmed on quotation',
      ]}
      primaryLabel="Request for Quote / Lead Time"
      onPrimary={() => setModalOpen(true)}
      secondaryLabel="Browse PLDS Series"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to PLDS Series"
      similar={similar}
      similarHeading="Similar PLDS Models"
    >
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </ProductDetailLayout>
  )
}
