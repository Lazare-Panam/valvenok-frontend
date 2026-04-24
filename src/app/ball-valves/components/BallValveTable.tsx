'use client'
import { useMemo, useState, useCallback } from 'react'
import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { AgGridReact } from 'ag-grid-react'
import { type ColDef, type ICellRendererParams, type IsFullWidthRowParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { type BallValveDTO } from '../../../api/ballValveApi'
import { SERIES_LABELS, BODY_MATERIAL_LABELS } from './types'

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>{value ?? '—'}</Typography>
    </Box>
  )
}

function DetailPanelRenderer({ data }: ICellRendererParams) {
  const theme = useTheme()
  const valve: BallValveDTO = data
  return (
    <Box sx={{
      p: 3, minHeight: 200,
      bgcolor: alpha(theme.palette.primary.main, 0.02),
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      width: '100%'
    }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
        {valve.imageUrl && (
          <Box sx={{
            width: 140, height: 140, flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px',
            overflow: 'hidden', bgcolor: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <img src={valve.imageUrl} alt={valve.partNumber}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" fontWeight={900}
            sx={{ letterSpacing: 1, display: 'block', mb: 2, color: theme.palette.primary.main }}>
            SPECIFICATIONS
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
            <Spec label="Part Number" value={valve.partNumber} />
            <Spec label="Series" value={SERIES_LABELS[valve.series] ?? valve.series} />
            <Spec label="Body Material" value={BODY_MATERIAL_LABELS[valve.bodyMaterial] ?? valve.bodyMaterial} />
            <Spec label="Thread Type" value={valve.threadType} />
            <Spec label="End Connection" value={valve.endConnectionType} />
            <Spec label="Connection Size" value={valve.connectionSize} />
            <Spec label="Configuration" value={valve.configuration} />
            <Spec label="Seat Material" value={valve.seatMaterial} />
            <Spec label="Handle" value={valve.handle} />
            {valve.pressureRating && <Spec label="Pressure Rating" value={valve.pressureRating} />}
            <Spec label="Options" value={valve.options} />
          </Stack>
          <Button variant="contained" color="primary"
            sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}>
            Request Quote
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
        border: `1px solid ${isOpen ? theme.palette.primary.main : 'rgba(0,0,0,0.2)'}`,
        borderRadius: '4px',
        color: isOpen ? theme.palette.primary.main : 'text.disabled',
        '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main }
      }}>
      {isOpen ? <RemoveIcon sx={{ fontSize: 12 }} /> : <AddIcon sx={{ fontSize: 12 }} />}
    </Box>
  )
}

function QuoteCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null
  return (
    <Button size="small" variant="contained" color="primary"
      onClick={(e) => { e.stopPropagation(); context?.onQuote(data) }}
      sx={{
        fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
        borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap',
        boxShadow: 'none', '&:hover': { boxShadow: 'none' }
      }}>
      Request Quote
    </Button>
  )
}

function SeriesCellRenderer({ data }: ICellRendererParams) {
  const theme = useTheme()
  if (data?._isDetail) return null
  return (
    <Chip
      label={SERIES_LABELS[data?.series] ?? data?.series}
      size="small"
      sx={{
        fontSize: '0.65rem', fontWeight: 700,
        bgcolor: alpha(theme.palette.primary.main, 0.12),
        color: theme.palette.primary.dark
      }}
    />
  )
}

function PressureCellRenderer({ data }: ICellRendererParams) {
  const theme = useTheme()
  if (data?._isDetail) return null
  if (!data?.pressureRating) return <Typography variant="caption" color="text.disabled">—</Typography>
  return (
    <Chip label={data.pressureRating} size="small"
      sx={{
        fontSize: '0.65rem', fontWeight: 700,
        bgcolor: alpha(theme.palette.primary.main, 0.2),
        color: theme.palette.primary.dark
      }} />
  )
}

export default function BallValveTable({
  models,
  isFetching,
}: {
  models: BallValveDTO[]
  isFetching?: boolean
}) {
  const theme = useTheme()
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows(prev => {
      const next = new Set(prev)
      next.has(rowId) ? next.delete(rowId) : next.add(rowId)
      return next
    })
  }, [])

  const onQuote = useCallback((data: BallValveDTO) => {
    console.log('Quote requested:', data.partNumber)
  }, [])

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
      field: 'partNumber', headerName: 'Part Number', width: 220, pinned: 'left' as const,
      cellStyle: { fontFamily: 'monospace', fontWeight: '700', color: theme.palette.primary.main, fontSize: '0.8rem' } as any
    },
    {
      field: 'series', headerName: 'Series', width: 120,
      cellRenderer: 'seriesCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
    { field: 'threadType', headerName: 'Thread Type', width: 160 },
    { field: 'endConnectionType', headerName: 'End Connection', width: 150 },
    { field: 'connectionSize', headerName: 'Size', width: 100 },
    { field: 'configuration', headerName: 'Config', width: 110 },
    { field: 'seatMaterial', headerName: 'Seat', width: 100 },
    { field: 'handle', headerName: 'Handle', width: 100 },
    {
      field: 'pressureRating', headerName: 'Pressure', width: 110,
      cellRenderer: 'pressureCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center' } as any
    },
    {
      headerName: 'Quote', width: 150, sortable: false, pinned: 'right' as const,
      cellRenderer: 'quoteCellRenderer',
      cellStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' } as any
    }
  ], [theme])

  const defaultColDef: ColDef = useMemo(() => ({ sortable: true, resizable: true, filter: false }), [])
  const isFullWidthRow = useCallback((params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true, [])
  const gridContext = useMemo(() => ({ openRows, toggleRow, onQuote }), [openRows, toggleRow, onQuote])

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
              width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main,
              animation: 'pulse 1s ease-in-out infinite',
              '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } }
            }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>UPDATING</Typography>
          </Box>
        </Box>
      )}

      <Box className="ag-theme-alpine" sx={{
        width: '100%',
        opacity: isFetching ? 0.6 : 1,
        transition: 'opacity 0.2s ease',
        '& .ag-root-wrapper': { border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`, borderRadius: '8px' },
        '& .ag-header': { bgcolor: alpha(theme.palette.primary.main, 0.04), borderBottom: `2px solid ${theme.palette.primary.main}` },
        '& .ag-header-cell-text': { fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' },
        '& .ag-row': { borderBottom: '1px solid rgba(0,0,0,0.06)' },
        '& .ag-row:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
        '& .ag-row-even': { bgcolor: 'background.paper' },
        '& .ag-row-odd': { bgcolor: alpha(theme.palette.primary.main, 0.01) },
        '& .ag-cell': { fontSize: '0.82rem' },
        '& .ag-paging-panel': { borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' },
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
            seriesCellRenderer: SeriesCellRenderer,
            pressureCellRenderer: PressureCellRenderer,
          }}
          context={gridContext}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer="detailPanelRenderer"
          getRowHeight={(params) => params.data?._isDetail ? 260 : 44}
          pagination
          paginationPageSize={20}
          domLayout="autoHeight"
        />
      </Box>
    </Box>
  )
}