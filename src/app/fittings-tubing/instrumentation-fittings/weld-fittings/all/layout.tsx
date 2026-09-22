import type { Metadata } from "next";

const TITLE = "Weld Fittings — SS316 | Valvenok";
const DESCRIPTION =
  "SS316 tube and pipe weld fittings, NPT/BSPT/BSPP threads, 1/8-2in or 6-38mm.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: {
    canonical: "/fittings-tubing/instrumentation-fittings/weld-fittings/all",
  },
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

export default function WeldFittingAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
