import { useMemo, useState, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ICellRendererParams, IsFullWidthRowParams } from 'ag-grid-community'
import { Box, Stack, Typography, Divider, Chip, Button } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { SubmersibleModelDTO } from '@/src/api/pumpsApi'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

function Spec({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}
        sx={{ fontFamily: mono ? 'monospace' : undefined }}>
        {value}
      </Typography>
    </Box>
  )
}

function DetailPanelRenderer({ data }: ICellRendererParams) {
  const theme = useTheme()
  const model: SubmersibleModelDTO = data

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
          <Box component="img" src={model.imageUrl} alt={model.modelCode}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900} color="primary"
            sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>
            TECHNICAL SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3}>
            <Spec label="Model Code" value={model.modelCode} mono />
            <Spec label="Version" value={model.version} />
            <Spec label="Material" value={model.material} />
            <Spec label="Diameter" value={`${model.diameterInches} (${model.diameterMm}mm)`} />
            <Spec label="Flow Rate" value={`${model.flowM3Hr} m³/hr`} />
            <Spec label="Max Head" value={`${model.maxHeadM} m`} />
            <Spec label="Power" value={`${model.powerKw} kW / ${model.powerHp} HP`} />
            <Spec label="Outlet Size" value={model.outletSize} />
            <Spec label="Speed" value={`${model.speed} rpm`} />
            {model.impellerTrim && (
              <Spec label="Impeller Trim"
                value={model.impellerTrim === 'A' ? 'A — One Trimmed' : 'AA — Two Trimmed'} />
            )}
            {model.motorDiameter && (
              <Spec label="Motor Diameter" value={`${model.motorDiameter}"`} />
            )}
          </Stack>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box sx={{ minWidth: 140 }}>
          <Typography variant="caption" fontWeight={900} color="text.disabled"
            sx={{ display: 'block', mb: 2 }}>
            SERIES
          </Typography>
          <Chip
            label={model.version === 'TS' ? 'AISI 304' : model.version === 'TN' ? 'AISI 316' : 'AISI 904L'}
            color="primary" variant="outlined" size="small"
            sx={{ mb: 1, display: 'block', width: 'fit-content' }}
          />
          <Typography variant="caption" color="text.secondary">
            {model.material}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

function ExpandCellRenderer({ data, context }: ICellRendererParams) {
  const theme = useTheme()
  const isOpen = context?.openRows?.has(data?._rowId)

  return (
    <Box
      onClick={(e) => { e.stopPropagation(); context?.toggleRow(data?._rowId) }}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 24, height: 24, cursor: 'pointer',
        border: `1px solid ${isOpen ? theme.palette.primary.main : theme.palette.divider}`,
        borderRadius: '4px',
        color: isOpen ? 'primary.main' : 'text.disabled',
        '&:hover': { borderColor: 'primary.main', color: 'primary.main' }
      }}
    >
      {isOpen ? <RemoveIcon sx={{ fontSize: 12 }} /> : <AddIcon sx={{ fontSize: 12 }} />}
    </Box>
  )
}

function QuoteCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null

  return (
    <Button
      size="small"
      variant="contained"
      onClick={(e) => {
        e.stopPropagation()
        context?.openQuote({
          id: data?.modelCode,
          name: `${data?.modelCode} — ${data?.diameterInches} Submersible Pump`
        })
      }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700,
        py: 0.5, px: 1.5, borderRadius: '0px',
        textTransform: 'none', whiteSpace: 'nowrap'
      }}
    >
      Request Quote
    </Button>
  )
}

export default function SubmersibleTable({ models }: { models: SubmersibleModelDTO[] }) {
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

  const openQuote = useCallback((product: ProductForRFQ) => {
    setQuoteProduct(product)
  }, [])

  const rowData = useMemo(() => {
    const rows: any[] = []
    models.forEach((m, i) => {
      const rowId = `${m.modelCode}-${i}`
      rows.push({ ...m, _rowId: rowId, _isDetail: false })
      if (openRows.has(rowId)) {
        rows.push({ ...m, _rowId: rowId, _isDetail: true })
      }
    })
    return rows
  }, [models, openRows])

  const colDefs: ColDef[] = useMemo(() => [
    {
      headerName: '',
      width: 48,
      pinned: 'left' as const,
      sortable: false,
      cellRenderer: 'expandCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    },
    {
      field: 'modelCode', headerName: 'Model Code', width: 170, pinned: 'left' as const,
      cellStyle: {
        fontFamily: 'monospace', fontWeight: '700',
        color: theme.palette.primary.main, fontSize: '0.8rem'
      } as any
    },
    { field: 'version', headerName: 'Version', width: 100 },
    { field: 'diameterInches', headerName: 'Diameter', width: 110 },
    { field: 'flowM3Hr', headerName: 'Flow (m³/hr)', width: 130, type: 'numericColumn' },
    { field: 'maxHeadM', headerName: 'Max Head (m)', width: 140, type: 'numericColumn' },
    { field: 'powerKw', headerName: 'Power (kW)', width: 120, type: 'numericColumn' },
    { field: 'powerHp', headerName: 'Power (HP)', width: 120, type: 'numericColumn' },
    { field: 'outletSize', headerName: 'Outlet Size', width: 120 },
    { field: 'speed', headerName: 'Speed (rpm)', width: 130, type: 'numericColumn' },
    {
      field: 'impellerTrim', headerName: 'Impeller Trim', width: 140,
      valueFormatter: (p: any) => p.value === 'A' ? 'A — One Trimmed' : p.value === 'AA' ? 'AA — Two Trimmed' : '—'
    },
    {
      field: 'motorDiameter', headerName: 'Motor Ø', width: 110,
      valueFormatter: (p: any) => p.value ? `${p.value}"` : '—'
    },
    { field: 'material', headerName: 'Material', width: 180 },
    {
      headerName: 'Quote',
      width: 150,
      sortable: false,
      pinned: 'right' as const,
      cellRenderer: 'quoteCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }
  ], [theme])

  const defaultColDef: ColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
    filter: false,
  }), [])

  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => {
    return params.rowNode.data?._isDetail === true
  }, [])

  const gridContext = useMemo(() => ({
    openRows, toggleRow, openQuote
  }), [openRows, toggleRow, openQuote])

  return (
    <>
      <Box
        className="ag-theme-alpine"
        sx={{
          width: '100%',
          '& .ag-root-wrapper': { border: `1px solid ${theme.palette.divider}`, borderRadius: '8px' },
          '& .ag-header': {
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          },
          '& .ag-header-cell-text': {
            fontSize: '0.72rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.05em'
          },
          '& .ag-row': { borderBottom: `1px solid ${theme.palette.divider}` },
          '& .ag-row:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
          '& .ag-row-even': { bgcolor: 'background.paper' },
          '& .ag-row-odd': { bgcolor: alpha(theme.palette.primary.main, 0.01) },
          '& .ag-cell': { fontSize: '0.82rem' },
          '& .ag-paging-panel': {
            borderTop: `1px solid ${theme.palette.divider}`,
            fontSize: '0.8rem'
          },
          '& .ag-full-width-row': { bgcolor: 'transparent !important' },
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          components={{
            expandCellRenderer: ExpandCellRenderer,
            detailPanelRenderer: DetailPanelRenderer,
            quoteCellRenderer: QuoteCellRenderer,
          }}
          context={gridContext}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer="detailPanelRenderer"
          getRowHeight={(params) => params.data?._isDetail ? 220 : 44}
          pagination
          paginationPageSize={50}
          domLayout="autoHeight"
        />
        <Box sx={{
          px: 2, py: 1.5,
          border: `1px solid ${theme.palette.divider}`,
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          bgcolor: alpha(theme.palette.primary.main, 0.02)
        }}>
          <Typography variant="caption" color="text.primary">
            * For AISI 316 replace TS with TN — Performance Data remains same.
            &nbsp;&nbsp;|&nbsp;&nbsp;
            * For AISI 904L replace TS with TL — Performance Data remains same.
          </Typography>
        </Box>
      </Box>

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