import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure DBB Valves — Product Range",
  description: "Browse high pressure double block and bleed valves rated to 20,000 psi. Filter by connection and configuration, then request a quote from Valvenok.",
  path: "/high-pressure/valves/dbb-valves/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
