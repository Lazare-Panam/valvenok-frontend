import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Check Valves — Product Range",
  description: "Browse Hiflux high pressure check valves for anti-backflow service. Filter by pressure rating and connection size, then request a quote from Valvenok.",
  path: "/high-pressure/valves/check-valves/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
