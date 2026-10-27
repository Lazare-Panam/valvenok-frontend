import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "HP Glands, Collars & Anti-Vibration Glands",
  description:
    "Panam SS316 high pressure glands, collars and anti-vibration glands: medium pressure at 20,000 psi and high pressure at 60,000 psi, sizes 1/4\" to 1\".",
  path: "/high-pressure/seals-glands",
});

export default function HighPressureSealsGlandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
