import Hero from '@/component/Hero';
import PricingSection from '@/component/PricingSection';
import ServicesSection from '@/component/ServicesSection';
import TrustedBrand from '@/component/TrustedBrand';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBrand />
      <ServicesSection />
      <PricingSection />
    </div>
  );
}
