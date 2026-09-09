import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/tube/products" },
};

export default function HydrogenCryogenicTubeProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
