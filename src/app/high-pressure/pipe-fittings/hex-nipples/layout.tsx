import type { Metadata } from "next";

const TITLE = "Pipe Nipple Fittings | Valvenok";
const DESCRIPTION =
  "SS316 pipe nipple fittings in multiple pressure ratings and thread configurations.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/logo/Valvenok_logo.jpeg";

export const metadata: Metadata = {
  title: TITLE,
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

export default function PipeNippleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
