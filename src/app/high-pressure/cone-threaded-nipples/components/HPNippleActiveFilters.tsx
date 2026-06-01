import { Stack, Chip, Typography } from '@mui/material'
import { type HPNippleFilters } from '../hooks/hpNippleData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HPNippleFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNippleFilters>>
}

export function HPNippleActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof HPNippleFilters; label: string; value: string }[] = []

  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.connectionTypes.forEach(v => chips.push({ key: 'connectionTypes', label: v, value: v }))
  filters.tubeODs.forEach(v => chips.push({ key: 'tubeODs', label: `OD: ${v}`, value: v }))
  filters.lengths.forEach(v => chips.push({ key: 'lengths', label: `L: ${v}`, value: v }))

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