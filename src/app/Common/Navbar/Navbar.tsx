"use client";

import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  Badge,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BoltIcon from "@mui/icons-material/Bolt";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavLogo from "./Navlogo";
import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import DesktopUserActions from "./user-actions/DesktopUserActions";
import { NAV_GROUPS, NavGroup } from "./Navbardata";
import NavTopStrip from "./NavTopStrip";
import { useCartStore } from "@/src/app/cart/hooks/useCartStore";
import { useHydrated } from "./user-actions/useHydrated";

const BRAND_GREEN = "#61D649";
const GREEN_DARK = "#2E8B1E";
const GREEN_DEEP = "#123D17";
const INK = "#0E1B12";
const BORDER = "#E5EBE6";
const FONT = "var(--font-geist-sans), Inter, system-ui, sans-serif";
const LOGO_HEIGHT = 76;
const NAV_HEIGHT = 48;
const CLOSE_DELAY = 150;
export default function Navbar() {
  const [activeGroup, setActiveGroup] = React.useState<NavGroup | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Soft shadow under the sticky header only once the page has scrolled
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const navBarRef = React.useRef<HTMLDivElement>(null);

  // Does the full menu row fit? Measured in the browser, because Safari, Chrome
  // and page zoom render the same text at different widths. null = not measured yet.
  const rowRef = React.useRef<HTMLDivElement>(null);
  const groupsRef = React.useRef<HTMLDivElement>(null);
  const plainRef = React.useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = React.useState<boolean | null>(null);
  const [tight, setTight] = React.useState(false);
  const tightRef = React.useRef(false);
  const naturalGroups = React.useRef(0); // product tabs' width at normal spacing
  const checkRow = React.useCallback(() => {
    const row = rowRef.current, groups = groupsRef.current, plain = plainRef.current;
    if (!row || !groups || !plain) return;
    const avail = row.clientWidth;
    if (!avail) return; // hidden (phone menu)
    // only measure the tabs at normal spacing, so tightening can't feed back into the decision
    if (!tightRef.current) naturalGroups.current = groups.scrollWidth;
    const g = naturalGroups.current;
    const MORE = 84; // "More ▾" button
    const SLACK = 16;
    setCollapsed(g + 4 + plain.scrollWidth + SLACK > avail);
    const t = g + 4 + MORE + SLACK > avail;
    tightRef.current = t;
    setTight(t);
  }, []);
  React.useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    checkRow();
    const ro = new ResizeObserver(checkRow);
    ro.observe(row);
    document.fonts?.ready.then(checkRow).catch(() => {});
    return () => ro.disconnect();
  }, [checkRow]);

  const theme = useTheme();
  const hydrated = useHydrated();
  const totalItems = useCartStore((st) => st.getTotalItems());
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const openGroup = (group: NavGroup) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveGroup(group);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveGroup(null), CLOSE_DELAY);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "sticky",
        // Let the 41px contact strip scroll away; the logo bar and menu stay pinned
        top: { xs: 0, md: -41 },
        zIndex: 200,
        fontFamily: FONT,
        "& *": { fontFamily: `${FONT} !important` },
      }}
    >
      {/* ── Top strip: contact details ── */}
      <NavTopStrip />

      {/* ── Main bar: logo, account actions, quote CTA ── */}
      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.96)",
          backdropFilter: "saturate(180%) blur(10px)",
          // Desktop: one header block, so no line between the logo bar and the menu row
          borderBottom: "none",
          boxShadow: { xs: scrolled ? "0 10px 24px -16px rgba(14,27,18,0.35)" : "none", md: "none" },
          height: LOGO_HEIGHT,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, height: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", gap: 1 }}>
            <Box sx={{ mr: "auto" }}>
              <NavLogo />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              <DesktopUserActions barHeight={LOGO_HEIGHT} />
              <Box
                component="a"
                href="/contact"
                sx={{
                  ml: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  px: 2.25,
                  py: 1.1,
                  borderRadius: 999,
                  bgcolor: BRAND_GREEN,
                  color: GREEN_DEEP,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background-color .2s",
                  "&:hover": { bgcolor: "#55C93E" },
                }}
              >
                Request a quote
              </Box>
            </Box>

            {/* Mobile: quick actions + menu */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton
                component="a"
                href="/quick-order"
                aria-label="Quick order"
                sx={{ color: GREEN_DARK, border: `1px solid ${BORDER}`, borderRadius: "12px", width: 44, height: 44 }}
              >
                <BoltIcon />
              </IconButton>
              <IconButton
                component="a"
                href="/cart"
                aria-label="Cart"
                sx={{ color: INK, border: `1px solid ${BORDER}`, borderRadius: "12px", width: 44, height: 44 }}
              >
                <Badge
                  badgeContent={hydrated ? totalItems : 0}
                  invisible={!hydrated || totalItems === 0}
                  color="primary"
                  sx={{ "& .MuiBadge-badge": { fontWeight: 700, fontSize: "10px", height: 17, minWidth: 17 } }}
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{
                display: { md: "none" },
                border: `1px solid ${GREEN_DEEP}`,
                borderRadius: "12px",
                width: 44,
                height: 44,
                bgcolor: GREEN_DEEP,
                color: "#fff",
                "&:hover": { bgcolor: GREEN_DARK, color: "#fff" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* ── Nav row: product menus + page links ── */}
      <Box
        ref={navBarRef}
        sx={{
          bgcolor: "rgba(255,255,255,0.96)",
          backdropFilter: "saturate(180%) blur(10px)",
          borderBottom: `1px solid ${BORDER}`,
          boxShadow: scrolled ? "0 10px 24px -16px rgba(14,27,18,0.35)" : "none",
          transition: "box-shadow .25s",
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          {/* Short divider between the logo bar and the menu (container width, not full bleed) */}
          <Box aria-hidden sx={{ height: "1px", bgcolor: "#EDF1EE" }} />
          <Box ref={rowRef} sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: NAV_HEIGHT, gap: 0.5 }}>
            <Box ref={groupsRef} sx={{ display: "flex", alignItems: "center", gap: 0.5, flexShrink: 0 }}>
            {NAV_GROUPS.map((group) => {
              const active = activeGroup?.id === group.id;
              return (
                <Box
                  key={group.id}
                  component="a"
                  href={group.href ?? "#"}
                  onMouseEnter={() => openGroup(group)}
                  onMouseLeave={scheduleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.25,
                    px: 1.5,
                    py: 0.75,
                    "@media (max-width:1339.95px)": { px: 1, fontSize: "0.86rem" },
                    borderRadius: 999,
                    color: active ? GREEN_DARK : INK,
                    bgcolor: active ? "#EEF9EA" : "transparent",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s",
                    "&:hover": { color: GREEN_DARK, bgcolor: "#EEF9EA" },
                    ...(tight && { px: "6px !important", fontSize: "0.82rem !important" }),
                  }}
                >
                  {group.label}
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 18,
                      transition: "transform 0.2s",
                      transform: active ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Box>
              );
            })}

            <Box sx={{ width: "1px", height: 20, bgcolor: BORDER, mx: 1, "@media (max-width:1339.95px)": { mx: 0.5 } }} />
            </Box>

            <NavLinks collapsed={collapsed} measureRef={plainRef} />
          </Box>
        </Container>

        {!isMobile && activeGroup && (
          <Box
            onMouseEnter={() => openGroup(activeGroup)}
            onMouseLeave={scheduleClose}
            sx={{
              position: "absolute",
              top: "100%",
              // The three-column panel is wide, so it sits centred under the menu
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 300,
              pointerEvents: "auto",
            }}
          >
            <MegaMenu group={activeGroup} onClose={() => setActiveGroup(null)} />
          </Box>
        )}
      </Box>

      {/* ── MOBILE DRAWER ── */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: "100%", maxWidth: 350 } }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <MobileMenu onClose={() => setMobileOpen(false)} />
      </Drawer>
    </Box>
  );
}
