// src/app/mechanical-seals/components/SealFamilyGrid.tsx
import { Box, Typography, Stack } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { SealFamily } from '../utils/sealFamily'

interface Props {
  families: SealFamily[]
  onSelect: (family: SealFamily) => void
}

export function SealFamilyGrid({ families, onSelect }: Props) {
  const theme = useTheme()

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      },
      gap: 2.5,
    }}>
      {families.map(f => (
        <Box
          key={f.code}
          onClick={() => onSelect(f)}
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: '10px',
            bgcolor: 'background.paper',
            cursor: 'pointer',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: theme.palette.primary.main,
              transform: 'translateY(-2px)',
              boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
            },
          }}
        >
          {/* Image */}
          <Box sx={{
            height: 160,
            bgcolor: alpha(theme.palette.primary.main, 0.03),
            borderBottom: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}>
            <Box
              component="img"
              src={f.sampleImage}
              alt={f.code}
              sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </Box>

          {/* Body */}
          <Box sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h5"
              fontWeight={800}
              color="primary"
              sx={{ fontFamily: 'monospace', letterSpacing: 0.5, mb: 1.5 }}
            >
              {f.code}
            </Typography>

            <Stack spacing={1} sx={{ flex: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.disabled" fontWeight={700}>VARIANTS</Typography>
                <Typography variant="caption" fontWeight={700}>{f.variantCount}</Typography>
              </Stack>
              {f.sizeRange && (
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="text.disabled" fontWeight={700}>SIZE RANGE</Typography>
                  <Typography variant="caption" fontWeight={700}>{f.sizeRange}</Typography>
                </Stack>
              )}
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.disabled" fontWeight={700}>PRICE</Typography>
                <Typography variant="caption" fontWeight={700} sx={{ fontFamily: 'monospace', color: theme.palette.primary.dark }}>
                  £{f.minPrice.toFixed(2)} – £{f.maxPrice.toFixed(2)}
                </Typography>
              </Stack>
            </Stack>

            <Box sx={{
              mt: 2, pt: 1.5,
              borderTop: `1px solid ${theme.palette.divider}`,
              textAlign: 'center',
            }}>
              <Typography variant="caption" fontWeight={700} color="primary" sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                View variants →
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}