import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "JIC Male & Female Connectors — 37° Flare, SS316 | Valvenok",
  description:
    "316 stainless steel 37° flared JIC male and female connectors in NPT, BSPT, BSPP, SAE/MS and metric threads. Filter by size and request a quote today.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/connectors",
});

export default function ConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/jic-fittings/connectors" /></>;
}
