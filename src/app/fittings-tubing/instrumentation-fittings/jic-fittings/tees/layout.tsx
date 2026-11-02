import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "JIC Tees & Crosses, 37° Flare SS316 | Valvenok",
  description:
    "316 stainless steel 37° flared JIC tees: male and female branch and run tees, union tees, swivel tees and union crosses. Filter by size and get a quote.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/tees",
});

export default function TeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/jic-fittings/tees" /></>;
}
