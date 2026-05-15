'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  type AdapterFilters,
  FITTING_TYPE_LABELS,
  THREAD_TYPE_LABELS,
  TUBE_OD_UNIT_LABELS,
} from "../hooks/adapterTypes"

interface Props {
  filters: AdapterFilters
  setFilters: React.Dispatch<React.SetStateAction<AdapterFilters>>
}

export function AdapterActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.fittingTypes.forEach(v => chips.push({
    label: FITTING_TYPE_LABELS[v] ?? v,
    onDelete: () => setFilters(prev => ({ ...prev, fittingTypes: prev.fittingTypes.filter(x => x !== v) }))
  }))
  filters.tubeODUnits.forEach(v => chips.push({
    label: TUBE_OD_UNIT_LABELS[v] ?? v,
    onDelete: () => setFilters(prev => ({ ...prev, tubeODUnits: prev.tubeODUnits.filter(x => x !== v), tubeODs: [] }))
  }))
  filters.tubeODs.forEach(v => chips.push({
    label: `OD: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, tubeODs: prev.tubeODs.filter(x => x !== v) }))
  }))
  filters.threadTypes.forEach(v => chips.push({
    label: THREAD_TYPE_LABELS[v] ?? v,
    onDelete: () => setFilters(prev => ({ ...prev, threadTypes: prev.threadTypes.filter(x => x !== v) }))
  }))
  filters.threadSizes.forEach(v => chips.push({
    label: `Thread: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, threadSizes: prev.threadSizes.filter(x => x !== v) }))
  }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}