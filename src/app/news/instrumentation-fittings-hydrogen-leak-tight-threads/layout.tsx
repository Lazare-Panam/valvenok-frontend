import type { Metadata } from "next";

const TITLE = "Instrumentation Fittings for Hydrogen Service";
const DESCRIPTION =
  "Thread ID, sealant choice, and ferrule best practices for leak-tight hydrogen instrumentation fittings.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/instrumentation-fittings-hydrogen-leak-tight-threads" },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function InstrumentationFittingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
