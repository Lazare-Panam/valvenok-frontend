"use client";

import Box from "@mui/material/Box";
import { NAV_LINKS } from "./Navbardata";

export default function NavLinks() {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Box
          key={link.label}
          component="a"
          href={link.href}
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1.5,
            py: 0.75,
            borderRadius: 999,
            color: "#0E1B12",
            fontSize: "0.92rem",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "all 0.15s",
            "&:hover": { color: "#2E8B1E", bgcolor: "#EEF9EA" },
          }}
        >
          {link.label}
        </Box>
      ))}
    </>
  );
}
