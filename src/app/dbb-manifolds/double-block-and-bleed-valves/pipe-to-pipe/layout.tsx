import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/dbb-manifolds/double-block-and-bleed-valves/pipe-to-pipe" },
  title: "DBB Pipe to Pipe Valves",
  description:
    "Browse double block and bleed pipe-to-pipe valves — filter by configuration, seal and seat material, bore and inlet size, inlet type, and more.",
  openGraph: {
    title: "DBB Pipe to Pipe Valves | Valvenok",
    description:
      "Browse double block and bleed pipe-to-pipe valves — filter by configuration, seal/seat material, bore and inlet size, and inlet type.",
    type: "website",
  },
};

export default function DBBPipeToPipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
