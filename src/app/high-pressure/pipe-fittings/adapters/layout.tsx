import type { Metadata } from "next";

const TITLE = "High Pressure Pipe Size Adapters | Valvenok";
const DESCRIPTION =
  "SS316 high pressure pipe size adapters, NPT to NPT and BSPP to BSPP, 10,000 to 15,000 psi. For thread-changing parts see our hex nipples.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/pipe-fittings/adapters" },
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

export default function PipeAdapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
