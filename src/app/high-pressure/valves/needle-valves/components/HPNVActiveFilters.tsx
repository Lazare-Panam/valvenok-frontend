import { Box } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { type HPNeedleValveFilters } from '../hooks/hpNeedleValveData'
import { T } from '@/src/app/Landing/modern/tokens'

interface Props {
  filters: HPNeedleValveFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNeedleValveFilters>>
}

export function HPNVActiveFilters({ filters, setFilters }: Props) {
  const chips = (Object.keys(filters) as (keyof HPNeedleValveFilters)[]).flatMap(k => filters[k].map(v => ({ key: k, value: v })))
  if (!chips.length) return null
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.75 }}>
      {chips.map(f => (
        <Box
          key={`${f.key}-${f.value}`}
          component="button"
          type="button"
          onClick={() => setFilters(prev => ({ ...prev, [f.key]: prev[f.key].filter(v => v !== f.value) }))}
          sx={{ cursor: 'pointer', fontFamily: T.font, display: 'inline-flex', alignItems: 'center', gap: 0.5, pl: 1.25, pr: 0.75, py: 0.45, borderRadius: 999, border: '1px solid #CFEBC6', bgcolor: T.greenSoft, color: T.greenDark, fontSize: '0.8rem', fontWeight: 700, '&:hover': { bgcolor: '#DDF3D6' } }}
          aria-label={`Remove ${f.value}`}
        >
          {f.value}
          <CloseRoundedIcon sx={{ fontSize: 15 }} />
        </Box>
      ))}
    </Box>
  )
}
