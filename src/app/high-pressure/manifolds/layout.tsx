import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure 2-Valve Manifolds — SS316",
  description:
    "Panam SS316 2-valve manifolds for gauges and absolute pressure transmitters: 15,000 psi NPT female or 20,000 psi MP cone & thread, 1/4\" to 1/2\".",
  path: "/high-pressure/manifolds",
});

export default function HighPressureManifoldsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
