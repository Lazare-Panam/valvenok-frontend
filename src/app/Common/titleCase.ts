// Title Case for headings: "Shop Susin I-Tork actuators" → "Shop Susin I-Tork Actuators".
// Short joining words stay lower case (unless first), and words that already
// contain a capital or a digit (ITQ, 1S, kN, PA-HX) are left as written.
const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "nor", "of", "on", "or", "per", "the", "to", "vs", "via", "with"]);

export function titleCase(s: string): string {
  let first = true;
  return s.replace(/[A-Za-z][\w’'-]*/g, (w) => {
    const isFirst = first;
    first = false;
    if (/[A-Z0-9]/.test(w)) return w;
    if (!isFirst && SMALL.has(w)) return w;
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
}
