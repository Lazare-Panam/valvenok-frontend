import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Ball Valves — Product Range",
  description: "Browse high pressure ball valves rated 10,000 to 60,000 psi. Filter by brand, pressure rating and connection, then request a quote from Valvenok.",
  path: "/high-pressure/valves/ball-valves/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
