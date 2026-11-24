// Navbar colours (24 Nov 2026): teal on the teal pages (src/theme/tealPages.ts), the original
// green everywhere else. Components use NAV.x, which point at CSS variables; <NavColours />
// sets them on :root, so the phone menu (rendered outside the navbar) follows too.
import { BRAND, BRAND_GRADIENT, BRAND_GRADIENT_HOVER, NAV_GREEN, withAlpha } from "@/src/theme/brand";

const KEYS = ["main", "hover", "deep", "tint", "tintStrong", "wash", "border", "divider", "hoverBorder", "ink", "body", "muted", "subtle", "faint", "faintest"] as const;
type Key = (typeof KEYS)[number];

export const NAV = {
  ...(Object.fromEntries(KEYS.map((k) => [k, `var(--nav-${k})`])) as Record<Key, string>),
  /** "Request a quote" button: background, hover, text and glow */
  cta: "var(--nav-cta)",
  ctaHover: "var(--nav-cta-hover)",
  ctaInk: "var(--nav-cta-ink)",
  ctaShadow: "var(--nav-cta-shadow)",
  ctaShadowHover: "var(--nav-cta-shadow-hover)",
};

export function navVars(teal: boolean): Record<string, string> {
  const P = teal ? BRAND : NAV_GREEN;
  const vars: Record<string, string> = Object.fromEntries(KEYS.map((k) => [`--nav-${k}`, P[k]]));
  if (teal) {
    vars["--nav-cta"] = BRAND_GRADIENT;
    vars["--nav-cta-hover"] = BRAND_GRADIENT_HOVER;
    vars["--nav-cta-ink"] = BRAND.white;
    vars["--nav-cta-shadow"] = `0 6px 16px -8px ${withAlpha(BRAND.hover, 0.6)}`;
    vars["--nav-cta-shadow-hover"] = `0 8px 20px -8px ${withAlpha(BRAND.hover, 0.7)}`;
  } else {
    // the original: bright green pill, deep green text
    vars["--nav-cta"] = NAV_GREEN.main;
    vars["--nav-cta-hover"] = NAV_GREEN.ctaHover;
    vars["--nav-cta-ink"] = NAV_GREEN.deep;
    vars["--nav-cta-shadow"] = "none";
    vars["--nav-cta-shadow-hover"] = `0 8px 20px -8px ${withAlpha(NAV_GREEN.hover, 0.5)}`;
  }
  return vars;
}
