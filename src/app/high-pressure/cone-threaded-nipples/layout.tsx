import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "HP Cone & Threaded Nipples — SS316",
  description:
    "Panam SS316 cone and threaded nipples: MP at 20,000 psi and HP at 60,000 psi, in 1/4\" to 1\" OD and lengths from 2.75\" to 12\". Request a quote.",
  path: "/high-pressure/cone-threaded-nipples",
});

export default function HighPressureConeThreadedNipplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
