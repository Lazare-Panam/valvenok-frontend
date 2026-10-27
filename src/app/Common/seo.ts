import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path of this route, e.g. "/valves/instrumentation-valves". Used for canonical and og:url. */
  path: string;
  /** false for account, cart and utility pages that should stay out of search results. */
  index?: boolean;
};

/**
 * Full per-route metadata. Next.js merges metadata down the layout tree, so a
 * route that only sets `canonical` inherits its parent's title, description
 * and openGraph (including og:url) — which made child pages look like
 * duplicates of their parent. Setting every field here stops that leak.
 */
export function pageMetadata({ title, description, path, index = true }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Valvenok`,
      description,
      url: path,
      siteName: "Valvenok",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}

// "cameron-wkm-370d" -> "Cameron WKM 370D": title-case words, upper-case short
// codes and anything containing a digit.
function humanizeSlug(slug: string): string {
  return decodeURIComponent(slug)
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) =>
      /\d/.test(w) || w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");
}

/**
 * Metadata for client-rendered dynamic detail routes ([id], [slug]) whose data
 * lives in "use client" modules a server layout can't read. Gives each URL its
 * own title and self-canonical instead of inheriting the parent listing's.
 */
export function detailRouteMetadata(basePath: string, slug: string, category: string): Metadata {
  const name = humanizeSlug(slug);
  return pageMetadata({
    title: `${name} — ${category}`,
    description: `${name} from Valvenok's ${category.toLowerCase()} range. View specifications and request a quote from our UK team.`,
    path: `${basePath}/${slug}`,
  });
}
