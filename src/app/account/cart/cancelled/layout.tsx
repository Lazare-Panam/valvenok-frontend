import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Checkout Cancelled",
  description:
    "Checkout was cancelled and no payment was taken. Your Valvenok cart is still saved.",
  path: "/account/cart/cancelled",
  index: false,
});

export default function AccountCartCancelledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
