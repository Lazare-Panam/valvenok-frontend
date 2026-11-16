'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Box, Container, Typography, Button, Divider, Chip } from '@mui/material'
import { alpha } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { HP_FITTINGS_DATA } from '../../hooks/hpAllFittingsData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const ACCENT = '#61D649'

export default function FittingDetailPage() {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useState(false)

  const fitting = HP_FITTINGS_DATA.find(f => f.id === id)

  if (!fitting) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" fontWeight={800}>Product not found</Typography>
        <Button startIcon={<ArrowBackIcon />} component={Link} href="/high-pressure/fittings/products" sx={{ fontWeight: 700 }}>
          Back to fittings
        </Button>
      </Box>
    )
  }

  const specs = [
    { label: 'Part Number',     value: fitting.partNumber },
    { label: 'Brand',           value: fitting.brand },
    { label: 'Fitting Type',    value: fitting.fittingType },
    { label: 'Pressure Rating', value: fitting.pressureRating },
    { label: 'Material',        value: fitting.material },
    { label: 'P1 Size',         value: fitting.p1Size },
    { label: 'P1 Connection',   value: fitting.p1Thread },
    ...(fitting.p2Size ? [
      { label: 'P2 Size',       value: fitting.p2Size },
      { label: 'P2 Connection', value: fitting.p2Thread },
    ] : []),
  ]

  const rfq: ProductForRFQ = {
    id: fitting.partNumber,
    name: `${fitting.brand} ${fitting.fittingType} — ${fitting.partNumber}`,
    brand: fitting.brand,
    category: 'High Pressure Fittings',
    categoryId: 'hp-fittings',
    subCategory: fitting.fittingType,
    thumbnail: fitting.imageUrl,
    description: fitting.description,
    keySpecs: specs,
    variantInfo: { count: 1, sizeRange: fitting.p1Size },
  }

  const similar = HP_FITTINGS_DATA
    .filter(f => f.fittingType === fitting.fittingType && f.id !== fitting.id)
    .slice(0, 4)

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Button startIcon={<ArrowBackIcon />} component={Link} href="/high-pressure/fittings/products"
          sx={{ mb: 3, fontWeight: 700, color: 'text.secondary', textTransform: 'capitalize' }}>
          Back to Fittings
        </Button>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 360, p: 4 }}>
              <Box component="img" src={fitting.imageUrl} alt={fitting.partNumber} sx={{ maxHeight: 300, maxWidth: '100%', objectFit: 'contain' }} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={fitting.brand} sx={{ bgcolor: fitting.brand === 'Hiflux' ? '#1976d2' : ACCENT, color: '#fff', fontWeight: 700 }} />
              <Chip label={fitting.fittingType} variant="outlined" sx={{ fontWeight: 700 }} />
              <Chip label={fitting.pressureRating} variant="outlined" sx={{ fontWeight: 700 }} />
            </Box>

            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: '2rem', mb: 1, fontFamily: 'monospace' }}>
              {fitting.partNumber}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
              {fitting.description}
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
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>More {fitting.fittingType}s</Typography>
            <Grid container spacing={2}>
              {similar.map(s => (
                <Grid size={{ xs: 6, sm: 3 }} key={s.id}>
                  <Box component={Link} href={`/high-pressure/fittings/products/${s.id}`}
                    sx={{ display: 'block', textDecoration: 'none', color: 'inherit', border: '1px solid', borderColor: 'divider', p: 2, transition: 'border-color 0.15s', '&:hover': { borderColor: ACCENT } }}>
                    <Box component="img" src={s.imageUrl} alt={s.partNumber} sx={{ width: '100%', height: 90, objectFit: 'contain', mb: 1 }} />
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, color: ACCENT, display: 'block' }}>{s.partNumber}</Typography>
                    <Typography variant="caption" color="text.secondary">{s.brand} · {s.pressureRating}</Typography>
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
