'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Box, Container, Typography, Button, Divider, Card, CardContent, Chip,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { PD_ACTUATOR_DATA, type PDActuatorDTO } from '../hooks/pdActuatorData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const GREEN_DARK = '#2d8a1e'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BASE = '/pneumatic/actuators/pds/products'

// — spec rows differ by series —
function specsOf(p: PDActuatorDTO): { label: string; value: string }[] {
  if (p.series === 'PD') {
    return [
      { label: 'Model', value: p.model },
      { label: 'Series', value: 'PD — Double Acting' },
      { label: 'Angle', value: p.angle ?? '—' },
      { label: 'Torque @ 2.8 Bar', value: `${p.torque_2_8_bar} NM` },
      { label: 'Torque @ 3.5 Bar', value: `${p.torque_3_5_bar} NM` },
      { label: 'Torque @ 4.2 Bar', value: `${p.torque_4_2_bar} NM` },
      { label: 'Torque @ 5.5 Bar', value: `${p.torque_5_5_bar} NM` },
      { label: 'Torque @ 6 Bar', value: `${p.torque_6_bar} NM` },
      { label: 'Torque @ 7 Bar', value: `${p.torque_7_bar} NM` },
      { label: 'Torque @ 8 Bar', value: `${p.torque_8_bar} NM` },
      { label: 'Air Consumption (Open)', value: `${p.airConsumptionOpen} L @ 5.5 Bar` },
      { label: 'Air Consumption (Close)', value: `${p.airConsumptionClose} L @ 5.5 Bar` },
    ]
  }
  return [
    { label: 'Model', value: p.model },
    { label: 'Series', value: 'PDS — Spring Return' },
    { label: 'ISO 5211', value: p.iso5211 ?? '—' },
    { label: 'Output Torque (NM)', value: `${p.outputTorqueNmMin} – ${p.outputTorqueNmMax}` },
    { label: 'Output Torque (LB-IN)', value: `${p.outputTorqueLbInMin} – ${p.outputTorqueLbInMax}` },
    { label: 'Spring End Torque (NM)', value: `${p.springEndTorqueNmMin} – ${p.springEndTorqueNmMax}` },
    { label: 'Spring End Torque (LB-IN)', value: `${p.springEndTorqueLbInMin} – ${p.springEndTorqueLbInMax}` },
  ]
}

function toRFQ(p: PDActuatorDTO): ProductForRFQ {
  const doubleActing = p.series === 'PD'
  return {
    id: p.id,
    name: `${p.series} Pneumatic Actuator — ${p.model}`,
    brand: 'Panam',
    category: 'Pneumatic Actuators',
    categoryId: 'pneumatic-actuators',
    subCategory: doubleActing ? 'Double Acting' : 'Spring Return',
    thumbnail: p.imageUrl,
    description: p.description,
    keySpecs: specsOf(p).slice(0, 6),
    variantInfo: { count: 1, sizeRange: (doubleActing ? p.angle : p.iso5211) ?? '' },
  }
}

const benefitsOf = (p: PDActuatorDTO) =>
  p.series === 'PD'
    ? [
        'Double-acting rack-and-pinion design for precise quarter-turn control',
        'Multiple angle configurations (0°, 45°, 90°)',
        'High output torque across the full 2.8–8 bar supply range',
        'Available on request — lead time confirmed on quotation',
      ]
    : [
        'Spring-return fail-safe operation for safe shutdown',
        'ISO 5211 mounting for direct valve coupling',
        'Wide output and spring-end torque band',
        'Available on request — lead time confirmed on quotation',
      ]

function SimilarCard({ p }: { p: PDActuatorDTO }) {
  const router = useRouter()
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  return (
    <>
      <Card
        elevation={0}
        onClick={() => router.push(`${BASE}/${encodeURIComponent(p.id)}`)}
        sx={{
          borderRadius: 0, border: '1px solid', borderColor: 'divider', cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': { borderColor: BRAND_GREEN, boxShadow: `0 4px 16px ${alpha('#000', 0.08)}` },
        }}
      >
        <Box sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140, p: 2 }}>
          <Box component="img" src={p.imageUrl} alt={p.model} sx={{ maxHeight: 110, maxWidth: '100%', objectFit: 'contain' }} />
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="caption" sx={{ color: GREEN_DARK, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontFamily: PRIMARY_FONT }}>
            {p.series === 'PD' ? 'Double Acting' : 'Spring Return'}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 800, lineHeight: 1.2, mt: 0.5, mb: 1.5, fontFamily: PRIMARY_FONT }}>
            {p.model}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontFamily: PRIMARY_FONT }}>
            {p.series === 'PD' ? `Angle ${p.angle}` : `ISO 5211 ${p.iso5211}`}
          </Typography>
          <Button
            size="small" fullWidth
            onClick={(e) => { e.stopPropagation(); setQuote(toRFQ(p)) }}
            sx={{
              mt: 1.5, borderRadius: '6px', fontWeight: 700, fontSize: '0.7rem', textTransform: 'none',
              fontFamily: PRIMARY_FONT, border: `1px solid ${BRAND_GREEN}`, color: GREEN_DARK,
              '&:hover': { bgcolor: BRAND_GREEN, color: '#fff' },
            }}
          >
            Request Quote
          </Button>
        </CardContent>
      </Card>
      {quote && <RFQModal open={!!quote} onClose={() => setQuote(null)} product={quote} />}
    </>
  )
}

export default function PDActuatorDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const id = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const actuator = PD_ACTUATOR_DATA.find((d) => d.id === id)

  if (!actuator) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, fontFamily: PRIMARY_FONT }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: GREEN_DARK }}>
          Browse Pneumatic Actuators
        </Button>
      </Box>
    )
  }

  const product = toRFQ(actuator)
  const specs = specsOf(actuator)
  const similar = PD_ACTUATOR_DATA.filter((d) => d.series === actuator.series && d.id !== actuator.id).slice(0, 3)

  return (
    <>
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', pb: 12 }}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)}
            sx={{ fontWeight: 700, mb: 3, color: 'text.secondary', fontFamily: PRIMARY_FONT }}>
            Back to Pneumatic Actuators
          </Button>

          <Grid container spacing={6}>
            {/* Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380, p: 4, position: 'sticky', top: 24 }}>
                <Box component="img" src={actuator.imageUrl} alt={actuator.model} sx={{ maxHeight: 320, maxWidth: '100%', objectFit: 'contain' }} />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                label={actuator.series === 'PD' ? 'PD · Double Acting' : 'PDS · Spring Return'}
                size="small"
                sx={{ fontWeight: 800, fontSize: '0.68rem', mb: 1.5, bgcolor: alpha(BRAND_GREEN, 0.12), color: GREEN_DARK, fontFamily: PRIMARY_FONT }}
              />

              <Typography variant="h1" sx={{ fontWeight: 800, lineHeight: 1, mb: 1, color: GREEN_DARK, fontFamily: PRIMARY_FONT }}>
                {actuator.model}
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7, fontFamily: PRIMARY_FONT }}>
                {actuator.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5, fontFamily: PRIMARY_FONT }}>
                Technical Specifications
              </Typography>
              <Box sx={{ border: '1px solid', borderColor: 'divider', mb: 4 }}>
                {specs.map((spec, i) => (
                  <Box key={spec.label} sx={{ display: 'flex', borderBottom: i < specs.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                    <Box sx={{ width: '45%', px: 2, py: 1.5, bgcolor: alpha(BRAND_GREEN, 0.05), borderRight: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, fontFamily: PRIMARY_FONT }}>
                        {spec.label}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, fontFamily: PRIMARY_FONT }}>{spec.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5, fontFamily: PRIMARY_FONT }}>
                Key Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                {benefitsOf(actuator).map((benefit) => (
                  <Box key={benefit} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: BRAND_GREEN, fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: PRIMARY_FONT }}>{benefit}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  size="large" startIcon={<ContactSupportIcon />} onClick={() => setModalOpen(true)}
                  sx={{
                    borderRadius: '6px', fontWeight: 800, py: 1.5, px: 4, fontSize: '1rem', textTransform: 'none',
                    fontFamily: PRIMARY_FONT, bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none',
                    border: `1px solid ${BRAND_GREEN}`,
                    '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' },
                  }}
                >
                  Request for Quote / Lead Time
                </Button>
                <Button
                  size="large" onClick={() => router.push(BASE)}
                  sx={{
                    borderRadius: '6px', fontWeight: 700, py: 1.5, px: 3, fontSize: '0.9rem', textTransform: 'none',
                    fontFamily: PRIMARY_FONT, border: '1px solid', borderColor: 'divider', color: 'text.primary',
                    '&:hover': { borderColor: 'text.primary' },
                  }}
                >
                  Browse All Models
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {similar.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Box>
                <Typography variant="overline" sx={{ color: GREEN_DARK, fontWeight: 700, letterSpacing: 2, fontFamily: PRIMARY_FONT }}>
                  {actuator.series === 'PD' ? 'Double Acting' : 'Spring Return'}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1, fontFamily: PRIMARY_FONT }}>
                  Similar Models
                </Typography>
              </Box>
              <Button variant="text" onClick={() => router.push(BASE)}
                sx={{ fontWeight: 700, fontSize: '0.8rem', color: GREEN_DARK, fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                VIEW ALL →
              </Button>
            </Box>
            <Grid container spacing={3}>
              {similar.map((p) => (
                <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SimilarCard p={p} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  )
}
