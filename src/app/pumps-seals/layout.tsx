import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals" },
  title: { absolute: "Industrial Pumps & Mechanical Seals — UK Supply | Valvenok" },
  description:
    "Industrial pumps and mechanical seals: submersible, booster, centrifugal and hot water pumps plus mechanical seals for process and water applications.",
  openGraph: {
    title: "Industrial Pumps & Mechanical Seals — UK Supply | Valvenok",
    description:
      "Industrial pumps and mechanical seals: submersible, booster, centrifugal and hot water pumps plus mechanical seals for process and water applications.",
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
