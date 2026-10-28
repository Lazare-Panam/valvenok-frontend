import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/mab/products" },
  title: { absolute: "MAB Series Bevel Gearboxes — Models & Sizes | Valvenok" },
  description:
    "Browse MAB series bevel gearboxes for multi-turn valve operation. Filter by sub-series and model to find the configuration you need, then request a quote.",
  openGraph: {
    title: "MAB Series Bevel Gearboxes — Models & Sizes | Valvenok",
    description: "Browse MAB series bevel gearboxes for multi-turn valve operation. Filter by sub-series and model to find the configuration you need, then request a quote.",
    type: "website",
  },
};

export default function MABGearboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
