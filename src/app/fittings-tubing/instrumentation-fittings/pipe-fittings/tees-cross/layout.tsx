import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "SS316 Pipe Tees & Cross Fittings | Valvenok";
const DESCRIPTION =
  "316 stainless steel instrumentation pipe tees and crosses in NPT, ISO and SAE/MS threads for branching process and instrument lines. Filter by size.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross",
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

export default function TeesCrossLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/pipe-fittings/tees-cross" /></>;
}
