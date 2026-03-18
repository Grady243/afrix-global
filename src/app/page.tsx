import HeroSection from "../components/HeroSection";
import CounterSection from "../components/CounterSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import PublicationSection from "../components/PublicationSection";
import EventsSection from "../components/EventsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/PartnersSection";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <ServiceSection />
      <EventsSection />
      <PublicationSection />
      <TestimonialsSection />
      <PartnersSection />
    </main>
  );
}
