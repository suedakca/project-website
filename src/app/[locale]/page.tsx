import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';

export default function HomePage() {
  return (
    <div className="page-content bg-black">
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
    </div>
  );
}
