'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type MarsFilters } from './types'

interface Props {
  filters: MarsFilters
  setFilters: React.Dispatch<React.SetStateAction<MarsFilters>>
}

export function MarsActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof MarsFilters; label: string; value: string }[] = []

  filters.series.forEach(v => chips.push({ key: 'series', label: `Series: ${v}`, value: v }))
  filters.categories.forEach(v => chips.push({ key: 'categories', label: `Category: ${v}`, value: v }))
  filters.portTypes.forEach(v => chips.push({ key: 'portTypes', label: v, value: v }))
  filters.endConnections.forEach(v => chips.push({ key: 'endConnections', label: `End: ${v}`, value: v }))
  filters.fireSafe.forEach(v => chips.push({ key: 'fireSafe', label: v, value: v }))
  filters.options.forEach(v => chips.push({ key: 'options', label: v, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: prev[f.key].filter((v: string) => v !== f.value) }))}
        />
      ))}
    </Stack>
  )
}