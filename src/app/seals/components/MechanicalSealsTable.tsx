import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams, IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { useRouter } from 'next/navigation'
import { MechanicalSealDTO } from '@/src/api/sealApi'
import { useCartStore } from '../../cart/hooks/useCartStore'
import { useNotificationStore } from '@/src/store/useNotificationStore'

function Spec({ label, value }: { label: string; value: string }) {
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

function DetailPanelRenderer({ data, context }: ICellRendererParams) {
  const theme = useTheme()
  const seal: MechanicalSealDTO = data

  return (
    <Box sx={{
      p: 3, minHeight: 220,
      bgcolor: alpha(theme.palette.primary.main, 0.02),
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      width: '100%'
    }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box sx={{
          flexShrink: 0, width: 180, height: 180,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2, bgcolor: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2
        }}>
          <Box
            component="img"
            src={seal.imageUrl}
            alt={seal.partNumber}
            onClick={() => {
              sessionStorage.setItem('seal-detail', JSON.stringify(seal))
              context?.router.push(`/seals/${seal.partNumber}`)
            }}
            sx={{
              width: 180, height: 180, objectFit: 'contain',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8, transform: 'scale(1.02)', transition: 'all 0.2s' }
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900} color="primary"
            sx={{ letterSpacing: 1, display: 'block', mb: 2 }}>
            SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
            <Spec label="Part Number" value={seal.partNumber} />
            <Spec label="Price" value={`£${seal.price.toFixed(2)}`} />
            {seal.sealSizeMm && <Spec label="Seal Size (MM)" value={seal.sealSizeMm} />}
            {seal.sealSizeInch && <Spec label="Seal Size (Inch)" value={seal.sealSizeInch} />}
            {seal.shaftSizeMm && <Spec label="Shaft Size" value={seal.shaftSizeMm} />}
          </Stack>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={() => context?.addToCart(seal)}
            sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}
          >
            Add to Cart
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

function ExpandCellRenderer({ data, context }: ICellRendererParams) {
  const theme = useTheme()
  if (data?._isDetail) return null
  const isOpen = context?.openRows?.has(data?._rowId)
  return (
    <Box onClick={(e) => { e.stopPropagation(); context?.toggleRow(data?._rowId) }}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 24, height: 24, cursor: 'pointer',
        border: `1px solid ${isOpen ? theme.palette.primary.main : theme.palette.divider}`,
        borderRadius: '4px', color: isOpen ? 'primary.main' : 'text.disabled',
        '&:hover': { borderColor: 'primary.main', color: 'primary.main' }
      }}>
      {isOpen ? <RemoveIcon sx={{ fontSize: 12 }} /> : <AddIcon sx={{ fontSize: 12 }} />}
    </Box>
  )
}

function AddToCartCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null
  return (
    <Button size="small" variant="contained"
      startIcon={<ShoppingCartIcon sx={{ fontSize: 14 }} />}
      onClick={(e) => { e.stopPropagation(); context?.addToCart(data) }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
        borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
        boxShadow: 'none', '&:hover': { boxShadow: 'none' }
      }}>
      Add to Cart
    </Button>
  )
}

export default function MechanicalSealsTable({ models, isFetching }: { models: MechanicalSealDTO[], isFetching: boolean }) {
  const theme = useTheme()
  const router = useRouter()
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())
  const addItem = useCartStore(s => s.addItem)
  const showNotification = useNotificationStore(s => s.showNotification)

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows(prev => {
      const next = new Set(prev)
      next.has(rowId) ? next.delete(rowId) : next.add(rowId)
      return next
    })
  }, [])

  const addToCart = useCallback((data: MechanicalSealDTO) => {
    addItem({
      id: String(data.id),
      name: data.partNumber,
      description: `Mechanical Seal — ${data.sealSizeMm ?? data.shaftSizeMm ?? ''}`,
      partNumber: data.partNumber,
      price: data.price,
      quantity: 1,
      cloudinaryId: data.imageUrl,
    })
    showNotification({
      message: 'Added to cart',
      severity: 'success',
      partNumber: data.partNumber,
    })
  }, [addItem, showNotification])

  const rowData = useMemo(() => {
    const rows: any[] = []
    models.forEach((p, i) => {
      const rowId = `${p.partNumber}-${i}`
      rows.push({ ...p, _rowId: rowId, _isDetail: false })
      if (openRows.has(rowId)) rows.push({ ...p, _rowId: rowId, _isDetail: true })
    })
    return rows
  }, [models, openRows])

  const colDefs: ColDef[] = useMemo(() => [
    {
      headerName: '', width: 40, pinned: 'left' as const, sortable: false,
      cellRenderer: 'expandCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    },
    {
      field: 'partNumber', headerName: 'Part Number', width: 250, pinned: 'left' as const,
      cellRenderer: (p: any) => {
        if (p.data?._isDetail) return null
        return (
          <Box
            component="span"
            onClick={() => {
              sessionStorage.setItem('seal-detail', JSON.stringify(p.data))
              p.context?.router.push(`/seals/${p.data.partNumber}`)
            }}
            sx={{
              fontFamily: 'monospace', fontWeight: 700,
              color: theme.palette.primary.main, fontSize: '0.8rem',
              cursor: 'pointer', textDecoration: 'underline',
              '&:hover': { opacity: 0.75 }
            }}
          >
            {p.value}
          </Box>
        )
      }
    },
    { field: 'shaftSizeMm', headerName: 'Shaft Size', width: 300, valueFormatter: (p: any) => p.value ?? '—' },
    { field: 'sealSizeMm', headerName: 'Seal Size (MM)', width: 300, valueFormatter: (p: any) => p.value ?? '—' },
    { field: 'sealSizeInch', headerName: 'Seal Size (Inch)', width: 360, valueFormatter: (p: any) => p.value ?? '—' },
    {
      field: 'price', headerName: 'Price', width: 160, valueFormatter: (p: any) => `£${p.value.toFixed(2)}`
    },
    {
      headerName: 'Cart', width: 150, sortable: false, pinned: 'right' as const,
      cellRenderer: 'addToCartCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }
  ], [theme])

  const defaultColDef: ColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow, addToCart, router }), [openRows, toggleRow, addToCart, router])

  return (
    <Box sx={{ position: 'relative' }}>
      {isFetching && (
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)',
          zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '8px'
        }}>
          <Box sx={{
            bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2,
            display: 'flex', alignItems: 'center', gap: 1
          }}>
            <Box sx={{
              width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main',
              animation: 'pulse 1s ease-in-out infinite',
              '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } }
            }} />
            <Typography variant="caption" fontWeight={700} color="primary.main">UPDATING</Typography>
          </Box>
        </Box>
      )}

      <Box className="ag-theme-alpine" sx={{
        width: '100%',
        opacity: isFetching ? 0.6 : 1,
        transition: 'opacity 0.2s ease',
        '& .ag-root-wrapper': { border: `1px solid ${theme.palette.divider}`, borderRadius: '8px' },
        '& .ag-header': { bgcolor: alpha(theme.palette.primary.main, 0.04), borderBottom: `2px solid ${theme.palette.primary.main}` },
        '& .ag-header-cell-text': { fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' },
        '& .ag-row': { borderBottom: `1px solid ${theme.palette.divider}` },
        '& .ag-row:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
        '& .ag-row-even': { bgcolor: 'background.paper' },
        '& .ag-row-odd': { bgcolor: alpha(theme.palette.primary.main, 0.01) },
        '& .ag-cell': { fontSize: '0.82rem' },
        '& .ag-paging-panel': { borderTop: `1px solid ${theme.palette.divider}`, fontSize: '0.8rem' },
        '& .ag-full-width-row': { bgcolor: 'transparent !important' },
      }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          suppressColumnVirtualisation
          components={{
            expandCellRenderer: ExpandCellRenderer,
            detailPanelRenderer: DetailPanelRenderer,
            addToCartCellRenderer: AddToCartCellRenderer,
          }}
          context={gridContext}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer="detailPanelRenderer"
          getRowHeight={(params) => params.data?._isDetail ? 280 : 44}
          pagination
          paginationPageSize={20}
          domLayout="autoHeight"
        />
      </Box>
    </Box>
  )
}