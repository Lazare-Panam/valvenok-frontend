'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TablePagination, TableSortLabel, Collapse,
  Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider, Chip
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useMediaQuery, Drawer } from '@mui/material'
import { MechanicalSealDTO } from '@/src/api/sealApi'
import { CartItem, useCartStore } from '@/src/app/cart/hooks/useCartStore'

import { SealFilters, EMPTY_SEAL_FILTERS } from '../hooks/types'

function toCartItem(seal: MechanicalSealDTO): CartItem {
  const descriptionParts = [
    seal.shaftSizeMm  ? `Shaft Size: ${seal.shaftSizeMm}`   : null,
    seal.sealSizeMm   ? `Seal Size: ${seal.sealSizeMm}mm`   : null,
    seal.sealSizeInch ? `Seal Size: ${seal.sealSizeInch}"`  : null,
  ].filter(Boolean)

  return {
    id: seal.partNumber,
    name: `Mechanical Seal — ${seal.partNumber}`,
    description: descriptionParts.join(', '),
    partNumber: seal.partNumber,
    price: seal.price,
    quantity: 1,
    cloudinaryId: seal.imageUrl,
  }
}

function Spec({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
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

function Sidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: {
  filters: SealFilters
  setFilters: React.Dispatch<React.SetStateAction<SealFilters>>
  filterOptions: any
  filtersLoading: boolean
  activeCount: number
}) {
  const theme = useTheme()
  const [sizeUnit, setSizeUnit] = useState<'mm' | 'inch'>('mm')

  const toggle = (key: keyof SealFilters, val: string) =>
    setFilters(prev => {
      const current = prev[key] as string[]
      const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val]
      return { ...prev, [key]: updated }
    })

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_SEAL_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>
      <FilterGroup title="SHAFT SIZE" count={filters.shaftSizes.length || undefined}>
        {filtersLoading
          ? <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>Loading...</Typography>
          : (filterOptions?.shaftSizes ?? []).map((opt: string) => (
            <FormControlLabel key={opt}
              control={<Checkbox size="small" checked={filters.shaftSizes.includes(opt)} onChange={() => toggle('shaftSizes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
              label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
            />
          ))
        }
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="SEAL SIZE" count={(filters.sealSizesMm.length + filters.sealSizesInch.length) || undefined}>
        <Stack direction="row" gap={0.5} mb={1.5}>
          {(['mm', 'inch'] as const).map(unit => (
            <Box key={unit} onClick={() => setSizeUnit(unit)} sx={{
              px: 1.5, py: 0.25, borderRadius: '4px', cursor: 'pointer', fontSize: '0.65rem',
              fontWeight: 700, textTransform: 'uppercase',
              bgcolor: sizeUnit === unit ? theme.palette.primary.main : 'transparent',
              color: sizeUnit === unit ? '#fff' : theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}`,
            }}>
              {unit}
            </Box>
          ))}
        </Stack>
        {filtersLoading
          ? <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>Loading...</Typography>
          : (sizeUnit === 'mm' ? (filterOptions?.sealSizesMm ?? []) : (filterOptions?.sealSizesInch ?? [])).map((opt: string) => (
            <FormControlLabel key={opt}
              control={<Checkbox size="small"
                checked={sizeUnit === 'mm' ? filters.sealSizesMm.includes(opt) : filters.sealSizesInch.includes(opt)}
                onChange={() => toggle(sizeUnit === 'mm' ? 'sealSizesMm' : 'sealSizesInch', opt)}
                sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
              label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
            />
          ))
        }
      </FilterGroup>
    </Box>
  )
}

function SealRow({ seal }: { seal: MechanicalSealDTO }) {
  const addItem = useCartStore((state) => state.addItem)
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const cartButtonSx = {
    fontSize: '0.7rem',
    fontWeight: 700,
    py: 0.5,
    px: 1.5,
    borderRadius: '4px',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    backgroundColor: '#2e7d32',
    '&:hover': { boxShadow: 'none', backgroundColor: '#1b5e20' },
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>
          {seal.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{seal.shaftSizeMm ?? '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{seal.sealSizeMm ?? '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{seal.sealSizeInch ?? '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.dark }}>
          £{seal.price.toFixed(2)}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => { e.stopPropagation(); addItem(toCartItem(seal)) }}
            sx={cartButtonSx}
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
                    <Box component="img" src={seal.imageUrl} alt={seal.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"    value={seal.partNumber} />
                      <Spec label="Shaft Size"     value={seal.shaftSizeMm} />
                      <Spec label="Seal Size (MM)" value={seal.sealSizeMm} />
                      <Spec label="Seal Size (Inch)" value={seal.sealSizeInch} />
                      <Spec label="Price"          value={`£${seal.price.toFixed(2)}`} />
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={() => addItem(toCartItem(seal))}
                      sx={{ ...cartButtonSx, fontSize: '0.82rem', py: 0.75, px: 2 }}
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

type SortKey = 'partNumber' | 'shaftSizeMm' | 'sealSizeMm' | 'sealSizeInch' | 'price'

export default function MechanicalSealsTable({
  models, isFetching, filters, setFilters, filterOptions, filtersLoading, activeCount, mobileOpen, setMobileOpen
}: {
  models: MechanicalSealDTO[]
  isFetching: boolean
  filters: SealFilters
  setFilters: React.Dispatch<React.SetStateAction<SealFilters>>
  filterOptions: any
  filtersLoading: boolean
  activeCount: number
  mobileOpen: boolean
  setMobileOpen: (v: boolean) => void
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('partNumber')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const sorted = useMemo(() => [...models].sort((a, b) => {
    const av = (a[sortKey] ?? '') as string
    const bv = (b[sortKey] ?? '') as string
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  }), [models, sortKey, sortDir])

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.06),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700,
    fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  const sidebar = (
    <Sidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper', position: 'relative' }}>
        {isFetching && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
              <Typography variant="caption" fontWeight={700} color="primary">UPDATING</Typography>
            </Box>
          </Box>
        )}
        {!isMobile && sidebar}
        <Box sx={{ flex: 1, minWidth: 0, opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  {([
                    { key: 'partNumber'   as SortKey, label: 'Part Number' },
                    { key: 'shaftSizeMm'  as SortKey, label: 'Shaft Size' },
                    { key: 'sealSizeMm'   as SortKey, label: 'Seal Size (MM)' },
                    { key: 'sealSizeInch' as SortKey, label: 'Seal Size (Inch)' },
                    { key: 'price'        as SortKey, label: 'Price (GBP)' },
                    { key: null,                       label: 'Cart' },
                  ] as const).map((h, i) => (
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
                  ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No seals found.</Typography></TableCell></TableRow>
                  : paginated.map((seal, i) => <SealRow key={`${seal.partNumber}-${i}`} seal={seal} />)
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
    </>
  )
}