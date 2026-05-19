'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { type PCVFilters, INLET_OUTLET_LABELS, MATERIAL_LABELS } from "./PCVSidebar"

interface Props {
  filters: PCVFilters
  setFilters: React.Dispatch<React.SetStateAction<PCVFilters>>
}

export function PCVActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.materials.forEach(v => chips.push({ label: MATERIAL_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, materials: prev.materials.filter(x => x !== v) })) }))
  filters.inlets.forEach(v => chips.push({ label: `Inlet: ${INLET_OUTLET_LABELS[v] ?? v}`, onDelete: () => setFilters(prev => ({ ...prev, inlets: prev.inlets.filter(x => x !== v) })) }))
  filters.inletTubeODs.forEach(v => chips.push({ label: `Inlet Size: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, inletTubeODs: prev.inletTubeODs.filter(x => x !== v) })) }))
  filters.outlets.forEach(v => chips.push({ label: `Outlet: ${INLET_OUTLET_LABELS[v] ?? v}`, onDelete: () => setFilters(prev => ({ ...prev, outlets: prev.outlets.filter(x => x !== v) })) }))
  filters.outletTubeODs.forEach(v => chips.push({ label: `Outlet Size: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, outletTubeODs: prev.outletTubeODs.filter(x => x !== v) })) }))

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