'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TableSortLabel, Collapse, Chip, Stack, IconButton, Button, FormControlLabel,
  Checkbox, Divider, TablePagination
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { HP_FILTER_DATA, type HPFilterItem } from './hpFilterData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { CartItem, useCartStore } from '../../cart/hooks/useCartStore'
import { FilterGroup } from './components/FilterGroup'
interface Filters {
  subCategories: string[]
  models: string[]
  housingLengths: string[]
}
const EMPTY_FILTERS: Filters = { subCategories: [], models: [], housingLengths: [] }

const ALL_SUBCATEGORIES = [
  'High Pressure Filters',
  'Aluminium Filters',
  'Return Line Filters',
  'Duplex Filters',
  'Suction Strainers',
  'Clogging Indicators',
]

function toCartItem(row: HPFilterItem): CartItem {
  // Create a descriptive string from the most important specs
  const descriptionParts = [
    `Model: ${row.model}`,
    `Thread: ${row.threadConnection}`,
    row.maxPressure ? `Max Pressure: ${row.maxPressure}` : null,
    row.flow ? `Flow: ${row.flow} l/min` : null,
  ].filter(Boolean);

  return {
    id: row.partNumber, // Using partNumber as the unique ID for the cart
    name: `${row.subCategory} — ${row.partNumber}`,
    description: descriptionParts.join(', '), // e.g., "Model: HP01, Thread: 1/2 BSP, Max Pressure: 420 BAR"
    partNumber: row.partNumber,
    price: row.price,
    quantity: 1, // Default starting quantity
    cloudinaryId: row.imageUrl, // Mapping your image URL to the store's ID field
  };
}


function Sidebar({ filters, setFilters, activeCount }: {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  activeCount: number
}) {
  const theme = useTheme()
  const toggle = (key: keyof Filters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val]
    }))

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

      <FilterGroup title="CATEGORY" count={filters.subCategories.length || undefined}>
        {ALL_SUBCATEGORIES.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.subCategories.includes(opt)} onChange={() => toggle('subCategories', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="HOUSING LENGTH" count={filters.housingLengths.length || undefined}>
        {['1', '2', '3', '4'].map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.housingLengths.includes(opt)} onChange={() => toggle('housingLengths', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">Length {opt}</Typography>}
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

function FilterRow({ row }: { row: HPFilterItem }) {
    const addItem = useCartStore((state) => state.addItem);
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()

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
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.model} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          <Chip label={row.subCategory} size="small" variant="outlined" sx={{ fontSize: '0.62rem', fontWeight: 600, borderColor: alpha(theme.palette.primary.main, 0.3), color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.threadConnection}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {row.housingLength ? `Length ${row.housingLength}` : '—'}
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
            textTransform: 'capitalize', 
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
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {/* <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box> */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"       value={row.partNumber} />
                      <Spec label="Category"          value={row.subCategory} />
                      <Spec label="Model"             value={row.model} />
                      <Spec label="Thread Connection" value={row.threadConnection} />
                      <Spec label="Housing Length"    value={row.housingLength ? `Length ${row.housingLength}` : undefined} />
                      <Spec label="Max Pressure"      value={row.maxPressure} />
                      <Spec label="Max Flow"          value={row.flow ? `${row.flow} l/min` : undefined} />
                      <Spec label="Weight"            value={row.weight ? `${row.weight} kg` : undefined} />
                      <Spec label="Indicator Type"    value={row.indicatorType} />
                      <Spec label="Mounting"          value={row.mounting} />
                      <Spec label="Set Pressure"      value={row.setPressure ? `${row.setPressure} BAR` : undefined} />
                      <Spec label="Price (GBP, ex. VAT)" value={`£${row.price.toLocaleString('en-GB', { minimumFractionDigits: 2 })}`} />
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
            textTransform: 'capitalize', 
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

      {quoteProduct && (
        <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />
      )}
    </>
  )
}

export default function FilterPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [sortKey, setSortKey] = useState('subCategory')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const filtered = useMemo(() => HP_FILTER_DATA.filter(r => {
    if (filters.subCategories.length && !filters.subCategories.includes(r.subCategory)) return false
    if (filters.housingLengths.length && !filters.housingLengths.includes(r.housingLength ?? '')) return false
    return true
  }), [filters])

  const sorted = [...filtered].sort((a, b) => {
    const av = (a as any)[sortKey] ?? ''
    const bv = (b as any)[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const activeCount = filters.subCategories.length + filters.models.length + filters.housingLengths.length

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.06),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700,
    fontSize: '0.72rem',
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
          Machinery Filtration
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Complete Machinery filtration range including high pressure, aluminium, return line,
          duplex filters, suction strainers and clogging indicators.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['High Pressure Filters', 'Aluminium Filters', 'Return Line Filters', 'Duplex Filters', 'Suction Strainers', 'Clogging Indicators', 'Machinery'].map(s => (
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
            {filters.subCategories.map(v => (
              <Chip key={v} label={v} size="small" variant="outlined"
                sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
                onDelete={() => setFilters(p => ({ ...p, subCategories: p.subCategories.filter(x => x !== v) }))} />
            ))}
            {filters.housingLengths.map(v => (
              <Chip key={v} label={`Length ${v}`} size="small" variant="outlined"
                sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
                onDelete={() => setFilters(p => ({ ...p, housingLengths: p.housingLengths.filter(x => x !== v) }))} />
            ))}
          </Stack>
        )}

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {filtered.length} CONFIGURATIONS · PRICES EXCLUDE VAT
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
                      { key: 'partNumber',       label: 'Part Number' },
                      { key: 'model',            label: 'Model' },
                      { key: 'subCategory',      label: 'Category' },
                      { key: 'threadConnection', label: 'Thread Connection' },
                      { key: 'housingLength',    label: 'Housing Length' },
                      { key: 'price',            label: 'Price (GBP, ex. VAT)' },
                      { key: null,               label: 'Quote' },
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
                    ? <TableRow><TableCell colSpan={8} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No products match the selected filters.</Typography></TableCell></TableRow>
                    : paginated.map(row => <FilterRow key={row.partNumber} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={sorted.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]}
              sx={{ borderTop: `1px solid ${theme.palette.divider}` }}
            />
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}