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
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { BRANDS, brandsFor, type ProductType } from "../brandRegistry";
import { NAV_GROUPS, NAV_LINKS, NavColumn, NavItem } from "./Navbardata";
import MobileUserActions from "./user-actions/MobileUserActions";

const BRAND_GREEN = "#61D649";
const HEADER_COLOR = "#1c6e2e";

interface Props {
  onClose: () => void;
}

type PanelLevel =
  | { type: "root" }
  | { type: "columns"; groupId: string; groupLabel: string; groupHref?: string; columns: NavColumn[] }
  | { type: "items"; colHeader: string; colHref?: string; items: NavItem[] }
  | { type: "children"; parentLabel: string; parentHref?: string; children: NavItem[] };

const INK = "#0E1B12";
const MUTED = "#7A877F";
const BORDER = "#EEF2EF";

// Green "View all …" row at the top of a panel
function ViewAllRow({ label, href, onClose }: { label: string; href: string; onClose: () => void }) {
  return (
    <ListItemButton component="a" href={href} onClick={onClose}
      sx={{ mx: 1.5, my: 1.25, px: 2, py: 1.1, borderRadius: "12px", bgcolor: "#EEF9EA", "&:hover": { bgcolor: "#E0F3D9" } }}>
      <ListItemText primary={label} primaryTypographyProps={{ fontSize: "0.86rem", fontWeight: 700, color: HEADER_COLOR, textTransform: "none !important" }} />
      <ArrowForwardRoundedIcon sx={{ fontSize: 18, color: HEADER_COLOR }} />
    </ListItemButton>
  );
}

// Brand heading inside a category: logo, name, and the website for group brands
function BrandHead({ name, site }: { name: string; site?: string }) {
  const b = BRANDS.find((x) => x.name.toLowerCase() === name.toLowerCase());
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, pt: 1.75, pb: 0.75 }}>
      {b && (
        <Box sx={{ width: 30, height: 20, display: "grid", placeItems: "center", overflow: "hidden" }}>
          <Box component="img" src={b.logo} alt="" sx={{ maxWidth: "100%", maxHeight: 18, objectFit: "contain", transform: b.logoScale ? `scale(${Math.min(b.logoScale, 2.4)})` : undefined }} />
        </Box>
      )}
      <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: MUTED }}>{name}</Typography>
      <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
      {site && <Typography sx={{ fontSize: "0.7rem", color: "#9AA69E", textTransform: "none !important" }}>{site}</Typography>}
    </Box>
  );
}

// Menu tabs that show "Shop by brand" (same list as the desktop dropdown)
const BRAND_TYPE: Record<string, ProductType> = { actuators: "actuators" };

function ShopByBrand({ type, onClose }: { type: ProductType; onClose: () => void }) {
  const brands = brandsFor(type);
  if (!brands.length) return null;
  return (
    <Box sx={{ mt: 2, mx: 1.5, p: 1.5, borderRadius: "16px", background: "linear-gradient(135deg, #EEF9EA 0%, #EEF6FD 100%)", border: `1px solid ${BORDER}` }}>
      <Typography sx={{ fontSize: "0.92rem", fontWeight: 800, color: INK, textTransform: "none !important" }}>Shop by brand</Typography>
      <Typography sx={{ fontSize: "0.74rem", color: MUTED, mb: 1.25, textTransform: "none !important" }}>↗ = the brand’s own website</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
        {brands.map(({ brand, text, href, external }) => (
          <Box key={brand.slug} component="a" href={href} onClick={onClose} {...(external ? { target: "_blank", rel: "noopener" } : {})}
            sx={{ display: "flex", flexDirection: "column", gap: 0.5, p: 1.25, borderRadius: "12px", bgcolor: "#fff", border: `1px solid ${BORDER}`, textDecoration: "none" }}>
            <Box sx={{ height: 26, display: "flex", alignItems: "center", overflow: "hidden" }}>
              <Box component="img" src={brand.logo} alt="" sx={{ maxHeight: 24, maxWidth: 72, objectFit: "contain", transformOrigin: "left center", transform: brand.logoScale ? `scale(${Math.min(brand.logoScale, 1.8)})` : undefined }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.4, fontSize: "0.86rem", fontWeight: 800, color: INK }}>
              {brand.name} {external && <NorthEastRoundedIcon sx={{ fontSize: 14, color: HEADER_COLOR }} />}
            </Box>
            <Box sx={{ fontSize: "0.72rem", color: "#5B6B60", lineHeight: 1.35 }}>{text}</Box>
          </Box>
        ))}
      </Box>
      <ListItemButton component="a" href="/brands" onClick={onClose} sx={{ mt: 1.25, borderRadius: 999, bgcolor: HEADER_COLOR, justifyContent: "center", py: 0.9, "&:hover": { bgcolor: "#155a25" } }}>
        <Typography sx={{ fontSize: "0.86rem", fontWeight: 700, color: "#fff", textTransform: "none !important" }}>All brands</Typography>
        <ArrowForwardRoundedIcon sx={{ fontSize: 17, color: "#fff", ml: 0.5 }} />
      </ListItemButton>
    </Box>
  );
}

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
                  push({ type: "columns", groupId: group.id, groupLabel: group.label, groupHref: group.href, columns: group.columns })
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
            {current.groupHref && <ViewAllRow label={`View all ${current.groupLabel}`} href={current.groupHref} onClose={onClose} />}
            {current.columns.map((col) => (
              <ListItemButton
                key={col.header}
                onClick={() =>
                  push({ type: "items", colHeader: col.header, colHref: col.href, items: col.items })
                }
                sx={{ px: 2, py: 1.4, borderBottom: `1px solid ${BORDER}` }}
              >
                <ListItemText
                  primary={col.header}
                  secondary={`${col.items.filter((i) => !i.external).length} series${col.items.some((i) => i.external) ? " · more from our group" : ""}`}
                  primaryTypographyProps={{ fontSize: "0.98rem", fontWeight: 700, color: INK, textTransform: "none !important" }}
                  secondaryTypographyProps={{ fontSize: "0.76rem", color: MUTED, mt: 0.25, textTransform: "none !important" }}
                />
                <ChevronRightIcon sx={{ color: BRAND_GREEN, fontSize: 20 }} />
              </ListItemButton>
            ))}
            {BRAND_TYPE[current.groupId] && <ShopByBrand type={BRAND_TYPE[current.groupId]} onClose={onClose} />}
          </List>
        )}

        {/* ITEMS (level 2): grouped by brand, group brands after "Also in our group" */}
        {current.type === "items" && (
          <List disablePadding>
            {current.colHref && <ViewAllRow label={`View all ${current.colHeader}`} href={current.colHref} onClose={onClose} />}
            {current.items.map((item, i, all) => (
              <React.Fragment key={item.label}>
                {item.external && !all[i - 1]?.external && (
                  <Box sx={{ mx: 2, mt: 2, pt: 1.5, borderTop: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#5B6B60", textTransform: "none !important" }}>Also in our group</Typography>
                  </Box>
                )}
                {item.brand && item.brand !== all[i - 1]?.brand && (
                  <BrandHead name={item.brand} site={item.external && item.href ? new URL(item.href).hostname.replace(/^www\./, "") : undefined} />
                )}
                <ListItemButton
                  onClick={() =>
                    item.children?.length
                      ? push({ type: "children", parentLabel: item.label, parentHref: item.href, children: item.children })
                      : onClose()
                  }
                  component={item.children?.length ? "div" : "a"}
                  href={item.children?.length ? undefined : item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                  sx={{ mx: 1, px: 1.5, py: 1, borderRadius: "10px", gap: 1 }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500, color: INK, lineHeight: 1.35, textTransform: "none !important" }}
                  />
                  {item.external ? (
                    <NorthEastRoundedIcon sx={{ color: MUTED, fontSize: 16, flexShrink: 0 }} />
                  ) : (
                    <ChevronRightIcon sx={{ color: "#B5C0B8", fontSize: 18, flexShrink: 0 }} />
                  )}
                </ListItemButton>
              </React.Fragment>
            ))}
          </List>
        )}

        {/* CHILDREN (level 3) */}
        {current.type === "children" && (
          <List disablePadding>
            {current.parentHref && <ViewAllRow label={`Open ${current.parentLabel.split(" — ")[0]}`} href={current.parentHref} onClose={onClose} />}
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