import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";
import Tours from "./sections/Tours/Tours";
import Locations from "./sections/Locations/Locations";
import Reviews from "./sections/Reviews/Reviews";
import Faq from "./sections/Faq/Faq";
import Cta from "./sections/Cta/Cta";
import Footer from "./shared/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Hero />
      <Experience />
      <Tours />
      <Locations />
      <Reviews />
      <Faq />
      <Cta />
    </main>
  );
}
