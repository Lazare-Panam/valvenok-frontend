import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams, IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { JicFittingDTO } from '@/src/api/fittingsApi'
import { useCartStore } from '@/src/app/cart/hooks/useCartStore'
import { useNotificationStore } from '@/src/store/useNotificationStore'

const THREAD_TYPE_COLORS: Record<string, 'primary' | 'success' | 'warning' | 'error' | 'info'> = {
  'NPT': 'primary',
  'BSPT': 'success',
  'BSPP': 'warning',
  'SAE/MS': 'info',
  'NPT Swivel': 'error',
  'SAE/MS Swivel': 'secondary' as any,
}

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

function ThreadTypeCellRenderer({ data }: ICellRendererParams) {
  if (data?._isDetail) return null
  const type = data?.threadType
  return (
    <Chip label={type} size="small"
      color={THREAD_TYPE_COLORS[type] ?? 'default'}
      sx={{ fontSize: '0.7rem', fontWeight: 700 }}
    />
  )
}

function DetailPanelRenderer({ data, context }: ICellRendererParams) {
  const theme = useTheme()
  const fitting: JicFittingDTO = data

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
          <Box component="img" src={fitting.imageUrl} alt={fitting.partNumber}
            sx={{ width: 180, height: 180, objectFit: 'contain' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography variant="caption" fontWeight={900} color="primary" sx={{ letterSpacing: 1 }}>
              SPECIFICATIONS
            </Typography>
            <Chip label={fitting.threadType} size="small"
              color={THREAD_TYPE_COLORS[fitting.threadType] ?? 'default'}
              sx={{ fontSize: '0.7rem', fontWeight: 700 }}
            />
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
            <Spec label="Part Number" value={fitting.partNumber} />
            <Spec label="Price" value={`£${fitting.price.toFixed(2)}`} />
            <Spec label="Tube OD" value={`${fitting.tubeOD}"`} />
            <Spec label="Tube OD (mm)" value={`${fitting.tubeODMm}mm`} />
            <Spec label="JIC Size" value={fitting.jic} />
            <Spec label="Thread Type" value={fitting.threadType} />
            <Spec label="Thread Size" value={fitting.threadSize} />
          </Stack>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={() => context?.addToCart(fitting)}
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

export default function JicFittingsTable({ models, isFetching }: { models: JicFittingDTO[], isFetching: boolean }) {
  const theme = useTheme()
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

  const addToCart = useCallback((data: JicFittingDTO) => {
    addItem({
      id: String(data.id),
      name: data.partNumber,
      description: `JIC Fitting — ${data.threadType} ${data.threadSize}`,
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
      field: 'partNumber', headerName: 'Part Number', width: 200, pinned: 'left' as const,
      cellStyle: { fontFamily: 'monospace', fontWeight: '700', color: theme.palette.primary.main, fontSize: '0.8rem' } as any
    },
   
    {
      field: 'price', headerName: 'Price', width: 150,
      valueFormatter: (p: any) => `£${p.value.toFixed(2)}`
    },
    { field: 'tubeOD', headerName: 'Tube OD', width: 150, valueFormatter: (p: any) => `${p.value}"` },
    { field: 'tubeODMm', headerName: 'Tube OD (mm)', width: 150, valueFormatter: (p: any) => `${p.value}mm` },
    { field: 'jic', headerName: 'JIC Size', width: 220 },
   { 
  field: 'threadSize', 
  headerName: 'Thread Size', 
  width: 250,
  wrapText: true,
  autoHeight: true,
  cellStyle: { lineHeight: '1.4', paddingTop: '8px', paddingBottom: '8px' } as any
},
    {
      headerName: 'Cart', width: 250, sortable: false, pinned: 'right' as const,
      cellRenderer: 'addToCartCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }, {
      field: 'threadType', headerName: 'Thread Type', width: 140,
      cellRenderer: 'threadTypeCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
  ], [theme])

  const defaultColDef: ColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow, addToCart }), [openRows, toggleRow, addToCart])

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
            threadTypeCellRenderer: ThreadTypeCellRenderer,
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