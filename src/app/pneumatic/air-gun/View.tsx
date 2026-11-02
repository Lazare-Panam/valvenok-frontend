'use client'
import { Box, Typography, CircularProgress } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import AirGunTable from "./components/AirGunTable"
import { useAirGuns } from "../hooks/usePneumatic"
export default function AirGunPage() {
  const theme = useTheme()
  const { data: models = [], isLoading, isFetching } = useAirGuns()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Pneumatic Air Blow Guns for Industrial Cleaning and Drying
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          SPAC pneumatic air blow guns for industrial cleaning and drying applications. Available in multiple nozzle configurations.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Metal Body", "Short Nozzle", "Small Nozzle", "Angled Nozzle", "Bead Nozzle"].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {isLoading ? "LOADING..." : `${models.length} PRODUCTS`}
        </Typography>

        <Box sx={{
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
              <CircularProgress sx={{ color: theme.palette.primary.main }} />
            </Box>
          ) : (
            <AirGunTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}