'use client'
import { Stack, Chip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { type TubingFilters, TUBING_TYPE_LABELS, COLOR_LABELS } from "./TubingSidebar"

interface Props {
  filters: TubingFilters
  setFilters: React.Dispatch<React.SetStateAction<TubingFilters>>
}

export function TubingActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { label: string; onDelete: () => void }[] = []

  filters.tubingTypes.forEach(v => chips.push({
    label: TUBING_TYPE_LABELS[v] ?? v,
    onDelete: () => setFilters(prev => ({ ...prev, tubingTypes: prev.tubingTypes.filter(x => x !== v) }))
  }))
  filters.colors.forEach(v => chips.push({
    label: COLOR_LABELS[v] ?? v,
    onDelete: () => setFilters(prev => ({ ...prev, colors: prev.colors.filter(x => x !== v) }))
  }))
  filters.rollLengths.forEach(v => chips.push({
    label: `${v}m roll`,
    onDelete: () => setFilters(prev => ({ ...prev, rollLengths: prev.rollLengths.filter(x => x !== v) }))
  }))
  if (filters.hasConnector !== null) chips.push({
    label: filters.hasConnector ? "With Connector" : "No Connector",
    onDelete: () => setFilters(prev => ({ ...prev, hasConnector: null }))
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