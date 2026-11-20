import type { Metadata } from "next";

const DEFAULT_OG_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path of this route, e.g. "/valves/instrumentation-valves". Used for canonical and og:url. */
  path: string;
  /** false for account, cart and utility pages that should stay out of search results. */
  index?: boolean;
  /** Sharing image (og:image); defaults to the Valvenok logo. */
  image?: string;
};

/**
 * Full per-route metadata. Next.js merges metadata down the layout tree, so a
 * route that only sets `canonical` inherits its parent's title, description
 * and openGraph (including og:url) — which made child pages look like
 * duplicates of their parent. Setting every field here stops that leak.
 */
export function pageMetadata({
  title,
  description,
  path,
  index = true,
  image,
}: PageMetaInput): Metadata {
  // Always emit the full branded title. Relying on the root "%s | Valvenok"
  // template isn't safe: any ancestor layout with a plain string title resets
  // it, which left some pages without the brand suffix.
  const fullTitle = title.endsWith("| Valvenok")
    ? title
    : `${title} | Valvenok`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Valvenok",
      type: "website",
      images: [image ?? DEFAULT_OG_IMAGE],
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
      /\d/.test(w) || w.length <= 3
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");
}

/**
 * Metadata for client-rendered dynamic detail routes ([id], [slug]) whose data
 * lives in "use client" modules a server layout can't read. Gives each URL its
 * own title and self-canonical instead of inheriting the parent listing's.
 */
export function detailRouteMetadata(
  basePath: string,
  slug: string,
  category: string,
  image?: string,
): Metadata {
  const name = humanizeSlug(slug);
  const base = `${name} — ${category}`;
  // Pad short titles so they aren't flagged as thin, but keep the full
  // "<title> | Valvenok" within ~68 characters.
  const fits = (t: string) => t.length + " | Valvenok".length <= 68;
  const title =
    [`${base}: Specifications & Quote`, `${base}: Specs & Quote`, base].find(
      fits,
    ) ?? base;
  const lead = `${name} from Valvenok's ${category.toLowerCase()} range.`;
  const tails = [
    " View the specifications, sizes and options, then request a quote from our UK team.",
    " View specifications and options, then request a quote from our UK team.",
    " View specifications and request a quote.",
  ];
  return pageMetadata({
    title,
    description:
      lead +
      (tails.find((t) => (lead + t).length <= 155) ?? tails[tails.length - 1]),
    path: `${basePath}/${slug}`,
    image,
  });
}
