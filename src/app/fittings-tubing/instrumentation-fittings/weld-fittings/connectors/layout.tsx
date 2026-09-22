import type { Metadata } from "next";

const TITLE = "Weld Fitting Connectors | Valvenok";
const DESCRIPTION =
  "SS316 weld fitting connectors, multiple connection types for industrial piping.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

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

export default function WeldFittingConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
