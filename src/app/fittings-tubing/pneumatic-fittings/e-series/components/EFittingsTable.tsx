'use client'
import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton, Button
} from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { EFittingDTO } from "../hooks/types"
import { CartItem, useCartStore } from "@/src/app/cart/hooks/useCartStore"

const E_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/e-series.webp"

function toCartItem(row: EFittingDTO): CartItem {
  const parts = [
    `Series: ${row.series}`,
    `Type: ${row.fittingType}`,
    row.tubeSize ? `Tube: ${row.tubeSize}mm` : null,
    row.threadSize ? `Thread: ${row.threadSize}` : 'Tube-to-Tube',
  ].filter(Boolean)

  return {
    id: row.partNumber,
    name: `E-Series Fitting — ${row.partNumber}`,
    description: parts.join(', '),
    partNumber: row.partNumber,
    price: Number(row.price),
    quantity: 1,
    cloudinaryId: E_IMAGE,
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

function Spec({ label, value }: { label: string; value?: string | number }) {
  if (!value && value !== 0) return null
  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function ERow({ row }: { row: EFittingDTO }) {
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
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: theme.palette.primary.main, fontSize: "0.78rem", py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{row.fittingType}</TableCell>
        <TableCell sx={{ py: 1 }}>{row.tubeSize ? `${row.tubeSize}mm` : "—"}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip
            label={row.threadSize || "Tube-to-Tube"}
            size="small"
            sx={{
              fontSize: "0.65rem", fontWeight: 700,
              bgcolor: row.threadSize ? alpha(theme.palette.primary.main, 0.1) : alpha("#607D8B", 0.1),
              color: row.threadSize ? theme.palette.primary.dark : "#37474F",
            }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontWeight: 700 }}>£{Number(row.price).toFixed(2)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={handleAddToCart} sx={cartBtnSx}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  <Box sx={{
                    flexShrink: 0, width: { xs: "100%", md: 220 }, height: 220,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderRadius: 2, bgcolor: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", p: 2,
                  }}>
                    <Box component="img" src={E_IMAGE} alt={row.partNumber}
                      sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 1, color: theme.palette.primary.main }}>
                      DESCRIPTION
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {row.description}
                    </Typography>

                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: theme.palette.primary.main }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Series" value={row.series} />
                      <Spec label="Fitting Type" value={row.fittingType} />
                      <Spec label="Tube Size" value={row.tubeSize ? `${row.tubeSize}mm` : undefined} />
                      <Spec label="Thread" value={row.threadSize || "Tube-to-Tube"} />
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

type SortKey = "partNumber" | "fittingType" | "tubeSize" | "price"

export default function EFittingsTable({ models }: { models: EFittingDTO[] }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [sortKey, setSortKey] = useState<SortKey>("fittingType")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("asc") }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey] ?? ""
    const bv = b[sortKey] ?? ""
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
      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: "partNumber" as SortKey, label: "Part Number" },
                { key: "fittingType" as SortKey, label: "Type" },
                { key: "tubeSize" as SortKey, label: "Tube" },
                { key: null, label: "Thread" },
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
                <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.disabled">No fittings found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <ERow key={row.partNumber} row={row} />)
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
        rowsPerPageOptions={[25, 50, 100, 200]}
        sx={{ borderTop: "1px solid rgba(0,0,0,0.06)", fontSize: "0.8rem" }}
      />
    </Box>
  )
}