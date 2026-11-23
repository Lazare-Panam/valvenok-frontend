"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { BRAND, BRAND_GRADIENT, BRAND_GRADIENT_HOVER, withAlpha } from "@/src/theme/brand";

// Floating "Get a quote" button, as on the Kosaplus site. Appears once the
// visitor has scrolled past the top of the page: on the left below the sticky
// header (desktop), bottom left on phones so it doesn't cover headings.
export default function FloatingQuote() {
  const pathname = usePathname();
  // Homepage is on the new teal palette (23 Nov 2026); other pages keep green for now
  const isHome = pathname === "/";
  const visible = useScrollTrigger({ disableHysteresis: true, threshold: 500 });
  if (pathname === "/contact") return null;
  // News articles keep an "On this page" menu down the left, so the pill sits bottom left there
  const article = /^\/news\/[^/]+/.test(pathname ?? "");

  return (
    <Box
      component={Link}
      href="/contact"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      sx={{
        position: "fixed",
        top: { xs: "auto", md: article ? "auto" : 190 },
        bottom: { xs: 20, md: article ? 24 : "auto" },
        left: { xs: 16, md: 24 },
        zIndex: 1200,
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 2.5,
        py: 1.25,
        borderRadius: 999,
        ...(isHome ? { background: BRAND_GRADIENT, color: BRAND.white } : { bgcolor: "#61D649", color: "#123D17" }),
        fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
        fontSize: "0.92rem",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: isHome ? `0 6px 20px ${withAlpha(BRAND.hover, 0.3)}` : "0 6px 20px rgba(46,139,30,0.28)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : { xs: "translateY(16px)", md: "translateX(-16px)" },
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity .3s ease, transform .3s ease, background-color .2s",
        "&:hover": isHome ? { background: BRAND_GRADIENT_HOVER } : { bgcolor: "#55C93E" },
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
      }}
    >
      <RequestQuoteOutlinedIcon sx={{ fontSize: 19 }} />
      Get a quote
    </Box>
  );
}
