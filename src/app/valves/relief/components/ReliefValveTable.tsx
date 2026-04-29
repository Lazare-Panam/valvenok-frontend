'use client'
import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton
} from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

import { ReliefValveDto } from "@/src/api/reliefValveApi"
import {
  SERIES_LABELS, BODY_MATERIAL_LABELS, CONNECTION_TYPE_LABELS,
  THREAD_TYPE_LABELS, SEAL_MATERIAL_LABELS, SPRING_LABELS, CONNECTION_SIZE_LABELS
} from "./ReliefValveSidebar"

function Spec({ label, value }: { label: string; value?: string }) {
  const theme = useTheme()
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function ReliefValveRow({ row }: { row: ReliefValveDto }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

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
          <Chip label={row.series} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{BODY_MATERIAL_LABELS[row.bodyMaterial] ?? row.bodyMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{CONNECTION_SIZE_LABELS[row.connectionSize] ?? row.connectionSize}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{THREAD_TYPE_LABELS[row.threadType] ?? row.threadType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{CONNECTION_TYPE_LABELS[row.connectionType] ?? row.connectionType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{SPRING_LABELS[row.spring] ?? row.spring}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{SEAL_MATERIAL_LABELS[row.sealMaterial] ?? row.sealMaterial}</TableCell>
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
                    <Stack direction="row" flexWrap="wrap" gap={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Series" value={SERIES_LABELS[row.series] ?? row.series} />
                      <Spec label="Body Material" value={BODY_MATERIAL_LABELS[row.bodyMaterial] ?? row.bodyMaterial} />
                      <Spec label="Connection Size" value={CONNECTION_SIZE_LABELS[row.connectionSize] ?? row.connectionSize} />
                      <Spec label="Thread Type" value={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} />
                      <Spec label="Connection Type" value={CONNECTION_TYPE_LABELS[row.connectionType] ?? row.connectionType} />
                      <Spec label="Spring" value={SPRING_LABELS[row.spring] ?? row.spring} />
                      <Spec label="Seal Material" value={SEAL_MATERIAL_LABELS[row.sealMaterial] ?? row.sealMaterial} />
                      {row.options && <Spec label="Options" value={row.options} />}
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

type SortKey = "partNumber" | "series" | "connectionSize" | "spring"

export default function ReliefValveTable({ models, isFetching }: { models: ReliefValveDto[]; isFetching?: boolean }) {
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
                { key: "series" as SortKey, label: "Series" },
                { key: null, label: "Material" },
                { key: "connectionSize" as SortKey, label: "Size" },
                { key: null, label: "Thread" },
                { key: null, label: "Connection" },
                { key: "spring" as SortKey, label: "Spring" },
                { key: null, label: "Seal" },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  {h.key ? (
                    <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : "asc"} onClick={() => handleSort(h.key!)}>
                      {h.label}
                    </TableSortLabel>
                  ) : h.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.disabled">No relief valves found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <ReliefValveRow key={row.id} row={row} />)
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