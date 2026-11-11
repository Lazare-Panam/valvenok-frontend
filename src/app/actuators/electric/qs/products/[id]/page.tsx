'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { QS_MODELS, QS_COMMON, QS_IMAGE, type QSModel } from '../../qsData'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BASE = '/actuators/electric/qs/products'

function specsOf(m: QSModel): DetailSpec[] {
  return [
    { label: 'Model', value: m.model },
    { label: 'Torque', value: `${m.torqueNm} Nm` },
    { label: 'Spring Torque', value: `${m.springTorqueNm} Nm` },
    { label: 'Operating Speed', value: m.speed },
    { label: 'Spring Speed', value: m.springSpeed },
    { label: 'Power Supply', value: m.power },
    { label: 'Mounting', value: m.mounting },
    { label: 'Cable Entry', value: m.cableEntry },
    { label: 'Dimensions (L × W × H)', value: m.dimensions },
    { label: 'Weight', value: `${m.weightKg} kg` },
    ...QS_COMMON,
  ]
}

function toRFQ(m: QSModel): ProductForRFQ {
  return {
    id: m.model,
    name: `QS Series Fail-Safe Electric Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'QS Series',
    thumbnail: QS_IMAGE,
    description: `${m.model} fail-safe spring return electric actuator, ${m.torqueNm} Nm, ${m.mounting}.`,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Torque', value: `${m.torqueNm} Nm` },
      { label: 'Spring Speed', value: m.springSpeed },
      { label: 'Mounting', value: m.mounting },
      { label: 'Weight', value: `${m.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  }
}

export default function QSDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const slug = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = QS_MODELS.find((m) => m.model === slug)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: '#2d8a1e' }}>
          Browse QS Series
        </Button>
      </Box>
    )
  }

  const product = toRFQ(row)
  const similar = QS_MODELS.filter((m) => m.model !== row.model).slice(0, 3).map((m) => ({
    id: m.model,
    title: m.model,
    subtitle: `${m.torqueNm} Nm · ${m.mounting}`,
    thumbnail: QS_IMAGE,
    href: `${BASE}/${encodeURIComponent(m.model)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow="QS Series · Fail-Safe Electric Actuator"
      thumbnail={QS_IMAGE}
      description={`Susin ${row.model} fail-safe spring-return electric actuator. ${row.torqueNm} Nm output torque, ${row.mounting}, moves the valve to its safe position on power loss.`}
      specs={specsOf(row)}
      benefits={[
        'Spring-return fail-safe: drives the valve to safe position on power loss',
        '1.8 s spring stroke for fast emergency shutdown',
        'IP67 enclosure (IP68 option) for harsh environments',
        'Available on request — lead time confirmed on quotation',
      ]}
      primaryLabel="Request for Quote / Lead Time"
      onPrimary={() => setModalOpen(true)}
      secondaryLabel="Browse QS Series"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to QS Series"
      similar={similar}
      similarHeading="Other QS Models"
    >
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </ProductDetailLayout>
  )
}
