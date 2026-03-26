"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NavLogo from "./Navlogo";
import NavShopButton from "./NavShopButton";
import NavLinks from "./NavLinks";
import MegaMenu from "./MegaMenu";

const BAR_HEIGHT = 100;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{ position: "relative", zIndex: 200 }}>

        {/* ── Top bar ── */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderBottom: "1px solid",
            borderColor: "divider",
            width: "100%",
          }}
        >
          <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
            <Box sx={{ display: "flex", alignItems: "center", height: BAR_HEIGHT }}>
              <NavLogo />
              <NavShopButton
                open={open}
                onClick={() => setOpen((v) => !v)}
                barHeight={BAR_HEIGHT}
              />
              <NavLinks barHeight={BAR_HEIGHT} />
            </Box>
          </Container>
        </Box>

        {/* ── Mega dropdown ── */}
        {open && <MegaMenu onClose={() => setOpen(false)} />}

      </Box>
    </ClickAwayListener>
  );
}