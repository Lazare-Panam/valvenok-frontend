import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "UPC Multijet & Woltman Water Meters — Models",
  description:
    "UPC Instruments multijet and Woltman water meters for cold, hot and superhot water. Compare sizes, temperature and pressure ratings and request a quote.",
  path: "/instrumentation/water-meter/products",
});

export default function InstrumentationWaterMeterProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
