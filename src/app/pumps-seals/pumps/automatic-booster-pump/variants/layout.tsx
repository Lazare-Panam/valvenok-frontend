import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatic Booster Pumps | Valvenok",
  description:
    "TP820P(T) and TP825P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
  openGraph: {
    title: "Automatic Booster Pumps | Valvenok",
    description:
      "TP820P(T) and TP825P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function AutomaticBoosterPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
