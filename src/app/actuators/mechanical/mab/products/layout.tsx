import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/mab/products" },
  title: "MAB Gearboxes",
  description:
    "Browse MAB gearbox models — filter by sub-series and model to find the exact configuration you need.",
  openGraph: {
    title: "MAB Gearboxes | Valvenok",
    description: "Browse MAB gearbox models — filter by sub-series and model.",
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
