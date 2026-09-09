import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing" },
};

export default function FittingsTubingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
