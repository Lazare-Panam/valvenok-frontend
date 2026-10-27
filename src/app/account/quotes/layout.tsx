import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Orders & Quotes",
  description:
    "View your Valvenok quotes and orders.",
  path: "/account/quotes",
  index: false,
});

export default function AccountQuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
