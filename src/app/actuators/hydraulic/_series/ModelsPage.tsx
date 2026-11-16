'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Typography, Stack, IconButton, Button,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DownloadIcon from '@mui/icons-material/Download'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { type SeriesDef, type ModelGroup, type ModelRow, modelCount } from './types'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT, textTransform: 'capitalize' }}>{value}</Typography>
    </Box>
  )
}

function Row({ def, g, row, onQuote }: { def: SeriesDef; g: ModelGroup; row: ModelRow; onQuote: (g: ModelGroup, r: ModelRow) => void }) {
  const [open, setOpen] = useState(false)
  const cell = { py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, textTransform: 'capitalize' as const }
  const cols = g.summary.map(k => g.cols.find(c => c.key === k)!)
  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit' }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" aria-label={open ? 'Hide details' : 'Show details'}
            onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        {cols.map((c, i) => <TableCell key={c.key} sx={{ ...cell, fontWeight: i === 0 ? 700 : 400 }}>{row[c.key]}</TableCell>)}
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); onQuote(g, row) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={cols.length + 2} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={def.image} alt={`${def.code} ${row.model} hydraulic actuator`} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Version" value={g.title} />
                      {g.cols.filter(c => row[c.key]).map(c => <Spec key={c.key} label={c.label} value={row[c.key]} />)}
                      {def.common.map(c => <Spec key={c.label} label={c.label} value={c.value} />)}
                    </Stack>
                    <Button variant="contained" onClick={() => onQuote(g, row)}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                      Request Quote
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

export default function ModelsPage({ def }: { def: SeriesDef }) {
  const [quote, setQuote] = useState<ProductForRFQ | null>(null)

  const openQuote = (g: ModelGroup, r: ModelRow) => {
    const specs = g.summary.slice(1, 5).map(k => ({ label: g.cols.find(c => c.key === k)!.label, value: r[k] }))
    setQuote({
      id: `${def.code}-${r.model}`,
      name: `${def.rfqName} — ${r.model}`,
      brand: 'Susin',
      category: 'Hydraulic Actuators',
      categoryId: 'hydraulic-actuators',
      subCategory: def.subCategory,
      thumbnail: def.image,
      description: `${def.code} ${r.model}, ${g.title.toLowerCase()}.`,
      keySpecs: [{ label: 'Model', value: r.model }, { label: 'Version', value: g.title }, ...specs],
      variantInfo: { count: 1, sizeRange: r.model },
    })
  }

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04), borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' as const,
    letterSpacing: '0.05em', fontFamily: PRIMARY_FONT, whiteSpace: 'nowrap' as const,
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {def.listTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT, textTransform: 'capitalize' }}>
          {def.listIntro}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {def.listChips.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
          <Button href={def.catalog} target="_blank" rel="noopener" size="small" startIcon={<DownloadIcon />}
            sx={{ textTransform: 'capitalize', fontWeight: 700, color: '#2d8a1e' }}>
            Catalogue (PDF)
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2, fontFamily: PRIMARY_FONT }}>
          {`${modelCount(def)} MODELS`}
        </Typography>
        {def.groups.map(g => {
          const cols = g.summary.map(k => g.cols.find(c => c.key === k)!)
          return (
            <Box key={g.key} sx={{ mb: 4 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, mb: 0.5 }}>
                {g.title} <Box component="span" sx={{ color: 'text.disabled', fontWeight: 600, fontSize: '0.85rem' }}>· {g.rows.length} models</Box>
              </Typography>
              {g.note && <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontFamily: PRIMARY_FONT, textTransform: 'capitalize' }}>{g.note}</Typography>}
              <TableContainer sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ ...headerSx, width: 40 }} />
                      {cols.map(c => <TableCell key={c.key} sx={headerSx}>{c.label}</TableCell>)}
                      <TableCell sx={headerSx}>Quote</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {g.rows.map(r => <Row key={r.model} def={def} g={g} row={r} onQuote={openQuote} />)}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )
        })}
      </Box>
      {quote && <RFQModal open onClose={() => setQuote(null)} product={quote} />}
    </Box>
  )
}
