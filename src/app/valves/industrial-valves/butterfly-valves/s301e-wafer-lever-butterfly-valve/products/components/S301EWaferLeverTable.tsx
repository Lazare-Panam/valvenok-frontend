// components/S301EWaferLeverTable.tsx
import { useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FilterListIcon from '@mui/icons-material/FilterList';
import { type S301EWaferLeverDTO, type S301EWaferLeverFilters, type AvailableCountsS301EWaferLever } from '../hooks/s301eWaferLeverData';
import { S301EWaferLeverSidebar } from './S301EWaferLeverSidebar';
import RFQModal from '@/src/app/Common/RFQCard/RFQModal';
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard';

const BRAND_GREEN = '#61D649';
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  );
}

function S301EWaferLeverRow({ row }: { row: S301EWaferLeverDTO }) {
  const [open, setOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `SIRCA S301E ${row.size} Wafer Butterfly Valve — ${row.liner} Liner — Lever`,
    brand: 'ISIS Fluid Control',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'S301E Wafer Lever',
    thumbnail: row.imageUrl,
    description: row.description,
    keySpecs: [
      { label: 'Article No.',  value: row.articleNo },
      { label: 'Size',         value: `${row.size} (${row.sizeDN})` },
      { label: 'Liner',        value: row.liner },
      { label: 'Face To Face', value: row.faceToFace },
      { label: 'Weight',       value: `${row.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: row.size },
  });

  const linerColor = row.liner === 'EPDM'
    ? { borderColor: BRAND_GREEN, color: BRAND_GREEN }
    : { borderColor: '#1565c0', color: '#1565c0' };

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.articleNo}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.size} ({row.sizeDN})</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.liner} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, ...linerColor }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.faceToFace}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.weightKg} kg</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote(); }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.articleNo} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Article No."  value={row.articleNo} />
                      <Spec label="Size"         value={`${row.size} (${row.sizeDN})`} />
                      <Spec label="Liner"        value={row.liner} />
                      <Spec label="Disc"         value="316 Stainless Steel" />
                      <Spec label="Face To Face" value={row.faceToFace} />
                      <Spec label="Weight"       value={`${row.weightKg} kg`} />
                      <Spec label="Operator"     value="10-Position Leverlock" />
                      <Spec label="Pressure"     value="PN6 / PN10 / PN16 / ANSI 150" />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
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
      {quoteProduct && <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />}
    </>
  );
}

type SortKey = 'articleNo' | 'size' | 'weightKg';

export default function S301EWaferLeverTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: S301EWaferLeverDTO[];
  filters: S301EWaferLeverFilters;
  setFilters: React.Dispatch<React.SetStateAction<S301EWaferLeverFilters>>;
  availableCounts: AvailableCountsS301EWaferLever;
  activeCount: number;
}) {
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortKey, setSortKey] = useState<SortKey>('articleNo');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const sorted = [...models].sort((a, b) => {
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '');
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  };

  const sidebar = <S301EWaferLeverSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />;

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
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'articleNo'} direction={sortKey === 'articleNo' ? sortDir : 'asc'} onClick={() => handleSort('articleNo')}>Article No.</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'size'} direction={sortKey === 'size' ? sortDir : 'asc'} onClick={() => handleSort('size')}>Size</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Liner</TableCell>
                <TableCell sx={headerSx}>Face To Face</TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'weightKg'} direction={sortKey === 'weightKg' ? sortDir : 'asc'} onClick={() => handleSort('weightKg')}>Weight</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No valves found.</Typography></TableCell></TableRow>
                : paginated.map(row => <S301EWaferLeverRow key={row.id} row={row} />)
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
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0); }}
          rowsPerPageOptions={[25, 50, 100]}
          sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  );
}