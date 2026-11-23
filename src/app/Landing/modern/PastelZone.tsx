"use client";

import { createContext, useContext } from "react";
import { MotionRoot } from "../../Common/LightMotion";
import { AQUA, BRAND, LOGO, LOGO_TINT_GRADIENT, withAlpha } from "@/src/theme/brand";
import { REVEAL } from "./homeTokens";

// One full-width band of the homepage. The page steps through three tones that get
// gradually deeper (23 Nov 2026), then starts again:
//  • "white": white with a fine engineering grid (24px minor, 120px major lines)
//  • "mist":  white fading into pale aqua #D7FEFE, so it leads into the dark band below
//  • "dark":  (name kept) now a pale logo-teal tint with dark text (23 Nov 2026); headings turn white, cards stay white
// Colours from src/theme/brand.ts.
export type BandTone = "white" | "mist" | "dark";

const minor = withAlpha(LOGO.top, 0.07);
const major = withAlpha(LOGO.top, 0.14);

const BLUEPRINT = {
  backgroundColor: BRAND.white,
  // The grid sits in its own layer so it can fade out over the last ~140px: band heights
  // vary, so otherwise a cut-off row of squares shows at the bottom (23 Nov 2026)
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: [
      `linear-gradient(${major} 1px, transparent 1px)`,
      `linear-gradient(90deg, ${major} 1px, transparent 1px)`,
      `linear-gradient(${minor} 1px, transparent 1px)`,
      `linear-gradient(90deg, ${minor} 1px, transparent 1px)`,
    ].join(", "),
    backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
    backgroundPosition: "center top",
    maskImage: "linear-gradient(to bottom, black calc(100% - 140px), transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black calc(100% - 140px), transparent 100%)",
  },
  // sections sit above the grid
  "& > *": { position: "relative", zIndex: 1 },
};
const MIST = {
  background: `linear-gradient(180deg, ${BRAND.white} 0%, ${AQUA.mistLight} 100%)`,
  // Thin even line where the white band above ends (both start white, so they'd run
  // together), like the bottom edge of the grid
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    pointerEvents: "none",
    background: withAlpha(LOGO.top, 0.3),
  },
};

// The deepest band: a pale teal tint with the brand's concentric rings in the top-right corner.
const DARK = {
  // Light tint (23 Nov 2026): continues from the mist band's aqua and deepens gently; fine grid, no photo
  background: [
    `linear-gradient(${withAlpha(LOGO.top, 0.09)} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${withAlpha(LOGO.top, 0.09)} 1px, transparent 1px)`,
    LOGO_TINT_GRADIENT,
  ].join(", "),
  backgroundSize: "24px 24px, 24px 24px, auto",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    right: -220,
    top: -220,
    width: 620,
    height: 620,
    borderRadius: "50%",
    pointerEvents: "none",
    background: `repeating-radial-gradient(circle, transparent 0 34px, ${withAlpha(LOGO.mid, 0.12)} 34px 35.5px, transparent 35.5px 58px)`,
    maskImage: "radial-gradient(circle, black 25%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle, black 25%, transparent 70%)",
  },
  // sections sit above the rings and the photo
  "& > *": { position: "relative", zIndex: 1 },
};


/** Which band a section is in: "dark", "light" (white or mist), or null outside the homepage bands. */
const DarkZoneContext = createContext<boolean | null>(null);
export const useBand = (): "dark" | "light" | null => {
  const dark = useContext(DarkZoneContext);
  return dark === null ? null : dark ? "dark" : "light";
};
/** True inside a dark band: section headings use it to switch to white text. */
export const useDarkZone = () => useContext(DarkZoneContext) === true;

export default function PastelZone({ tone = "white", children }: { tone?: BandTone; /** no longer used (the tint band has no photo) */ photo?: 0 | 1 | 2; children: React.ReactNode }) {
  return (
    // each section inside eases in as it scrolls into view. All bands are light now (the
    // "dark" tone is a pale tint since 23 Nov 2026), so sections use their dark-text styles.
    <DarkZoneContext.Provider value={false}>
      <MotionRoot
        sx={{
          position: "relative",
          ...(tone === "dark" ? DARK : tone === "mist" ? MIST : BLUEPRINT),
          "& > section, & > nav": REVEAL,
        }}
      >
        {children}
      </MotionRoot>
    </DarkZoneContext.Provider>
  );
}
