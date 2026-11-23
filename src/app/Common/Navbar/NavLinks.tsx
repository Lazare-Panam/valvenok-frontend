"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NAV_LINKS } from "./Navbardata";
import { BRAND, withAlpha } from "@/src/theme/brand";

export const navItem = {
  display: "flex",
  alignItems: "center",
  px: 1.5,
  py: 0.75,
  borderRadius: 0,
  color: BRAND.ink,
  fontSize: "0.92rem",
  fontWeight: 500,
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "all 0.15s",
  "&:hover": { color: BRAND.hover, boxShadow: `inset 0 -2px 0 ${BRAND.main}` },
  // Narrower desktop windows: tighter, so the whole row fits
  "@media (max-width:1339.95px)": { px: 1, fontSize: "0.86rem" },
} as const;

/**
 * Plain links: shown in the row when they fit, inside "More" when they don't.
 * `collapsed` comes from Navbar, which measures the real row width in the browser
 * (fonts and zoom differ between Safari and Chrome). Until it has measured
 * (null), a width breakpoint decides.
 * `measureRef` is a hidden copy of the links, used only to measure their width.
 */
export default function NavLinks({ collapsed, measureRef }: { collapsed: boolean | null; measureRef: React.Ref<HTMLDivElement> }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 150); };
  const BP = "@media (max-width:1219.95px)";
  const rowDisplay = collapsed === null ? { display: "flex", [BP]: { display: "none" } } : { display: collapsed ? "none" : "flex" };
  const moreDisplay = collapsed === null ? { display: "none", [BP]: { display: "block" } } : { display: collapsed ? "block" : "none" };
  return (
    <>
      {/* hidden copy for measuring (never seen, never focusable) */}
      <Box ref={measureRef} aria-hidden sx={{ position: "absolute", left: 0, top: 0, visibility: "hidden", pointerEvents: "none", display: "flex", gap: 0.5 }}>
        {NAV_LINKS.map((link) => (
          <Box key={link.label} component="span" sx={navItem}>{link.label}</Box>
        ))}
      </Box>

      <Box sx={{ ...rowDisplay, alignItems: "center", gap: 0.5, flexShrink: 0 }}>
        {NAV_LINKS.map((link) => (
          <Box key={link.label} component="a" href={link.href} sx={navItem}>
            {link.label}
          </Box>
        ))}
      </Box>

      <Box onMouseEnter={show} onMouseLeave={hide} sx={{ position: "relative", flexShrink: 0, ...moreDisplay }}>
        <Box
          component="button"
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          onFocus={show}
          sx={{ ...navItem, gap: 0.25, border: 0, bgcolor: "transparent", color: open ? BRAND.hover : BRAND.ink, boxShadow: open ? `inset 0 -2px 0 ${BRAND.main}` : "none", cursor: "pointer", fontFamily: "inherit" }}
        >
          More
          <KeyboardArrowDownIcon sx={{ fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }} />
        </Box>
        {open && (
          <Box
            role="menu"
            sx={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 400, minWidth: 200, p: 1, borderRadius: "16px", bgcolor: BRAND.white, border: `1px solid ${BRAND.border}`, boxShadow: `0 18px 40px -12px ${withAlpha(BRAND.ink, 0.25)}` }}
          >
            {NAV_LINKS.map((link) => (
              <Box key={link.label} component="a" role="menuitem" href={link.href} sx={{ ...navItem, px: 1.75, py: 1.1, borderRadius: "10px", fontSize: "0.92rem", color: BRAND.ink, boxShadow: "none", "&:hover": { color: BRAND.hover, bgcolor: BRAND.tint, boxShadow: "none" } }}>
                {link.label}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}
