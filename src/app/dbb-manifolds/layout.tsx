import type { Metadata } from "next";

const TITLE = "DBB Valves & Instrument Manifolds — ANSI 150–2500 | Valvenok";
const DESCRIPTION =
  "Double block and bleed valves and instrument manifold valves, ANSI Class 150 to 2500, with NACE MR0175 sour gas options. Request a quote from Valvenok.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds" },
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
    images: [IMAGE],
  },
};

export default function InstrumentationIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
