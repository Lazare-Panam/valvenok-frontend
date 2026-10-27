import { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "My Account",
  description:
    "Manage your Valvenok profile, view your procurement history, and access your saved industrial components.",
  path: "/account",
  index: false,
});

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}