'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { type SDNUCylinderFilters } from "../hooks/types"

interface Props {
  filters: SDNUCylinderFilters
  setFilters: React.Dispatch<React.SetStateAction<SDNUCylinderFilters>>
}

export function SDNUActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.boreSizes.forEach(v => chips.push({
    label: `Bore: ${v}mm`,
    onDelete: () => setFilters(prev => ({ ...prev, boreSizes: prev.boreSizes.filter(x => x !== v) }))
  }))
  filters.strokes.forEach(v => chips.push({
    label: `Stroke: ${v}mm`,
    onDelete: () => setFilters(prev => ({ ...prev, strokes: prev.strokes.filter(x => x !== v) }))
  }))
  if (filters.cushion !== null) chips.push({
    label: filters.cushion ? "With Cushion" : "Standard",
    onDelete: () => setFilters(prev => ({ ...prev, cushion: null }))
  })

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