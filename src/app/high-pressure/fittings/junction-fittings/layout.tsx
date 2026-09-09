import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/fittings/junction-fittings" },
  title: "High Pressure Junctions",
  description:
    "Browse high pressure junction fittings — filter by fitting type, pressure rating, thread type, and size to find the exact configuration you need.",
  openGraph: {
    title: "High Pressure Junctions | Valvenok",
    description:
      "Browse high pressure junction fittings — filter by fitting type, pressure rating, thread type, and size.",
    type: "website",
  },
};

export default function HPJunctionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
