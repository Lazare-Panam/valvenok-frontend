import { Stack, Chip, Typography } from '@mui/material'
import { TGTFilterParams } from '@/src/api/pumpsApi'

interface Props {
  filters: TGTFilterParams
  setFilters: (fn: (prev: TGTFilterParams) => TGTFilterParams) => void
}

export function TGTActiveFilters({ filters, setFilters }: Props) {
  const active: { key: string; label: string; value: any }[] = []

  filters.voltage?.forEach(v => active.push({ key: 'voltage', label: `${v}V`, value: v }))
  filters.deliverySizeMm?.forEach(v => active.push({ key: 'deliverySizeMm', label: `Delivery: ${v}mm`, value: v }))
  filters.maxSolidSizeMm?.forEach(v => active.push({ key: 'maxSolidSizeMm', label: `Max Solid: ${v}mm`, value: v }))
  filters.autoCouplingCode?.forEach(v => active.push({ key: 'autoCouplingCode', label: `Coupling: ${v}`, value: v }))
  filters.outletFlangeType?.forEach(v => active.push({ key: 'outletFlangeType', label: `Flange: ${v}`, value: v }))
  if (filters.minP2Kw) active.push({ key: 'minP2Kw', label: `Min P2: ${filters.minP2Kw}kW`, value: filters.minP2Kw })
  if (filters.maxP2Kw) active.push({ key: 'maxP2Kw', label: `Max P2: ${filters.maxP2Kw}kW`, value: filters.maxP2Kw })
  if (filters.inbuiltTop) active.push({ key: 'inbuiltTop', label: 'Inbuilt TOP', value: true })

  if (active.length === 0) return null

  const removeFilter = (key: string, value: any) => {
    setFilters(prev => {
      const current = prev[key as keyof TGTFilterParams]
      if (Array.isArray(current)) {
        const updated = current.filter(v => v !== value)
        return { ...prev, [key]: updated.length > 0 ? updated : undefined }
      }
      return { ...prev, [key]: undefined }
    })
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>
        ACTIVE FILTERS:
      </Typography>
      {active.map((f, i) => (
        <Chip
          key={`${f.key}-${f.value}-${i}`}
          label={f.label}
          size="small"
          color="primary"
          variant="outlined"
          onDelete={() => removeFilter(f.key, f.value)}
        />
      ))}
    </Stack>
  )
}