import { useState } from 'react'
import { Box } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { type HPNeedleValveFilters, type AvailableCountsHP, EMPTY_HP_FILTERS, HP_NEEDLE_VALVE_DATA } from '../hooks/hpNeedleValveData'
import { T } from '@/src/app/Landing/modern/tokens'

interface Props {
  filters: HPNeedleValveFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNeedleValveFilters>>
  availableCounts: AvailableCountsHP
  activeCount: number
}

const uniq = (k: keyof (typeof HP_NEEDLE_VALVE_DATA)[number]) => Array.from(new Set(HP_NEEDLE_VALVE_DATA.map(c => String(c[k]))))
const GROUPS: { key: keyof HPNeedleValveFilters; title: string; options: string[] }[] = [
  { key: 'brands', title: 'Brand', options: uniq('brand') },
  { key: 'series', title: 'Series', options: uniq('series') },
  { key: 'pressureRatings', title: 'Pressure', options: uniq('pressureRating') },
  { key: 'connectionSizes', title: 'Size', options: uniq('connectionSize') },
  { key: 'connectionTypes', title: 'Connection', options: uniq('connectionType') },
  { key: 'configurations', title: 'Pattern', options: uniq('configuration') },
]
const countKey: Record<keyof HPNeedleValveFilters, keyof AvailableCountsHP> = {
  brands: 'brands', series: 'series', pressureRatings: 'pressureRatings', connectionSizes: 'connectionSizes', connectionTypes: 'connectionTypes', configurations: 'configurations',
}

/** Filters as tappable chips with live counts */
export function HPNVSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  // Brand and Series start open; the rest open on tap (and stay open while they have a selection)
  const [openG, setOpenG] = useState<Record<string, boolean>>({ brands: true, series: true })
  const toggle = (key: keyof HPNeedleValveFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: { xs: '100%', lg: 280 }, boxSizing: 'border-box', p: 2.5, fontFamily: T.font }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ fontSize: '1rem', fontWeight: 800, color: T.ink }}>Filters</Box>
        {activeCount > 0 && (
          <Box component="button" type="button" onClick={() => setFilters(EMPTY_HP_FILTERS)} sx={{ border: 0, bgcolor: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 700, color: T.greenDark, p: 0 }}>
            Clear all ({activeCount})
          </Box>
        )}
      </Box>
      {GROUPS.map(g => {
        const sel = filters[g.key].length
        const isOpen = openG[g.key] ?? false
        return (
        <Box key={g.key} sx={{ borderTop: `1px solid ${T.border}` }}>
          <Box
            component="button"
            type="button"
            aria-expanded={isOpen}
            onClick={() => setOpenG(o => ({ ...o, [g.key]: !isOpen }))}
            sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, py: 1.5, border: 0, bgcolor: 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
          >
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase !important', color: sel ? T.greenDark : T.muted }}>
              {g.title}
              {sel > 0 && <Box component="span" sx={{ minWidth: 18, height: 18, px: 0.5, borderRadius: 999, bgcolor: T.greenDark, color: '#fff', fontSize: '0.68rem', letterSpacing: 0, display: 'inline-grid', placeItems: 'center' }}>{sel}</Box>}
            </Box>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 20, color: T.muted, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
          </Box>
          {isOpen && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pb: 1.75 }}>
            {g.options.map(opt => {
              const n = availableCounts[countKey[g.key]][opt] ?? 0
              const on = filters[g.key].includes(opt)
              const off = !on && n === 0
              return (
                <Box
                  key={opt}
                  component="button"
                  type="button"
                  aria-pressed={on}
                  disabled={off}
                  onClick={() => toggle(g.key, opt)}
                  sx={{
                    cursor: off ? 'default' : 'pointer',
                    fontFamily: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.6,
                    px: 1.25,
                    py: 0.55,
                    borderRadius: 999,
                    fontSize: '0.8rem',
                    fontWeight: on ? 700 : 600,
                    border: `1px solid ${on ? T.greenDark : T.border}`,
                    bgcolor: on ? T.greenDark : '#fff',
                    color: on ? '#fff' : T.ink,
                    opacity: off ? 0.4 : 1,
                    transition: 'all .15s',
                    '&:hover': off ? {} : { borderColor: T.greenDark },
                  }}
                >
                  {opt}
                  <Box component="span" sx={{ fontSize: '0.7rem', fontWeight: 700, color: on ? 'rgba(255,255,255,0.8)' : T.muted }}>{n}</Box>
                </Box>
              )
            })}
          </Box>
          )}
        </Box>
        )
      })}
    </Box>
  )
}
