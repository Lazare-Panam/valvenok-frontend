import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "JIC Connectors — 37° Flare, SS316",
  description:
    "316 stainless steel 37° flared JIC male and female connectors in NPT, BSPT, BSPP, SAE/MS and metric threads. Filter by size and request a quote.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/connectors",
});

export default function ConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
