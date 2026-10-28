import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/quick-coupling-and-hoses" },
  title: { absolute: "Hydraulic Quick Couplings & Stainless Tubing | Valvenok" },
  description:
    "Hydraulic quick couplings in ISO-A, ISO 16028, ISO 7241A/B, ISO 5675 and screw types, BSPP and NPT 1/4\" to 1\", plus stainless steel tubing.",
  openGraph: {
    title: "Hydraulic Quick Couplings & Stainless Tubing | Valvenok",
    description:
      "Hydraulic quick couplings in ISO-A, ISO 16028, ISO 7241A/B, ISO 5675 and screw types, BSPP and NPT 1/4\" to 1\", plus stainless steel tubing.",
    type: "website",
  },
};

export default function QuickCouplingIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
