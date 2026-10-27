import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Tubing — Product Range",
  description: "Browse high pressure stainless steel tubing by outside diameter, wall thickness and pressure rating. Request a quote from Valvenok's UK team.",
  path: "/high-pressure/tubing/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
