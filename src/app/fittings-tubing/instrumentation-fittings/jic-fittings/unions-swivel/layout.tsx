import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "JIC Unions, Swivels & Bulkheads — 37° Flare, SS316 | Valvenok",
  description:
    "316 stainless steel 37° flared JIC unions: large hex, swivel and bulkhead unions plus bulkhead lock nuts. Filter by size and request a quote from Valvenok.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel",
});

export default function UnionsSwivelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
