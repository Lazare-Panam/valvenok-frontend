import type { Metadata } from "next";

const TITLE = "JIC Fittings — SS316 | Valvenok";
const DESCRIPTION =
  "SS316 37° JIC flare fittings, NPT/BSPT/BSPP/SAE/Metric threads.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/all" },
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
  return <>{children}</>;
}
