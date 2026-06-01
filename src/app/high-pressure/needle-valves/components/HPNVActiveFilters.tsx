import { Stack, Chip, Typography } from '@mui/material'
import { type HPNeedleValveFilters } from '../hooks/hpNeedleValveData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HPNeedleValveFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNeedleValveFilters>>
}

export function HPNVActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof HPNeedleValveFilters; label: string; value: string }[] = []

  filters.series.forEach(v => chips.push({ key: 'series', label: `Series: ${v}`, value: v }))
  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.connectionSizes.forEach(v => chips.push({ key: 'connectionSizes', label: `Size: ${v}`, value: v }))
  filters.connectionTypes.forEach(v => chips.push({ key: 'connectionTypes', label: v, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: v, value: v }))

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