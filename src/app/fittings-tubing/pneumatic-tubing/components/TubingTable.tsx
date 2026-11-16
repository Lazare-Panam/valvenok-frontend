'use client'
import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton, Button
} from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { TubingDTO } from "@/src/api/pneumaticApi"
import { TUBING_TYPE_LABELS, COLOR_LABELS } from "./TubingSidebar"
import { CartItem, useCartStore } from "@/src/app/cart/hooks/useCartStore"

const COLOR_HEX: Record<string, string> = {
  BLU: "#1565C0", YEL: "#F9A825", BLK: "#212121", GRN: "#2E7D32",
  RED: "#C62828", TRP: "#90CAF9", TBU: "#4FC3F7", MWH: "#B0BEC5", TRD: "#EF9A9A",
}

// ─── MAPPER ─────────────────────────────────────────────────────────────────

function toCartItem(row: TubingDTO): CartItem {
  const typeLabel = TUBING_TYPE_LABELS[row.tubingType] ?? row.tubingType
  const colorLabel = COLOR_LABELS[row.color] ?? row.color

  const descriptionParts = [
    `Type: ${typeLabel}`,
    `OD: ${row.od}mm`,
    `ID: ${row.innerDiameter}mm`,
    `Color: ${colorLabel}`,
    `Length: ${row.rollLength}m`,
    row.hasConnector ? `Connector: ${row.connectorSpec ?? 'Yes'}` : null,
  ].filter(Boolean)

  return {
    id: row.partNumber,
    name: `${typeLabel} Tubing — ${row.partNumber}`,
    description: descriptionParts.join(', '),
    partNumber: row.partNumber,
    price: Number(row.price),
    quantity: 1,
    cloudinaryId: row.imageUrl ?? '',
  }
}

const cartBtnSx = {
  fontSize: '0.7rem',
  fontWeight: 700,
  py: 0.5,
  px: 1.5,
  borderRadius: '4px',
  textTransform: 'capitalize' as const,
  whiteSpace: 'nowrap' as const,
  boxShadow: 'none',
  backgroundColor: '#2e7d32',
  '&:hover': { boxShadow: 'none', backgroundColor: '#1b5e20' },
}

// ─── SPEC ───────────────────────────────────────────────────────────────────

function Spec({ label, value }: { label: string; value?: string | number }) {
  if (!value && value !== 0) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

// ─── ROW ────────────────────────────────────────────────────────────────────

function TubingRow({ row }: { row: TubingDTO }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(toCartItem(row))
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: "pointer",
        bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : "inherit",
        "&:hover": { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: theme.palette.primary.main, fontSize: "0.8rem", py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={TUBING_TYPE_LABELS[row.tubingType] ?? row.tubingType} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }}
          />
        </TableCell>
        <TableCell sx={{ py: 1 }}>{row.od}mm</TableCell>
        <TableCell sx={{ py: 1 }}>{row.innerDiameter}mm</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: COLOR_HEX[row.color] ?? "#999", border: "1px solid rgba(0,0,0,0.15)", flexShrink: 0 }} />
            <Typography variant="body2" fontSize="0.82rem">{COLOR_LABELS[row.color] ?? row.color}</Typography>
          </Stack>
        </TableCell>
        <TableCell sx={{ py: 1 }}>{row.rollLength}m</TableCell>
        <TableCell sx={{ py: 1, fontWeight: 700 }}>£{Number(row.price).toFixed(2)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={handleAddToCart} sx={cartBtnSx}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", overflow: "hidden", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: theme.palette.primary.main }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Type" value={TUBING_TYPE_LABELS[row.tubingType] ?? row.tubingType} />
                      <Spec label="Outer Diameter" value={`${row.od}mm`} />
                      <Spec label="Inner Diameter" value={`${row.innerDiameter}mm`} />
                      <Spec label="Color" value={COLOR_LABELS[row.color] ?? row.color} />
                      <Spec label="Roll Length" value={`${row.rollLength}m`} />
                      <Spec label="Connector" value={row.hasConnector ? row.connectorSpec ?? "Yes" : "None"} />
                      <Spec label="Price" value={`£${Number(row.price).toFixed(2)}`} />
                    </Stack>
                    <Button variant="contained" onClick={handleAddToCart} sx={cartBtnSx}>
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

// ─── TABLE ──────────────────────────────────────────────────────────────────

type SortKey = "partNumber" | "od" | "innerDiameter" | "rollLength" | "price"

export default function TubingTable({ models, isFetching }: { models: TubingDTO[]; isFetching?: boolean }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>("partNumber")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("asc") }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey]
    if (av < bv) return sortDir === "asc" ? -1 : 1
    if (av > bv) return sortDir === "asc" ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: "0.72rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  }

  return (
    <Box sx={{ position: "relative", flex: 1, minWidth: 0 }}>
      {isFetching && (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: "blur(2px)", bgcolor: "rgba(255,255,255,0.4)", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "background.paper", px: 3, py: 1.5, borderRadius: "20px", boxShadow: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: theme.palette.primary.main, animation: "pulse 1s ease-in-out infinite", "@keyframes pulse": { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.3 } } }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>UPDATING</Typography>
          </Box>
        </Box>
      )}
      <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: "opacity 0.2s ease" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: "partNumber" as SortKey, label: "Part Number" },
                { key: null, label: "Type" },
                { key: "od" as SortKey, label: "OD" },
                { key: "innerDiameter" as SortKey, label: "ID" },
                { key: null, label: "Color" },
                { key: "rollLength" as SortKey, label: "Length" },
                { key: "price" as SortKey, label: "Price (GBP)" },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  {h.key ? (
                    <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : "asc"} onClick={() => handleSort(h.key!)}>
                      {h.label}
                    </TableSortLabel>
                  ) : h.label}
                </TableCell>
              ))}
              <TableCell sx={headerSx}>Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.disabled">No tubing found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <TubingRow key={row.id} row={row} />)
            )}
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
        sx={{ borderTop: "1px solid rgba(0,0,0,0.06)", fontSize: "0.8rem" }}
      />
    </Box>
  )
}