// components/S301EWaferLeverActiveFilters.tsx
import { Stack, Chip, Typography } from '@mui/material';
import { type S301EWaferLeverFilters } from '../hooks/s301eWaferLeverData';

const BRAND_GREEN = '#61D649';

interface Props {
  filters: S301EWaferLeverFilters;
  setFilters: React.Dispatch<React.SetStateAction<S301EWaferLeverFilters>>;
}

export function S301EWaferLeverActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof S301EWaferLeverFilters; label: string; value: string }[] = [];

  filters.sizes.forEach(v => chips.push({ key: 'sizes', label: `Size: ${v}`, value: v }));
  filters.liners.forEach(v => chips.push({ key: 'liners', label: `Liner: ${v}`, value: v }));

  if (chips.length === 0) return null;

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          onDelete={() => setFilters(prev => ({
            ...prev,
            [f.key]: (prev[f.key] as string[]).filter(v => v !== f.value),
          }))}
        />
      ))}
    </Stack>
  );
}