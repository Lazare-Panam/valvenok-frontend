"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isTealPage } from "@/src/theme/tealPages";
import { Box } from "@mui/material";
import { BRAND_GRADIENT } from "@/src/theme/brand";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  // Homepage is on the new teal palette (23 Nov 2026); other pages keep the theme green for now
  const isHome = isTealPage(usePathname());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        ...(isHome ? { background: BRAND_GRADIENT } : { bgcolor: "primary.main" }),
        zIndex: 2000,
        transition: "width 0.1s ease-out",
      }}
    />
  );
}
