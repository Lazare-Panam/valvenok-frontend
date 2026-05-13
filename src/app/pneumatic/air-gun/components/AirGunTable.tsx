'use client'
import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TableSortLabel, Collapse, Typography, Stack, IconButton, Button
} from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { AirGunDTO } from "@/src/api/pneumaticApi"
import { CartItem, useCartStore } from  "@/src/app/cart/hooks/useCartStore"

// ─── MAPPER ─────────────────────────────────────────────────────────────────

function toCartItem(row: AirGunDTO): CartItem {
  return {
    id: row.partNumber,
    name: `Air Gun — ${row.partNumber}`,
    description: row.description,
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
  textTransform: 'none' as const,
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

function AirGunRow({ row }: { row: AirGunDTO }) {
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
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{row.description}</TableCell>
        <TableCell sx={{ py: 1, fontWeight: 700 }}>£{Number(row.price).toFixed(2)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={handleAddToCart} sx={cartBtnSx}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={5} sx={{ p: 0, borderBottom: "none" }}>
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
                      <Spec label="Description" value={row.description} />
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

type SortKey = "partNumber" | "description" | "price"

export default function AirGunTable({ models, isFetching }: { models: AirGunDTO[]; isFetching?: boolean }) {
  const theme = useTheme()
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
                { key: "description" as SortKey, label: "Description" },
                { key: "price" as SortKey, label: "Price (GBP)" },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  <TableSortLabel
                    active={sortKey === h.key}
                    direction={sortKey === h.key ? sortDir : "asc"}
                    onClick={() => handleSort(h.key)}>
                    {h.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell sx={headerSx}>Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.disabled">No air guns found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              sorted.map(row => <AirGunRow key={row.id} row={row} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}