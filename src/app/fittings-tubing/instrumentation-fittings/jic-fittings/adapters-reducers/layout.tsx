import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "JIC Adapters & Reducers — 37° Flare, SS316",
  description:
    "316 stainless steel 37° flared JIC adapters, reducers and sleeves in NPT, BSPT, BSPP, SAE/MS and metric threads. Filter by size and request a quote.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers",
});

export default function AdaptersReducersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
