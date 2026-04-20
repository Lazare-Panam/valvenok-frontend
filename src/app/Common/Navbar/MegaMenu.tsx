"use client";

import * as React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CATEGORIES, type Category, type NavItem } from "./Navbardata";

const BRAND_GREEN = "#1c6e2e";

interface Props {
  onClose: () => void;
}

function RightPanel({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  const [hoveredLabel, setHoveredLabel] = React.useState<string | null>(null);
  const hovered = items.find((i) => i.label === hoveredLabel) ?? null;

  return (
    <Box sx={{ display: "flex", height: "100%", gap: 6 }}>
      {/* Current level — single column */}
      <Box sx={{ minWidth: 200 }}>
        {items.map((item) => {
          const hasChildren = !!item.children?.length;
          const isActive = hoveredLabel === item.label;

          return (
            <Box key={item.label}>
              {hasChildren ? (
                 <Box
    component="a"
    href={item.href}
    onMouseEnter={() => setHoveredLabel(item.label)}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: isActive ? BRAND_GREEN : "#333",
      textDecoration: "none",
      py: 0.75,
      pr: 1,
      cursor: "pointer",
      transition: "color 0.15s",
      borderBottom: "1px solid #E8F5E9",
      mb: 0.5,
    }}
  >
                  {item.label}
                  <Box component="span" sx={{ ml: 1, color: BRAND_GREEN, fontSize: "1rem", lineHeight: 1 }}>›</Box>
                </Box>
              ) : (
                <Box
                  component="a"
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredLabel(null)}
                  sx={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: "#555",
                    textDecoration: "none",
                    py: 0.75,
                    transition: "0.15s",
                    "&:hover": { color: BRAND_GREEN, pl: "6px" },
                  }}
                >
                  {item.label}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Children panel — only shown when a parent is hovered */}
      {hovered?.children && (
        <Box
          onMouseEnter={() => setHoveredLabel(hovered.label)}
          sx={{
            flex: 1,
            borderLeft: "1px solid #F0F0F0",
            pl: 4,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: BRAND_GREEN,
              fontWeight: 800,
              mb: 2,
              display: "block",
              letterSpacing: 1.5,
              fontSize: "0.7rem",
            }}
          >
            {hovered.label}
          </Typography>
          <RightPanel items={hovered.children} onClose={onClose} />
        </Box>
      )}
    </Box>
  );
}

export default function MegaMenu({ onClose }: Props) {
  const [activeCategory, setActiveCategory] = React.useState<Category>(CATEGORIES[0]);

  return (
    <Fade in>
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          bgcolor: "white",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
          zIndex: 300,
          borderTop: "1px solid #F0F0F0",
           overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Grid container sx={{ minHeight: 500 }}>

            {/* SIDEBAR */}
            <Grid size={{ md: 3 }} sx={{ borderRight: "1px solid #F0F0F0", py: 4, bgcolor: "#FAFAFA" }}>
              {CATEGORIES.map((cat) => (
                <Box
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => onClose()}
                  sx={{
                    px: 4,
                    py: 1.5,
                    cursor: "pointer",
                    transition: "0.2s",
                    fontSize: "0.875rem",
                    fontWeight: activeCategory?.id === cat.id ? 700 : 500,
                    color: activeCategory?.id === cat.id ? BRAND_GREEN : "#4A4A4A",
                    bgcolor: activeCategory?.id === cat.id ? "#F2F8F3" : "transparent",
                    borderLeft: `4px solid ${activeCategory?.id === cat.id ? BRAND_GREEN : "transparent"}`,
                    "&:hover": { color: BRAND_GREEN, bgcolor: "#F2F8F3" },
                  }}
                >
                  {cat.label}
                </Box>
              ))}
            </Grid>

            {/* CONTENT */}
            <Grid size={{ md: 9 }} sx={{ p: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: BRAND_GREEN,
                  fontWeight: 800,
                  mb: 4,
                  display: "block",
                  letterSpacing: 1.5,
                  fontSize: "0.75rem",
                }}
              >
                {activeCategory?.label}
              </Typography>

              <RightPanel items={activeCategory?.items ?? []} onClose={onClose} />
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Fade>
  );
}