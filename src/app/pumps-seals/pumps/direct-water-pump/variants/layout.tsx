import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direct Water Pumps | Valvenok",
  description:
    "TP320P(T) and TP325P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
  openGraph: {
    title: "Direct Water Pumps | Valvenok",
    description:
      "TP320P(T) and TP325P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function DirectWaterPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
