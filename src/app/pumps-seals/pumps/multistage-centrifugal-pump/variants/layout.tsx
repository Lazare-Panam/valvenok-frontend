import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/multistage-centrifugal-pump/variants" },
  title: { absolute: "Multistage Centrifugal Pump Variants and Specifications – Valvenok" },
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
