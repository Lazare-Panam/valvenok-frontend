import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "JIC Elbows — 37° Flare, SS316",
  description:
    "316 stainless steel 37° flared JIC elbows: adjustable male, 45° male, female and union elbows across NPT, BSPT, BSPP, SAE/MS and metric threads.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/elbows",
});

export default function ElbowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
