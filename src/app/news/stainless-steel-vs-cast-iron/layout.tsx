import type { Metadata } from "next";

const TITLE = "Stainless Steel vs Cast Iron Pumps";
const DESCRIPTION =
  "How to choose between stainless steel and cast iron submersible pumps by water chemistry.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pumps-blog-hero.jpg";

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

export default function SubmersiblePumpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
