import { BRAND, withAlpha } from "@/src/theme/brand";
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
