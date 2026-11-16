import { useState } from 'react'
import Link from 'next/link'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type FittingDTO, type FittingFilters, type AvailableCounts } from '../hooks/hpAllFittingsData'
import { FittingsSidebar } from './FittingsSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PRESSURE_COLOR: Record<string, string> = {
  '10,000 psi': '#61D649',
  '15,000 psi': '#2db82d',
  '20,000 psi': '#FF6B35',
  '30,000 psi': '#E91E8C',
  '60,000 psi': '#D32F2F',
  '100,000 psi': '#8E24AA',
  '150,000 psi': '#4A148C',
}

const connectionOf = (row: FittingDTO) =>
  row.p2Thread ? `${row.p1Thread} → ${row.p2Thread}` : row.p1Thread

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function FittingRow({ row }: { row: FittingDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const color = PRESSURE_COLOR[row.pressureRating] ?? BRAND_GREEN

  const openQuote = () => setQuoteProduct({
    id: row.partNumber,
    name: `${row.brand} ${row.fittingType} — ${row.partNumber}`,
    brand: row.brand,
    category: 'High Pressure Fittings',
    categoryId: 'hp-fittings',
    subCategory: row.fittingType,
    thumbnail: row.imageUrl ?? '',
    description: row.description,
    keySpecs: [
      { label: 'Part Number',     value: row.partNumber },
      { label: 'Brand',           value: row.brand },
      { label: 'Fitting Type',    value: row.fittingType },
      { label: 'Pressure Rating', value: row.pressureRating },
      { label: 'Material',        value: row.material },
      { label: 'P1 Size',         value: row.p1Size },
      { label: 'P1 Connection',   value: row.p1Thread },
      ...(row.p2Size ? [{ label: 'P2 Size', value: row.p2Size }, { label: 'P2 Connection', value: row.p2Thread }] : []),
    ],
    variantInfo: { count: 1, sizeRange: row.p1Size },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Box component={Link} href={`/high-pressure/fittings/products/${row.id}`} onClick={e => e.stopPropagation()}
            sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_GREEN, fontSize: '0.75rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {row.partNumber}
          </Box>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.brand} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700,
              bgcolor: row.brand === 'Hiflux' ? alpha('#1976d2', 0.12) : alpha(BRAND_GREEN, 0.12),
              color: row.brand === 'Hiflux' ? '#1976d2' : '#2d8a1e' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.fittingType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureRating} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(color, 0.12), color }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.p1Size}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{connectionOf(row)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"     value={row.partNumber} />
                      <Spec label="Brand"           value={row.brand} />
                      <Spec label="Fitting Type"    value={row.fittingType} />
                      <Spec label="Pressure Rating" value={row.pressureRating} />
                      <Spec label="Material"        value={row.material} />
                      <Spec label="P1 Size"         value={row.p1Size} />
                      <Spec label="P1 Connection"   value={row.p1Thread} />
                      <Spec label="P2 Size"         value={row.p2Size} />
                      <Spec label="P2 Connection"   value={row.p2Thread} />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" onClick={openQuote}
                        sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                        Request Quote
                      </Button>
                      <Button component={Link} href={`/high-pressure/fittings/products/${row.id}`} variant="outlined"
                        sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', borderColor: BRAND_GREEN, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                        View details
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      {quoteProduct && (
        <RFQModal
          open={!!quoteProduct}
          onClose={() => setQuoteProduct(null)}
          product={quoteProduct}
        />
      )}
    </>
  )
}

type SortKey = 'partNumber' | 'brand' | 'fittingType' | 'pressureRating' | 'p1Size'

export default function FittingsTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: FittingDTO[]
  filters: FittingFilters
  setFilters: React.Dispatch<React.SetStateAction<FittingFilters>>
  availableCounts: AvailableCounts
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('fittingType')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    if (sortKey === 'pressureRating') {
      return sortDir === 'asc' ? a.pressurePsi - b.pressurePsi : b.pressurePsi - a.pressurePsi
    }
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '')
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = <FittingsSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}><IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton></Box>}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                {([
                  { key: 'partNumber' as SortKey,     label: 'Part Number' },
                  { key: 'brand' as SortKey,          label: 'Brand' },
                  { key: 'fittingType' as SortKey,    label: 'Fitting Type' },
                  { key: 'pressureRating' as SortKey, label: 'Pressure' },
                  { key: 'p1Size' as SortKey,         label: 'Size' },
                  { key: null,                        label: 'Connection' },
                  { key: null,                        label: 'Quote' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key
                      ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel>
                      : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={8} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No fittings found.</Typography></TableCell></TableRow>
                : paginated.map(row => <FittingRow key={row.id} row={row} />)
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
          sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}
