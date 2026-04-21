import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography,  Button } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams, IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { NormalizedPump } from '../useAllPumps'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

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

function DetailPanelRenderer({ data }: ICellRendererParams) {
  const theme = useTheme()
  const pump: NormalizedPump = data
  return (
    <Box sx={{
      p: 3,
      bgcolor: alpha(theme.palette.primary.main, 0.02),
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      width: '100%'
    }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box sx={{
          width: 140, height: 140, flexShrink: 0,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1, bgcolor: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1
        }}>
          <Box component="img" src={pump.imageUrl} alt={pump.modelCode}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900} color="primary"
            sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>
            TECHNICAL SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3}>
            <Spec label="Model Code" value={pump.modelCode} />
            <Spec label="P2" value={`${pump.p2Kw} kW`} />
            {pump.voltage != null && <Spec label="Voltage" value={`${pump.voltage}V`} />}
            {pump.rpm != null && <Spec label="RPM" value={`${pump.rpm}`} />}
            {pump.deliverySizeMm != null && <Spec label="Delivery Size" value={`${pump.deliverySizeMm}mm`} />}
            {pump.maxSolidSizeMm != null && <Spec label="Max Solid" value={`${pump.maxSolidSizeMm}mm`} />}
            {pump.weightKg != null && <Spec label="Weight" value={`${pump.weightKg}kg`} />}
            {pump.outletSize != null && <Spec label="Outlet" value={pump.outletSize} />}
            {pump.inbuiltTop != null && <Spec label="Inbuilt TOP" value={pump.inbuiltTop ? 'Yes' : 'No'} />}
          </Stack>
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

function QuoteCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null
  return (
    <Button size="small" variant="contained"
      onClick={(e) => {
        e.stopPropagation()
        context?.openQuote({ id: data?.modelCode, name: `${data?.modelCode} — Pump` })
      }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
        borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
        bgcolor: 'primary.main', color: '#fff', boxShadow: 'none',
        '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' }
      }}>
      Request Quote
    </Button>
  )
}

export default function AllPumpsTable({ models }: { models: NormalizedPump[] }) {
  const theme = useTheme()
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows(prev => {
      const next = new Set(prev)
      next.has(rowId) ? next.delete(rowId) : next.add(rowId)
      return next
    })
  }, [])

  const openQuote = useCallback((product: ProductForRFQ) => setQuoteProduct(product), [])

  const rowData = useMemo(() => {
    const rows: any[] = []
    models.forEach(p => {
      rows.push({ ...p, _isDetail: false })
      if (openRows.has(p._rowId)) rows.push({ ...p, _isDetail: true })
    })
    return rows
  }, [models, openRows])

  const colDefs: ColDef[] = useMemo(() => [
    {
      headerName: '', width: 48, pinned: 'left' as const, sortable: false,
      cellRenderer: 'expandCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    },
    {
      field: 'modelCode', headerName: 'Model Code', width: 180, pinned: 'left' as const,
      cellStyle: { fontFamily: 'monospace', fontWeight: '700', color: theme.palette.primary.main, fontSize: '0.8rem' } as any
    },
    { field: 'p2Kw', headerName: 'P2 (kW)', width: 100, type: 'numericColumn' },
    { field: 'voltage', headerName: 'Voltage (V)', width: 160, type: 'numericColumn', valueFormatter: (p: any) => p.value ?? '—' },
    { field: 'rpm', headerName: 'RPM', width: 150, type: 'numericColumn', valueFormatter: (p: any) => p.value ?? '—' },
    { field: 'deliverySizeMm', headerName: 'Delivery (mm)', width: 180, type: 'numericColumn', valueFormatter: (p: any) => p.value ? `${p.value}mm` : '—' },
    { field: 'maxSolidSizeMm', headerName: 'Max Solid (mm)', width: 160, type: 'numericColumn', valueFormatter: (p: any) => p.value ? `${p.value}mm` : '—' },
    { field: 'weightKg', headerName: 'Weight (kg)', width: 150, type: 'numericColumn', valueFormatter: (p: any) => p.value ? `${p.value}kg` : '—' },
    { field: 'outletSize', headerName: 'Outlet', width: 150, valueFormatter: (p: any) => p.value ?? '—' },
    { field: 'inbuiltTop', headerName: 'Inbuilt TOP',  flex: 1, valueFormatter: (p: any) => p.value === null || p.value === undefined ? '—' : p.value ? 'Yes' : 'No' },
    {
      headerName: 'Quote', width: 150, sortable: false, pinned: 'right' as const,
      cellRenderer: 'quoteCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }
  ], [theme])

  const defaultColDef: ColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow, openQuote }), [openRows, toggleRow, openQuote])

  return (
    <>
      <Box className="ag-theme-alpine" sx={{
        width: '100%',
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
            quoteCellRenderer: QuoteCellRenderer,
          }}
          context={gridContext}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer="detailPanelRenderer"
          getRowHeight={(params) => params.data?._isDetail ? 200 : 44}
          pagination
          paginationPageSize={20}
          domLayout="autoHeight"
        />
      </Box>

      {quoteProduct && (
        <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />
      )}
    </>
  )
}