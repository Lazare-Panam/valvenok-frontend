import Navbar from "./Common/Navbar/Navbar";
import AboutContact from "./Landing/AboutContact";
import Brands from "./Landing/Brands";
import Categories from "./Landing/Categories";
import DeliveryBanner from "./Landing/DeliveryBanner";
import FeaturedStrip from "./Landing/FeaturedStrip";
import Hero from "./Landing/Hero";
import PanamBanner from "./Landing/PanamBanner";

export default function Home() {
  return (
    <>
<Navbar/>
      <Hero/>
          <DeliveryBanner/>
      <Categories/>
      <FeaturedStrip/>
      <PanamBanner/>
      <Brands/>
      <AboutContact/>
    </>
  );
}
