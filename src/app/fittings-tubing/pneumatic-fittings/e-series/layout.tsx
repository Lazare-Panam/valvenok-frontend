import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/pneumatic-fittings/e-series" },
};

export default function FittingsTubingPneumaticFittingsESeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
