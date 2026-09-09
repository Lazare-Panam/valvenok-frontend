import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/manifolds" },
};

export default function HighPressureManifoldsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
