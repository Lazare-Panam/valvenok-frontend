import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/ke-series/variants" },
  title: { absolute: "KE Series Electric Actuators — KE001 to KE120 Models | Valvenok" },
  description:
    "KE series electric quarter-turn actuators, KE001 to KE120, in standard or reduced-torque variants covering 4–1200 Nm. Compare models and request a quote.",
  openGraph: {
    title: "KE Series Electric Actuators — KE001 to KE120 Models | Valvenok",
    description:
      "KE series electric quarter-turn actuators, KE001 to KE120, in standard or reduced-torque variants covering 4–1200 Nm. Compare models and request a quote.",
    type: "website",
  },
};

export default function KESeriesProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
