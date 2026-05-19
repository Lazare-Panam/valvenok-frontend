'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type NeedleValveHPFilters, END_CONNECTION_LABELS, CONFIGURATION_LABELS } from '../hooks/types'

interface Props {
  filters: NeedleValveHPFilters
  setFilters: React.Dispatch<React.SetStateAction<NeedleValveHPFilters>>
}

export function HPActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof NeedleValveHPFilters; label: string; value: string }[] = []

  filters.threadTypes.forEach(v => chips.push({ key: 'threadTypes', label: v, value: v }))
  filters.endConnections.forEach(v => chips.push({ key: 'endConnections', label: END_CONNECTION_LABELS[v] ?? v, value: v }))
  filters.connectionSizes.forEach(v => chips.push({ key: 'connectionSizes', label: v, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: CONFIGURATION_LABELS[v] ?? v, value: v }))
  filters.workingPressures.forEach(v => chips.push({ key: 'workingPressures', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof NeedleValveHPFilters, value: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}