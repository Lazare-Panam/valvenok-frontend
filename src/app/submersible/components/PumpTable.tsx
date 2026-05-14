'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Typography, Stack, Chip,
  IconButton, Button,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useCartStore } from '@/src/app/cart/hooks/useCartStore'
import { useNotificationStore } from '@/src/store/useNotificationStore'
import { PumpModel } from './types'

function Spec({ label, value }: { label: string; value: string }) {
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

function Row({ model }: { model: PumpModel }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const addItem = useCartStore(s => s.addItem)
  const showNotification = useNotificationStore(s => s.showNotification)

  const handleAddToCart = () => {
    addItem({
      id: model.modelCode,
      name: model.modelCode,
      description: `${model.powerKw}kW ${model.outletInches} ${model.voltage}V ${model.phase} — ${model.application}${model.variant ? ` (${model.variant})` : ''}`,
      partNumber: model.modelCode,
      price: model.priceGbp,
      quantity: 1,
      cloudinaryId: model.imageUrl,
    })
    showNotification({
      message: 'Added to cart',
      severity: 'success',
      partNumber: model.modelCode,
    })
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>
          {model.modelCode}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.powerKw} kW</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.outletInches}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.voltage}V</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.phase}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.frequencyHz} Hz</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.application}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {model.variant ? <Chip label={model.variant} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} /> : '—'}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.dark }}>
          £{model.priceGbp.toFixed(2)}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            startIcon={<ShoppingCartIcon sx={{ fontSize: 14 }} />}
            onClick={e => { e.stopPropagation(); handleAddToCart() }}
            sx={{
              fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px',
              textTransform: 'none', whiteSpace: 'nowrap', boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
            }}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={11} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{
                p: 3,
                bgcolor: alpha(theme.palette.primary.main, 0.02),
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{
                      width: 140, height: 140, flexShrink: 0,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 1, bgcolor: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1,
                    }}>
                      <Box component="img" src={model.imageUrl} alt={model.modelCode}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary"
                      sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>
                      TECHNICAL SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model Code"  value={model.modelCode} />
                      <Spec label="Power"       value={`${model.powerKw} kW`} />
                      <Spec label="Outlet Size" value={model.outletInches} />
                      <Spec label="Voltage"     value={`${model.voltage}V`} />
                      <Spec label="Phase"       value={model.phase} />
                      <Spec label="Frequency"   value={`${model.frequencyHz} Hz`} />
                      <Spec label="Application" value={model.application} />
                      {model.variant && <Spec label="Variant" value={model.variant} />}
                      <Spec label="Price"       value={`£${model.priceGbp.toFixed(2)}`} />
                    </Stack>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={handleAddToCart}
                      sx={{
                        textTransform: 'none', fontWeight: 700, borderRadius: '6px',
                        boxShadow: 'none', '&:hover': { boxShadow: 'none' },
                      }}>
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

type SortKey = 'modelCode' | 'powerKw' | 'voltage' | 'phase' | 'priceGbp'

export default function PumpTable({ models }: { models: PumpModel[] }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('modelCode')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey] ?? ''
    const bv = b[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: 'modelCode' as SortKey, label: 'Model Code' },
                { key: 'powerKw'   as SortKey, label: 'Power (kW)' },
                { key: null,                   label: 'Outlet' },
                { key: 'voltage'   as SortKey, label: 'Voltage' },
                { key: 'phase'     as SortKey, label: 'Phase' },
                { key: null,                   label: 'Frequency' },
                { key: null,                   label: 'Application' },
                { key: null,                   label: 'Variant' },
                { key: 'priceGbp'  as SortKey, label: 'Price (GBP)' },
                { key: null,                   label: 'Cart' },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  {h.key
                    ? <TableSortLabel
                        active={sortKey === h.key}
                        direction={sortKey === h.key ? sortDir : 'asc'}
                        onClick={() => handleSort(h.key!)}>
                        {h.label}
                      </TableSortLabel>
                    : h.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0
              ? <TableRow>
                  <TableCell colSpan={11} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">No models found.</Typography>
                  </TableCell>
                </TableRow>
              : paginated.map((model, i) => <Row key={`${model.modelCode}-${i}`} model={model} />)
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
        sx={{ borderTop: `1px solid ${theme.palette.divider}`, fontSize: '0.8rem' }}
      />
    </Box>
  )
}