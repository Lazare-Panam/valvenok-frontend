import type { Metadata } from "next";

const TITLE = "Pneumatic Tubing | Valvenok";
const DESCRIPTION =
  "SPAC polyurethane tubing, standard, recoil and anti-spark variants.";
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

export default function PneumaticTubingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
