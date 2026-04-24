"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const LOGO_URL =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/Valvenok_logo.jpeg";

export default function NavLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        px: 3,
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
            height: 96,
            width: "auto",
            maxWidth: 220,
            display: "block",
            objectFit: "contain",
            cursor: "pointer", // Ensures the hand icon appears on hover
          }}
        />
      </Link>
    </Box>
  );
}