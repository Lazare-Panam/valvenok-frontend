import { Stack, Chip, Typography } from '@mui/material'
import { type FittingFilters } from '../hooks/hpAllFittingsData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: FittingFilters
  setFilters: React.Dispatch<React.SetStateAction<FittingFilters>>
}

export function FittingsActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof FittingFilters; label: string; value: string }[] = []

  filters.brands.forEach(v => chips.push({ key: 'brands', label: `Brand: ${v}`, value: v }))
  filters.fittingTypes.forEach(v => chips.push({ key: 'fittingTypes', label: v, value: v }))
  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.sizes.forEach(v => chips.push({ key: 'sizes', label: `Size: ${v}`, value: v }))
  filters.materials.forEach(v => chips.push({ key: 'materials', label: v, value: v }))

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
