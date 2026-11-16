'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Box, Container, Typography, Button, Divider, Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ALL_TUBING_DATA } from '@/src/app/fittings-tubing/tubing/components/data'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const ACCENT = '#61D649'

export default function TubingDetailPage() {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useState(false)

  const tube = ALL_TUBING_DATA.find(t => t.id === id)

  if (!tube) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" fontWeight={800}>Product not found</Typography>
        <Button startIcon={<ArrowBackIcon />} component={Link} href="/high-pressure/tubing/products" sx={{ fontWeight: 700 }}>
          Back to tubing
        </Button>
      </Box>
    )
  }

  const pressure = tube.workingPressurePsi
    ? `${tube.workingPressurePsi.toLocaleString()} psi / ${tube.workingPressureBar} bar`
    : '—'

  const specs = [
    { label: 'Part Number',      value: tube.partNumber },
    { label: 'Brand',            value: tube.brand },
    { label: 'Product Type',     value: tube.productType },
    { label: 'Material',         value: tube.material },
    { label: 'Tubing Type',      value: tube.tubingType },
    { label: 'Outer Diameter',   value: tube.outerDiameter },
    { label: 'Wall Thickness',   value: tube.wallThickness },
    { label: 'Unit System',      value: tube.unit === 'imperial' ? 'Imperial' : 'Metric' },
    { label: 'Working Pressure', value: pressure },
  ]

  const rfq: ProductForRFQ = {
    id: tube.partNumber,
    name: `${tube.brand} ${tube.productType} — ${tube.partNumber}`,
    brand: tube.brand,
    category: 'High Pressure Tubing & Tube Supports',
    categoryId: 'hp-tubing',
    subCategory: tube.productType,
    thumbnail: tube.imageUrl,
    description: tube.description,
    keySpecs: specs,
    variantInfo: { count: 1, sizeRange: tube.outerDiameter },
  }

  const similar = ALL_TUBING_DATA
    .filter(t => t.material === tube.material && t.productType === tube.productType && t.id !== tube.id)
    .slice(0, 4)

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Button startIcon={<ArrowBackIcon />} component={Link} href="/high-pressure/tubing/products"
          sx={{ mb: 3, fontWeight: 700, color: 'text.secondary', textTransform: 'capitalize' }}>
          Back to Tubing
        </Button>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 360, p: 4 }}>
              <Box component="img" src={tube.imageUrl} alt={tube.partNumber} sx={{ maxHeight: 300, maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={tube.brand} sx={{ bgcolor: tube.brand === 'Hiflux' ? '#1976d2' : ACCENT, color: '#fff', fontWeight: 700 }} />
              <Chip label={tube.productType} variant="outlined" sx={{ fontWeight: 700 }} />
              <Chip label={tube.material} variant="outlined" sx={{ fontWeight: 700 }} />
            </Box>

            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: '2rem', mb: 1, fontFamily: 'monospace' }}>
              {tube.partNumber}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
              {tube.description}
            </Typography>

            <Divider sx={{ mb: 3 }} />
            <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}>
              Specifications
            </Typography>
            <Box sx={{ border: '1px solid', borderColor: 'divider', mb: 4 }}>
              {specs.map((s, i) => (
                <Box key={s.label} sx={{ display: 'flex', borderBottom: i < specs.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                  <Box sx={{ width: '40%', px: 2, py: 1.5, bgcolor: alpha(ACCENT, 0.05), borderRight: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>{s.label}</Typography>
                  </Box>
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{s.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Button variant="contained" size="large" startIcon={<ContactSupportIcon />} onClick={() => setModalOpen(true)}
              sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, bgcolor: ACCENT, boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
              Request for Quote
            </Button>
          </Grid>
        </Grid>

        {similar.length > 0 && (
          <Box sx={{ mt: 10 }}>
            <Divider sx={{ mb: 4 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>More {tube.material} {tube.productType}</Typography>
            <Grid container spacing={2}>
              {similar.map(s => (
                <Grid size={{ xs: 6, sm: 3 }} key={s.id}>
                  <Box component={Link} href={`/high-pressure/tubing/products/${s.id}`}
                    sx={{ display: 'block', textDecoration: 'none', color: 'inherit', border: '1px solid', borderColor: 'divider', p: 2, transition: 'border-color 0.15s', '&:hover': { borderColor: ACCENT } }}>
                    <Box component="img" src={s.imageUrl} alt={s.partNumber} sx={{ width: '100%', height: 90, objectFit: 'contain', mb: 1 }} />
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, color: ACCENT, display: 'block' }}>{s.partNumber}</Typography>
                    <Typography variant="caption" color="text.secondary">{s.outerDiameter} · {s.wallThickness}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfq} />
    </>
  )
}
