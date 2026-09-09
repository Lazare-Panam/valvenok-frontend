import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/pneumatic-fittings/a-series" },
};

export default function FittingsTubingPneumaticFittingsASeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
