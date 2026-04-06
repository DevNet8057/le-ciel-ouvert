import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import Navigation from "@/components/layout/Navigation";
import DressCode from "@/components/sections/DressCode";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import RSVP from "@/components/sections/RSVP";
import Story from "@/components/sections/Story";
import Venue from "@/components/sections/Venue";

export default function Home() {
  return (
    <LenisProvider>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Venue />
        <Gallery />
        <DressCode />
        <RSVP />
      </main>
      <Footer />
    </LenisProvider>
  );
}
