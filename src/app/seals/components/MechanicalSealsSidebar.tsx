import { useState } from 'react'
import {
  Box, Stack, Typography, Chip, Divider, Button,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Skeleton
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SealFilters, EMPTY_SEAL_FILTERS } from '../hooks/types'
import { MechanicalSealFilterOptions } from '@/src/api/sealApi'

interface Props {
  filters: SealFilters
  setFilters: React.Dispatch<React.SetStateAction<SealFilters>>
  filterOptions?: MechanicalSealFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" color="primary" sx={{ height: 16, fontSize: '0.65rem' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox<T extends string>({
  options, selected, onChange, loading
}: {
  options: T[]
  selected: T[]
  onChange: (val: T) => void
  loading?: boolean
}) {
  if (loading) return <Skeleton height={60} />
  if (options.length === 0) return (
    <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options available</Typography>
  )
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={
            <Checkbox size="small"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
            />
          }
          label={<Typography variant="body2">{opt}</Typography>}
        />
      ))}
    </>
  )
}

export function MechanicalSealsSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const [sizeUnit, setSizeUnit] = useState<'mm' | 'inch'>('mm')

  const toggle = (key: keyof SealFilters, val: string) => {
    setFilters(prev => {
      const current = prev[key] as string[]
      const updated = current.includes(val)
        ? current.filter(v => v !== val)
        : [...current, val]
      return { ...prev, [key]: updated }
    })
  }

  return (
    <Box sx={{
      width: 280, minHeight: '100vh', p: 3,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      alignSelf: 'flex-start', maxHeight: '100vh',
      overflowY: 'auto', overflowX: 'hidden',
      flexShrink: 0, boxSizing: 'border-box',
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FIND YOUR SEAL
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" color="primary" fontWeight={700}
            sx={{ cursor: 'pointer' }} onClick={() => setFilters(EMPTY_SEAL_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="SHAFT SIZE" count={filters.shaftSizes.length || undefined}>
        <MultiCheckbox
          options={filterOptions?.shaftSizes ?? []}
          selected={filters.shaftSizes}
          onChange={v => toggle('shaftSizes', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup
        title="SEAL SIZE"
        count={(filters.sealSizesMm.length + filters.sealSizesInch.length) || undefined}
      >
        <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5 }}>
          <Button
            size="small"
            variant={sizeUnit === 'mm' ? 'contained' : 'outlined'}
            onClick={() => setSizeUnit('mm')}
            sx={{ fontSize: '0.65rem', py: 0.25, px: 1.5, minWidth: 0, borderRadius: '4px', textTransform: 'none' }}
          >
            MM
          </Button>
          <Button
            size="small"
            variant={sizeUnit === 'inch' ? 'contained' : 'outlined'}
            onClick={() => setSizeUnit('inch')}
            sx={{ fontSize: '0.65rem', py: 0.25, px: 1.5, minWidth: 0, borderRadius: '4px', textTransform: 'none' }}
          >
            INCH
          </Button>
        </Box>

        <MultiCheckbox
          options={sizeUnit === 'mm'
            ? (filterOptions?.sealSizesMm ?? [])
            : (filterOptions?.sealSizesInch ?? [])}
          selected={sizeUnit === 'mm' ? filters.sealSizesMm : filters.sealSizesInch}
          onChange={v => toggle(sizeUnit === 'mm' ? 'sealSizesMm' : 'sealSizesInch', v)}
          loading={filtersLoading}
        />
      </FilterGroup>
    </Box>
  )
}