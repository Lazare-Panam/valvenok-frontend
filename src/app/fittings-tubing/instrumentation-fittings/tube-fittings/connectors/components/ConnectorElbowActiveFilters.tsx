'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  type ConnectorElbowFilters,
  FITTING_TYPE_LABELS,
  THREAD_TYPE_LABELS,
} from "../hooks/connectorElbowTypes"

interface Props {
  filters: ConnectorElbowFilters
  setFilters: React.Dispatch<React.SetStateAction<ConnectorElbowFilters>>
}

export function ConnectorElbowActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.fittingTypes.forEach(v => chips.push({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, fittingTypes: prev.fittingTypes.filter(x => x !== v) })) }))
  filters.tubeODUnits.forEach(v => chips.push({ label: v, onDelete: () => setFilters(prev => ({ ...prev, tubeODUnits: prev.tubeODUnits.filter(x => x !== v), tubeODs: [] })) }))
  filters.tubeODs.forEach(v => chips.push({ label: `OD: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, tubeODs: prev.tubeODs.filter(x => x !== v) })) }))
  filters.threadTypes.forEach(v => chips.push({ label: THREAD_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, threadTypes: prev.threadTypes.filter(x => x !== v) })) }))
  filters.threadDimensions.forEach(v => chips.push({ label: `Thread: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, threadDimensions: prev.threadDimensions.filter(x => x !== v) })) }))
  if (filters.isPositionable !== null) chips.push({ label: filters.isPositionable ? "Positionable" : "Standard", onDelete: () => setFilters(prev => ({ ...prev, isPositionable: null })) })
  if (filters.hasORingSeal !== null) chips.push({ label: filters.hasORingSeal ? "With O-Ring" : "No O-Ring", onDelete: () => setFilters(prev => ({ ...prev, hasORingSeal: null })) })

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