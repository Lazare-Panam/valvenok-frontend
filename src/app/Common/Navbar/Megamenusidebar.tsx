"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CATEGORIES } from "./Navbardata";

interface Props {
  activeCategory: string;
  onHover: (id: string) => void;
}

export default function MegaMenuSidebar({ activeCategory, onHover }: Props) {
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      {CATEGORIES.map((cat) => (
        <Box
          key={cat.id}
          onMouseEnter={() => onHover(cat.id)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            py: 1.75,
            cursor: "pointer",
            bgcolor: activeCategory === cat.id ? cat.color : "transparent",
            transition: "background-color 0.2s",
            "&:hover": {
              bgcolor:
                activeCategory === cat.id
                  ? cat.color
                  : alpha(cat.color, 0.1),
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: activeCategory === cat.id ? cat.textColor : "text.primary",
            }}
          >
            {cat.label}
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              fontSize: 18,
              color:
                activeCategory === cat.id
                  ? alpha(cat.textColor, 0.7)
                  : "divider",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}