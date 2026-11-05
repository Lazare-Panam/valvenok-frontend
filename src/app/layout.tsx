import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";
import Navbar from "./Common/Navbar/Navbar";
import { GROUP_SITES } from "./Common/group";
import Providers from "./providers";
import { NotificationProvider } from "../components/NotificationProvider";
import Footer from "./Common/Footer/Footer";
import Breadcrumbs from "../components/Common/BreadCrumbs";
import FloatingQuote from "./Common/FloatingQuote";
import WhatsAppButton from "./Common/WhatsAppButton";
import ScrollProgress from "./Common/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Valvenok | Industrial Valves, Fittings & Instrumentation UK",
    template: "%s | Valvenok",
  },
  description:
    "UK supplier of industrial valves, actuators and SS316 instrumentation fittings, plus hydrogen components, from 32 brands including PANAM.",
  icons: {
    icon: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png",
  },
  metadataBase: new URL("https://www.valvenok.com"),
  // No twitter title/description here on purpose: a child segment that sets
  // openGraph but not twitter would otherwise keep these homepage values.
  // Without them, Next.js fills twitter:title/description from each page's
  // own openGraph (falling back to the page title/description).
  twitter: {
    card: "summary_large_image",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        {/* <script
          data-cfasync="false"
          type="text/javascript"
          src="https://cdn.seoplatform.io/injector.js?websiteId=28073"
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.valvenok.com/#organization",
              name: "Valvenok",
              legalName: "Valvenok Ltd",
              url: "https://www.valvenok.com",
              logo: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7368 137917",
                contactType: "sales",
                email: "sales@valvenok.com",
                areaServed: "GB",
              },
              sameAs: ["https://uk.linkedin.com/company/valvenok-ltd"],
              // Group sites run by Valvenok Ltd itself
              subOrganization: GROUP_SITES.filter((g) => g.operatedByValvenok).map((g) => ({
                "@type": "Organization",
                name: g.name,
                url: g.url,
              })),
            }),
          }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <ScrollProgress />
          <Providers>
            <NotificationProvider />
            <Navbar />
            <Breadcrumbs />
            {children}
            <FloatingQuote />
            <WhatsAppButton />
          </Providers>
        </ThemeRegistry>
        <Footer />

        {/* Microsoft Clarity — via next/script; a raw <script> in the React tree never executes on the client */}
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "y5w4ikmfgt");
      `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRCXYNLX5K"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NRCXYNLX5K');
      `,
          }}
        />

        {/* Google "Preferred sources" button (Subscribe with Google publisher.js). Renders into the
            element carrying the `google-add-preferred-source-btn` attribute — see Common/Footer/Footer.tsx.
            afterInteractive: the footer div is in the SSR HTML, so the script finds it once loaded. */}
        <Script
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
