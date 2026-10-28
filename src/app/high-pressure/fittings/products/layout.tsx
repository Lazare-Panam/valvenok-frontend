import type { Metadata } from "next";

// The listing must canonicalise to itself (not the /high-pressure/fittings
// landing page it would otherwise inherit from the parent layout).
export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/fittings/products" },
  title: { absolute: "High Pressure Fittings Catalogue — Panam & Hiflux | Valvenok" },
  description:
    "Filter Panam and Hiflux high pressure cone and thread fittings by brand, type, pressure rating, size and material, then request a quote from Valvenok.",
  openGraph: {
    title: "High Pressure Fittings Catalogue — Panam & Hiflux | Valvenok",
    description: "Filter Panam and Hiflux high pressure cone and thread fittings by brand, type, pressure rating, size and material, then request a quote from Valvenok.",
    url: "/high-pressure/fittings/products",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function HighPressureFittingsProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
