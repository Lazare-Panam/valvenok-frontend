import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Track Your Order",
  description:
    "Track a Valvenok order by order reference or email address to see its status and line items.",
  path: "/track-order",
  index: false,
});

export default function TrackOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
