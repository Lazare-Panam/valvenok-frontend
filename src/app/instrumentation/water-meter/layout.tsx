import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/water-meter" },
};

export default function InstrumentationWaterMeterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
