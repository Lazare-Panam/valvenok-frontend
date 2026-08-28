"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const LOGO_URL =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

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
          alt="Company Logo"
          sx={{
            height: { xs: 44, sm: 56, md: 96 },
            width: "auto",
            maxWidth: { xs: 120, sm: 160, md: 220 },
            display: "block",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
      </Link>
    </Box>
  );
}
