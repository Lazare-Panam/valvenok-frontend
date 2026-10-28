import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/itg/products" },
  title: { absolute: "ITG Series Valve Gearboxes — All Models & Sizes | Valvenok" },
  description:
    "Browse ITG series valve gearbox models. Filter by sub-series and model to find the configuration you need for manual valve operation, then request a quote.",
  openGraph: {
    title: "ITG Series Valve Gearboxes — All Models & Sizes | Valvenok",
    description: "Browse ITG series valve gearbox models. Filter by sub-series and model to find the configuration you need for manual valve operation, then request a quote.",
    type: "website",
  },
};

export default function ITGGearboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/actuators/mechanical/itg/products" /></>;
}
