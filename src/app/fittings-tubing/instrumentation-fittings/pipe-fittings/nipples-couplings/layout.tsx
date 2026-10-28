import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/pipe-fittings/nipples-couplings" },
  title: { absolute: "Pipe Nipples & Couplings — SS316 Instrumentation | Valvenok" },
  description:
    "316 stainless steel hex nipples, long nipples, reducing nipples, couplings and hex couplings for instrumentation piping. Filter by size and thread.",
  openGraph: {
    title: "Pipe Nipples & Couplings — SS316 Instrumentation | Valvenok",
    description:
      "316 stainless steel hex nipples, long nipples, reducing nipples, couplings and hex couplings for instrumentation piping. Filter by size and thread.",
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
