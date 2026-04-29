import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";
import Navbar from "./Common/Navbar/Navbar";
import Providers from "./providers";
import { NotificationProvider } from "../components/NotificationProvider";
import Footer from "./Common/Footer/Footer";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community'
ModuleRegistry.registerModules([AllCommunityModule])

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
    template: "%s | Valvenok" 
  },
  description: "UK's Leading Supplier of High-Pressure Valves, SS316 Fittings, and Hydrogen-ready components. Official distributor for PANAM and 40+ Global Engineering Brands.",
  icons: {
    icon: "https://pblol2.blob.core.windows.net/valvenok-images/logo/Valvenok_logo.jpeg",
  },
  metadataBase: new URL('https://www.valvenok.com'),
};;

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
        {/* This script will be placed before the closing </head> tag */}
        <script 
          data-cfasync="false" 
          type="text/javascript" 
          src="https://cdn.seoplatform.io/injector.js?websiteId=28073"
        />
      </head>
      <body>
        <ThemeRegistry> <Providers>
          <NotificationProvider />
            <Navbar />
            {children}
          </Providers></ThemeRegistry>
          <Footer/>
          <Script
            id="hs-script-loader"
            src="//js-eu1.hs-scripts.com/147618935.js"
            strategy="afterInteractive"
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
      </body>
    </html>
  );
}