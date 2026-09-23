import AboutContact from "./Landing/AboutContact";
import Brands from "./Landing/Brands";
import Categories from "./Landing/Categories";
import CategoryQuickNav from "./Landing/CategoryQuickNav";
import CertificationsStrip from "./Landing/CertificationsStrip";
import DeliveryBanner from "./Landing/DeliveryBanner";
import FeaturedStrip from "./Landing/FeaturedStrip";
import FeaturedValves from "./Landing/FeaturedValves";
import HeroSlider from "./Landing/HeroSlider";
import MarsSection from "./Landing/MarsSection";
import ValuePropBanner from "./Landing/ValuePropBanner";
import StatsBand from "./Landing/StatsBand";
import TestimonialsSection from "./Landing/TestimonialsSection";
import LatestInsights from "./Landing/LatestInsights";
import FAQSection from "./Landing/FAQSection";

// For Next.js App Router (metadata object)
export const metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: "Valvenok | Trusted UK Valves and Controls Supplier",
  },
  description:
    "UK's leading supplier of high-pressure valves, SS316 fittings, and Hydrogen-ready components. Official distributor of 40+ brands.",
  openGraph: {
    title: "Valvenok | Industrial Flow Control Experts",
    description:
      "High-Quality valves, fittings, and instrumentation for UK industry.",
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
        Valves and controls from 32 leading manufacturers | Valvenok
      </h1>
      <HeroSlider />
      <CertificationsStrip />
      <CategoryQuickNav />
      <DeliveryBanner />
      <FeaturedStrip />
      <ValuePropBanner />
      <MarsSection />
      <FeaturedValves />
      <Brands />
      <Categories />
      <StatsBand />
      <TestimonialsSection />
      <LatestInsights />
      <FAQSection />
      <AboutContact />
    </>
  );
}
