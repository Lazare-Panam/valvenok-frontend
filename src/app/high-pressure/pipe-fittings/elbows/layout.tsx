import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "High Pressure Pipe Elbows, SS316 Threaded | Valvenok";
const DESCRIPTION =
  "SS316 high pressure pipe elbow fittings across pressure ratings and thread configurations for instrumentation and process lines. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/pipe-fittings/elbows" },
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

export default function PipeElbowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/high-pressure/pipe-fittings/elbows" /></>;
}
