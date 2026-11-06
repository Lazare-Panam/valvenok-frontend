import type { Metadata } from "next";

const TITLE = "Tri-Clamp Clamp Models & Part Codes | Valvenok";
const DESCRIPTION =
  "All 38 Adaptix tri-clamp clamps: single pin (S type) and double-bolted (SSH type), DN 6 to DN 300. Filter by type and size, then request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: ["https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/tri-clamps-range.jpg"] },
};

export default function ClampProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
