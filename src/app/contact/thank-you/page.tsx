import type { Metadata } from "next";
import ThankYou from "./ThankYou";

// Shown after the contact form is sent. Not for search results.
export const metadata: Metadata = {
  title: { absolute: "Thank you for your enquiry | Valvenok" },
  description: "Your enquiry has reached the Valvenok team.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact/thank-you" },
};

export default function ContactThankYouPage() {
  return <ThankYou />;
}
