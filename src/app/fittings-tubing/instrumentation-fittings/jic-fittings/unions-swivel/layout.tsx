import type { Metadata } from "next";

const TITLE = "JIC Unions & Swivels | Valvenok";
const DESCRIPTION =
  "SS316 37° JIC union and swivel fittings for hydraulic and instrumentation lines.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
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

export default function UnionsSwivelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
