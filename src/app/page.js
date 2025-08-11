// File: src/app/home/page.js

import HeroSection from './components/home/HeroSection';
import AmeyaSection from './components/home/AmeyaSection';
import ServiceCard from './components/home/ServiceCard';
import Contact from './components/home/Contact'; // Ensure "Contact" matches exact file name

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AmeyaSection />
      <ServiceCard />
      <Contact />
    </>
  );
}
