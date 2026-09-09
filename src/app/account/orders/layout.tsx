import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account/orders" },
};

export default function AccountOrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
