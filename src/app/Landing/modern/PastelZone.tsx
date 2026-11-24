"use client";

import { createContext, useContext } from "react";
import { Box } from "@mui/material";
import { MotionRoot, Blob } from "../../Common/LightMotion";
import { PASTEL } from "@/src/theme/brand";
import { REVEAL } from "./homeTokens";

// One full-width band of the homepage: the original pastel look (restored 24 Nov 2026).
// A soft colour wash, a few slowly drifting blurred blobs and a faint green dot grid.
// Colours from PASTEL in src/theme/brand.ts.
export type BandTone = "mint" | "sky" | "butter" | "lilac" | "plain";

const BLOBS: Record<BandTone, { color: string; sx: object; dur?: number; delay?: number }[]> = {
  mint: [
    { color: PASTEL.blob.lime, sx: { top: "4%", left: -180 } },
    { color: PASTEL.blob.sky, sx: { top: "40%", right: -200 }, dur: 22, delay: 2 },
    { color: PASTEL.blob.sun, sx: { bottom: "2%", left: "30%", width: 360, height: 360 }, dur: 26, delay: 4 },
  ],
  sky: [
    { color: PASTEL.blob.sky, sx: { top: "6%", right: -180 } },
    { color: PASTEL.blob.lime, sx: { bottom: "10%", left: -200 }, dur: 24, delay: 3 },
  ],
  butter: [
    { color: PASTEL.blob.sun, sx: { top: "8%", left: -160 } },
    { color: PASTEL.blob.lilac, sx: { bottom: "6%", right: -180 }, dur: 23, delay: 2 },
  ],
  lilac: [
    { color: PASTEL.blob.lilac, sx: { top: "5%", right: -160 } },
    { color: PASTEL.blob.lime, sx: { bottom: "8%", left: -180 }, dur: 25, delay: 3 },
  ],
  plain: [],
};

/** Which band a section is in: "dark", "light" (white or mist), or null outside the homepage bands. */
const DarkZoneContext = createContext<boolean | null>(null);
export const useBand = (): "dark" | "light" | null => {
  const dark = useContext(DarkZoneContext);
  return dark === null ? null : dark ? "dark" : "light";
};
/** True inside a dark band: section headings use it to switch to white text. */
export const useDarkZone = () => useContext(DarkZoneContext) === true;

export default function PastelZone({ tone = "mint", children }: { tone?: BandTone; children: React.ReactNode }) {
  return (
    // each section inside eases in as it scrolls into view; all bands are light (dark-text styles)
    <DarkZoneContext.Provider value={false}>
      <MotionRoot sx={{ position: "relative", background: PASTEL.wash[tone], isolation: "isolate", "& > section, & > nav": REVEAL }}>
        {tone !== "plain" && (
          <Box aria-hidden sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: -1, pointerEvents: "none" }}>
            {BLOBS[tone].map((b, i) => (
              <Blob key={i} color={b.color} sx={b.sx} dur={b.dur ?? 18} delay={b.delay ?? 0} />
            ))}
            <Box sx={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${PASTEL.dot} 1px, transparent 1px)`, backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 15%, black 85%, transparent)" }} />
          </Box>
        )}
        {children}
      </MotionRoot>
    </DarkZoneContext.Provider>
  );
}
