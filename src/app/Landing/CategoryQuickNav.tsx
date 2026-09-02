"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";

// Mirrors the category set in Categories.tsx — this is a fast-access strip,
// not a replacement for the full browse section further down the page.
const QUICK_LINKS = [
  { name: "Hydrogen & Cryogenic", href: "/hydrogen-cryogenic", icon: AcUnitOutlinedIcon },
  { name: "Valves", href: "/valves/instrumentation-valves/ball-valves", icon: TuneOutlinedIcon },
  { name: "Fittings & Instrumentation", href: "/fittings-tubing/instrumentation-fittings/jic-fittings", icon: BuildOutlinedIcon },
  { name: "Filters", href: "/collections/pneumatics", icon: FilterAltOutlinedIcon },
  { name: "Actuators", href: "/pneumatic/actuators", icon: SettingsOutlinedIcon },
  { name: "Pumps & Mechanical Seal", href: "/collections/tormac-pumps", icon: LoopOutlinedIcon },
];

export default function CategoryQuickNav() {
  return (
    <Box
      component="nav"
      aria-label="Quick category navigation"
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: { xs: 1, md: 0 },
            py: { xs: 1.5, md: 0 },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {QUICK_LINKS.map(({ name, href, icon: Icon }) => (
            <Box
              key={name}
              component={Link}
              href={href}
              sx={{
                flex: { md: 1 },
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: { xs: 1, md: 2 },
                px: { xs: 2, md: 1.5 },
                textDecoration: "none",
                color: "text.secondary",
                borderRight: { md: "1px solid" },
                borderColor: "divider",
                transition: "color 0.2s ease, background-color 0.2s ease",
                "&:last-of-type": { borderRight: "none" },
                "&:hover": {
                  color: "primary.dark",
                  bgcolor: "grey.50",
                },
                "&:hover .quick-nav-icon": { transform: "scale(1.12)" },
              }}
            >
              <Icon
                className="quick-nav-icon"
                sx={{ fontSize: 20, color: "primary.main", transition: "transform 0.2s ease", flexShrink: 0 }}
              />
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
