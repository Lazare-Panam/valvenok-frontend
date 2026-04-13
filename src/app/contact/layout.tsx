import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team",
  description: "Get expert technical support and bulk procurement quotes. Our engineering team responds to all industrial enquiries within 24 hours.",
  openGraph: {
    title: 'Contact Valvenok | Industrial Distribution Support',
    description: 'Connect with Valvenok for technical specs, mechanical seal selection, and valve distribution across the UK.',
    url: 'https://www.valvenok.com/contact',
    siteName: 'Valvenok',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}