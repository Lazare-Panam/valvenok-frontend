"use client";

import Box from "@mui/material/Box";
import Link from "next/link";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BRAND } from "@/src/theme/brand";

interface Props {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  href: string;
  barHeight: number;
}

export default function NavShopButton({
  open,
  onMouseEnter,
  onMouseLeave,
  href,
  barHeight,
}: Props) {
  return (
    <Box
      component={Link}
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexShrink: 0,
        height: barHeight,
        px: 3,
        border: "none",
        borderRadius: "0px",
        bgcolor: "primary.main",
        color: BRAND.white,
        textDecoration: "none",
        fontFamily: '"Barlow Condensed", sans-serif',
        fontSize: "17px",
        fontWeight: 800,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        transition: "background-color 0.15s",
        "&:hover": { bgcolor: "primary.dark" },
      }}
    >
      <StorefrontOutlinedIcon sx={{ fontSize: 20 }} />
      Categories
      <KeyboardArrowDownIcon
        sx={{
          fontSize: 20,
          transition: "transform 0.2s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Box>
  );
}