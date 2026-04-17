import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Valvenok profile, view your procurement history, and access your saved industrial components.",
   robots: {
    index: false,
    follow: false,
  }
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}