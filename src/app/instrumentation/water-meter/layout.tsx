import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Multi-Jet Cold Water Meter, 15–50mm",
  description:
    "ISO 4064 multi-jet cold water meter with brass body and threaded ends, 15mm to 50mm, rated to 1.6 MPa Class B. The 15mm size is ISI marked.",
  path: "/instrumentation/water-meter",
});

export default function InstrumentationWaterMeterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
