"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import MegaMenuSidebar from "./Megamenusidebar";
import MegaMenuProducts from "./MegaMenuProducts";
import { CATEGORIES } from "./Navbardata";

interface Props {
  onClose: () => void;
}

export default function MegaMenu({ onClose }: Props) {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = React.useState("hydraulic");

  const active = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        display: "flex",
        bgcolor: "background.paper",
        borderTop: "3px solid",
        borderColor: "primary.main",
        boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.15)}`,
        zIndex: 300,
        maxHeight: "70vh",
        overflow: "hidden",
      }}
    >
      <MegaMenuSidebar
        activeCategory={activeCategory}
        onHover={setActiveCategory}
      />
      {active && (
        <MegaMenuProducts
          categoryLabel={active.label}
          products={active.products}
          onClose={onClose}
        />
      )}
    </Box>
  );
}