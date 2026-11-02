import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "High Pressure Pipe Tees & Crosses, SS316 | Valvenok";
const DESCRIPTION =
  "SS316 high pressure tee and cross pipe fittings across pressure ratings and thread sizes for branching instrumentation and process lines. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/pipe-fittings/tees-cross" },
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

export default function PipeTeeCrossLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/high-pressure/pipe-fittings/tees-cross" /></>;
}
