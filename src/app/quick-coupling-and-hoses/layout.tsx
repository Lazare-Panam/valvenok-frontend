import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/quick-coupling-and-hoses" },
  title: "Quick Couplings & Tubing",
  description:
    'Six hydraulic quick coupling series — ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675, and Screw Type — plus stainless steel tubing. Carbon Steel construction, BSPP and NPT threads from 1/4" to 1".',
  openGraph: {
    title: "Quick Couplings & Tubing | Valvenok",
    description:
      'Six hydraulic quick coupling series plus stainless steel tubing, Carbon Steel construction, BSPP and NPT threads from 1/4" to 1".',
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
