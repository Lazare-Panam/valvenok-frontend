'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ITQ_MODELS, ITQ_COMMON, ITQ_IMAGE, type ITQModel } from '../../itqData'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BASE = '/actuators/electric/itq/products'
const amps = (a: [number, number]) => `${a[0]} / ${a[1]} A`
const nm = (n: number) => `${n.toLocaleString('en-GB')} Nm`

function specsOf(m: ITQModel): DetailSpec[] {
  return [
    { label: 'Model', value: m.model },
    { label: 'Torque', value: nm(m.torqueNm) },
    { label: 'Operating Time (50 / 60 Hz)', value: `${m.time50} s / ${m.time60} s` },
    { label: 'Operating Time (24 VDC, no load)', value: m.time24dc ? `${m.time24dc} s` : 'Not available' },
    { label: 'Duty Cycle (Modulating)', value: `S4 – ${m.dutyS4}%` },
    { label: 'Mounting', value: m.mounting },
    { label: 'Max Bore (Key / Square)', value: `${m.boreKey} / ${m.boreSquare} mm` },
    { label: 'Handwheel Turns', value: `${m.handwheelTurns}` },
    { label: 'Weight', value: `${m.weightKg} kg` },
    { label: 'Current 1Ph 110 V (50 / 60 Hz)', value: amps(m.a1ph110) },
    { label: 'Current 1Ph 220 V (50 / 60 Hz)', value: amps(m.a1ph220) },
    { label: 'Current 3Ph 380 V (50 / 60 Hz)', value: amps(m.a3ph380) },
    { label: 'Current 3Ph 440 V (50 / 60 Hz)', value: amps(m.a3ph440) },
    ...(m.a24v ? [{ label: 'Current AC / DC 24 V', value: `${m.a24v} A` }] : []),
    ...ITQ_COMMON,
  ]
}

function toRFQ(m: ITQModel): ProductForRFQ {
  return {
    id: m.model,
    name: `ITQ Series Electric Actuator — ${m.model}`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Series',
    thumbnail: ITQ_IMAGE,
    description: `${m.model} quarter-turn electric actuator, ${nm(m.torqueNm)}, ${m.mounting}.`,
    keySpecs: [
      { label: 'Model', value: m.model },
      { label: 'Torque', value: nm(m.torqueNm) },
      { label: 'Operating Time', value: `${m.time50} s (50 Hz)` },
      { label: 'Mounting', value: m.mounting },
      { label: 'Weight', value: `${m.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  }
}

export default function ITQDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const slug = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = ITQ_MODELS.find((m) => m.model === slug)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: '#2d8a1e' }}>
          Browse ITQ Series
        </Button>
      </Box>
    )
  }

  const product = toRFQ(row)
  const similar = ITQ_MODELS.filter((m) => m.model !== row.model).slice(0, 3).map((m) => ({
    id: m.model,
    title: m.model,
    subtitle: `${nm(m.torqueNm)} · ${m.mounting}`,
    thumbnail: ITQ_IMAGE,
    href: `${BASE}/${encodeURIComponent(m.model)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow="ITQ Series · Electric Actuator"
      thumbnail={ITQ_IMAGE}
      description={`Panam / Susin ${row.model} heavy-duty quarter-turn electric actuator with self-locking double worm gearing. ${nm(row.torqueNm)} output torque, ${row.mounting}.`}
      specs={specsOf(row)}
      benefits={[
        'Self-locking double worm gearing holds valve position on power loss',
        'Quarter-turn control for ball, butterfly and plug valves',
        'IP67 enclosure (IP68 option) for harsh environments',
        'Available on request — lead time confirmed on quotation',
      ]}
      primaryLabel="Request for Quote / Lead Time"
      onPrimary={() => setModalOpen(true)}
      secondaryLabel="Browse ITQ Series"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to ITQ Series"
      similar={similar}
      similarHeading="Other ITQ Models"
    >
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </ProductDetailLayout>
  )
}
