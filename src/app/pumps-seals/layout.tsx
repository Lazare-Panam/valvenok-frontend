import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals" },
  title: "Pumps & Seals",
  description:
    "Industrial pumps and high-performance mechanical seals for demanding environments. Heavy-duty submersible pumps and precision-engineered seals for zero-leakage, maximum uptime.",
  openGraph: {
    title: "Pumps & Seals | Valvenok",
    description:
      "Industrial pumps and high-performance mechanical seals — submersible pumps and precision-engineered seals for zero-leakage fluid handling.",
    type: "website",
  },
};

export default function PumpsAndSealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
