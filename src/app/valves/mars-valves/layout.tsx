import type { Metadata } from "next";

const TITLE = "Mars Ball Valves | Valvenok";
const DESCRIPTION =
  "Mars ball valves across multiple series, port types and end connections.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/mars-valves" },
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

export default function MarsBallValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
