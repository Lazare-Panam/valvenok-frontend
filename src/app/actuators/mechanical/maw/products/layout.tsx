import type { Metadata } from "next";

const TITLE = "MAW Gearboxes | Valvenok";
const DESCRIPTION =
  "MAW worm gearboxes for industrial valve actuation and drive systems.";
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
  return <>{children}</>;
}
