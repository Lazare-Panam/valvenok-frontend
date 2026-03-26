"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import type { Product } from "./Navbardata";

interface Props {
  categoryLabel: string;
  products: Product[];
  onClose: () => void;
}

export default function MegaMenuProducts({ categoryLabel, products, onClose }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
      {/* Section eyebrow */}
      <Typography
        sx={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "text.secondary",
          mb: 2.5,
        }}
      >
        {categoryLabel} Products
      </Typography>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: 1.5,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.label}
            component="a"
            href={product.href}
            onClick={onClose}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              border: "1.5px solid",
              borderColor: "divider",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.15s",
              "&:hover": {
                borderColor: "primary.main",
                boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.14)}`,
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box sx={{ color: "primary.main", mb: 1, "& svg": { fontSize: 30 } }}>
              {product.icon}
            </Box>
            <Typography
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "text.primary",
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {product.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}