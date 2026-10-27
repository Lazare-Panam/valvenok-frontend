import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Saved Cart",
  description:
    "Your saved Valvenok cart.",
  path: "/account/cart",
  index: false,
});

export default function AccountCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
