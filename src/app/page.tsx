import FAQSection from '@/component/FAQSection';
import Hero from '@/component/Hero';
import PricingSection from '@/component/PricingSection';
import ReviewSection from '@/component/ReviewSection';
import ServicesSection from '@/component/ServicesSection';
import StartedEasy from '@/component/StartedEasy';
import StillHaveQuestions from '@/component/StillHaveQuestions';
import ToolsSections from '@/component/ToolsSections';
import TrustedBrand from '@/component/TrustedBrand';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBrand />
      <ServicesSection />
      <PricingSection />
      <ToolsSections />
      <StartedEasy />
      <ReviewSection />
      <FAQSection />
      <StillHaveQuestions />
    </div>
  );
}
