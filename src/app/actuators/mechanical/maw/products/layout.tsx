import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "MAW Worm Gearboxes for Valves: Models & Sizes | Valvenok";
const DESCRIPTION =
  "Browse MAW series worm gearboxes for quarter-turn valve actuation and drive systems. Filter by sub-series and model, then request a quote from Valvenok.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/maw/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function MAWGearboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/actuators/mechanical/maw/products" /></>;
}
