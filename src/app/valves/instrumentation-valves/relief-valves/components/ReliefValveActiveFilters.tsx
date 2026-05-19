'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  type ReliefValveFilters,
  SERIES_LABELS, BODY_MATERIAL_LABELS, CONNECTION_TYPE_LABELS,
  THREAD_TYPE_LABELS, SEAL_MATERIAL_LABELS, SPRING_LABELS, CONNECTION_SIZE_LABELS
} from "./ReliefValveSidebar"

interface Props {
  filters: ReliefValveFilters
  setFilters: React.Dispatch<React.SetStateAction<ReliefValveFilters>>
}

export function ReliefValveActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.series.forEach(v => chips.push({ label: SERIES_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, series: prev.series.filter(x => x !== v) })) }))
  filters.bodyMaterials.forEach(v => chips.push({ label: BODY_MATERIAL_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, bodyMaterials: prev.bodyMaterials.filter(x => x !== v) })) }))
  filters.connectionSizes.forEach(v => chips.push({ label: CONNECTION_SIZE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, connectionSizes: prev.connectionSizes.filter(x => x !== v) })) }))
  filters.threadTypes.forEach(v => chips.push({ label: THREAD_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, threadTypes: prev.threadTypes.filter(x => x !== v) })) }))
  filters.connectionTypes.forEach(v => chips.push({ label: CONNECTION_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, connectionTypes: prev.connectionTypes.filter(x => x !== v) })) }))
  filters.springs.forEach(v => chips.push({ label: `Spring ${SPRING_LABELS[v] ?? v}`, onDelete: () => setFilters(prev => ({ ...prev, springs: prev.springs.filter(x => x !== v) })) }))
  filters.sealMaterials.forEach(v => chips.push({ label: SEAL_MATERIAL_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, sealMaterials: prev.sealMaterials.filter(x => x !== v) })) }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}