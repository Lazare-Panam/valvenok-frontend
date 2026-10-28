import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "High Pressure Pipe Plugs & Caps — SS316, to 15,000 psi | Valvenok",
  description:
    "Panam SS316 high pressure hex plugs, tube plugs and pipe caps in NPT, ISO parallel and 37° JIC threads, 10,000 to 15,000 psi, sizes 1/8\" to 2\".",
  path: "/high-pressure/pipe-fittings/end-connections",
});

export default function EndConnectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/high-pressure/pipe-fittings/end-connections" /></>;
}
