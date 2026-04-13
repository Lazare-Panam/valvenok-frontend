import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";
import Navbar from "./Common/Navbar/Navbar";
import Providers from "./providers";
import { NotificationProvider } from "../components/NotificationProvider";

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
  description: "UK's leading supplier of high-pressure valves, SS316 fittings, and hydrogen-ready components. Official distributor for PANAM and 40+ global engineering brands.",
  icons: {
    icon: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774526040/Untitled_design-6_nleu85.avif",
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
          <Script
            id="hs-script-loader"
            src="//js-eu1.hs-scripts.com/147618935.js"
            strategy="afterInteractive"
          />
      </body>
    </html>
  );
}