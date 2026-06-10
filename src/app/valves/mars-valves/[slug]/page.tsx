'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Box, Container, Typography, Button, Chip, Divider,
  Stack, useTheme, alpha,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import { MARS_BALL_VALVES_DATA } from '../components/data'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

export default function MarsSeriesDetailPage() {
  const { slug } = useParams()
  const router = useRouter()
  const theme = useTheme()
  const [modalOpen, setModalOpen] = useState(false)

  const series = MARS_BALL_VALVES_DATA.find(s => s.slug === slug)

  if (!series) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" fontWeight={900}>SERIES NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.back()} sx={{ fontWeight: 700 }}>Go Back</Button>
      </Box>
    )
  }

  const rfqProduct: ProductForRFQ = {
    id: series.id,
    name: `Mars ${series.name}`,
  } as unknown as ProductForRFQ

  const isFireSafe = series.fireSafe === 'API 607 Fire Safe'

  const specs = [
    { label: 'Series Code', value: series.seriesCode },
    { label: 'Design', value: series.design },
    { label: 'Category', value: series.category },
    { label: 'Port Type', value: series.portType },
    { label: 'Size Range', value: series.sizeRange },
    { label: 'Pressure Rating', value: series.pressureRating },
    { label: 'Body Material', value: series.body },
    { label: 'Seats', value: series.seats },
    { label: 'End Connections', value: series.ends },
    { label: 'Fire Safe', value: series.fireSafe },
    ...(series.standards.length ? [{ label: 'Standards', value: series.standards.join(', ') }] : []),
    ...(series.options.length ? [{ label: 'Options', value: series.options.join(', ') }] : []),
  ]

  const similarSeries = MARS_BALL_VALVES_DATA
    .filter(s => s.category === series.category && s.id !== series.id)
    .slice(0, 3)

  return (
    <>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 12 }}>

        {/* Breadcrumb */}
        <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.push('/valves/mars-valves')}
              sx={{ fontWeight: 700, fontSize: '0.8rem', py: 1.5, color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
            >
              Mars Ball Valves
            </Button>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Grid container spacing={6}>

            {/* Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{
                bgcolor: '#fff',
                border: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 380,
                p: 4,
                position: 'sticky',
                top: 24,
              }}>
                <Box
                  component="img"
                  src={series.imageUrl}
                  alt={series.name}
                  sx={{ maxHeight: 320, maxWidth: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 7 }}>

              {/* Badges */}
              <Stack direction="row" gap={1} flexWrap="wrap" mb={2}>
                <Chip
                  label={series.category}
                  size="small"
                  sx={{
                    fontWeight: 700, fontSize: '0.7rem', borderRadius: '4px',
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.dark,
                  }}
                />
                {isFireSafe && (
                  <Chip
                    label="API 607 Fire Safe"
                    size="small"
                    sx={{
                      fontWeight: 700, fontSize: '0.7rem', borderRadius: '4px',
                      bgcolor: alpha('#FF6B35', 0.12),
                      color: '#FF6B35',
                    }}
                  />
                )}
                {series.standards.includes('3-A Certified') && (
                  <Chip
                    label="3-A Certified"
                    size="small"
                    sx={{
                      fontWeight: 700, fontSize: '0.7rem', borderRadius: '4px',
                      bgcolor: alpha('#2E7D32', 0.1),
                      color: '#2E7D32',
                    }}
                  />
                )}
              </Stack>

              {/* Title */}
              <Typography variant="caption" fontWeight={700} letterSpacing={2} color="text.disabled" sx={{ display: 'block', mb: 0.5 }}>
                SERIES {series.seriesCode}
              </Typography>
              <Typography variant="h4" fontWeight={800} color="primary" mb={1} lineHeight={1.1}>
                {series.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4} lineHeight={1.7}>
                {series.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              {/* Spec table */}
              <Typography variant="overline" fontWeight={800} letterSpacing={2} color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
                Technical Specifications
              </Typography>
              <Box sx={{ border: `1px solid ${theme.palette.divider}`, mb: 4 }}>
                {specs.map((spec, i) => (
                  <Box key={i} sx={{
                    display: 'flex',
                    borderBottom: i < specs.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                  }}>
                    <Box sx={{
                      width: '40%', px: 2, py: 1.5,
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                      borderRight: `1px solid ${theme.palette.divider}`,
                      display: 'flex', alignItems: 'center',
                    }}>
                      <Typography variant="caption" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        {spec.label}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" fontWeight={500}>{spec.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Key benefits */}
              <Typography variant="overline" fontWeight={800} letterSpacing={2} color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>
                Key Benefits
              </Typography>
              <Stack gap={1} mb={4}>
                {[
                  'CF8M stainless steel construction for corrosion resistance',
                  'PTFE / RTFE seats for chemical compatibility across process fluids',
                  'Full range of end connections for flexible installation',
                  isFireSafe ? 'API 607 7th Edition fire-safe certified for hazardous-area service' : 'Available with locking devices and V-port flow control options',
                  'Fast lead times — request a quote for pricing and availability',
                ].map((b, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 18, mt: '2px', flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">{b}</Typography>
                  </Box>
                ))}
              </Stack>

              {/* CTAs */}
              <Stack direction="row" gap={2} flexWrap="wrap">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{
                    fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem',
                    borderRadius: '6px', boxShadow: 'none',
                    '&:hover': { boxShadow: 'none', bgcolor: 'primary.dark' },
                  }}
                >
                  Request Quote / Lead Time
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push('/valves/mars-valves')}
                  sx={{
                    fontWeight: 700, py: 1.75, px: 3, fontSize: '0.9rem',
                    borderRadius: '6px', borderColor: 'divider', color: 'text.primary',
                    '&:hover': { borderColor: 'text.primary' },
                  }}
                >
                  Browse All Mars Series
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        {/* Similar series */}
        {similarSeries.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
                  {series.category}
                </Typography>
                <Typography variant="h4" fontWeight={800} lineHeight={1}>
                  Similar Series
                </Typography>
              </Box>
              <Button
                variant="text"
                onClick={() => router.push('/valves/mars-valves')}
                sx={{ fontWeight: 700, fontSize: '0.8rem', color: 'primary.main', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
              >
                VIEW ALL →
              </Button>
            </Box>
            <Grid container spacing={3}>
              {similarSeries.map(s => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    onClick={() => router.push(`/valves/mars-valves/${s.slug}`)}
                    sx={{
                      cursor: 'pointer', border: `1px solid ${theme.palette.divider}`,
                      borderRadius: '6px', overflow: 'hidden', bgcolor: 'background.paper',
                      transition: 'all 0.2s ease',
                      '&:hover': { borderColor: theme.palette.primary.main, boxShadow: `0 4px 16px ${alpha(theme.palette.common.black, 0.08)}` },
                    }}
                  >
                    <Box sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140, p: 2 }}>
                      <Box component="img" src={s.imageUrl} alt={s.name} sx={{ maxHeight: 110, maxWidth: '100%', objectFit: 'contain' }} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="caption" fontWeight={700} color="primary" sx={{ display: 'block', letterSpacing: 1, mb: 0.5 }}>
                        SERIES {s.seriesCode}
                      </Typography>
                      <Typography variant="body2" fontWeight={700} mb={0.5}>{s.shortName}</Typography>
                      <Typography variant="caption" color="text.secondary">{s.sizeRange} · {s.pressureRating}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfqProduct} />
    </>
  )
}