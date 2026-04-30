'use client'
import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton
} from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { type ReducerDto } from "@/src/api/reducerApi"
import { FITTING_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/reducerTypes"

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function ReducerRow({ row }: { row: ReducerDto }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const unit1 = row.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unit2 = row.tubeOD2Unit === "Imperial" ? "inch" : "mm"
  const unit1Short = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const unit2Short = row.tubeOD2Unit === "Imperial" ? "in" : "mm"
  const isMixed = row.tubeODUnit !== row.tubeOD2Unit

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
          <Chip label={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unit1Short})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>
          {row.tubeOD2}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unit2Short})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          {isMixed
            ? <Chip label="Mixed" size="small" sx={{ fontSize: "0.6rem", fontWeight: 700, bgcolor: alpha("#FF9800", 0.1), color: "#E65100" }} />
            : <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: "0.65rem", fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark }} />
          }
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: "none" }}>
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
                    <Stack direction="row" flexWrap="wrap" gap={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unit1}`} />
                      <Spec label="Tube OD 2" value={`${row.tubeOD2} ${unit2}`} />
                      <Spec label="Unit System" value={isMixed ? "Mixed (Metric × Imperial)" : TUBE_OD_UNIT_LABELS[row.tubeODUnit]} />
                    </Stack>
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

type SortKey = "partNumber" | "fittingType" | "tubeOD" | "tubeOD2" | "tubeODUnit"

export default function ReducerTable({ models, isFetching }: { models: ReducerDto[]; isFetching?: boolean }) {
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
    const av = a[sortKey] ?? "", bv = b[sortKey] ?? ""
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
                { key: "fittingType" as SortKey, label: "Fitting Type" },
                { key: "tubeOD" as SortKey, label: "Tube OD" },
                { key: "tubeOD2" as SortKey, label: "Tube OD 2" },
                { key: "tubeODUnit" as SortKey, label: "Unit" },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : "asc"} onClick={() => handleSort(h.key)}>
                    {h.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary">No fittings found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <ReducerRow key={row.id} row={row} />)
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