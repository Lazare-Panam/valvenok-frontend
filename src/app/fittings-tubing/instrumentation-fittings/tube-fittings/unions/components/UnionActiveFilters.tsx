'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  type UnionFilters,
  FITTING_TYPE_LABELS,
  TUBE_OD_UNIT_LABELS,
} from "../hooks/unionTypes"

interface Props {
  filters: UnionFilters
  setFilters: React.Dispatch<React.SetStateAction<UnionFilters>>
}

export function UnionActiveFilters({ filters, setFilters }: Props) {
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
  filters.tubeOD2s.forEach(v => chips.push({
    label: `OD2: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, tubeOD2s: prev.tubeOD2s.filter(x => x !== v) }))
  }))
  filters.tubeOD3s.forEach(v => chips.push({
    label: `OD3: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, tubeOD3s: prev.tubeOD3s.filter(x => x !== v) }))
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