"use client";

import { createContext, useContext } from "react";
import { MotionRoot } from "../../Common/LightMotion";
import { AQUA, BRAND, LOGO, LOGO_DEEP_GRADIENT, withAlpha } from "@/src/theme/brand";
import { REVEAL } from "./homeTokens";

// One full-width band of the homepage. The page steps through three tones that get
// gradually deeper (23 Nov 2026), then starts again:
//  • "white": white with a fine engineering grid (24px minor, 120px major lines)
//  • "mist":  white fading into pale aqua #D7FEFE, so it leads into the dark band below
//  • "dark":  the deep logo gradient (as the footer); headings turn white, cards stay white
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

// Same gradient as the footer and the quote banner, without the footer's grid squares,
// plus depth like the hero: light falling in from the top left, a faint glow bottom right,
// the brand's concentric rings in the top-right corner and a faint hero photo.
const DARK = {
  background: [
    `radial-gradient(1100px 520px at 12% -10%, ${withAlpha(LOGO.top, 0.32)} 0%, transparent 65%)`,
    `radial-gradient(900px 480px at 100% 110%, ${withAlpha(LOGO.top, 0.16)} 0%, transparent 70%)`,
    LOGO_DEEP_GRADIENT,
  ].join(", "),
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
    background: `repeating-radial-gradient(circle, transparent 0 34px, ${withAlpha(BRAND.white, 0.07)} 34px 35.5px, transparent 35.5px 58px)`,
    maskImage: "radial-gradient(circle, black 25%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(circle, black 25%, transparent 70%)",
  },
  // A hero photo, black and white and very faint, fading out downwards (set per band below)
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    filter: "grayscale(1) contrast(1.1)",
    opacity: 0.12,
    maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
  },
  // sections sit above the rings and the photo
  "& > *": { position: "relative", zIndex: 1 },
};

// The hero photos; each dark band picks one, so the page doesn't repeat one image
const BANNERS = "https://pblol2.blob.core.windows.net/valvenok-images/banner-images";
const PHOTOS = [
  `${BANNERS}/process-pipework-valves.jpg`,
  `${BANNERS}/sergei-wing-fFRtvdWqyLk-unsplash.jpg`,
  `${BANNERS}/ant-rozetsky-SLIFI67jv5k-unsplash.jpg`,
] as const;

/** Which band a section is in: "dark", "light" (white or mist), or null outside the homepage bands. */
const DarkZoneContext = createContext<boolean | null>(null);
export const useBand = (): "dark" | "light" | null => {
  const dark = useContext(DarkZoneContext);
  return dark === null ? null : dark ? "dark" : "light";
};
/** True inside a dark band: section headings use it to switch to white text. */
export const useDarkZone = () => useContext(DarkZoneContext) === true;

export default function PastelZone({ tone = "white", photo = 0, children }: { tone?: BandTone; photo?: 0 | 1 | 2; children: React.ReactNode }) {
  const dark = tone === "dark";
  return (
    // each section inside eases in as it scrolls into view
    <DarkZoneContext.Provider value={dark}>
      <MotionRoot
        sx={{
          position: "relative",
          ...(tone === "dark" ? { ...DARK, "&::after": { ...DARK["&::after"], backgroundImage: `url(${PHOTOS[photo]})` } } : tone === "mist" ? MIST : BLUEPRINT),
          "& > section, & > nav": REVEAL,
        }}
      >
        {children}
      </MotionRoot>
    </DarkZoneContext.Provider>
  );
}
