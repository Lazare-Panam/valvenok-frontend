import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hiflux HP Tubes, Nipples & Tools — Models",
  description:
    "Compare Hiflux high pressure tube, nipple, tooling and tube support models from 20,000 to 100,000 psi and request a quote on any line.",
  path: "/hydrogen-cryogenic/tube/products",
});

export default function HydrogenCryogenicTubeProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
