import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/seals-glands" },
};

export default function HighPressureSealsGlandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
