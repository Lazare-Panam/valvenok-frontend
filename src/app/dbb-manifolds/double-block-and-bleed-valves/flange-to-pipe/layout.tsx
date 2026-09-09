import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/double-block-and-bleed-valves/flange-to-pipe" },
  title: "DBB Flange to Pipe Valves",
  description:
    "Browse double block and bleed flange-to-pipe valves — filter by construction type, configuration, seal and seat material, bore and inlet size, pressure class, and more.",
  openGraph: {
    title: "DBB Flange to Pipe Valves | Valvenok",
    description:
      "Browse double block and bleed flange-to-pipe valves — filter by construction type, configuration, seal/seat material, bore and inlet size, and pressure class.",
    type: "website",
  },
};

export default function DBBFlangeToPipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
