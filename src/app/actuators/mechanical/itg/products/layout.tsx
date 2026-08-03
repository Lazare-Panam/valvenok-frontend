import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITG Gearboxes | Valvenok",
  description:
    "Browse ITG gearbox models — filter by sub-series and model to find the exact configuration you need.",
  openGraph: {
    title: "ITG Gearboxes | Valvenok",
    description: "Browse ITG gearbox models — filter by sub-series and model.",
    type: "website",
  },
};

export default function ITGGearboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
