"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const LOGO_URL =
  "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774526040/Untitled_design-6_nleu85.avif";

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