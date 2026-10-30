import BrandStrip from "./Landing/modern/BrandStrip";
import HeroModern from "./Landing/modern/HeroModern";
import TrustBar from "./Landing/modern/TrustBar";
import QuickNavModern from "./Landing/modern/QuickNavModern";
import CertificationsModern from "./Landing/modern/CertificationsModern";
import FeaturedBrands from "./Landing/modern/FeaturedBrands";
import ValuePropModern from "./Landing/modern/ValuePropModern";
import WhoWeAreModern from "./Landing/modern/WhoWeAreModern";
import FeaturedProductsModern from "./Landing/modern/FeaturedProductsModern";
import CoreProducts from "./Landing/modern/CoreProducts";
import StatsModern from "./Landing/modern/StatsModern";
import InsightsModern from "./Landing/modern/InsightsModern";
import FaqModern from "./Landing/modern/FaqModern";
import SocialWall from "./Landing/modern/SocialWall";
import JoscarModern from "./Landing/modern/JoscarModern";

// For Next.js App Router (metadata object)
export const metadata = {
  title: {
    absolute: "Valvenok | Industrial Valves, Actuators & Fittings UK Supplier",
  },
  description:
    "UK supplier of industrial valves, actuators, SS316 instrumentation fittings and hydrogen components from 25+ brands including PANAM. Request a quote today.",
  openGraph: {
    title: "Valvenok | Industrial Flow Control Experts",
    description:
      "Industrial valves, actuators, SS316 instrumentation fittings and hydrogen components from 25+ brands. Request a quote today.",
    url: "https://www.valvenok.com",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};
export default function Home() {
  return (
    <>
      {/* Canonical written by hand: Next.js metadata strips the trailing slash
          from the root URL, and crawlers then report a canonical mismatch for
          https://www.valvenok.com/. React hoists this <link> into <head>. */}
      <link rel="canonical" href="https://www.valvenok.com/" />
      {/* SEO H1 — the visible hero is an animated slider whose heading cycles, so a
          single stable H1 lives here (visually hidden, present in the DOM for crawlers). */}
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Industrial valves, actuators and fittings from 25+ manufacturers
      </h1>
      <HeroModern />
      <TrustBar />
      <BrandStrip />
      <CertificationsModern />
      <QuickNavModern />
      <FeaturedBrands />
      <ValuePropModern />
      <WhoWeAreModern />
      <FeaturedProductsModern />
      <CoreProducts />
      <StatsModern />
      {/* TestimonialsSection removed until there are genuine, attributable
          customer quotes — the previous copy was illustrative (UK ASA rules). */}
      <InsightsModern />
      <SocialWall />
      <FaqModern />
      <JoscarModern />
    </>
  );
}
