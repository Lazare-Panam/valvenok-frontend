'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import Link from "next/link"
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import { useReliefValves, useReliefValveFilterOptions } from "./hooks/useReliefValve"
import { ReliefValveSidebar, EMPTY_RELIEF_VALVE_FILTERS, type ReliefValveFilters } from "./components/ReliefValveSidebar"

import ReliefValveTable from "./components/ReliefValveTable"
import { ReliefValveActiveFilters } from "./components/ReliefValveActiveFilters"
const FAQ = [
  {
    icon: TuneOutlinedIcon,
    q: "What spring ranges are available?",
    a: "Ten colour-coded springs cover 50 to 15,000 psi, from A (white, 50–350 psi) to J (red, 7,500–15,000 psi). Choose the spring whose range brackets your set pressure, then adjust the valve to the exact set point.",
  },
  {
    icon: SettingsInputComponentOutlinedIcon,
    q: "Which connections can I choose?",
    a: "NPT, BSPT and BSPP threads in 1/4\", 3/8\" and 1/2\", M20×1.5, and 6, 8, 10 and 12 mm tube ends. End styles are female × female, male × female, male × OD and tube fitting. Use the filters to see every combination.",
  },
  {
    icon: ShieldOutlinedIcon,
    q: "Can an instrumentation relief valve be used as a safety valve?",
    a: "Not where a code requires a certified safety valve. These valves protect instrument, sampling and hydraulic lines; boilers and pressure vessels need a safety valve certified to the relevant code. Ask us which certificates are available for a given model.",
  },
]

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
}

export default function ReliefValvePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ReliefValveFilters>(EMPTY_RELIEF_VALVE_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useReliefValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useReliefValves(filters)

  const activeCount =
    filters.series.length +
    filters.bodyMaterials.length +
    filters.connectionSizes.length +
    filters.threadTypes.length +
    filters.connectionTypes.length +
    filters.springs.length +
    filters.sealMaterials.length

  const sidebar = (
    <ReliefValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Instrumentation Relief Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          RVL low pressure and RVH high pressure relief valves in SS 316, plus PRVH-10K and PRVH-15K. Available in NPT, BSPT and BSPP thread types with spring ranges from 50 to 15,000 psi.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["RVL Series", "RVH Series", "PRVH-10K", "PRVH-15K", "SS 316", "Up to 15,000 psi"].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
        <Box component={Link} href="/valves/safety-relief-valves" sx={{ mt: 2, display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.88rem", fontWeight: 700, color: theme.palette.primary.main, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          <ArrowUpwardRoundedIcon sx={{ fontSize: 16 }} /> All safety and relief valves
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <ReliefValveActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          {isLoading ? (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
              <CircularProgress sx={{ color: theme.palette.primary.main }} />
            </Box>
          ) : (
            <ReliefValveTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>

      <Box component="section" aria-labelledby="relief-faq" sx={{ px: { xs: 2, md: 3 }, pb: 6, maxWidth: 900 }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
        <Typography id="relief-faq" variant="h5" component="h2" fontWeight={800} mb={2} sx={{ color: theme.palette.primary.main }}>
          Relief Valve FAQs
        </Typography>
        <Box sx={{ display: "grid", gap: 1.25 }}>
          {FAQ.map((f) => (
            <Box key={f.q} sx={{ display: "flex", gap: 2, p: 2.5, borderRadius: "14px", bgcolor: "background.paper", border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}` }}>
              <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, display: "grid", placeItems: "center" }}>
                <f.icon sx={{ fontSize: 21 }} />
              </Box>
              <Box>
                <Typography component="h3" fontWeight={700} mb={0.5}>{f.q}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{f.a}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}