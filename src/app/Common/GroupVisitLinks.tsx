import { Box } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { GROUP_SITES, type GroupSite } from "./group";

// "Visit … website" links to the group's own sites, placed right where a
// group company is named: inside a hero whose text names it, or inside a
// product card for that brand. Multi-brand sections only link the cards that
// belong to a group brand.

const PATTERNS: Record<string, RegExp> = {
  "Panam Valves": /\bpanam\b/i,
  "Mars Valve": /\bmars\b/i,
  "Hiflux UK": /\bhiflux\b/i,
  "SPAC Pneumatic": /\bspac\b(?!e)/i,
  "KOSAPLUS UK": /\bkosa ?plus\b/i,
};

/** Group sites named anywhere in the given text (title, description, logo URL…) */
export function groupSitesIn(...parts: (string | undefined | null)[]): GroupSite[] {
  const text = parts.filter(Boolean).join(" ");
  return GROUP_SITES.filter((s) => PATTERNS[s.name]?.test(text));
}

const shortName = (s: GroupSite) => s.name.replace(/ (UK|Valves?|Pneumatic)$/i, "").replace(/^KOSAPLUS$/, "Kosaplus");

/**
 * variant="hero": white outlined pill, for dark hero backgrounds.
 * variant="inline": small green pill, for light backgrounds (intros, brand boxes).
 * variant="card": plain green text link, inside product cards.
 */
export function GroupSiteLinks({ sites, variant }: { sites: GroupSite[]; variant: "hero" | "inline" | "card" }) {
  if (!sites.length) return null;
  const hero = variant === "hero";
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        ...(hero ? { mt: 3 } : variant === "inline" ? { mt: 2, mb: 1 } : { mt: 0.5, mb: 1.5 }),
      }}
    >
      {sites.map((s) => (
        <Box
          key={s.url}
          component="a"
          href={s.url}
          target="_blank"
          rel="noopener"
          title={s.desc}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontWeight: 600,
            textDecoration: "none",
            textTransform: "none",
            fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
            transition: "all .15s",
            ...(hero
              ? {
                  px: 2,
                  py: 0.9,
                  borderRadius: 999,
                  fontSize: "0.9rem",
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.45)",
                  "&:hover": { bgcolor: "#61D649", borderColor: "#61D649", color: "#123D17" },
                }
              : variant === "inline"
                ? {
                    px: 1.5,
                    py: 0.6,
                    borderRadius: 999,
                    fontSize: "0.85rem",
                    color: "#2E8B1E",
                    bgcolor: "#EEF9EA",
                    border: "1px solid #CFEBC6",
                    "&:hover": { bgcolor: "#DDF3D6" },
                  }
                : {
                    fontSize: "0.82rem",
                    color: "#2E8B1E",
                    "&:hover": { textDecoration: "underline" },
                  }),
          }}
        >
          Visit {hero ? s.name : shortName(s)} website
          <ArrowOutwardRoundedIcon sx={{ fontSize: hero ? 16 : 14 }} />
        </Box>
      ))}
    </Box>
  );
}

type CardLike = { title?: string; subtitle?: string; description?: string; logoUrl?: string };
const cardSites = (f: CardLike) => groupSitesIn(f.title, f.subtitle, f.description, f.logoUrl);

/**
 * Small link inside a product card when the card belongs to a group brand.
 * Skipped when every card in the grid is the same group brand (a single-brand
 * page): the hero link already covers it, so the cards don't repeat it.
 */
export function CardGroupLinks({ family, all }: { family: CardLike; all?: CardLike[] }) {
  const sites = cardSites(family);
  if (!sites.length) return null;
  if (all && all.length > 1) {
    const key = (f: CardLike) => cardSites(f).map((x) => x.name).join("|");
    const k = key(family);
    if (all.every((f) => key(f) === k)) return null;
  }
  return <GroupSiteLinks variant="card" sites={sites} />;
}
