import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersible Pumps | Valvenok",
  description:
    "Browse immersible pump models across TPRK_E, TPHK and TPK series, available in 50Hz and 60Hz operation.",
  openGraph: {
    title: "Immersible Pumps | Valvenok",
    description:
      "Browse immersible pump models across TPRK_E, TPHK and TPK series, available in 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function ImmersiblePumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
