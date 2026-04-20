'use client'

import {
  Box, Container, Typography, Card, CardContent,
  CardMedia, CardActionArea, Stack, Chip
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'

const SUBMERSIBLE_SERIES = [
  {
    id: 'borehole',
    name: 'Borehole Submersible',
    series: 'TS / TN / TL',
    image: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776683042/4-inch-ss-in_gxgpc1.png',
    description: 'Full stainless steel borehole submersible pumps for deep well water supply. Available in 4", 6", 8" and 10" diameters with AISI 304, 316 and 904L construction.',
    specs: ['4" – 10"', '0.4 – 215 m³/hr', 'Up to 870m', '0.37 – 220 kW'],
    href: '/submersible/borewell'
  },
]



function SeriesCard({ series }: { series: typeof SUBMERSIBLE_SERIES[0] }) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Card elevation={0} sx={{
      border: `1px solid ${theme.palette.divider}`, borderRadius: 2,
      '&:hover': {
        borderColor: 'primary.main',
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.12)}`
      },
      transition: 'all 0.2s'
    }}>
      <CardActionArea onClick={() => router.push(series.href)}>
        <CardMedia
          component="img"
          height={200}
          image={series.image}
          alt={series.name}
          sx={{ objectFit: 'contain', p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02) }}
        />
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
            <Typography variant="h6" fontWeight={800}>{series.name}</Typography>
            <Chip label={series.series} size="small" color="primary" variant="outlined" />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            {series.description}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75}>
            {series.specs.map(spec => (
              <Chip key={spec} label={spec} size="small"
                sx={{ fontSize: '0.7rem', bgcolor: alpha(theme.palette.primary.main, 0.06) }} />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default function SubmersiblePumpsPage() {
  const theme = useTheme()

  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        bgcolor: alpha(theme.palette.primary.main, 0.04),
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight={800}
                sx={{ mb: 2, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Stainless Steel{' '}
                <Box component="span" color="primary.main">Submersible Pumps</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 3, lineHeight: 1.8 }}>
                Engineered for borehole and deep well applications, our TS/TN/TL series submersible pumps
                are manufactured from premium stainless steel — AISI 304, 316 and 904L — delivering
                exceptional corrosion resistance, high hydraulic efficiency, and reliable performance
                across demanding water supply conditions.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {['ISO 9001 Certified', '50 Hz', 'Up to 870m Head', 'Up to 215 m³/hr', 'AISI 304 / 316 / 904L'].map(tag => (
                  <Chip key={tag} label={tag} size="small"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.08), fontWeight: 600 }} />
                ))}
              </Stack>
            </Box>
            <Box sx={{
              width: { xs: '100%', md: 420 }, flexShrink: 0,
              display: 'flex', justifyContent: 'center', gap: 2
            }}>
              {[
                { src: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776683042/4-inch-ss-in_gxgpc1.png', alt: '4 inch' },
                { src: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776683238/6-Inch-Pump-in_kqf2rs.png', alt: '6 inch' },
                { src: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1776686531/ef8f83a7-6d06-4dd5-8436-80fd0a8262b2.png', alt: '8 inch' },
              ].map(img => (
                <Box key={img.alt} component="img" src={img.src} alt={img.alt}
                  sx={{ height: 260, objectFit: 'contain' }} />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Series Cards */}
      <Box sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>Available Series</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Select a series to view full technical specifications and models.
          </Typography>
          <Grid container spacing={3}>
            {SUBMERSIBLE_SERIES.map(s => (
              <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SeriesCard series={s} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


    
    </Box>
  )
}