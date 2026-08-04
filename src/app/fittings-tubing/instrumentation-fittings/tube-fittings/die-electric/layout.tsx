import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dielectric Fittings & Gaskets | Valvenok",
  description:
    "Stainless steel dielectric tube fittings for electrical isolation, and precision thread sealing gaskets for parallel and internal threads.",
  openGraph: {
    title: "Dielectric Fittings & Gaskets | Valvenok",
    description:
      "Stainless steel dielectric tube fittings for electrical isolation, and precision thread sealing gaskets for parallel and internal threads.",
    type: "website",
  },
};

export default function DielectricGasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
