"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const LOGO_URL =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export default function NavLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        px: { xs: 1, md: 3 },
        height: "100%",
      }}
    >
      <Link
        component={NextLink}
        href="/"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="img"
          src={LOGO_URL}
          alt="Valvenok"
          sx={{
            height: { xs: 44, sm: 56, md: 116 },
            width: { xs: 130, sm: 170, md: 240 },
            display: "block",
            objectFit: "contain",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            "&:hover": { opacity: 0.85 },
          }}
        />
      </Link>
    </Box>
  );
}
