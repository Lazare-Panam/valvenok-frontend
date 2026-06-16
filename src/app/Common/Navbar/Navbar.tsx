"use client";

import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavLogo from "./Navlogo";
import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import DesktopUserActions from "./user-actions/DesktopUserActions";
import { NAV_GROUPS, NavGroup } from "./Navbardata";
import NavTopStrip from "./NavTopStrip";

const NAV_BAR_BG = "#61D649";
const BRAND_GREEN = "#61D649";
const LOGO_HEIGHT = 120;
const NAV_HEIGHT = 56;
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
    <Box sx={{ position: "relative", zIndex: 200 }}>

      {/* ── BAR 1: dark green, phone + email + RFQ right-aligned ── */}
<NavTopStrip/>
      {/* ── BAR 2: white, logo left + cart/auth right ── */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          borderBottom: "1px solid #e8e8e8",
          height: LOGO_HEIGHT,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 }, height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <NavLogo />

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <DesktopUserActions barHeight={LOGO_HEIGHT} />
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" }, color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* ── BAR 3: green nav bar ── */}
      <Box
        ref={navBarRef}
        sx={{
          bgcolor: NAV_BAR_BG,
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", height: NAV_HEIGHT }}>

           
            {NAV_GROUPS.map((group) => (
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
                  gap: 0.4,
                  height: NAV_HEIGHT,
                  px: 2,
                  color: "#fff",
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  borderBottom: `3px solid ${
                    activeGroup?.id === group.id ? BRAND_GREEN : "transparent"
                  }`,
                  transition: "all 0.15s",
                  "&:hover": { color: "#ffff" },
                }}
              >
                {group.label}
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 18,
                    transition: "transform 0.2s",
                    transform:
                      activeGroup?.id === group.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </Box>
            ))}

            <NavLinks barHeight={NAV_HEIGHT} />
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