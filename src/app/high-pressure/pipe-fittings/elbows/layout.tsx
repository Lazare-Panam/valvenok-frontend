import type { Metadata } from "next";

const TITLE = "Pipe Elbow Fittings | Valvenok";
const DESCRIPTION =
  "SS316 pipe elbow fittings in multiple pressure ratings and thread configurations.";
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

export default function PipeElbowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
