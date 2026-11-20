import type { Metadata } from "next";

const TITLE = "Weld Fittings — SS316 | Valvenok";
const DESCRIPTION =
  "SS316 tube socket weld fittings with NPT threads: connectors, elbows and tees, 1/8-2in or 6-38mm tube OD.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg";

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
