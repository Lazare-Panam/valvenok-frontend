import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "JIC Elbows: 37° Flare Male, Female & Union | Valvenok",
  description:
    "316 stainless steel 37° flared JIC elbows: adjustable male, 45° male, female and union elbows in NPT, BSPT, BSPP, SAE/MS and metric threads.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/elbows",
});

export default function ElbowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/jic-fittings/elbows" /></>;
}
