import { Stack, Chip, Typography } from '@mui/material'
import { TGAFilterParams } from '@/src/api/pumpsApi'

interface Props {
  filters: TGAFilterParams
  setFilters: (fn: (prev: TGAFilterParams) => TGAFilterParams) => void
}

export function TGAActiveFilters({ filters, setFilters }: Props) {
  const active: { key: string, label: string, value: any }[] = []

  filters.deliverySizeMm?.forEach(v => active.push({ key: 'deliverySizeMm', label: `Delivery: ${v}mm`, value: v }))
  filters.maxSolidSizeMm?.forEach(v => active.push({ key: 'maxSolidSizeMm', label: `Max Solid: ${v}mm`, value: v }))
  filters.outletFlange?.forEach(v => active.push({ key: 'outletFlange', label: `Flange: ${v}`, value: v }))
  if (filters.minP2Kw) active.push({ key: 'minP2Kw', label: `Min P2: ${filters.minP2Kw}kW`, value: filters.minP2Kw })
  if (filters.maxP2Kw) active.push({ key: 'maxP2Kw', label: `Max P2: ${filters.maxP2Kw}kW`, value: filters.maxP2Kw })
  if (filters.inbuiltTop) active.push({ key: 'inbuiltTop', label: 'Inbuilt Top', value: true })

  if (active.length === 0) return null

  const removeFilter = (key: string, value: any) => {
    setFilters(prev => {
      const current = prev[key as keyof TGAFilterParams]
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