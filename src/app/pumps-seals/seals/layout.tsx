import type { Metadata } from "next";

const TITLE = "Mechanical Seals | Valvenok";
const DESCRIPTION =
  "Single and double agitator mechanical seals for reactors and mixing vessels.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

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

export default function MechanicalSealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
