'use client'
import { Stack, Chip, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export interface ActiveFilterChip {
  /** Identifier for the filter group, e.g. 'fittingTypes', 'shaftSizes' */
  key: string
  /** Display label, already humanized by the caller */
  label: string
  /** Raw value being filtered on */
  value: string
}

interface Props {
  chips: ActiveFilterChip[]
  onRemove: (key: string, value: string) => void
  /** Optional label override — defaults to "ACTIVE FILTERS:" */
  title?: string
}

export function ActiveFilters({ chips, onRemove, title = 'ACTIVE FILTERS:' }: Props) {
  const theme = useTheme()
  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>{title}</Typography>
      {chips.map((f, i) => (
        <Chip
          key={`${f.key}-${f.value}-${i}`}
          label={f.label}
          size="small"
          variant="outlined"
          sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
          onDelete={() => onRemove(f.key, f.value)}
        />
      ))}
    </Stack>
  )
}