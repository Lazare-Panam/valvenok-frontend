import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipe Fittings — Nipples & Couplings | Valvenok",
  description:
    "Browse hex nipples, hex long nipples, hex reducing nipples, couplings, long pattern nipples, hex couplings and reducing hex couplings.",
  openGraph: {
    title: "Pipe Fittings — Nipples & Couplings | Valvenok",
    description:
      "Browse hex nipples, hex long nipples, hex reducing nipples, couplings, and reducing hex couplings.",
    type: "website",
  },
};

export default function NipplesCouplingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
