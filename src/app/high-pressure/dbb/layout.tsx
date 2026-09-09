import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/dbb" },
};

export default function HighPressureDbbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
