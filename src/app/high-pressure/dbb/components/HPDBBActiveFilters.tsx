import { Stack, Chip, Typography } from '@mui/material'
import { type HPDBBFilters } from '../hooks/hpDBBData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HPDBBFilters
  setFilters: React.Dispatch<React.SetStateAction<HPDBBFilters>>
}

export function HPDBBActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof HPDBBFilters; label: string; value: string }[] = []

  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: v, value: v }))
  filters.inletOutletSizes.forEach(v => chips.push({ key: 'inletOutletSizes', label: `Size: ${v}`, value: v }))
  filters.inletOutletTypes.forEach(v => chips.push({ key: 'inletOutletTypes', label: v, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: prev[f.key].filter((v: string) => v !== f.value) }))}
        />
      ))}
    </Stack>
  )
}