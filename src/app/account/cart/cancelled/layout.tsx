import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account/cart/cancelled" },
};

export default function AccountCartCancelledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
