import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multistage Centrifugal Pumps",
  description:
    "HS and TS series pumps across 50Hz and 60Hz operation, single and three-phase configurations.",
  openGraph: {
    title: "Multistage Centrifugal Pumps | Valvenok",
    description:
      "HS and TS series pumps across 50Hz and 60Hz operation, single and three-phase configurations.",
    type: "website",
  },
};

export default function MultistageCentrifugalProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
