"use client";

import * as React from "react";
import { Box, Typography, Fade } from "@mui/material";
import { NavGroup, NavItem } from "./Navbardata";

const BRAND_GREEN = "#61D649";
const HEADER_COLOR = "#1c6e2e";

interface Props {
  group: NavGroup;
  onClose: () => void;
}

function ChildPanel({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Level 2 */}
      <Box sx={{ minWidth: 220, borderRight: "1px solid #e8e8e8" }}>
        {items.map((item, i) => (
          <Box
            key={item.label}
            onMouseEnter={() => setActiveIndex(item.children?.length ? i : null)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 0.9,
              cursor: "pointer",
              bgcolor: activeIndex === i ? "#f5fdf3" : "transparent",
              borderLeft: activeIndex === i ? `3px solid ${BRAND_GREEN}` : "3px solid transparent",
              transition: "all 0.1s",
            }}
          >
            <Box
              component="a"
              href={item.href}
              onClick={onClose}
              sx={{
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "#222",
                textDecoration: "none",
                flexGrow: 1,
                "&:hover": { color: HEADER_COLOR },
              }}
            >
              {item.label}
            </Box>
            {item.children?.length ? (
              <Box sx={{ fontSize: "0.7rem", color: "#aaa", ml: 1 }}>›</Box>
            ) : null}
          </Box>
        ))}
      </Box>

      {/* Level 3 */}
      {activeIndex !== null && items[activeIndex]?.children?.length ? (
        <Fade in>
          <Box sx={{ minWidth: 220, pl: 1 }}>
            {items[activeIndex].children!.map((child) => (
              <Box
                key={child.label}
                component="a"
                href={child.href}
                onClick={onClose}
                sx={{
                  display: "block",
                  px: 2,
                  py: 0.9,
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  color: "#444",
                  textDecoration: "none",
                  transition: "color 0.1s",
                  "&:hover": { color: HEADER_COLOR },
                }}
              >
                {child.label}
              </Box>
            ))}
          </Box>
        </Fade>
      ) : null}
    </Box>
  );
}

export default function MegaMenu({ group, onClose }: Props) {
  const [activeColIndex, setActiveColIndex] = React.useState<number>(0);

  const activeCol = group.columns[activeColIndex];

  return (
    <Fade in>
      <Box
        sx={{
          bgcolor: "white",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
          borderTop: `2px solid ${BRAND_GREEN}`,
          borderBottom: "1px solid #e8e8e8",
          display: "flex",
          minWidth: 660,
        }}
      >
        {/* Level 1 — columns as categories */}
        <Box
          sx={{
            minWidth: 200,
            borderRight: "1px solid #e8e8e8",
            py: 2,
            bgcolor: "#f9f9f9",
          }}
        >
          {group.columns.map((col, i) => (
            <Box
              key={col.header}
              onMouseEnter={() => setActiveColIndex(i)}
              sx={{
                px: 2.5,
                py: 1,
                cursor: "pointer",
                bgcolor: activeColIndex === i ? "white" : "transparent",
                borderLeft: activeColIndex === i ? `3px solid ${BRAND_GREEN}` : "3px solid transparent",
                transition: "all 0.1s",
              }}
            >
              <Box
                component="a"
                href={col.href}
                onClick={onClose}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: activeColIndex === i ? HEADER_COLOR : "#555",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.1s",
                  }}
                >
                  {col.header}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Level 2 + 3 */}
        <Box sx={{ py: 2, flexGrow: 1 }}>
          <ChildPanel items={activeCol.items} onClose={onClose} />
        </Box>
      </Box>
    </Fade>
  );
}