"use client";

import Box from "@mui/material/Box";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  open: boolean;
  onClick: () => void;
  barHeight: number;
}

export default function NavShopButton({ open, onClick, barHeight }: Props) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexShrink: 0,
        height: barHeight,
        px: 3,
        border: "none",

        bgcolor: "primary.main",
        color: "#fff",
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
      Shop All Products
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