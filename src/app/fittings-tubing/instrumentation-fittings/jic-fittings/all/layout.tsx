import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "All JIC Fittings — 37° Flare SS316 Hydraulic Fittings | Valvenok";
const DESCRIPTION =
  "The full range of SS316 37° JIC flare fittings in NPT, BSPT, BSPP, SAE and metric threads: connectors, elbows, tees, unions, plugs and adapters.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: {
    canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/all",
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

export default function JICProductAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/jic-fittings/all" /></>;
}
