"use client";

import * as React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NAV_GROUPS, NAV_LINKS, NavColumn, NavItem } from "./Navbardata";
import MobileUserActions from "./user-actions/MobileUserActions";

const BRAND_GREEN = "#61D649";
const HEADER_COLOR = "#1c6e2e";

interface Props {
  onClose: () => void;
}

type PanelLevel =
  | { type: "root" }
  | { type: "columns"; groupLabel: string; columns: NavColumn[] }
  | { type: "items"; colHeader: string; colHref?: string; items: NavItem[] }
  | { type: "children"; parentLabel: string; parentHref?: string; children: NavItem[] };

export default function MobileMenu({ onClose }: Props) {
  const [stack, setStack] = React.useState<PanelLevel[]>([{ type: "root" }]);

  const current = stack[stack.length - 1];

  const push = (panel: PanelLevel) => setStack((s) => [...s, panel]);
  const pop = () => setStack((s) => s.slice(0, -1));

  return (
    <Box sx={{ pb: 4, height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Back header */}
      {stack.length > 1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1,
            py: 0.5,
            borderBottom: "1px solid #f0f0f0",
            bgcolor: "#f9f9f9",
          }}
        >
          <IconButton onClick={pop} size="small">
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: HEADER_COLOR, ml: 0.5 }}>
            {current.type === "columns"
              ? current.groupLabel
              : current.type === "items"
              ? current.colHeader
              : current.type === "children"
              ? current.parentLabel
              : ""}
          </Typography>
        </Box>
      )}

      <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
        {/* ROOT */}
        {current.type === "root" && (
          <>
            <MobileUserActions onClose={onClose} />
            <Divider sx={{ my: 1 }} />
            <Typography
              variant="overline"
              sx={{ px: 2, fontWeight: 800, color: "text.secondary", display: "block", mb: 1 }}
            >
              Browse Products
            </Typography>

            {NAV_GROUPS.map((group) => (
              <ListItemButton
                key={group.id}
                onClick={() =>
                  push({ type: "columns", groupLabel: group.label, columns: group.columns })
                }
                sx={{ px: 2, py: 1.2, borderBottom: "1px solid #f5f5f5" }}
              >
                <ListItemText
                  primary={group.label}
                  primaryTypographyProps={{ fontWeight: 700, fontSize: "1rem", color: HEADER_COLOR }}
                />
                <ChevronRightIcon sx={{ color: BRAND_GREEN }} />
              </ListItemButton>
            ))}

            <Divider sx={{ my: 2 }} />

            {NAV_LINKS.map((link) => (
              <ListItemButton key={link.label} component="a" href={link.href} onClick={onClose} sx={{ px: 2 }}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            ))}
          </>
        )}

        {/* COLUMNS (level 1) */}
        {current.type === "columns" && (
          <List disablePadding>
            {current.columns.map((col) => (
              <ListItemButton
                key={col.header}
                onClick={() =>
                  push({ type: "items", colHeader: col.header, colHref: col.href, items: col.items })
                }
                sx={{ px: 2, py: 1.1, borderBottom: "1px solid #f5f5f5" }}
              >
                <ListItemText
                  primary={col.header}
                  primaryTypographyProps={{
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: BRAND_GREEN,
                  }}
                />
                <ChevronRightIcon sx={{ color: "#ccc", fontSize: 18 }} />
              </ListItemButton>
            ))}
          </List>
        )}

        {/* ITEMS (level 2) */}
        {current.type === "items" && (
          <List disablePadding>
            {current.colHref && (
              <ListItemButton
                component="a"
                href={current.colHref}
                onClick={onClose}
                sx={{ px: 2, py: 1, bgcolor: "#f5fdf3", borderBottom: "1px solid #e8f5e3" }}
              >
                <ListItemText
                  primary={`View all ${current.colHeader}`}
                  primaryTypographyProps={{ fontSize: "0.78rem", fontWeight: 700, color: HEADER_COLOR }}
                />
              </ListItemButton>
            )}
            {current.items.map((item) => (
              <ListItemButton
                key={item.label}
                onClick={() =>
                  item.children?.length
                    ? push({ type: "children", parentLabel: item.label, parentHref: item.href, children: item.children })
                    : onClose()
                }
                component={item.children?.length ? "div" : "a"}
                href={item.children?.length ? undefined : item.href}
                sx={{ px: 2, py: 1, borderBottom: "1px solid #f5f5f5" }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: "0.875rem", fontWeight: 500 }}
                />
                {item.children?.length ? (
                  <ChevronRightIcon sx={{ color: "#ccc", fontSize: 18 }} />
                ) : null}
              </ListItemButton>
            ))}
          </List>
        )}

        {/* CHILDREN (level 3) */}
        {current.type === "children" && (
          <List disablePadding>
            {current.parentHref && (
              <ListItemButton
                component="a"
                href={current.parentHref}
                onClick={onClose}
                sx={{ px: 2, py: 1, bgcolor: "#f5fdf3", borderBottom: "1px solid #e8f5e3" }}
              >
                <ListItemText
                  primary={`View all ${current.parentLabel}`}
                  primaryTypographyProps={{ fontSize: "0.78rem", fontWeight: 700, color: HEADER_COLOR }}
                />
              </ListItemButton>
            )}
            {current.children.map((child) => (
              <ListItemButton
                key={child.href ?? child.label}
                component="a"
                href={child.href}
                disabled={!child.href}
                onClick={onClose}
                sx={{ px: 2, py: 1, borderBottom: "1px solid #f5f5f5" }}
              >
                <ListItemText
                  primary={child.brand ? `${child.brand} · ${child.label}` : child.label}
                  primaryTypographyProps={{ fontSize: "0.85rem", color: "#444" }}
                />
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
}