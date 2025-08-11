import Image from "next/image";
import HeroSection from './components/home/HeroSection'
import AmeyaSection from './components/home/AmeyaSection'
import ServiceCard from './components/home/ServiceCard'
import Contact from './components/home/contact'
export default function Home() {
  return (
    <>

    <HeroSection />
    <AmeyaSection />
    <ServiceCard />
    <Contact />
    </>
  );
}
