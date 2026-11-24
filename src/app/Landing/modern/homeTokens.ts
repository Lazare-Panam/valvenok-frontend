import { ACCENT, AQUA, BRAND, accentGradient, withAlpha, PILL } from "@/src/theme/brand";
// HOMEPAGE-ONLY tokens (teal, 23 Nov 2026). The rest of the site still uses ./tokens
// (green) until the new colours roll out page by page. Colours are aliases of
// src/theme/brand.ts — change them there.
export const T = {
  font: "var(--font-geist-sans), Inter, system-ui, sans-serif",
  ink: BRAND.ink,
  body: BRAND.muted,
  muted: BRAND.subtle,
  brand: BRAND.main,
  brandDark: BRAND.hover,
  brandDeep: BRAND.deep,
  brandSoft: BRAND.tint,
  border: BRAND.border,
  surface: BRAND.surface,
  radius: "18px",
  radiusSm: "12px",
  shadow: `0 1px 2px ${withAlpha(BRAND.ink, 0.04)}, 0 8px 24px ${withAlpha(BRAND.ink, 0.06)}`,
  shadowHover: `0 2px 4px ${withAlpha(BRAND.ink, 0.05)}, 0 16px 40px ${withAlpha(BRAND.ink, 0.10)}`,
  maxWidth: 1536,
};

// Shared reset for text inside the modern sections: the global theme
// capitalises every Typography word, which these sections don't want.
export const textReset = {
  fontFamily: T.font,
  // !important: the theme sets Barlow on every Typography class, which would
  // otherwise win over this inherited font.
  "& *": { fontFamily: `${T.font} !important` },
  // Site convention: every word of every text capitalised (headings and descriptions)
  "& p, & span, & a, & li, & dt, & dd, & h1, & h2, & h3, & h4, & h5, & h6": { textTransform: "capitalize" },
  // Units and codes keep their case: <span className="nocap">mm</span>
  "& .nocap": { textTransform: "none" },
} as const;

// ── Homepage accent rules (23 Nov 2026) ──
// Teal = brand (buttons, headings, key icons). ACCENT (partner colour, brand.ts) =
// highlight (labels, tags, hovers, icon boxes).
export const CHIP = {
  aqua: { bgcolor: AQUA.mistFaint, color: T.brandDark },
  soft: { bgcolor: ACCENT.light, color: ACCENT.text }, // default icon box
  accent: { background: PILL.green, color: PILL.greenDeep }, // active / open state (flat green, 24 Nov 2026)
} as const;
/** Icon-box colours (23 Nov 2026: one consistent style, no alternating). */
export const chipTone = () => CHIP.soft;
export const WARM_HOVER = { bgcolor: ACCENT.light, borderColor: ACCENT.soft, color: ACCENT.text } as const;
/** Highlighted word in a heading: accent gradient text. */
export const accentText = {
  background: accentGradient(ACCENT),
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

/** Scroll reveal: eases up and fades in as it enters the screen. CSS scroll-driven
 *  animation — browsers without support (and "reduce motion") just show it normally.
 *  Animates `translate`, not `transform`, so hover lifts still work. */
export const REVEAL = {
  "@keyframes vkReveal": { from: { opacity: 0, translate: "0 28px" }, to: { opacity: 1, translate: "0 0" } },
  "@supports (animation-timeline: view())": {
    "@media (prefers-reduced-motion: no-preference)": {
      animation: "vkReveal linear both",
      animationTimeline: "view()",
      animationRange: "entry 0% entry 60%",
    },
  },
} as const;

/** One card style for every homepage card (23 Nov 2026). Spread into sx. */
export const CARD = {
  bgcolor: BRAND.white,
  border: `1px solid ${T.border}`,
  borderRadius: T.radius,
  boxShadow: T.shadow,
  overflow: "hidden",
  textDecoration: "none",
  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
  ...REVEAL,
} as const;
/** Matching hover: small lift, deeper shadow, faint teal border. */
export const CARD_HOVER = {
  transform: "translateY(-4px)",
  boxShadow: T.shadowHover,
  borderColor: withAlpha(BRAND.main, 0.35),
} as const;
