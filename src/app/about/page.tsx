import AboutCTA from "./AboutCTA";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValves";
import AboutStats from "./AboutStats";

export const metadata = {
  title: "About Us | Valvenok",
  description:
    "Valvenok is a UK industrial supplier of valves, fittings, and fluid control components. JOSCAR registered. 5,000+ products in UK stock.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutCTA />
      <AboutValues />
    </>
  );
}
