import type { Metadata } from "next";

const TITLE = "Tri-Clamp Ferrule & End Cap Models | Valvenok";
const DESCRIPTION =
  "All 98 Adaptix tri-clamp ferrules, blind covers and sight glass end caps, DN 6 to DN 300. Filter by product, clamp size and tube OD, then request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/sanitary-fittings/ferrules-end-caps/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: ["https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/ferrules.jpg"] },
};

export default function EndProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
