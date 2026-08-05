'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TableSortLabel, Collapse, Chip, Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel,
  Checkbox, Divider, TablePagination
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { FLANGED_SIGHT_GLASS_DATA, type FlangedSightGlassItem } from './flangedSightGlassData'

import { CartItem, useCartStore } from '../../cart/hooks/useCartStore'

interface Filters { sizes: string[]; pressureRatings: string[] }
const EMPTY_FILTERS: Filters = { sizes: [], pressureRatings: [] }

const DN_ORDER = ['DN15','DN20','DN25','DN32','DN40','DN50','DN65','DN80','DN100','DN125','DN150']
function toCartItem(row: FlangedSightGlassItem): CartItem {
  return {
    id: row.partNumber,
    name: `Flanged Sight Glass ${row.size} ${row.pressureRating}`,
    description: `Size: ${row.size} (${row.inchSize}), Rating: ${row.pressureRating}, Body: Cast Iron GG25`,
    partNumber: row.partNumber,
    price: row.price,
    quantity: 1,
    cloudinaryId: row.imageUrl,
  };
}


function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: '#fff' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function Sidebar({ filters, setFilters, activeCount }: {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  activeCount: number
}) {
  const theme = useTheme()
  const toggle = (key: keyof Filters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: 220, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>
      <FilterGroup title="SIZE (DN)" count={filters.sizes.length || undefined}>
        {DN_ORDER.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.sizes.includes(opt)} onChange={() => toggle('sizes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="PRESSURE RATING" count={filters.pressureRatings.length || undefined}>
        {['PN16', 'PN40'].map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.pressureRatings.includes(opt)} onChange={() => toggle('pressureRatings', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function SightGlassRow({ row }: { row: FlangedSightGlassItem }) {
  
  const addItem = useCartStore((state) => state.addItem);
  const [open, setOpen] = useState(false)

  const theme = useTheme()

  const pnColor = row.pressureRating === 'PN40'
    ? { bg: alpha(theme.palette.primary.main, 0.12), text: theme.palette.primary.dark }
    : { bg: alpha(theme.palette.primary.light, 0.4), text: theme.palette.primary.dark }

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` } }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.dark, fontSize: '0.8rem', py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.size} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontWeight: 600 }}>{row.inchSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureRating} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: pnColor.bg, color: pnColor.text }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.dark }}>
          £{row.price.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button 
  size="small" 
  variant="contained"
  onClick={(e) => { 
    e.stopPropagation(); 
    addItem(toCartItem(row)); // Calls the new mapping function
  }}
  sx={{ 
    fontSize: '0.7rem', 
    fontWeight: 700, 
    py: 0.5, 
    px: 1.5, 
    borderRadius: '4px', 
    textTransform: 'none', 
    whiteSpace: 'nowrap', 
    boxShadow: 'none', 
    backgroundColor: '#2e7d32', // Optional: Green color often indicates "Add to Cart"
    '&:hover': { boxShadow: 'none', backgroundColor: '#1b5e20' } 
  }}
>
  Add to Cart
</Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Size" value={`${row.size} (${row.inchSize})`} />
                      <Spec label="Pressure Rating" value={row.pressureRating} />
                      <Spec label="Body Material" value="Cast Iron GG25" />
                      <Spec label="Glass" value="Borosilicate (Tem Glass)" />
                      <Spec label="Seal" value="PTFE" />
                      <Spec label="Connection" value="Flanged" />
                      <Spec label="Standard" value="EN 558 / EN 1092-1/2" />
                      <Spec label="Price (GBP)" value={`£${row.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}`} />
                    </Stack>
                    <Button 
  size="small" 
  variant="contained"
  onClick={(e) => { 
    e.stopPropagation(); 
    addItem(toCartItem(row)); // Calls the new mapping function
  }}
  sx={{ 
    fontSize: '0.7rem', 
    fontWeight: 700, 
    py: 0.5, 
    px: 1.5, 
    borderRadius: '4px', 
    textTransform: 'none', 
    whiteSpace: 'nowrap', 
    boxShadow: 'none', 
    backgroundColor: '#2e7d32', // Optional: Green color often indicates "Add to Cart"
    '&:hover': { boxShadow: 'none', backgroundColor: '#1b5e20' } 
  }}
>
  Add to Cart
</Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      
    </>
  )
}

export default function FlangedSightGlassPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [sortKey, setSortKey] = useState('size')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const filtered = useMemo(() => FLANGED_SIGHT_GLASS_DATA.filter(r => {
    if (filters.sizes.length && !filters.sizes.includes(r.size)) return false
    if (filters.pressureRatings.length && !filters.pressureRatings.includes(r.pressureRating)) return false
    return true
  }), [filters])

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === 'size') {
      const ai = DN_ORDER.indexOf(a.size), bi = DN_ORDER.indexOf(b.size)
      return sortDir === 'asc' ? ai - bi : bi - ai
    }
    const av = (a as any)[sortKey] ?? '', bv = (b as any)[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const activeCount = filters.sizes.length + filters.pressureRatings.length

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.06),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary">
          Flanged Sight Glasses
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          BAG-FL double glass flanged sight glasses for visual flow monitoring. Suitable for water, food, chemicals, air and other gases.
          Available in PN16 and PN40 pressure ratings, DN15 through DN150.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['Cast Iron GG25', 'Borosilicate Glass', 'PTFE Seal', 'Flanged', 'PN16 / PN40', 'DN15 – DN150', 'EN 558 / EN 1092-1/2'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {activeCount > 0 && (
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {filters.sizes.map(v => (
              <Chip key={v} label={v} size="small" variant="outlined"
                sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
                onDelete={() => setFilters(p => ({ ...p, sizes: p.sizes.filter(x => x !== v) }))} />
            ))}
            {filters.pressureRatings.map(v => (
              <Chip key={v} label={v} size="small" variant="outlined"
                sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
                onDelete={() => setFilters(p => ({ ...p, pressureRatings: p.pressureRatings.filter(x => x !== v) }))} />
            ))}
          </Stack>
        )}

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {filtered.length} CONFIGURATIONS
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    {[
                      { key: 'partNumber',     label: 'Part Number' },
                      { key: 'size',           label: 'Size (DN)' },
                      { key: 'inchSize',       label: 'Inch Size' },
                      { key: 'pressureRating', label: 'Pressure Rating' },
                      { key: 'price',          label: 'Price (GBP)' },
                      { key: null,             label: 'Quote' },
                    ].map((h, i) => (
                      <TableCell key={i} sx={headerSx}>
                        {h.key
                          ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel>
                          : h.label
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No products match the selected filters.</Typography></TableCell></TableRow>
                    : paginated.map(row => <SightGlassRow key={row.partNumber} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]}
              sx={{ borderTop: `1px solid ${theme.palette.divider}` }} />
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}