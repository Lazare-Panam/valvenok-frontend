'use client'

import { useRouter } from 'next/navigation'
import {
  Box, Container, Typography, Button, Divider, Chip, Card, CardContent,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { alpha } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const GREEN = '#61D649'
const GREEN_DARK = '#2d8a1e'

export interface DetailSpec {
  label: string
  value: string
}

export interface SimilarItem {
  id: string
  title: string
  subtitle?: string
  thumbnail?: string
  href: string
}

export interface ProductDetailLayoutProps {
  heading: string
  eyebrow?: string
  thumbnail?: string
  description?: string
  specs: DetailSpec[]
  benefits?: string[]
  primaryLabel: string
  onPrimary: () => void
  /** Optional outlined secondary action (e.g. "Browse all models") */
  secondaryLabel?: string
  onSecondary?: () => void
  backHref: string
  backLabel: string
  similar?: SimilarItem[]
  similarHeading?: string
  accent?: string
  accentHover?: string
  /** Lets the page mount a modal (e.g. RFQModal) inside the layout */
  children?: React.ReactNode
}

function Thumb({ src, alt, height }: { src?: string; alt: string; height: number }) {
  if (src) {
    return <Box component="img" src={src} alt={alt} sx={{ maxHeight: height, maxWidth: '100%', objectFit: 'contain' }} />
  }
  return (
    <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 1, color: alpha('#000', 0.22), textAlign: 'center' }}>
      {alt}
    </Typography>
  )
}

export default function ProductDetailLayout({
  heading, eyebrow, thumbnail, description, specs, benefits = [],
  primaryLabel, onPrimary, secondaryLabel, onSecondary,
  backHref, backLabel, similar = [], similarHeading = 'Similar Products',
  accent = GREEN, accentHover = '#50c23a', children,
}: ProductDetailLayoutProps) {
  const router = useRouter()

  return (
    <>
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', pb: 12 }}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(backHref)}
            sx={{ fontWeight: 700, mb: 3, color: 'text.secondary' }}>
            {backLabel}
          </Button>

          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 380, p: 4, position: 'sticky', top: 24 }}>
                <Thumb src={thumbnail} alt={heading} height={320} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              {eyebrow && (
                <Chip label={eyebrow} size="small"
                  sx={{ fontWeight: 800, fontSize: '0.68rem', mb: 1.5, bgcolor: alpha(accent, 0.12), color: GREEN_DARK }} />
              )}

              <Typography variant="h1" sx={{ fontWeight: 800, lineHeight: 1, mb: 1, color: GREEN_DARK }}>
                {heading}
              </Typography>

              {description && (
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                  {description}
                </Typography>
              )}

              <Divider sx={{ mb: 3 }} />

              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}>
                Technical Specifications
              </Typography>
              <Box sx={{ border: '1px solid', borderColor: 'divider', mb: 4 }}>
                {specs.map((spec, i) => (
                  <Box key={spec.label} sx={{ display: 'flex', borderBottom: i < specs.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                    <Box sx={{ width: '45%', px: 2, py: 1.5, bgcolor: alpha(accent, 0.05), borderRight: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>{spec.label}</Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{spec.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {benefits.length > 0 && (
                <>
                  <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}>
                    Key Benefits
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                    {benefits.map((b) => (
                      <Box key={b} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircleOutlineIcon sx={{ color: accent, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{b}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button size="large" onClick={onPrimary}
                  sx={{ borderRadius: '6px', fontWeight: 800, py: 1.5, px: 4, fontSize: '1rem', textTransform: 'capitalize', bgcolor: accent, color: '#fff', boxShadow: 'none', border: `1px solid ${accent}`, '&:hover': { bgcolor: accentHover, boxShadow: 'none' } }}>
                  {primaryLabel}
                </Button>
                {secondaryLabel && onSecondary && (
                  <Button size="large" onClick={onSecondary}
                    sx={{ borderRadius: '6px', fontWeight: 700, py: 1.5, px: 3, fontSize: '0.9rem', textTransform: 'capitalize', border: '1px solid', borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'text.primary' } }}>
                    {secondaryLabel}
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {similar.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1, mb: 4 }}>{similarHeading}</Typography>
            <Grid container spacing={3}>
              {similar.map((s) => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card elevation={0} onClick={() => router.push(s.href)}
                    sx={{ borderRadius: 0, border: '1px solid', borderColor: 'divider', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: accent, boxShadow: `0 4px 16px ${alpha('#000', 0.08)}` } }}>
                    <Box sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140, p: 2 }}>
                      <Thumb src={s.thumbnail} alt={s.title} height={110} />
                    </Box>
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 800, lineHeight: 1.2, mb: 0.5 }}>{s.title}</Typography>
                      {s.subtitle && <Typography variant="caption" sx={{ color: 'text.secondary' }}>{s.subtitle}</Typography>}
                      <Typography variant="caption" sx={{ display: 'block', mt: 1, fontWeight: 700, color: GREEN_DARK }}>View Details →</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>
      {children}
    </>
  )
}
