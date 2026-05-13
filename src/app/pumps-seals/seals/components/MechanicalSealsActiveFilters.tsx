import { Stack, Chip, Typography } from '@mui/material'
import { SealFilters } from '../hooks/types'

interface Props {
  filters: SealFilters
  setFilters: React.Dispatch<React.SetStateAction<SealFilters>>
}

export function MechanicalSealsActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof SealFilters; label: string; value: string }[] = []

  filters.shaftSizes.forEach(v => chips.push({ key: 'shaftSizes', label: `Shaft: ${v}`, value: v }))
  filters.sealSizesMm.forEach(v => chips.push({ key: 'sealSizesMm', label: `Seal: ${v}`, value: v }))
  filters.sealSizesInch.forEach(v => chips.push({ key: 'sealSizesInch', label: `Seal: ${v}`, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof SealFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: (prev[key] as string[]).filter(v => v !== value) }))
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label}
          size="small" color="primary" variant="outlined"
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}