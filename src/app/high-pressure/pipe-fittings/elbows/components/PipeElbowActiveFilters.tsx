import { Stack, Chip, Typography } from '@mui/material'
import { type PipeElbowFilters } from '../hooks/pipeFittingsElbowData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: PipeElbowFilters
  setFilters: React.Dispatch<React.SetStateAction<PipeElbowFilters>>
}

export function PipeElbowActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof PipeElbowFilters; label: string; value: string }[] = []

  filters.fittingTypes.forEach(v => chips.push({ key: 'fittingTypes', label: v, value: v }))
  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.p1Threads.forEach(v => chips.push({ key: 'p1Threads', label: `P1: ${v}`, value: v }))
  filters.p1Sizes.forEach(v => chips.push({ key: 'p1Sizes', label: `P1 Size: ${v}`, value: v }))
  filters.p2Threads.forEach(v => chips.push({ key: 'p2Threads', label: `P2: ${v}`, value: v }))
  filters.p2Sizes.forEach(v => chips.push({ key: 'p2Sizes', label: `P2 Size: ${v}`, value: v }))

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