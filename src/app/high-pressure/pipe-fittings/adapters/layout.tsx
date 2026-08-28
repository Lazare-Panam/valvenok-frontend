import type { Metadata } from "next";

const TITLE = "Pipe Adapter Fittings | Valvenok";
const DESCRIPTION =
  "SS316 pipe adapter fittings in multiple pressure ratings and thread configurations.";
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

export default function PipeAdapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
