import type { Metadata } from "next";

const TITLE = "Quick Couplings Products | Valvenok";
const DESCRIPTION =
  "Hydraulic couplings, ISO-A/16028/7241/5675, carbon steel, 1/4-1in.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg";

export const metadata: Metadata = {
  alternates: { canonical: "/quick-coupling-and-hoses/quick-coupling" },
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

export default function QuickCouplingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
