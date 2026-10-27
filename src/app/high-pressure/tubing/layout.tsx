import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Tubing & Tube Supports",
  description: "High pressure stainless steel tubing and Hiflux STS 316 tube supports. View specifications and request a quote.",
  path: "/high-pressure/tubing",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
