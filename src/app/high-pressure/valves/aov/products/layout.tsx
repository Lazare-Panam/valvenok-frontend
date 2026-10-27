import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Air Operated Valves — Product Range",
  description: "Browse high pressure air operated valves. Filter by pressure rating, connection and configuration, then request a quote from Valvenok's UK team.",
  path: "/high-pressure/valves/aov/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
