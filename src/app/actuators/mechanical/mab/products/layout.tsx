import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/mab/products" },
  title: { absolute: "MAB Series Bevel Gearboxes — All Models & Sizes | Valvenok" },
  description:
    "Browse MAB series bevel gearboxes for multi-turn valve operation. Filter by sub-series and model to find the configuration you need, then request a quote.",
  openGraph: {
    title: "MAB Series Bevel Gearboxes — All Models & Sizes | Valvenok",
    description: "Browse MAB series bevel gearboxes for multi-turn valve operation. Filter by sub-series and model to find the configuration you need, then request a quote.",
    type: "website",
  },
};

export default function MABGearboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/actuators/mechanical/mab/products" /></>;
}
