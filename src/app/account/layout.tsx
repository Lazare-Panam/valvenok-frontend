import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/account" },
  title: "My Account",
  description: "Manage your Valvenok profile, view your procurement history, and access your saved industrial components.",
   
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}