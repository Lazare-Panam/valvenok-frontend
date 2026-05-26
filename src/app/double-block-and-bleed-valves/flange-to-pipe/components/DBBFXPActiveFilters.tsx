'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { type DBBValveFilters } from './types'

interface Props {
  filters: DBBValveFilters
  setFilters: React.Dispatch<React.SetStateAction<DBBValveFilters>>
}

export function DBBFXPActiveFilters({ filters, setFilters }: Props) {
  const theme = useTheme()
  const chips: { key: keyof DBBValveFilters; label: string; value: string }[] = []

  filters.constructionTypes.forEach(v => chips.push({ key: 'constructionTypes', label: `Build: ${v}`, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: `Config: ${v}`, value: v }))
  filters.boreSizes.forEach(v => chips.push({ key: 'boreSizes', label: `Bore: ${v}`, value: v }))
  filters.inletSizes.forEach(v => chips.push({ key: 'inletSizes', label: `Inlet: ${v}`, value: v }))
  filters.pressureClasses.forEach(v => chips.push({ key: 'pressureClasses', label: `Class: ${v}`, value: v }))
  filters.flangeTypes.forEach(v => chips.push({ key: 'flangeTypes', label: `Flange: ${v}`, value: v }))
  filters.outlets.forEach(v => chips.push({ key: 'outlets', label: `Outlet: ${v}`, value: v }))
  filters.vents.forEach(v => chips.push({ key: 'vents', label: `Vent: ${v}`, value: v }))
  filters.sealMaterials.forEach(v => chips.push({ key: 'sealMaterials', label: `Seal: ${v}`, value: v }))
  filters.seatMaterials.forEach(v => chips.push({ key: 'seatMaterials', label: `Seat: ${v}`, value: v }))
  filters.options.forEach(v => chips.push({ key: 'options', label: v, value: v }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => setFilters(prev => ({ ...prev, [f.key]: prev[f.key].filter((v: string) => v !== f.value) }))}
        />
      ))}
    </Stack>
  )
}