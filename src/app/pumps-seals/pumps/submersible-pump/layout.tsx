import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PW Series Submersible Pumps | Valvenok",
  description:
    "WALRUS submersible pumps for clean water in a corrosion-resistant, compact design. IP68 rated, suitable for garden ponds, fish breeding, drainage and confined-space pumping.",
  openGraph: {
    title: "PW Series Submersible Pumps | Valvenok",
    description:
      "WALRUS submersible pumps, IP68 rated, corrosion-resistant, for ponds, fish breeding, drainage and confined-space pumping.",
    type: "website",
  },
};

export default function SubmersiblePumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
