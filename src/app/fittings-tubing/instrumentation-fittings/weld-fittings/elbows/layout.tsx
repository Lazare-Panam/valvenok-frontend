import type { Metadata } from "next";

const TITLE = "Weld Fitting Elbows | Valvenok";
const DESCRIPTION =
  "SS316 weld fitting elbows, male and female connection types for industrial piping.";
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

export default function WeldFittingElbowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}