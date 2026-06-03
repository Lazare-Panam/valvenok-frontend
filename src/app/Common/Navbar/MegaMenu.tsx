"use client";

import * as React from "react";
import { Box, Typography, Fade } from "@mui/material";
import { NavGroup, NavItem } from "./Navbardata";

const BRAND_GREEN = "#61D649";
const HEADER_COLOR = "#1c6e2e";
const MAX_ITEMS = 4;

interface Props {
  group: NavGroup;
  onClose: () => void;
}

function ColumnItems({ items, colHref, onClose }: { items: NavItem[]; colHref?: string; onClose: () => void }) {
  const visible = items.slice(0, MAX_ITEMS);
  const hasMore = items.length > MAX_ITEMS;

  return (
    <>
      {visible.map((item) => (
        <Box key={item.label}>
          <Box
            component="a"
            href={item.href}
            onClick={onClose}
            sx={{
              display: "block",
              fontSize: "0.82rem",
              color: "#222",
              fontWeight: 500,
              textDecoration: "none",
              py: 0.3,
              lineHeight: 1.4,
              transition: "color 0.15s",
              "&:hover": { color: HEADER_COLOR },
            }}
          >
            {item.label}
          </Box>
          {item.children?.slice(0, 2).map((child) => (
            <Box
              key={child.label}
              component="a"
              href={child.href}
              onClick={onClose}
              sx={{
                display: "block",
                fontSize: "0.75rem",
                color: "#666",
                fontWeight: 400,
                textDecoration: "none",
                py: 0.15,
                pl: 1.5,
                lineHeight: 1.4,
                transition: "color 0.15s",
                "&:hover": { color: HEADER_COLOR },
              }}
            >
              {child.label}
            </Box>
          ))}
          {item.children && item.children.length > 2 && (
            <Box
              component="a"
              href={item.href}
              onClick={onClose}
              sx={{
                display: "block",
                fontSize: "0.72rem",
                color: BRAND_GREEN,
                fontWeight: 700,
                textDecoration: "none",
                py: 0.15,
                pl: 1.5,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              See all →
            </Box>
          )}
        </Box>
      ))}
      {hasMore && (
        <Box
          component="a"
          href={colHref}
          onClick={onClose}
          sx={{
            display: "inline-block",
            mt: 0.75,
            fontSize: "0.75rem",
            color: BRAND_GREEN,
            fontWeight: 700,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          See more →
        </Box>
      )}
    </>
  );
}

export default function MegaMenu({ group, onClose }: Props) {
  // How many columns per row — 2 for groups with 3+ columns, else show all
  const cols = group.columns.length <= 2 ? group.columns.length : 2;

  return (
    <Fade in>
      <Box
        sx={{
          bgcolor: "white",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
          borderTop: `2px solid ${BRAND_GREEN}`,
          borderBottom: "1px solid #e8e8e8",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(200px, 260px))`,
            gap: 3,
            py: 3,
            px: 4,
          }}
        >
          {group.columns.map((col) => (
            <Box key={col.header}>
              <Box
                component="a"
                href={col.href}
                onClick={onClose}
                sx={{ textDecoration: "none", display: "block", mb: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: HEADER_COLOR,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    pb: 0.75,
                    borderBottom: `1px solid #d4ecd4`,
                    display: "block",
                    "&:hover": { color: BRAND_GREEN },
                  }}
                >
                  {col.header}
                </Typography>
              </Box>
              <ColumnItems items={col.items} colHref={col.href} onClose={onClose} />
            </Box>
          ))}
        </Box>
      </Box>
    </Fade>
  );
}