import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account/cart/success" },
};

export default function AccountCartSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
