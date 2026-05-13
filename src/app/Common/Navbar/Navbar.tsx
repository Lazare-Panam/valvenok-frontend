"use client";

import * as React from "react";
import {
  Box,
  Container,
  ClickAwayListener,
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

export default function Navbar() {
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const barHeight = isMobile ? BAR_HEIGHT_MOBILE : BAR_HEIGHT_DESKTOP;

  return (
    <ClickAwayListener onClickAway={() => setMegaOpen(false)}>
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
              {/* LEFT: Hamburger (mobile only) + Logo */}
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

              {/* CENTER (desktop only): Shop button + nav links */}
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                <NavShopButton
                  open={megaOpen}
                  onClick={() => setMegaOpen((v) => !v)}
                  barHeight={barHeight}
                />
                <NavLinks barHeight={barHeight} />
              </Box>

              {/* RIGHT (desktop only): User actions — mobile gets them in the drawer */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <DesktopUserActions barHeight={barHeight} />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Desktop mega menu */}
        {!isMobile && megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}

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
    </ClickAwayListener>
  );
}