"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_LINKS } from "./Navbardata";

const item = {
  display: "flex",
  alignItems: "center",
  px: 1.5,
  py: 0.75,
  borderRadius: 999,
  color: "#0E1B12",
  fontSize: "0.92rem",
  fontWeight: 500,
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "all 0.15s",
  "&:hover": { color: "#2E8B1E", bgcolor: "#EEF9EA" },
  // Narrower desktop windows: tighter, so the whole row fits
  "@media (max-width:1339.95px)": { px: 1, fontSize: "0.86rem" },
} as const;

/** Plain links: shown in the row on wide screens, inside "More" on narrower ones */
export default function NavLinks() {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 150); };
  return (
    <>
      <Box sx={{ display: "contents", "@media (max-width:1219.95px)": { display: "none" } }}>
        {NAV_LINKS.map((link) => (
          <Box key={link.label} component="a" href={link.href} sx={item}>
            {link.label}
          </Box>
        ))}
      </Box>

      <Box
        onMouseEnter={show}
        onMouseLeave={hide}
        sx={{ position: "relative", display: "none", "@media (max-width:1219.95px)": { display: "block" } }}
      >
        <Box
          component="button"
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          onFocus={show}
          sx={{ ...item, gap: 0.25, border: 0, bgcolor: open ? "#EEF9EA" : "transparent", color: open ? "#2E8B1E" : "#0E1B12", cursor: "pointer", fontFamily: "inherit" }}
        >
          More
          <KeyboardArrowDownIcon sx={{ fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }} />
        </Box>
        {open && (
          <Box
            role="menu"
            sx={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 400, minWidth: 200, p: 1, borderRadius: "16px", bgcolor: "#fff", border: "1px solid #E5EBE6", boxShadow: "0 18px 40px -12px rgba(14,27,18,0.25)" }}
          >
            {NAV_LINKS.map((link) => (
              <Box key={link.label} component="a" role="menuitem" href={link.href} sx={{ ...item, px: 1.75, py: 1.1, borderRadius: "10px", fontSize: "0.92rem" }}>
                {link.label}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}
