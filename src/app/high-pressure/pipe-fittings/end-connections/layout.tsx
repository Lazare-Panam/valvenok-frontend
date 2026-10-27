import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "HP Pipe Plugs & Caps — SS316",
  description:
    "Panam SS316 high pressure hex plugs, tube plugs and pipe caps in NPT, ISO parallel and 37° JIC threads, 10,000 to 15,000 psi, sizes 1/8\" to 2\".",
  path: "/high-pressure/pipe-fittings/end-connections",
});

export default function EndConnectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
