

import AboutContact from "./Landing/AboutContact";
import Brands from "./Landing/Brands";
import Categories from "./Landing/Categories";
import DeliveryBanner from "./Landing/DeliveryBanner";
import FeaturedStrip from "./Landing/FeaturedStrip";
import Hero from "./Landing/Hero";
import HeroSlider from "./Landing/HeroSlider";
import PanamBanner from "./Landing/PanamBanner";
// For Next.js App Router (metadata object)
export const metadata = {
  title: "Valvenok | Trusted UK Industrial Supplier | Valves, Pumps & Pneumatics",
  description: "UK's leading supplier of high-pressure valves, SS316 fittings, and hydrogen-ready components. Official distributor of 40+ brands.",
  openGraph: {
    title: 'Valvenok | Industrial Flow Control Experts',
    description: 'High-quality valves, fittings, and instrumentation for UK industry.',
    url: 'https://www.valvenok.com',
    siteName: 'Valvenok',
    images: [
      {
        url: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774526040/Untitled_design-6_nleu85.avif', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};
export default function Home() {
  return (
    <>
      <HeroSlider/>
      <DeliveryBanner/>
      <Categories/>
      <FeaturedStrip/>
      <PanamBanner/>
      <Brands/>
      <AboutContact/>
    </>
  );
}
