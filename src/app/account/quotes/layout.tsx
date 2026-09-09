import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account/quotes" },
};

export default function AccountQuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
