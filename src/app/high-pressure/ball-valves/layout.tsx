import type { Metadata } from "next";

const TITLE = "High Pressure Ball Valves | Valvenok";
const DESCRIPTION =
  "High pressure ball valves across multiple series, pressure ratings and connection types.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/ball-valves" },
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

export default function HPBallValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
