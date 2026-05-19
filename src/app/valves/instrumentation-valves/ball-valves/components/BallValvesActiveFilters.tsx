'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type BallValveFilters, SERIES_LABELS, BODY_MATERIAL_LABELS } from './types'

interface Props {
  filters: BallValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BallValveFilters>>
}

export function BallValveActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof BallValveFilters; label: string; value: string }[] = []

  filters.series.forEach(v => chips.push({ key: 'series', label: SERIES_LABELS[v] ?? v, value: v }))
  filters.bodyMaterials.forEach(v => chips.push({ key: 'bodyMaterials', label: BODY_MATERIAL_LABELS[v] ?? v, value: v }))
  filters.threadTypes.forEach(v => chips.push({ key: 'threadTypes', label: v, value: v }))
  filters.endConnectionTypes.forEach(v => chips.push({ key: 'endConnectionTypes', label: v, value: v }))
  filters.connectionSizes.forEach(v => chips.push({ key: 'connectionSizes', label: v, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: v, value: v }))
  filters.seatMaterials.forEach(v => chips.push({ key: 'seatMaterials', label: `Seat: ${v}`, value: v }))
  filters.handles.forEach(v => chips.push({ key: 'handles', label: `Handle: ${v}`, value: v }))
  filters.pressureRatings.forEach(v => chips.push({ key: 'pressureRatings', label: v, value: v }))
  filters.options.forEach(v => chips.push({ key: 'options', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof BallValveFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label}
          size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}