import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface TrustPoint {
  label: string
  value: string
}

const DEFAULT_POINTS: TrustPoint[] = [
  { value: 'SS316', label: 'Material Standard' },
  { value: 'Twin Ferrule', label: 'Fitting System' },
  { value: 'NPT / BSPT / BSPP', label: 'Thread Standards' },
  { value: 'UK Based', label: 'Technical Support' },
  { value: 'Certification', label: 'Varies by Model' },
]

export default function TrustStrip({ points = DEFAULT_POINTS }: { points?: TrustPoint[] }) {
  return (
    <Box sx={{
      bgcolor: 'primary.dark',
      borderTop: '3px solid',
      borderColor: 'primary.main',
      py: 3.5,
    }}>
      <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, md: 5 },
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2.5,
      }}>
        {points.map((point, i) => (
          <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0.5 }}>
            <Typography fontWeight={800} fontSize="0.95rem" color="#fff" letterSpacing="0.02em">
              {point.value}
            </Typography>
            <Typography fontSize="0.72rem" fontWeight={500} letterSpacing="0.08em" sx={{
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
            }}>
              {point.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}