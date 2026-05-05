'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type NeedleValveHBFilters, BODY_MATERIAL_LABELS, END_CONNECTION_LABELS, VALVE_TYPE_LABELS, SEAT_LABELS } from '../hooks/types'

interface Props {
  filters: NeedleValveHBFilters
  setFilters: React.Dispatch<React.SetStateAction<NeedleValveHBFilters>>
}

export function HBActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof NeedleValveHBFilters; label: string; value: string }[] = []

  filters.valveTypes.forEach(v => chips.push({ key: 'valveTypes', label: VALVE_TYPE_LABELS[v] ?? v, value: v }))
  filters.seats.forEach(v => chips.push({ key: 'seats', label: SEAT_LABELS[v] ?? v, value: v }))
  filters.bodyMaterials.forEach(v => chips.push({ key: 'bodyMaterials', label: BODY_MATERIAL_LABELS[v] ?? v, value: v }))
  filters.endConnections.forEach(v => chips.push({ key: 'endConnections', label: END_CONNECTION_LABELS[v] ?? v, value: v }))
  filters.connectionSizes.forEach(v => chips.push({ key: 'connectionSizes', label: v, value: v }))
  filters.workingPressures.forEach(v => chips.push({ key: 'workingPressures', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof NeedleValveHBFilters, value: string) =>
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