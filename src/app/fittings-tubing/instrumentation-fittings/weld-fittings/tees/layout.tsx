import type { Metadata } from "next";

const TITLE = "Weld Fitting Tees | Valvenok";
const DESCRIPTION =
  "SS316 weld fitting tees, male reducing and branch tee types for industrial piping.";
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

export default function WeldFittingTeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
