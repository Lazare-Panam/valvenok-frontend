// Design tokens for the modern homepage sections. Kept local so the refresh can
// roll out page by page without touching the global MUI theme yet.
export const T = {
  font: "var(--font-geist-sans), Inter, system-ui, sans-serif",
  ink: "#0E1B12",
  body: "#4B5A50",
  muted: "#7A877F",
  green: "#61D649",
  greenDark: "#2E8B1E",
  greenDeep: "#123D17",
  greenSoft: "#EEF9EA",
  border: "#E5EBE6",
  surface: "#F5F8F5",
  radius: "18px",
  radiusSm: "12px",
  shadow: "0 1px 2px rgba(14,27,18,0.04), 0 8px 24px rgba(14,27,18,0.06)",
  shadowHover: "0 2px 4px rgba(14,27,18,0.05), 0 16px 40px rgba(14,27,18,0.10)",
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
