import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

// Same listing as /high-pressure/needle-valves/products, which is the canonical copy.
export const metadata: Metadata = pageMetadata({
  title: "High Pressure Needle Valves — Product Range",
  description: "Filter Panam and Hiflux high pressure needle valves by series, pressure rating, connection size and type. View specifications and request a quote.",
  path: "/high-pressure/needle-valves/products",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
