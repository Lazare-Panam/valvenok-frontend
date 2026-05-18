'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { EFittingFilters } from "../hooks/types"

interface Props {
  filters: EFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<EFittingFilters>>
}

export function EFittingsActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.fittingTypes.forEach(v => chips.push({
    label: v,
    onDelete: () => setFilters(prev => ({ ...prev, fittingTypes: prev.fittingTypes.filter(x => x !== v) })),
  }))
  filters.tubeSizes.forEach(v => chips.push({
    label: `Tube: ${v}mm`,
    onDelete: () => setFilters(prev => ({ ...prev, tubeSizes: prev.tubeSizes.filter(x => x !== v) })),
  }))
  filters.threadSizes.forEach(v => chips.push({
    label: `Thread: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, threadSizes: prev.threadSizes.filter(x => x !== v) })),
  }))

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