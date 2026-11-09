import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/qs/products" },
  title: { absolute: "QS Series Fail-Safe Electric Actuators — Models | Valvenok" },
  description:
    "All four QS series fail-safe spring return electric actuators, QS05 to QS30 (50–300 Nm), with full specifications. Request a quote from Valvenok.",
  openGraph: {
    title: "QS Series Fail-Safe Electric Actuators — Models | Valvenok",
    description:
      "QS05 to QS30 fail-safe spring return electric actuators, 50–300 Nm, with full specifications.",
    url: "/actuators/electric/qs/products",
    type: "website",
  },
};

export default function QSProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
