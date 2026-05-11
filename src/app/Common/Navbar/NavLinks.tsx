"use client";

import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import { NAV_LINKS } from "./Navbardata";

interface Props {
  barHeight: number;
}

export default function NavLinks({ barHeight }: Props) {
  const theme = useTheme();

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
            height: barHeight,
            px: 2,
            color: "text.primary",
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "20x",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "all 0.15s",
            "&:hover": {
              color: "primary.main",
              bgcolor: alpha(theme.palette.primary.main, 0.05),
            },
          }}
        >
          {link.label}
        </Box>
      ))}
    </>
  );
}