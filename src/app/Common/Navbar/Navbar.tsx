"use client";

import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavLogo from "./Navlogo";
import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import DesktopUserActions from "./user-actions/DesktopUserActions";
import { NAV_GROUPS, NavGroup } from "./Navbardata";
import NavTopStrip from "./NavTopStrip";

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
  const [triggerLeft, setTriggerLeft] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const navBarRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();
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
        top: 0,
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
          borderBottom: `1px solid ${BORDER}`,
          height: LOGO_HEIGHT,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }, height: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", gap: 2 }}>
            <NavLogo />

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

            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              sx={{
                display: { md: "none" },
                color: INK,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                "&:hover": { bgcolor: "rgba(97,214,73,0.1)", color: GREEN_DARK },
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
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: NAV_HEIGHT, gap: 0.5 }}>
            {NAV_GROUPS.map((group) => {
              const active = activeGroup?.id === group.id;
              return (
                <Box
                  key={group.id}
                  component="a"
                  href={group.href ?? "#"}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    setTriggerLeft(el.offsetLeft);
                    openGroup(group);
                  }}
                  onMouseLeave={scheduleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.25,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 999,
                    color: active ? GREEN_DARK : INK,
                    bgcolor: active ? "#EEF9EA" : "transparent",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s",
                    "&:hover": { color: GREEN_DARK, bgcolor: "#EEF9EA" },
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

            <Box sx={{ width: "1px", height: 20, bgcolor: BORDER, mx: 1 }} />

            <NavLinks />
          </Box>
        </Container>

        {!isMobile && activeGroup && (
          <Box
            onMouseEnter={() => openGroup(activeGroup)}
            onMouseLeave={scheduleClose}
            sx={{
              position: "absolute",
              top: "100%",
              left: triggerLeft,
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
