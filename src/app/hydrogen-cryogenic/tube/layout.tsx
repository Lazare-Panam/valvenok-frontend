import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/tube" },
};

export default function HydrogenCryogenicTubeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
