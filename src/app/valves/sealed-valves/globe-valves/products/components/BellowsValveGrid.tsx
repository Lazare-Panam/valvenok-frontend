'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type BellowsValveDTO, type BellowsValveFilters, type AvailableCounts } from '../hooks/bellowsValveData'
import { BellowsValveSidebar } from './BellowsValveSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function BellowsRow({ row }: { row: BellowsValveDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: row.name,
    brand: 'Valvenok',
    category: 'Bellows Sealed Globe Valves',
    categoryId: 'bellows-sealed-globe-valves',
    subCategory: row.type,
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Standard', value: row.standard },
      { label: 'Type',     value: row.type },
    ],
    variantInfo: { count: 1, sizeRange: row.standard },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 600 }}>{row.name}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.standard} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.type} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: 'text.disabled', color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize',
              whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={5} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.name}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      KEY FEATURES
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                      {row.features.map((f, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Stack direction="row" spacing={1} mb={3}>
                      <Chip label={row.standard} size="small" variant="outlined"
                        sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
                      <Chip label={row.type} size="small" variant="outlined"
                        sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: 'text.disabled', color: 'text.secondary' }} />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px',
                        bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' },
                        fontFamily: PRIMARY_FONT }}>
                      Request Quote
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

type SortKey = 'name' | 'standard' | 'type'

export default function BellowsValveGrid({ valves, filters, setFilters, availableCounts, activeCount }: {
  valves: BellowsValveDTO[]
  filters: BellowsValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BellowsValveFilters>>
  availableCounts: AvailableCounts
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>('standard')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...valves].sort((a, b) => {
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '')
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = <BellowsValveSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
          </Box>
        )}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}>
                  <TableSortLabel active={sortKey === 'name'} direction={sortKey === 'name' ? sortDir : 'asc'} onClick={() => handleSort('name')}>
                    Product Name
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={headerSx}>
                  <TableSortLabel active={sortKey === 'standard'} direction={sortKey === 'standard' ? sortDir : 'asc'} onClick={() => handleSort('standard')}>
                    Standard
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={headerSx}>
                  <TableSortLabel active={sortKey === 'type'} direction={sortKey === 'type' ? sortDir : 'asc'} onClick={() => handleSort('type')}>
                    Type
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sorted.length === 0
                ? <TableRow><TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No valves found.</Typography>
                  </TableCell></TableRow>
                : sorted.map(row => <BellowsRow key={row.id} row={row} />)
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}