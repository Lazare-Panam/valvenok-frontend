import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Order Confirmed",
  description:
    "Your Valvenok order payment was successful.",
  path: "/account/cart/success",
  index: false,
});

export default function AccountCartSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
