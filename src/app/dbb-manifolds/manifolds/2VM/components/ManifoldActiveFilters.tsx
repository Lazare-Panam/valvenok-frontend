import { Stack, Chip, Typography } from "@mui/material"
import { type ManifoldFilters, MATERIAL_LABELS } from "../hooks/types"

const BRAND_GREEN = "#61D649"

interface Props {
  filters: ManifoldFilters
  setFilters: React.Dispatch<React.SetStateAction<ManifoldFilters>>
}

export function ManifoldActiveFilters({ filters, setFilters }: Props) {
  const chips: { label: string; onDelete: () => void }[] = []

  filters.materials.forEach(v => chips.push({ label: `Material: ${MATERIAL_LABELS[v] ?? v}`, onDelete: () => setFilters(prev => ({ ...prev, materials: prev.materials.filter(x => x !== v) })) }))
  filters.connectionSizes.forEach(v => chips.push({ label: `Size: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, connectionSizes: prev.connectionSizes.filter(x => x !== v) })) }))
  filters.connectionTypes.forEach(v => chips.push({ label: `Type: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, connectionTypes: prev.connectionTypes.filter(x => x !== v) })) }))
  filters.mountings.forEach(v => chips.push({ label: `Mount: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, mountings: prev.mountings.filter(x => x !== v) })) }))
  filters.configurations.forEach(v => chips.push({ label: `Config: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, configurations: prev.configurations.filter(x => x !== v) })) }))
  filters.maxPressures.forEach(v => chips.push({ label: `Pressure: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, maxPressures: prev.maxPressures.filter(x => x !== v) })) }))
  filters.specialServices.forEach(v => chips.push({ label: v, onDelete: () => setFilters(prev => ({ ...prev, specialServices: prev.specialServices.filter(x => x !== v) })) }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}