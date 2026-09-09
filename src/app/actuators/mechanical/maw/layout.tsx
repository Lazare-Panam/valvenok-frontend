import type { Metadata } from "next";

const TITLE = "MAW Worm Gear Actuator | Valvenok";
const DESCRIPTION =
  "MAW self-locking worm gear actuators, 100-32,000 Nm, ISO 5211, IP67M rated.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/mechanical/maw" },
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

export default function MAWLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}