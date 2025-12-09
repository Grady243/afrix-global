import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import PublicationSection from '../components/PublicationSection'
import EventsSection from '../components/EventsSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <PublicationSection/>
      <EventsSection/>
    </main>
  );
}