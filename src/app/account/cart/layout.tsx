import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account/cart" },
};

export default function AccountCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
