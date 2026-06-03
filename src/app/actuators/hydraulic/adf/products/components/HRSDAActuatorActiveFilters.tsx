import { Stack, Chip, Typography } from '@mui/material'
import { type HRSDAFilters } from '../hooks/hrsdaData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HRSDAFilters
  setFilters: React.Dispatch<React.SetStateAction<HRSDAFilters>>
}

export function HRSDAActuatorActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof HRSDAFilters; label: string; value: string }[] = []

  filters.series.forEach(v => chips.push({ key: 'series', label: `Series: ${v}`, value: v }))
  filters.pressures.forEach(v => chips.push({ key: 'pressures', label: v, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({
            ...prev,
            [f.key]: (prev[f.key] as string[]).filter(v => v !== f.value),
          }))}
        />
      ))}
    </Stack>
  )
}