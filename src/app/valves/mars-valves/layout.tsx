import type { Metadata } from "next";

const TITLE = "Mars Ball Valves — Series, Port Types & End Connections | Valvenok";
const DESCRIPTION =
  "Browse Mars stainless steel ball valves by series, port type and end connection, including 1-piece, 2-piece, 3-piece and flanged designs. Request a quote.";
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
