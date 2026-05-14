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
import NavLogo from "./Navlogo";
import NavShopButton from "./NavShopButton";
import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import DesktopUserActions from "./user-actions/DesktopUserActions";

const BAR_HEIGHT_DESKTOP = 100;
const BAR_HEIGHT_MOBILE = 64;
const CLOSE_DELAY = 150; // ms — gives cursor time to travel button → menu

export default function Navbar() {
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const barHeight = isMobile ? BAR_HEIGHT_MOBILE : BAR_HEIGHT_DESKTOP;

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), CLOSE_DELAY);
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <Box sx={{ position: "relative", zIndex: 200 }}>
      <Box
        sx={{
          bgcolor: "#ffffff",
          borderBottom: "1px solid",
          borderColor: "divider",
          width: "100%",
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: barHeight,
              justifyContent: "space-between",
            }}
          >
            {/* LEFT: Hamburger (mobile) + Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: "none" }, color: "#333" }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
              <NavLogo />
            </Box>

            {/* CENTER (desktop): Shop button + nav links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <NavShopButton
                open={megaOpen}
                onMouseEnter={openMega}
                onMouseLeave={scheduleClose}
                href="/categories"
                barHeight={barHeight}
              />
              <NavLinks barHeight={barHeight} />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <DesktopUserActions barHeight={barHeight} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Desktop mega menu — hover handlers keep it open when cursor enters it */}
      {!isMobile && megaOpen && (
        <Box onMouseEnter={openMega} onMouseLeave={scheduleClose}>
          <MegaMenu onClose={() => setMegaOpen(false)} />
        </Box>
      )}

      {/* Mobile drawer */}
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
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <MobileMenu onClose={() => setMobileOpen(false)} />
      </Drawer>
    </Box>
  );
}