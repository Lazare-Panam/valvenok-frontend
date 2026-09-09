import type { Metadata } from "next";

const TITLE = "Single Agitator Mechanical Seals Guide";
const DESCRIPTION =
  "How single agitator mechanical seals work, operating limits, and common failure modes.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/seals-blog" },
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
