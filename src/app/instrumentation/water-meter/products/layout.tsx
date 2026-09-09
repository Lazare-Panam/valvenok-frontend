import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/instrumentation/water-meter/products" },
};

export default function InstrumentationWaterMeterProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
