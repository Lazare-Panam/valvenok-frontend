import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "Hydraulic Filters & Strainers for Machinery | Valvenok";
const DESCRIPTION =
  "High pressure, aluminium, return line and duplex hydraulic filters, plus suction strainers, for machinery and industrial systems. Request a quote.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png";

export const metadata: Metadata = {
  alternates: { canonical: "/filters-sight-glass/filtration" },
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

export default function MachineryFiltrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/filters-sight-glass/filtration" /></>;
}
