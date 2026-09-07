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
  title:
    "Valvenok | Trusted UK Industrial Supplier | Valves, Pumps & Pneumatics",
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
        url: "https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png",
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
