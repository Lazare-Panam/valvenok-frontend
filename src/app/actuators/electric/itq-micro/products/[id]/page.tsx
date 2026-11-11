'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ITQM_MODELS, type ITQMicroModel } from '../../itqMicroData'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BASE = '/actuators/electric/itq-micro/products'

function specsOf(m: ITQMicroModel): DetailSpec[] {
  return [
    { label: 'Model', value: m.model },
    { label: 'Torque', value: `${m.torqueNm} Nm` },
    { label: 'Operating Time', value: m.speed },
    { label: 'Power Supply', value: m.power },
    { label: 'Mounting', value: m.mounting },
    { label: 'Enclosure', value: m.enclosure },
    { label: 'Weight', value: `${m.weightKg} kg` },
    ...m.specs,
  ]
}

function toRFQ(m: ITQMicroModel): ProductForRFQ {
  return {
    id: m.model,
    name: `ITQ Micro Electric Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Micro Series',
    thumbnail: m.image,
    description: `${m.model} compact electric actuator, ${m.torqueNm} Nm, ${m.mounting}. ${m.summary}`,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Torque', value: `${m.torqueNm} Nm` },
      { label: 'Operating Time', value: m.speed },
      { label: 'Mounting', value: m.mounting },
      { label: 'Weight', value: `${m.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  }
}

export default function ITQMicroDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const slug = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = ITQM_MODELS.find((m) => m.model === slug)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: '#2d8a1e' }}>
          Browse ITQ Micro Series
        </Button>
      </Box>
    )
  }

  const product = toRFQ(row)
  const similar = ITQM_MODELS.filter((m) => m.model !== row.model).slice(0, 3).map((m) => ({
    id: m.model,
    title: m.model,
    subtitle: `${m.torqueNm} Nm · ${m.mounting}`,
    thumbnail: m.image,
    href: `${BASE}/${encodeURIComponent(m.model)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow="ITQ Micro · Compact Electric Actuator"
      thumbnail={row.image}
      description={`Susin ${row.model} compact quarter-turn electric actuator. ${row.torqueNm} Nm, ${row.mounting}. ${row.summary}`}
      specs={specsOf(row)}
      benefits={[
        'Compact, lightweight quarter-turn drive for small valves & dampers',
        'Economic actuation for ball and plug valves',
        `${row.enclosure} enclosure`,
        'Available on request — lead time confirmed on quotation',
      ]}
      primaryLabel="Request for Quote / Lead Time"
      onPrimary={() => setModalOpen(true)}
      secondaryLabel="Browse ITQ Micro Series"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to ITQ Micro Series"
      similar={similar}
      similarHeading="Other ITQ Micro Models"
    >
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </ProductDetailLayout>
  )
}
