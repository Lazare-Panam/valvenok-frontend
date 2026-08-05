import type { Metadata } from "next";

const TITLE = "Machinery Filtration | Valvenok";
const DESCRIPTION =
  "High pressure, aluminium, return line and duplex filters, suction strainers.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png";

export const metadata: Metadata = {
  title: TITLE,
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
  return <>{children}</>;
}
