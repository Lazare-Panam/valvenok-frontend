import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Order History",
  description:
    "View your Valvenok order history.",
  path: "/account/orders",
  index: false,
});

export default function AccountOrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
