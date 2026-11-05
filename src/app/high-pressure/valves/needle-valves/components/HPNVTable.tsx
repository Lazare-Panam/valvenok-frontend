import { useState, useMemo, Fragment } from 'react'
import Link from 'next/link'
import { Box, Drawer, IconButton } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { type HPNeedleValveDTO, type HPNeedleValveFilters, type AvailableCountsHP } from '../hooks/hpNeedleValveData'
import { HPNVSidebar } from './HPNVSidebar'
import { HPNVActiveFilters } from './HPNVActiveFilters'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { T } from '@/src/app/Landing/modern/tokens'

const LOGO: Record<string, string> = {
  Panam: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg',
  Hiflux: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png',
}
const detailHref = (r: HPNeedleValveDTO) => `/high-pressure/valves/needle-valves/products/${r.id}`

type SortKey = 'series' | 'pressurePsi' | 'partNumber' | 'connectionSize'
const SORTS: { key: SortKey; label: string }[] = [
  { key: 'series', label: 'Series' },
  { key: 'pressurePsi', label: 'Pressure' },
  { key: 'connectionSize', label: 'Size' },
  { key: 'partNumber', label: 'Part number' },
]

function toRFQ(row: HPNeedleValveDTO): ProductForRFQ {
  return {
    id: row.partNumber,
    name: `${row.brand} Needle Valve — ${row.partNumber}`,
    brand: row.brand,
    category: 'High Pressure Needle Valves',
    categoryId: 'hp-needle-valves',
    subCategory: `${row.series} Series`,
    thumbnail: row.imageUrl ?? '',
    description: row.description,
    keySpecs: [
      { label: 'Part Number', value: row.partNumber },
      { label: 'Series', value: row.series },
      { label: 'Pressure Rating', value: row.pressureRating },
      { label: 'Material', value: row.material },
      { label: 'Connection Size', value: row.connectionSize },
      { label: 'Connection Type', value: row.connectionType },
      { label: 'Configuration', value: row.configuration },
    ],
    variantInfo: { count: 1, sizeRange: row.connectionSize },
  }
}

// Native selects with our own chevron, so the arrow sits evenly inside the pill
const CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230E1B12' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`
const selectSx = { appearance: 'none', WebkitAppearance: 'none', backgroundImage: CHEVRON, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '12px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, color: T.ink, outline: 0 } as const

const pill = { display: 'inline-block', px: 1.1, py: 0.35, borderRadius: 999, fontSize: '0.76rem', fontWeight: 700, whiteSpace: 'nowrap' } as const
const quoteBtn = {
  cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.6, py: 0.75, borderRadius: 999,
  border: 0, bgcolor: T.green, color: T.greenDeep, fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap', transition: 'background-color .15s',
  '&:hover': { bgcolor: '#55C93E' },
} as const

function Details({ row, onQuote }: { row: HPNeedleValveDTO; onQuote: () => void }) {
  const specs: [string, string][] = [
    ['Part number', row.partNumber], ['Series', row.series], ['Pressure', row.pressureRating], ['Material', row.material],
    ['Size', row.connectionSize], ['Connection', row.connectionType], ['Pattern', row.configuration],
  ]
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '140px 1fr' }, gap: 2.5, p: { xs: 2, md: 2.5 }, bgcolor: '#FAFCFA', borderRadius: '14px', border: `1px solid ${T.border}` }}>
      <Box sx={{ width: 140, height: 140, borderRadius: '12px', bgcolor: '#fff', border: `1px solid ${T.border}`, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
        <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '82%', height: '82%', objectFit: 'contain' }} />
      </Box>
      <Box>
        <Box sx={{ fontSize: '0.92rem', color: T.body, lineHeight: 1.6, mb: 2 }}>{row.description}</Box>
        <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 1.5, mb: 2, '& dt': { fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.muted }, '& dd': { m: 0, mt: 0.25, fontSize: '0.88rem', fontWeight: 700, color: T.ink } }}>
          {specs.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Box component="button" type="button" onClick={onQuote} sx={quoteBtn}>Request quote</Box>
          <Box component={Link} href={detailHref(row)} sx={{ ...quoteBtn, bgcolor: '#fff', color: T.ink, border: `1px solid ${T.border}`, '&:hover': { borderColor: T.greenDark, color: T.greenDark } }}>
            Full product page <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function HPNVTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: HPNeedleValveDTO[]
  filters: HPNeedleValveFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNeedleValveFilters>>
  availableCounts: AvailableCountsHP
  activeCount: number
}) {
  const [drawer, setDrawer] = useState(false)
  const [q, setQ] = useState('')
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('series')
  const [open, setOpen] = useState<string | null>(null)
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase()
    const list = term ? models.filter(m => [m.partNumber, m.series, m.connectionType, m.configuration, m.connectionSize].join(' ').toLowerCase().includes(term)) : models
    return [...list].sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey]
      if (typeof av === 'number' && typeof bv === 'number') return av - bv
      return String(av).localeCompare(String(bv), 'en', { numeric: true })
    })
  }, [models, q, sortKey])

  const pages = Math.max(1, Math.ceil(rows.length / perPage))
  const cur = Math.min(page, pages - 1)
  const shown = rows.slice(cur * perPage, cur * perPage + perPage)

  const sidebar = <HPNVSidebar filters={filters} setFilters={f => { setFilters(f); setPage(0) }} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0,1fr)', lg: '280px minmax(0,1fr)' }, gap: 2.5, alignItems: 'start', fontFamily: T.font }}>
      {/* filters */}
      <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'sticky', top: 140, maxHeight: 'calc(100vh - 160px)', overflowY: 'auto', borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}` }}>
        {sidebar}
      </Box>
      <Drawer anchor="bottom" open={drawer} onClose={() => setDrawer(false)} PaperProps={{ sx: { borderRadius: '20px 20px 0 0', maxHeight: '85vh' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton aria-label="Close filters" onClick={() => setDrawer(false)}><CloseRoundedIcon /></IconButton>
        </Box>
        {sidebar}
        <Box sx={{ p: 2, pt: 0 }}>
          <Box component="button" type="button" onClick={() => setDrawer(false)} sx={{ ...quoteBtn, width: '100%', justifyContent: 'center', py: 1.25, fontSize: '0.95rem' }}>
            Show {rows.length} models
          </Box>
        </Box>
      </Drawer>

      <Box sx={{ minWidth: 0 }}>
        {/* toolbar */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
          <Box sx={{ flex: '1 1 260px', display: 'flex', alignItems: 'center', gap: 1, px: 1.75, height: 46, borderRadius: 999, bgcolor: '#fff', border: `1px solid ${T.border}`, '&:focus-within': { borderColor: T.greenDark, boxShadow: '0 0 0 4px rgba(97,214,73,0.18)' } }}>
            <SearchRoundedIcon sx={{ fontSize: 20, color: T.muted }} />
            <Box component="input" value={q} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQ(e.target.value); setPage(0) }} placeholder="Search part number, series, connection…" aria-label="Search models" sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, fontFamily: 'inherit', fontSize: '0.92rem', color: T.ink, bgcolor: 'transparent' }} />
          </Box>
          <Box component="button" type="button" onClick={() => setDrawer(true)} sx={{ display: { xs: 'inline-flex', lg: 'none' }, cursor: 'pointer', alignItems: 'center', gap: 0.75, height: 46, px: 2, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: '#fff', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700, color: T.ink }}>
            <TuneRoundedIcon sx={{ fontSize: 18 }} /> Filters{activeCount ? ` (${activeCount})` : ''}
          </Box>
          <Box component="label" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, height: 46, px: 1.75, borderRadius: 999, border: `1px solid ${T.border}`, bgcolor: '#fff', fontSize: '0.85rem', color: T.body }}>
            Sort
            <Box component="select" value={sortKey} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortKey(e.target.value as SortKey)} sx={{ ...selectSx, border: 0, bgcolor: 'transparent', fontSize: '0.88rem', pl: 0.25, pr: 3, py: 0.5, backgroundPosition: 'right 2px center' }}>
              {SORTS.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1.5 }}>
          <Box sx={{ fontSize: '0.88rem', color: T.body }}>
            Showing <b style={{ color: T.ink }}>{rows.length ? cur * perPage + 1 : 0}–{Math.min(rows.length, (cur + 1) * perPage)}</b> of <b style={{ color: T.ink }}>{rows.length}</b> models
          </Box>
          <HPNVActiveFilters filters={filters} setFilters={setFilters} />
        </Box>

        {/* desktop table */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', '& th': { textAlign: 'left', px: 2, py: 1.5, bgcolor: '#FAFCFA', borderBottom: `1px solid ${T.border}`, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.muted, whiteSpace: 'nowrap' }, '& td': { px: 2, py: 1.25, borderBottom: `1px solid ${T.border}`, color: T.body, verticalAlign: 'middle' } }}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Series</th>
                <th>Pressure</th>
                <th>Size</th>
                <th>Connection</th>
                <th>Pattern</th>
                <th style={{ textAlign: 'right' }}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {shown.length === 0 && (
                <tr><td colSpan={7} style={{ textAlign: 'center', padding: '48px 16px' }}>No models match. Try removing a filter.</td></tr>
              )}
              {shown.map(r => {
                const isOpen = open === r.id
                return (
                  <Fragment key={r.id}>
                    <Box component="tr" onClick={() => setOpen(isOpen ? null : r.id)} sx={{ cursor: 'pointer', bgcolor: isOpen ? T.greenSoft : 'transparent', transition: 'background-color .15s', '&:hover': { bgcolor: isOpen ? T.greenSoft : '#F7FBF6' } }}>
                      <td>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{ flexShrink: 0, width: 44, height: 44, borderRadius: '10px', bgcolor: T.surface, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                            <Box component="img" src={r.imageUrl} alt="" loading="lazy" sx={{ width: '80%', height: '80%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                          </Box>
                          <Box>
                            <Box component={Link} href={detailHref(r)} onClick={(e: React.MouseEvent) => e.stopPropagation()} sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontWeight: 700, fontSize: '0.84rem', color: T.ink, textDecoration: 'none', '&:hover': { color: T.greenDark, textDecoration: 'underline' } }}>
                              {r.partNumber}
                            </Box>
                            <Box component="img" src={LOGO[r.brand]} alt={r.brand} sx={{ display: 'block', mt: 0.4, height: 16, maxWidth: 64, objectFit: 'contain' }} />
                          </Box>
                        </Box>
                      </td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{r.series}</Box></td>
                      <td><Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{r.pressureRating}</Box></td>
                      <td style={{ fontWeight: 700, color: T.ink }}>{r.connectionSize}</td>
                      <td>{r.connectionType}</td>
                      <td>{r.configuration}</td>
                      <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <Box component="button" type="button" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setQuote(toRFQ(r)) }} sx={quoteBtn}>Quote</Box>
                        <Box component="span" sx={{ display: 'inline-grid', placeItems: 'center', ml: 1, width: 30, height: 30, borderRadius: '50%', border: `1px solid ${T.border}`, verticalAlign: 'middle', color: T.ink, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                          <KeyboardArrowDownRoundedIcon sx={{ fontSize: 18 }} />
                        </Box>
                      </td>
                    </Box>
                    {isOpen && (
                      <tr>
                        <td colSpan={7} style={{ padding: 12, background: '#fff' }}>
                          <Details row={r} onQuote={() => setQuote(toRFQ(r))} />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
            </tbody>
          </Box>
        </Box>

        {/* phone cards */}
        <Box sx={{ display: { xs: 'grid', md: 'none' }, gap: 1.25 }}>
          {shown.map(r => (
            <Box key={r.id} sx={{ p: 1.75, borderRadius: '18px', bgcolor: '#fff', border: `1px solid ${T.border}` }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Box sx={{ flexShrink: 0, width: 56, height: 56, borderRadius: '12px', bgcolor: T.surface, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                  <Box component="img" src={r.imageUrl} alt="" loading="lazy" sx={{ width: '80%', height: '80%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box component={Link} href={detailHref(r)} sx={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontWeight: 700, fontSize: '0.86rem', color: T.ink, textDecoration: 'none' }}>{r.partNumber}</Box>
                  <Box component="img" src={LOGO[r.brand]} alt={r.brand} sx={{ display: 'block', mt: 0.4, height: 16, maxWidth: 64, objectFit: 'contain' }} />
                </Box>
                <Box component="span" sx={{ ...pill, bgcolor: T.greenSoft, color: T.greenDark }}>{r.pressureRating}</Box>
              </Box>
              <Box sx={{ mt: 1.25, display: 'flex', flexWrap: 'wrap', gap: 0.75, fontSize: '0.82rem', color: T.body }}>
                <Box component="span" sx={{ ...pill, bgcolor: T.surface, color: T.ink, border: `1px solid ${T.border}` }}>{r.series}</Box>
                <span>{r.connectionSize}</span>·<span>{r.connectionType}</span>·<span>{r.configuration}</span>
              </Box>
              <Box sx={{ mt: 1.5, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                <Box component={Link} href={detailHref(r)} sx={{ ...quoteBtn, justifyContent: 'center', bgcolor: '#fff', color: T.ink, border: `1px solid ${T.border}` }}>Details</Box>
                <Box component="button" type="button" onClick={() => setQuote(toRFQ(r))} sx={{ ...quoteBtn, justifyContent: 'center' }}>Request quote</Box>
              </Box>
            </Box>
          ))}
          {shown.length === 0 && <Box sx={{ p: 4, textAlign: 'center', color: T.body }}>No models match. Try removing a filter.</Box>}
        </Box>

        {/* pagination */}
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 1.5 }}>
          <Box component="label" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '0.85rem', color: T.body }}>
            Per page
            <Box component="select" value={perPage} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setPerPage(+e.target.value); setPage(0) }} sx={{ ...selectSx, border: `1px solid ${T.border}`, borderRadius: 999, pl: 1.75, pr: 4, py: 0.75, bgcolor: '#fff', fontSize: '0.88rem', '&:hover': { borderColor: T.greenDark } }}>
              {[25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
            </Box>
          </Box>
          {/* Three page numbers at a time, with arrows to move on */}
          {(() => {
            const go = (i: number) => { setPage(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }
            const start = Math.max(0, Math.min(cur - 1, pages - 3))
            const nums = Array.from({ length: Math.min(3, pages) }, (_, k) => start + k)
            const btn = (on: boolean, disabled = false) => ({
              cursor: disabled ? 'default' : 'pointer', width: 38, height: 38, borderRadius: '50%', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.88rem',
              display: 'grid', placeItems: 'center', border: `1px solid ${on ? T.greenDark : T.border}`, bgcolor: on ? T.greenDark : '#fff', color: on ? '#fff' : T.ink,
              opacity: disabled ? 0.35 : 1, transition: 'border-color .15s', '&:hover': disabled || on ? {} : { borderColor: T.greenDark },
            })
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box component="button" type="button" aria-label="Previous page" disabled={cur === 0} onClick={() => go(cur - 1)} sx={btn(false, cur === 0)}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18, transform: 'rotate(180deg)' }} />
                </Box>
                {nums.map(i => (
                  <Box key={i} component="button" type="button" aria-current={i === cur ? 'page' : undefined} onClick={() => go(i)} sx={btn(i === cur)}>{i + 1}</Box>
                ))}
                <Box component="button" type="button" aria-label="Next page" disabled={cur >= pages - 1} onClick={() => go(cur + 1)} sx={btn(false, cur >= pages - 1)}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box component="span" sx={{ ml: 1, fontSize: '0.82rem', color: T.muted, whiteSpace: 'nowrap' }}>of {pages}</Box>
              </Box>
            )
          })()}
        </Box>
      </Box>

      {quote && <RFQModal open={!!quote} onClose={() => setQuote(null)} product={quote} />}
    </Box>
  )
}
